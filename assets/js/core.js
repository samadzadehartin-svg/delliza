const PREFIX = 'deliza_confectionery_';
const DATA_VERSION_KEY = 'data_version';
const $ = (id) => document.getElementById(id);

function faNum(value) {
  return String(value ?? '').replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]);
}

function money(value) {
  return Number(value || 0).toLocaleString('fa-IR') + ' تومان';
}

function productPriceText(product) {
  if (product && product.priceLabel) return product.priceLabel;
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

function normalize(value) {
  return String(value || '').replace(/[ي]/g, 'ی').replace(/[ك]/g, 'ک').trim().toLowerCase();
}

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value, options = {}) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
    const shouldSync = !options.skipRemote && Array.isArray(window.DELIZA_SYNC_KEYS) && window.DELIZA_SYNC_KEYS.includes(key);
    if (shouldSync && window.DELIZA_DB?.isConfigured?.()) {
      window.DELIZA_DB.push(key, value).then((result) => {
        if (!result?.ok && !options.silent) showToast('ذخیره محلی شد، ولی Supabase خطا داد');
      });
    }
    return true;
  } catch (error) {
    alert('ذخیره انجام نشد؛ احتمالاً حجم عکس‌ها زیاد است. بهتر است برای عکس‌ها URL وارد کنید.');
    return false;
  }
}

function seed() {
  const currentVersion = localStorage.getItem(PREFIX + DATA_VERSION_KEY);
  if (currentVersion !== DATA_VERSION) {
    write('products', DEFAULT_PRODUCTS);
    write('categories', DEFAULT_CATEGORIES);
    write('staff', DEFAULT_STAFF);
    write('settings', DEFAULT_SETTINGS);
    if (!Array.isArray(read('orders', null))) write('orders', []);
    localStorage.setItem(PREFIX + DATA_VERSION_KEY, DATA_VERSION);
  }
  if (!read('products', null)) write('products', DEFAULT_PRODUCTS);
  if (!read('categories', null)) write('categories', DEFAULT_CATEGORIES);
  if (!read('orders', null)) write('orders', []);
  if (!read('staff', null)) write('staff', DEFAULT_STAFF);
  if (!read('settings', null)) write('settings', DEFAULT_SETTINGS);
  repairData();
}

function products() { return repairProducts(read('products', DEFAULT_PRODUCTS)); }
function saveProducts(value) { return write('products', repairProducts(value)); }
function categories() { return read('categories', DEFAULT_CATEGORIES); }
function saveCategories(value) { return write('categories', value); }
function orders() { return read('orders', []); }
function saveOrders(value) { return write('orders', value); }
function staffUsers() { return read('staff', DEFAULT_STAFF); }
function saveStaffUsers(value) { return write('staff', value); }
function settings() { return read('settings', DEFAULT_SETTINGS); }
function saveSettings(value) { return write('settings', value); }
function findProduct(id) { return products().find((p) => Number(p.id) === Number(id)); }
function catTitle(id) { return categories().find((c) => c.id === id)?.title || id || '—'; }

function repairProduct(product, index = 0) {
  const def = DEFAULT_PRODUCTS[index % DEFAULT_PRODUCTS.length] || {};
  const p = product || {};
  return {
    ...def,
    ...p,
    id: p.id || Date.now() + index,
    name: p.name || def.name || 'محصول جدید',
    category: p.category || def.category || 'cake',
    price: Number(p.price || def.price || 0),
    stock: Number(p.stock || 0),
    minOrder: Number(p.minOrder || 1),
    status: p.status || 'active',
    type: p.type || def.type || 'retail',
    img: p.img || def.img || DEFAULT_IMG,
    gallery: Array.isArray(p.gallery) && p.gallery.length ? p.gallery : [p.img || def.img || DEFAULT_IMG],
    tags: Array.isArray(p.tags) ? p.tags : [],
    visible: {
      ingredients: false,
      gallery: true,
      stock: true,
      minOrder: true,
      weight: true,
      ...(p.visible || {})
    }
  };
}

function repairProducts(list) {
  const arr = Array.isArray(list) && list.length ? list : [...DEFAULT_PRODUCTS];
  return arr.filter(Boolean).map(repairProduct);
}

function repairData() {
  saveProducts(products());
  if (!Array.isArray(categories())) saveCategories(DEFAULT_CATEGORIES);
}


function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function orderCode(order) {
  if (order?.code) return order.code;
  return 'DLZ-' + String(order?.id || Date.now()).slice(-6);
}

function instagramProfileUrl() {
  const s = settings();
  const direct = String(s.instagramUrl || '').trim();
  if (direct) return direct;
  const raw = String(s.instagram || '@delliza.bakery').trim();
  if (/^https?:\/\//i.test(raw)) return raw;
  const handle = raw.replace('@', '').replace(/\s+/g, '').replace(/^\/+|\/+$/g, '') || 'delliza.bakery';
  return 'https://www.instagram.com/' + encodeURIComponent(handle) + '/';
}

function orderItemSnapshots(cartItems) {
  return (cartItems || []).map((item) => {
    const product = findProduct(item.id) || {};
    const qty = Math.max(1, Number(item.qty) || 1);
    const unitPrice = productNumericPrice(product);
    return {
      id: Number(item.id),
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
  return (order?.items || []).map((item) => {
    const product = findProduct(item.id) || {};
    const qty = Math.max(1, Number(item.qty) || 1);
    const unitPrice = productNumericPrice(product);
    return {
      id: Number(item.id),
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

function orderItemLineText(item) {
  const qty = faNum(item.qty || 1);
  const price = Number(item.lineTotal || 0) > 0 ? money(item.lineTotal) : (item.priceText || 'قیمت توافقی');
  return `${item.name} × ${qty} = ${price}`;
}

function orderDetailsText(order) {
  const lines = [
    'سفارش جدید دلیزا',
    `کد سفارش: ${orderCode(order)}`,
    `نام مشتری: ${order?.name || '—'}`,
    `شماره تماس: ${order?.phone || '—'}`,
    `آدرس/شهر: ${order?.city || '—'}`,
    '',
    'محصولات:'
  ];
  orderItems(order).forEach((item) => lines.push('- ' + orderItemLineText(item)));
  lines.push('', `جمع سفارش: ${money(order?.total || 0)}`);
  if (order?.note) lines.push(`توضیحات: ${order.note}`);
  lines.push(`زمان ثبت: ${order?.createdAt ? new Date(order.createdAt).toLocaleString('fa-IR') : '—'}`);
  return lines.join('\n');
}

function orderItemsMini(order) {
  const items = orderItems(order);
  if (!items.length) return '—';
  return items.slice(0, 3).map((item) => `${esc(item.name)} × ${faNum(item.qty || 1)}`).join('<br>') + (items.length > 3 ? `<br><small>+${faNum(items.length - 3)} مورد دیگر</small>` : '');
}

function orderDetailsHtml(order) {
  const items = orderItems(order);
  return `<div class="order-details">
    <div class="grid g2">
      <div class="card pad"><b>کد سفارش</b><p>${esc(orderCode(order))}</p></div>
      <div class="card pad"><b>زمان ثبت</b><p>${order?.createdAt ? new Date(order.createdAt).toLocaleString('fa-IR') : '—'}</p></div>
      <div class="card pad"><b>مشتری</b><p>${esc(order?.name || '—')}<br><small>${esc(order?.phone || '—')}</small></p></div>
      <div class="card pad"><b>آدرس/شهر</b><p>${esc(order?.city || '—')}</p></div>
    </div>
    <h3 style="margin-top:16px">محصولات سفارش</h3>
    <div class="table-wrap"><table><thead><tr><th>محصول</th><th>تعداد</th><th>قیمت واحد</th><th>جمع</th></tr></thead><tbody>
      ${items.map((item) => `<tr><td><b>${esc(item.name)}</b><br><small>${esc(item.categoryTitle || '')}</small></td><td>${faNum(item.qty || 1)}</td><td>${esc(item.priceText || money(item.unitPrice || 0))}</td><td>${Number(item.lineTotal || 0) > 0 ? money(item.lineTotal) : '—'}</td></tr>`).join('') || '<tr><td colspan="4">محصولی ثبت نشده است.</td></tr>'}
    </tbody></table></div>
    <div class="card pad" style="margin-top:12px"><b>جمع کل:</b> <span class="price">${money(order?.total || 0)}</span></div>
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
    console.warn('Clipboard failed:', error);
    return false;
  }
}

function copyOrderDetails(id) {
  const order = orders().find((x) => Number(x.id) === Number(id));
  if (!order) return;
  copyTextToClipboard(orderDetailsText(order));
}

function openInstagramForOrder(id) {
  const order = orders().find((x) => Number(x.id) === Number(id));
  if (order) copyTextToClipboard(orderDetailsText(order));
  window.open(instagramProfileUrl(), '_blank', 'noopener');
}

function showToast(message) {
  let el = $('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add('on');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => el.classList.remove('on'), 2200);
}

function mount(role) {
  seed();
  const s = settings();
  const logoSrc = '../assets/images/delliza-logo.jpg';
  $('headerMount').innerHTML = `
    <header class="header">
      <div class="container header-inner header-inner--minimal">
        <a class="brand" href="../buyer/" aria-label="${s.brand}">
          <span class="logo logo-image"><img src="${logoSrc}" alt="${s.brand}"></span>
          <span>${s.brand}<small>${s.subtitle}</small></span>
        </a>
        <div class="header-actions">
          <button class="soft" onclick="toggleDark()">حالت شب</button>
        </div>
      </div>
    </header>`;
  $('footerMount').innerHTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-brand"><span class="logo logo-image footer-logo"><img src="${logoSrc}" alt="${s.brand}"></span><div><b>${s.brand}</b><p>${s.subtitle}</p></div></div>
        <div><span>${s.phone}</span><span>${s.instagram}</span></div>
        <div><span>${s.address}</span></div>
      </div>
    </footer>`;
  if (localStorage.getItem(PREFIX + 'dark') === '1') document.body.classList.add('dark');
}

function toggleDark() {
  document.body.classList.toggle('dark');
  localStorage.setItem(PREFIX + 'dark', document.body.classList.contains('dark') ? '1' : '0');
}

function roleAuth(role) { return read(role + 'Auth', null); }

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
    const msg = result.error === 'role_not_allowed'
      ? 'این حساب اجازه ورود به این پنل را ندارد.'
      : result.error === 'role_not_active'
        ? 'نقش این حساب فعال نیست.'
        : 'ورود ناموفق بود. ایمیل، پسورد یا نقش کاربر را بررسی کن.';
    alert(msg);
    return false;
  }

  // fallback فقط برای حالت دمو، وقتی Supabase تنظیم نشده باشد.
  if (role === 'admin' && email === 'admin123' && password === 'admin123') {
    write('adminAuth', { email, name: 'مدیر دلیزا', role: 'admin' }, { skipRemote: true, silent: true });
    return true;
  }
  if (role === 'staff') {
    const user = staffUsers().find((x) => x.username === email && x.password === password && x.active !== false);
    if (user) {
      write('staffAuth', { ...user, role: 'staff' }, { skipRemote: true, silent: true });
      return true;
    }
  }
  return false;
}

async function logout(role) {
  clearRoleAuth();
  if (window.DELIZA_DB?.signOut) await window.DELIZA_DB.signOut();
  location.reload();
}

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

function loginBox(role, title) {
  const configured = window.DELIZA_DB?.isConfigured?.();
  return `<div class="card pad login-box"><h2>${title}</h2><p class="small">${configured ? 'ورود امن با حساب Supabase Auth' : 'Supabase تنظیم نشده؛ ورود دمو فعال است.'}</p><input id="u" class="field" dir="ltr" type="${configured ? 'email' : 'text'}" autocomplete="username" placeholder="${configured ? 'ایمیل' : 'یوزرنیم دمو'}"><input id="p" class="field" type="password" autocomplete="current-password" placeholder="پسورد"><button id="loginBtn" class="btn" style="width:100%;margin-top:10px" onclick="doLogin('${role}')">ورود</button>${configured ? '<p class="small">اگر ورود انجام نشد، در Supabase برای همین ایمیل نقش admin یا staff بساز.</p>' : `<p class="small">دمو: ${role === 'admin' ? 'admin123 / admin123' : 'staff123 / staff123'}</p>`}</div>`;
}

async function doLogin(role) {
  const btn = $('loginBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'در حال ورود...'; }
  const ok = await login(role, $('u').value, $('p').value);
  if (ok) location.reload();
  else {
    if (btn) { btn.disabled = false; btn.textContent = 'ورود'; }
    if (!window.DELIZA_DB?.isConfigured?.()) alert('اطلاعات ورود اشتباه است');
  }
}


async function bootstrapData(role) {
  seed();

  if (['admin', 'staff'].includes(role)) {
    const ok = await syncRoleAuth(role);
    if (window.DELIZA_DB?.isConfigured?.() && !ok) return;
  }

  if (window.DELIZA_DB?.isConfigured?.()) {
    const pulled = await window.DELIZA_DB.pull();

    // اگر منوی جدید داخل فایل سایت آپدیت شده باشد، با اولین ورود مدیر به Supabase هم منتقل می‌شود.
    if (role === 'admin' && roleAuth('admin') && pulled.ok) {
      const currentSettings = settings();
      const needsMenuMigration = pulled.count === 0 || currentSettings.menuVersion !== DATA_VERSION;
      if (needsMenuMigration) {
        write('products', DEFAULT_PRODUCTS, { skipRemote: true, silent: true });
        write('categories', DEFAULT_CATEGORIES, { skipRemote: true, silent: true });
        write('settings', { ...currentSettings, ...DEFAULT_SETTINGS, menuVersion: DATA_VERSION }, { skipRemote: true, silent: true });
        if (!Array.isArray(read('orders', null))) write('orders', [], { skipRemote: true, silent: true });
        if (!Array.isArray(read('staff', null))) write('staff', DEFAULT_STAFF, { skipRemote: true, silent: true });
        await window.DELIZA_DB.pushAll();
      }
    }

    repairData();
  }
}

function supabaseStatusBadge() {
  const text = window.DELIZA_DB?.statusText?.() || 'Supabase تنظیم نشده؛ داده‌ها محلی هستند.';
  const cls = window.DELIZA_DB?.isConfigured?.() ? 'green' : 'gray';
  return `<span class="badge ${cls}" title="${text}">${text}</span>`;
}
