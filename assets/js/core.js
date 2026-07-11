const PREFIX = 'deliza_confectionery_';
const DATA_VERSION_KEY = 'data_version';
const $ = (id) => document.getElementById(id);

function faNum(value) {
  return String(value ?? '').replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]);
}

function money(value) {
  return Number(value || 0).toLocaleString('fa-IR') + ' تومان';
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
    img: p.img || def.img || DEFAULT_IMG,
    gallery: Array.isArray(p.gallery) && p.gallery.length ? p.gallery : [p.img || def.img || DEFAULT_IMG],
    tags: Array.isArray(p.tags) ? p.tags : [],
    visible: {
      ingredients: true,
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
  $('headerMount').innerHTML = `
    <header class="header">
      <div class="container header-inner">
        <a class="brand" href="../buyer/">
          <span class="logo"><i class="fa-solid fa-cake-candles"></i></span>
          <span>${s.brand}<small>${s.subtitle}</small></span>
        </a>
        <nav class="nav">
          <a class="${role === 'buyer' ? 'active' : ''}" href="../buyer/">مشتری</a>
          <a class="${role === 'staff' ? 'active' : ''}" href="../staff/">فروش</a>
          <a class="${role === 'admin' ? 'active' : ''}" href="../admin/">مدیریت</a>
          <button class="soft" onclick="toggleDark()">حالت شب</button>
        </nav>
      </div>
    </header>`;
  $('footerMount').innerHTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <div><b>${s.brand}</b><p>${s.subtitle}</p></div>
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

function login(role, username, password) {
  if (role === 'admin' && username === 'admin123' && password === 'admin123') {
    write('adminAuth', { username, name: 'مدیر دلیزا' });
    return true;
  }
  if (role === 'staff') {
    const user = staffUsers().find((x) => x.username === username && x.password === password && x.active !== false);
    if (user) {
      write('staffAuth', user);
      return true;
    }
  }
  return false;
}

function logout(role) {
  localStorage.removeItem(PREFIX + role + 'Auth');
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
  return `<div class="card pad login-box"><h2>${title}</h2><input id="u" class="field" placeholder="یوزرنیم"><input id="p" class="field" type="password" placeholder="پسورد"><button class="btn" style="width:100%;margin-top:10px" onclick="doLogin('${role}')">ورود</button><p class="small">دمو: ${role === 'admin' ? 'admin123 / admin123' : 'staff123 / staff123'}</p></div>`;
}

function doLogin(role) {
  if (login(role, $('u').value, $('p').value)) location.reload();
  else alert('اطلاعات ورود اشتباه است');
}


async function bootstrapData(role) {
  seed();
  if (window.DELIZA_DB?.isConfigured?.()) {
    const pulled = await window.DELIZA_DB.pull();
    // اگر دیتابیس تازه ساخته شده باشد، پنل مدیریت داده‌های اولیه را یک‌بار به Supabase می‌فرستد.
    if (role === 'admin' && pulled.ok && pulled.count === 0) {
      await window.DELIZA_DB.pushAll();
    }
    repairData();
  }
}

function supabaseStatusBadge() {
  const text = window.DELIZA_DB?.statusText?.() || 'Supabase تنظیم نشده؛ داده‌ها محلی هستند.';
  const cls = window.DELIZA_DB?.isConfigured?.() ? 'green' : 'gray';
  return `<span class="badge ${cls}" title="${text}">${text}</span>`;
}
