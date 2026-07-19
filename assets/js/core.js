// Delliza shared application helpers
// This file is loaded by buyer, staff and dashboard pages.

const PREFIX = 'deliza_confectionery_';
const DATA_VERSION_KEY = 'data_version';
const CONTACT_PHONE_LOCAL = '09022122286';
const CONTACT_PHONE_INTL = '989022122286';
const CONTACT_MESSAGE = 'سلام، برای سفارش از سایت دلیزا پیام می‌دهم.';
const DELIVERY_FEE = 0;
const SERVICE_FEE_LABEL = ''; // هزینه بسته‌بندی حذف شده است
const $ = (id) => document.getElementById(id);

// -----------------------------------------------------------------------------
// Formatting and safe text
// -----------------------------------------------------------------------------
function faNum(value) {
  return String(value ?? '').replace(/\d/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'[Number(digit)]);
}

function money(value) {
  return `${Number(value || 0).toLocaleString('fa-IR')} تومان`;
}

function normalize(value) {
  return String(value || '')
    .replace(/[ي]/g, 'ی')
    .replace(/[ك]/g, 'ک')
    .trim()
    .toLowerCase();
}

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// -----------------------------------------------------------------------------
// Local storage and Supabase-safe persistence
// -----------------------------------------------------------------------------
function read(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeLocal(key, value) {
  localStorage.setItem(PREFIX + key, JSON.stringify(value));
  return true;
}

function shouldPushRemote(key, options = {}) {
  return !options.skipRemote
    && Array.isArray(window.DELIZA_SYNC_KEYS)
    && window.DELIZA_SYNC_KEYS.includes(key)
    && window.DELIZA_DB?.isConfigured?.();
}

function write(key, value, options = {}) {
  try {
    writeLocal(key, value);

    if (shouldPushRemote(key, options)) {
      window.DELIZA_DB.push(key, value).then((result) => {
        if (!result?.ok && !options.silent) {
          showToast('ذخیره محلی شد، ولی Supabase خطا داد');
        }
      });
    }

    return true;
  } catch (error) {
    console.warn('[Delliza] write failed:', key, error);
    alert('ذخیره انجام نشد؛ احتمالاً حجم عکس‌ها زیاد است. بهتر است برای عکس‌ها URL وارد کنید.');
    return false;
  }
}

function seed() {
  const currentVersion = localStorage.getItem(PREFIX + DATA_VERSION_KEY);

  // مهم: Seed فقط محلی انجام می‌شود و هیچ‌وقت سفارش‌های دیتابیس را پاک نمی‌کند.
  // بعداً اگر Supabase فعال باشد، داده‌های اصلی از دیتابیس Pull می‌شوند.
  if (currentVersion !== DATA_VERSION) {
    write('products', DEFAULT_PRODUCTS, { skipRemote: true, silent: true });
    write('categories', DEFAULT_CATEGORIES, { skipRemote: true, silent: true });
    write('staff', DEFAULT_STAFF, { skipRemote: true, silent: true });
    write('settings', DEFAULT_SETTINGS, { skipRemote: true, silent: true });
    if (!Array.isArray(read('orders', null))) write('orders', [], { skipRemote: true, silent: true });
    localStorage.setItem(PREFIX + DATA_VERSION_KEY, DATA_VERSION);
  }

  if (!read('products', null)) write('products', DEFAULT_PRODUCTS, { skipRemote: true, silent: true });
  if (!read('categories', null)) write('categories', DEFAULT_CATEGORIES, { skipRemote: true, silent: true });
  if (!read('orders', null)) write('orders', [], { skipRemote: true, silent: true });
  if (!read('staff', null)) write('staff', DEFAULT_STAFF, { skipRemote: true, silent: true });
  if (!read('settings', null)) write('settings', DEFAULT_SETTINGS, { skipRemote: true, silent: true });

  repairData();
}

// -----------------------------------------------------------------------------
// Store getters and setters
// -----------------------------------------------------------------------------
function products() { return repairProducts(read('products', DEFAULT_PRODUCTS)); }
function saveProducts(value) { return write('products', repairProducts(value)); }
function categories() { return read('categories', DEFAULT_CATEGORIES); }
function saveCategories(value) { return write('categories', value); }
function orders() { return read('orders', []); }
function saveOrders(value) { return write('orders', Array.isArray(value) ? value : []); }
function staffUsers() { return read('staff', DEFAULT_STAFF); }
function saveStaffUsers(value) { return write('staff', value); }
function settings() { return read('settings', DEFAULT_SETTINGS); }
function saveSettings(value) { return write('settings', value); }
function findProduct(id) { return products().find((product) => String(product.id) === String(id)); }
function catTitle(id) { return categories().find((category) => category.id === id)?.title || id || '—'; }

function heroImages() {
  const configured = Array.isArray(settings().heroImages) ? settings().heroImages : [];
  const defaults = products()
    .filter((product) => product.status === 'active')
    .slice(0, 4)
    .map((product) => product.img || DEFAULT_IMG);

  const merged = [...configured, ...defaults]
    .map((src) => String(src || '').trim())
    .filter(Boolean);

  return [...new Set(merged)].slice(0, 4);
}

// -----------------------------------------------------------------------------
// Products
// -----------------------------------------------------------------------------
function productPriceText(product) {
  if (product?.priceLabel) return product.priceLabel;
  return money(product?.price || 0);
}

function productCartPriceText(product) {
  if (product?.priceMode === 'package') {
    const qty = Number(product.packageQty || product.minOrder || 1);
    return `${productPriceText(product)}${qty > 1 ? ` / حداقل ${faNum(qty)} عدد` : ''}`;
  }
  return productPriceText(product);
}

function productNumericPrice(product) {
  const price = Number(product?.price || 0);
  if (product?.priceMode === 'package') {
    const qty = Number(product.packageQty || product.minOrder || 1);
    if (qty > 1) return price / qty;
  }
  return price;
}

function repairProduct(product, index = 0) {
  const def = DEFAULT_PRODUCTS[index % DEFAULT_PRODUCTS.length] || {};
  const item = product || {};

  return {
    ...def,
    ...item,
    id: item.id || def.id || Date.now() + index,
    name: item.name || def.name || 'محصول جدید',
    category: item.category || def.category || 'cake',
    price: Number(item.price || def.price || 0),
    stock: Number(item.stock || 0),
    minOrder: Number(item.minOrder || 1),
    status: item.status || 'active',
    type: item.type || def.type || 'retail',
    img: item.img || def.img || DEFAULT_IMG,
    gallery: Array.isArray(item.gallery) && item.gallery.length
      ? item.gallery
      : [item.img || def.img || DEFAULT_IMG],
    tags: Array.isArray(item.tags) ? item.tags : [],
    visible: {
      ingredients: true,
      gallery: true,
      stock: true,
      minOrder: true,
      weight: true,
      ...(item.visible || {})
    }
  };
}

function repairProducts(list) {
  const source = Array.isArray(list) && list.length ? list : [...DEFAULT_PRODUCTS];
  return source.filter(Boolean).map(repairProduct);
}

function repairData() {
  // Repair فقط محلی است تا با باز شدن سایت، دیتابیس ناخواسته overwrite نشود.
  try {
    write('products', products(), { skipRemote: true, silent: true });
    if (!Array.isArray(categories())) write('categories', DEFAULT_CATEGORIES, { skipRemote: true, silent: true });
  } catch (error) {
    console.warn('[Delliza] repairData failed:', error);
  }
}

// -----------------------------------------------------------------------------
// Contact links
// -----------------------------------------------------------------------------
function whatsappUrl(message = CONTACT_MESSAGE) {
  return `https://wa.me/${CONTACT_PHONE_INTL}?text=${encodeURIComponent(message || CONTACT_MESSAGE)}`;
}

function contactLinksHtml(message = CONTACT_MESSAGE, extraClass = '') {
  const wa = whatsappUrl(message);

  return `<div class="contact-actions ${extraClass}" aria-label="ارتباط با دلیزا">
    <a class="contact-icon contact-icon--whatsapp" href="${wa}" target="_blank" rel="noopener" aria-label="ارسال پیام در واتساپ به ${CONTACT_PHONE_LOCAL}">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.88 9.88 0 0 0-8.54 14.86L2.2 22l5.28-1.24A9.96 9.96 0 1 0 12.04 2Zm0 1.9a8.06 8.06 0 1 1 0 16.12 8.18 8.18 0 0 1-4.11-1.12l-.39-.23-2.58.61.64-2.5-.26-.41A8.06 8.06 0 0 1 12.04 3.9Zm-3.5 4.25c-.2 0-.52.07-.79.36-.27.3-1.03 1-1.03 2.43s1.06 2.83 1.2 3.03c.15.2 2.06 3.26 5.1 4.44 2.52.98 3.04.78 3.58.74.55-.05 1.76-.72 2-1.42.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57Z" fill="currentColor"/></svg>
      <span>واتساپ</span>
    </a>
  </div>`;
}
// -----------------------------------------------------------------------------
// Orders
// -----------------------------------------------------------------------------
function orderCode(order) {
  if (order?.code) return order.code;
  return `DLZ-${String(order?.id || Date.now()).slice(-6)}`;
}

function orderItemSnapshots(cartItems) {
  return (cartItems || []).map((cartItem) => {
    const product = findProduct(cartItem.id) || {};
    const qty = Math.max(1, Number(cartItem.qty) || 1);
    const unitPrice = productNumericPrice(product);

    return {
      id: product.id ?? cartItem.id,
      name: product.name || 'محصول حذف‌شده',
      qty,
      unitPrice,
      priceText: productPriceText(product),
      lineTotal: unitPrice > 0 ? unitPrice * qty : 0,
      category: product.category || '',
      categoryTitle: catTitle(product.category),
      img: product.img || DEFAULT_IMG
    };
  });
}

function orderItems(order) {
  if (Array.isArray(order?.itemDetails) && order.itemDetails.length) return order.itemDetails;
  return orderItemSnapshots(order?.items || []);
}

function orderSubtotal(order) {
  return orderItems(order).reduce((sum, item) => sum + Number(item.lineTotal || 0), 0);
}

function orderDeliveryFee(order) {
  // هزینه بسته‌بندی/ارسال حذف شده است؛ سفارش‌های جدید و نمایش فاکتور بدون هزینه اضافه محاسبه می‌شوند.
  return 0;
}

function orderFinalTotal(order) {
  const subtotal = orderSubtotal(order);
  const deliveryFee = orderDeliveryFee(order);
  const calculated = subtotal + deliveryFee;
  return calculated || Number(order?.total || 0);
}

function orderItemLineText(item) {
  const qty = faNum(item.qty || 1);
  const price = Number(item.lineTotal || 0) > 0 ? money(item.lineTotal) : (item.priceText || 'قیمت توافقی');
  return `${item.name} × ${qty} = ${price}`;
}

function orderDetailsText(order) {
  const subtotal = Number(order?.subtotal || 0) || orderSubtotal(order);
  const deliveryFee = orderDeliveryFee(order);
  const total = orderFinalTotal(order);
  const lines = [
    'سفارش جدید دلیزا',
    `کد سفارش: ${orderCode(order)}`,
    `نام و نام خانوادگی: ${order?.name || '—'}`,
    `شماره تماس: ${order?.phone || '—'}`,
    `آدرس/شهر: ${order?.city || '—'}`,
    '',
    'محصولات:'
  ];

  orderItems(order).forEach((item) => lines.push(`- ${orderItemLineText(item)}`));
  lines.push('', `جمع محصولات: ${money(subtotal)}`);
  lines.push(`جمع کل فاکتور: ${money(total)}`);
  if (order?.note) lines.push(`توضیحات: ${order.note}`);
  lines.push(`زمان ثبت: ${order?.createdAt ? new Date(order.createdAt).toLocaleString('fa-IR') : '—'}`);
  return lines.join('\n');
}

function orderItemsMini(order) {
  const items = orderItems(order);
  if (!items.length) return '—';

  const visibleItems = items
    .slice(0, 3)
    .map((item) => `${esc(item.name)} × ${faNum(item.qty || 1)}`)
    .join('<br>');

  return visibleItems + (items.length > 3 ? `<br><small>+${faNum(items.length - 3)} مورد دیگر</small>` : '');
}

function orderDetailsHtml(order) {
  const items = orderItems(order);
  const subtotal = Number(order?.subtotal || 0) || orderSubtotal(order);
  const deliveryFee = orderDeliveryFee(order);
  const total = orderFinalTotal(order);

  return `<div class="order-details">
    <div class="grid g2">
      <div class="card pad"><b>کد سفارش</b><p>${esc(orderCode(order))}</p></div>
      <div class="card pad"><b>زمان ثبت</b><p>${order?.createdAt ? new Date(order.createdAt).toLocaleString('fa-IR') : '—'}</p></div>
      <div class="card pad"><b>نام و نام خانوادگی</b><p>${esc(order?.name || '—')}<br><small>${esc(order?.phone || '—')}</small></p></div>
      <div class="card pad"><b>آدرس/شهر</b><p>${esc(order?.city || '—')}</p></div>
    </div>

    <h3 style="margin-top:16px">محصولات سفارش</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>محصول</th><th>تعداد</th><th>قیمت واحد</th><th>جمع</th></tr></thead>
        <tbody>
          ${items.map((item) => `<tr><td><b>${esc(item.name)}</b><br><small>${esc(item.categoryTitle || '')}</small></td><td>${faNum(item.qty || 1)}</td><td>${esc(item.priceText || money(item.unitPrice || 0))}</td><td>${Number(item.lineTotal || 0) > 0 ? money(item.lineTotal) : '—'}</td></tr>`).join('') || '<tr><td colspan="4">محصولی ثبت نشده است.</td></tr>'}
        </tbody>
      </table>
    </div>

    <div class="card pad invoice-summary" style="margin-top:12px">
      <div class="row"><span>جمع محصولات:</span><b>${money(subtotal)}</b></div>
      <div class="row"><b>جمع کل فاکتور:</b><span class="price">${money(total)}</span></div>
    </div>

    <div class="card pad" style="margin-top:12px"><b>توضیحات:</b><p>${esc(order?.note || '—')}</p></div>
    <textarea class="field" rows="8" readonly style="margin-top:12px;direction:rtl">${esc(orderDetailsText(order))}</textarea>
  </div>`;
}

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast('متن سفارش کپی شد');
    return true;
  } catch (error) {
    console.warn('[Delliza] Clipboard failed:', error);
    return false;
  }
}

function copyOrderDetails(id) {
  const order = orders().find((item) => String(item.id) === String(id));
  if (order) copyTextToClipboard(orderDetailsText(order));
}

function openWhatsAppForOrder(id) {
  const order = orders().find((item) => String(item.id) === String(id));
  if (!order) return;
  const text = orderDetailsText(order);
  copyTextToClipboard(text);
  window.open(whatsappUrl(text), '_blank', 'noopener');
}

// Backward-compatible alias for old onclick attributes.
function openInstagramForOrder(id) {
  openWhatsAppForOrder(id);
}

// -----------------------------------------------------------------------------
// UI shell
// -----------------------------------------------------------------------------
function showToast(message) {
  let element = $('toast');
  if (!element) {
    element = document.createElement('div');
    element.id = 'toast';
    element.className = 'toast';
    document.body.appendChild(element);
  }

  element.textContent = message;
  element.classList.add('on');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => element.classList.remove('on'), 2200);
}

function mount(role) {
  seed();
  const config = settings();
  const logoSrc = '../assets/images/delliza-logo.jpg';
  const buyerContact = role === 'buyer' ? contactLinksHtml(CONTACT_MESSAGE, 'footer-contact-actions') : '';
  const quickContact = role === 'buyer'
    ? `<div class="quick-contact" aria-label="تماس سریع با دلیزا">${contactLinksHtml(CONTACT_MESSAGE, 'quick-contact-actions')}</div>`
    : '';
  const subtitle = String(config.subtitle || '').trim();
  const subtitleHtml = subtitle ? `<small>${esc(subtitle)}</small>` : '';
  const footerSubtitleHtml = subtitle ? `<p>${esc(subtitle)}</p>` : '';

  $('headerMount').innerHTML = `<header class="header">
    <div class="container header-inner header-inner--minimal">
      <a class="brand" href="../buyer/" aria-label="${esc(config.brand)}">
        <span class="logo logo-image"><img src="${logoSrc}" alt="${esc(config.brand)}"></span>
        <span>${esc(config.brand)}${subtitleHtml}</span>
      </a>
      <div class="header-actions"><button class="soft" onclick="toggleDark()">حالت شب</button></div>
    </div>
  </header>`;

  $('footerMount').innerHTML = `<footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand"><span class="logo logo-image footer-logo"><img src="${logoSrc}" alt="${esc(config.brand)}"></span><div><b>${esc(config.brand)}</b>${footerSubtitleHtml}</div></div>
      <div><span>${faNum(CONTACT_PHONE_LOCAL)}</span><span>${esc(config.instagram || '')}</span></div>
      <div><span>${esc(config.address || '')}</span>${buyerContact}</div>
    </div>
  </footer>${quickContact}`;

  if (localStorage.getItem(PREFIX + 'dark') === '1') document.body.classList.add('dark');
}

function toggleDark() {
  document.body.classList.toggle('dark');
  localStorage.setItem(PREFIX + 'dark', document.body.classList.contains('dark') ? '1' : '0');
}

// -----------------------------------------------------------------------------
// Authentication
// -----------------------------------------------------------------------------
function roleAuth(role) { return read(`${role}Auth`, null); }

function clearRoleAuth() {
  localStorage.removeItem(PREFIX + 'adminAuth');
  localStorage.removeItem(PREFIX + 'staffAuth');
}

function saveRoleAuth(requestedRole, result) {
  const auth = {
    email: result?.user?.email || '',
    name: result?.displayName || result?.profile?.display_name || result?.user?.email || 'کاربر دلیزا',
    role: result?.role || result?.profile?.role || requestedRole,
    userId: result?.user?.id || '',
    signedInAt: new Date().toISOString()
  };

  if (requestedRole === 'admin' || auth.role === 'admin') write('adminAuth', auth, { skipRemote: true, silent: true });
  if (requestedRole === 'staff' || auth.role === 'staff' || auth.role === 'admin') write('staffAuth', auth, { skipRemote: true, silent: true });
  return auth;
}

async function syncRoleAuth(role) {
  if (!['admin', 'staff'].includes(role)) return true;
  if (!window.DELIZA_DB?.isConfigured?.()) return Boolean(roleAuth(role));

  const result = await window.DELIZA_DB.ensureRole(role);
  if (result.ok) {
    saveRoleAuth(role, result);
    return true;
  }

  clearRoleAuth();
  return false;
}

async function login(role, email, password) {
  if (window.DELIZA_DB?.isConfigured?.() && window.DELIZA_DB?.signInWithRole) {
    const result = await window.DELIZA_DB.signInWithRole(role, email, password);
    if (result.ok) {
      saveRoleAuth(role, result);
      return true;
    }

    const message = result.error === 'role_not_allowed'
      ? 'این حساب اجازه ورود به این پنل را ندارد.'
      : result.error === 'role_not_active'
        ? 'نقش این حساب فعال نیست.'
        : 'ورود ناموفق بود. ایمیل، پسورد یا نقش کاربر را بررسی کن.';
    alert(message);
    return false;
  }

  // Demo fallback فقط وقتی Supabase تنظیم نشده باشد.
  if (role === 'admin' && email === 'admin123' && password === 'admin123') {
    write('adminAuth', { email, name: 'مدیر دلیزا', role: 'admin' }, { skipRemote: true, silent: true });
    return true;
  }

  if (role === 'staff') {
    const user = staffUsers().find((item) => item.username === email && item.password === password && item.active !== false);
    if (user) {
      write('staffAuth', { ...user, role: 'staff' }, { skipRemote: true, silent: true });
      return true;
    }
  }

  return false;
}

async function logout() {
  clearRoleAuth();
  if (window.DELIZA_DB?.signOut) await window.DELIZA_DB.signOut();
  location.reload();
}

function loginBox(role, title) {
  const configured = window.DELIZA_DB?.isConfigured?.();
  const demoText = role === 'admin' ? 'admin123 / admin123' : 'staff123 / staff123';

  return `<div class="card pad login-box">
    <h2>${esc(title)}</h2>
    <p class="small">${configured ? 'ورود امن با حساب Supabase Auth' : 'Supabase تنظیم نشده؛ ورود دمو فعال است.'}</p>
    <input id="u" class="field" dir="ltr" type="${configured ? 'email' : 'text'}" autocomplete="username" placeholder="${configured ? 'ایمیل' : 'یوزرنیم دمو'}">
    <input id="p" class="field" type="password" autocomplete="current-password" placeholder="پسورد">
    <button id="loginBtn" class="btn" style="width:100%;margin-top:10px" onclick="doLogin('${role}')">ورود</button>
    ${configured ? '<p class="small">اگر ورود انجام نشد، در Supabase برای همین ایمیل نقش admin یا staff بساز.</p>' : `<p class="small">دمو: ${demoText}</p>`}
  </div>`;
}

async function doLogin(role) {
  const button = $('loginBtn');
  if (button) {
    button.disabled = true;
    button.textContent = 'در حال ورود...';
  }

  const ok = await login(role, $('u').value, $('p').value);
  if (ok) location.reload();
  else {
    if (button) {
      button.disabled = false;
      button.textContent = 'ورود';
    }
    if (!window.DELIZA_DB?.isConfigured?.()) alert('اطلاعات ورود اشتباه است');
  }
}

// -----------------------------------------------------------------------------
// Data bootstrap
// -----------------------------------------------------------------------------
async function bootstrapData(role) {
  seed();

  if (['admin', 'staff'].includes(role)) {
    const ok = await syncRoleAuth(role);
    if (window.DELIZA_DB?.isConfigured?.() && !ok) return;
  }

  if (window.DELIZA_DB?.isConfigured?.()) {
    const pulled = await window.DELIZA_DB.pull();

    // فقط مدیر منوی جدید را به Supabase منتقل می‌کند.
    // این انتقال فقط products/categories/settings را می‌نویسد و orders/staff را لمس نمی‌کند.
    if (role === 'admin' && roleAuth('admin') && pulled.ok) {
      const currentSettings = settings();
      const needsMenuMigration = pulled.count === 0 || currentSettings.menuVersion !== DATA_VERSION;

      if (needsMenuMigration) {
        write('products', DEFAULT_PRODUCTS, { skipRemote: true, silent: true });
        write('categories', DEFAULT_CATEGORIES, { skipRemote: true, silent: true });
        write('settings', { ...currentSettings, ...DEFAULT_SETTINGS, menuVersion: DATA_VERSION }, { skipRemote: true, silent: true });
        await window.DELIZA_DB.pushKeys(['products', 'categories', 'settings']);
      }
    }

    repairData();
  }
}

function supabaseStatusBadge() {
  const text = window.DELIZA_DB?.statusText?.() || 'Supabase تنظیم نشده؛ داده‌ها محلی هستند.';
  const cls = window.DELIZA_DB?.isConfigured?.() ? 'green' : 'gray';
  return `<span class="badge ${cls}" title="${esc(text)}">${esc(text)}</span>`;
}

// -----------------------------------------------------------------------------
// Image helpers
// -----------------------------------------------------------------------------
function resizeImageFile(file, maxSize = 900, quality = 0.72) {
  return new Promise((resolve) => {
    if (!file || !String(file.type || '').startsWith('image/')) return resolve(null);

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = () => resolve(reader.result);
      img.src = reader.result;
    };
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}
