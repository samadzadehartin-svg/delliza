let dashboardSection = 'overview';
let dashboardProductSearch = '';
let dashboardProductCategory = 'all';
let dashboardOrderSearch = '';
let dashboardOrderStatus = 'all';

function dashboardAuth() {
  return roleAuth('staff') || roleAuth('admin');
}

function dashboardIsAdmin() {
  return dashboardAuth()?.role === 'admin' || Boolean(roleAuth('admin'));
}

function dashboardRoleLabel() {
  return dashboardIsAdmin() ? 'مدیر' : 'فروشنده';
}

function requireDashboard() {
  mount('dashboard');
  const auth = dashboardAuth();
  if (!auth) {
    $('app').innerHTML = loginBox('staff', 'ورود داشبورد دلیزا');
    return false;
  }
  return true;
}

function dashboardStatuses() {
  return ['در انتظار تماس', 'تایید شده', 'آماده تحویل', 'ارسال شده', 'لغو شده'];
}

function dashboardSortedOrders() {
  return [...orders()].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
}

function dashboardMetrics() {
  const orderList = orders();
  const productList = products();
  return {
    products: productList.length,
    activeProducts: productList.filter((p) => p.status === 'active').length,
    lowStock: productList.filter((p) => Number(p.stock || 0) <= 5).length,
    orders: orderList.length,
    pending: orderList.filter((o) => !o.status || o.status === 'در انتظار تماس').length,
    sales: orderList.reduce((sum, order) => sum + Number(order.total || 0), 0)
  };
}

function dashboardNav() {
  const items = [
    ['overview', 'fa-chart-pie', 'نمای کلی'],
    ['orders', 'fa-receipt', 'سفارش‌ها'],
    ['products', 'fa-cake-candles', 'محصولات']
  ];
  if (dashboardIsAdmin()) items.push(['settings', 'fa-gear', 'تنظیمات']);
  return `<nav class="dashboard-nav">${items.map(([id, icon, title]) => `
    <button class="dashboard-nav-btn ${dashboardSection === id ? 'active' : ''}" type="button" onclick="setDashboardSection('${id}')">
      <i class="fa-solid ${icon}"></i><span>${title}</span>
    </button>`).join('')}</nav>`;
}

function dashboardShell(content) {
  const auth = dashboardAuth() || {};
  return `
    <section class="dashboard-shell">
      <aside class="dashboard-sidebar card">
        <div class="dashboard-user">
          <span class="dashboard-avatar"><i class="fa-solid ${dashboardIsAdmin() ? 'fa-user-shield' : 'fa-user-tag'}"></i></span>
          <div><b>${esc(auth.name || auth.email || 'کاربر دلیزا')}</b><small>${dashboardRoleLabel()}</small></div>
        </div>
        ${dashboardNav()}
        <div class="dashboard-side-actions">
          <a class="soft" href="../buyer/" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> مشاهده سایت</a>
          <button class="soft" type="button" onclick="refreshDashboardData()"><i class="fa-solid fa-rotate"></i> دریافت از Supabase</button>
          <button class="danger" type="button" onclick="logout('staff')"><i class="fa-solid fa-right-from-bracket"></i> خروج</button>
        </div>
      </aside>
      <div class="dashboard-main">
        <header class="dashboard-top card pad">
          <div>
            <span class="badge ${dashboardIsAdmin() ? 'pink' : 'green'}">داشبورد یکپارچه</span>
            <h1>داشبورد دلیزا</h1>
            <p class="small">سفارش‌ها، محصولات و وضعیت فروش در یک محیط</p>
          </div>
          <div class="dashboard-top-meta">${supabaseStatusBadge()}<span class="badge gray">${dashboardRoleLabel()}</span></div>
        </header>
        <div id="dashboardContent">${content}</div>
      </div>
    </section>
    <div id="productModal" class="modal"></div>`;
}

function setDashboardSection(section) {
  if (section === 'settings' && !dashboardIsAdmin()) section = 'overview';
  dashboardSection = section;
  renderDashboard();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDashboard() {
  if (!requireDashboard()) return;
  let content = '';
  if (dashboardSection === 'orders') content = renderDashboardOrders();
  else if (dashboardSection === 'products') content = renderDashboardProducts();
  else if (dashboardSection === 'settings' && dashboardIsAdmin()) content = renderDashboardSettings();
  else {
    dashboardSection = 'overview';
    content = renderDashboardOverview();
  }
  $('app').innerHTML = dashboardShell(content);
}

function renderDashboardOverview() {
  const m = dashboardMetrics();
  const recent = dashboardSortedOrders().slice(0, 6);
  const lowStock = products()
    .filter((p) => Number(p.stock || 0) <= 5)
    .sort((a, b) => Number(a.stock || 0) - Number(b.stock || 0))
    .slice(0, 8);
  return `
    <section class="dashboard-kpis">
      <button class="dashboard-kpi card pad" onclick="setDashboardSection('orders')"><span>کل سفارش‌ها</span><b>${faNum(m.orders)}</b><small>${faNum(m.pending)} سفارش در انتظار</small></button>
      <button class="dashboard-kpi card pad" onclick="setDashboardSection('products')"><span>محصولات فعال</span><b>${faNum(m.activeProducts)}</b><small>از ${faNum(m.products)} محصول</small></button>
      <div class="dashboard-kpi card pad"><span>فروش ثبت‌شده</span><b>${money(m.sales)}</b><small>بر اساس سفارش‌های سایت</small></div>
      <div class="dashboard-kpi card pad"><span>موجودی کم</span><b>${faNum(m.lowStock)}</b><small>۵ عدد یا کمتر</small></div>
    </section>
    <section class="grid g2 dashboard-overview-grid">
      <div class="card pad">
        <div class="row wrap"><div><h3>آخرین سفارش‌ها</h3><p class="small">جدیدترین سفارش‌های ثبت‌شده</p></div><button class="soft" onclick="setDashboardSection('orders')">نمایش همه</button></div>
        <div class="dashboard-recent-orders">
          ${recent.length ? recent.map((o) => `
            <button class="dashboard-order-card" onclick="viewDashboardOrder(${Number(o.id)})">
              <span><b>${esc(orderCode(o))}</b><small>${esc(o.name || 'مشتری')}</small></span>
              <span><b>${money(o.total || 0)}</b><small>${esc(o.status || 'در انتظار تماس')}</small></span>
            </button>`).join('') : '<div class="dashboard-empty">هنوز سفارشی ثبت نشده است.</div>'}
        </div>
      </div>
      <div class="card pad">
        <div class="row wrap"><div><h3>هشدار موجودی</h3><p class="small">محصولاتی که موجودی کمی دارند</p></div><button class="soft" onclick="setDashboardSection('products')">مدیریت محصولات</button></div>
        <div class="dashboard-stock-list">
          ${lowStock.length ? lowStock.map((p) => `
            <div class="dashboard-stock-row">
              <img src="${esc(p.img || DEFAULT_IMG)}" alt="${esc(p.name)}">
              <span><b>${esc(p.name)}</b><small>${esc(catTitle(p.category))}</small></span>
              <span class="badge ${Number(p.stock || 0) === 0 ? 'pink' : 'gray'}">${faNum(p.stock || 0)} عدد</span>
            </div>`).join('') : '<div class="dashboard-empty">موجودی محصولات مناسب است.</div>'}
        </div>
      </div>
    </section>`;
}

function dashboardFilteredOrders() {
  const q = normalize(dashboardOrderSearch);
  return dashboardSortedOrders().filter((o) => {
    const status = o.status || 'در انتظار تماس';
    const statusOk = dashboardOrderStatus === 'all' || status === dashboardOrderStatus;
    const haystack = normalize([orderCode(o), o.name, o.phone, o.city, o.address].join(' '));
    return statusOk && (!q || haystack.includes(q));
  });
}

function renderDashboardOrders() {
  const list = dashboardFilteredOrders();
  return `
    <section class="card pad dashboard-section-card">
      <div class="row wrap dashboard-section-head">
        <div><h2>مدیریت سفارش‌ها</h2><p class="small">مشاهده جزئیات، تماس با مشتری و تغییر وضعیت سفارش</p></div>
        <span class="badge green">${faNum(list.length)} سفارش</span>
      </div>
      <div class="dashboard-filters">
        <input class="field" value="${esc(dashboardOrderSearch)}" placeholder="جست‌وجوی نام، تلفن یا کد سفارش" oninput="dashboardOrderSearch=this.value;renderDashboard()">
        <select class="field" onchange="dashboardOrderStatus=this.value;renderDashboard()">
          <option value="all">همه وضعیت‌ها</option>
          ${dashboardStatuses().map((status) => `<option value="${status}" ${dashboardOrderStatus === status ? 'selected' : ''}>${status}</option>`).join('')}
        </select>
      </div>
      <div class="table-wrap">${dashboardOrderTable(list)}</div>
    </section>`;
}

function dashboardOrderTable(list) {
  return `<table class="dashboard-table"><thead><tr><th>کد و تاریخ</th><th>مشتری</th><th>اقلام</th><th>جمع کل</th><th>وضعیت</th><th>عملیات</th></tr></thead><tbody>
    ${list.map((o) => `<tr>
      <td><b dir="ltr">${esc(orderCode(o))}</b><br><small>${o.createdAt ? new Date(o.createdAt).toLocaleString('fa-IR') : '—'}</small></td>
      <td><b>${esc(o.name || '—')}</b><br><a href="tel:${esc(o.phone || '')}" dir="ltr">${esc(o.phone || '—')}</a><br><small>${esc(o.city || '')}</small></td>
      <td>${orderItemsMini(o)}</td>
      <td><b>${money(o.total || 0)}</b></td>
      <td><select class="field dashboard-status" onchange="changeDashboardOrder(${Number(o.id)},this.value)">${dashboardStatuses().map((status) => `<option ${status === (o.status || 'در انتظار تماس') ? 'selected' : ''}>${status}</option>`).join('')}</select></td>
      <td><div class="actions"><button class="btn" onclick="viewDashboardOrder(${Number(o.id)})">جزئیات</button><button class="soft" onclick="openInstagramForOrder(${Number(o.id)})">اینستاگرام</button></div></td>
    </tr>`).join('') || '<tr><td colspan="6"><div class="dashboard-empty">سفارشی با این فیلتر پیدا نشد.</div></td></tr>'}
  </tbody></table>`;
}

function changeDashboardOrder(id, status) {
  saveOrders(orders().map((o) => Number(o.id) === Number(id) ? { ...o, status, updatedAt: new Date().toISOString() } : o));
  showToast('وضعیت سفارش تغییر کرد');
  renderDashboard();
}

function viewDashboardOrder(id) {
  const order = orders().find((o) => Number(o.id) === Number(id));
  if (!order) return alert('سفارش پیدا نشد');
  let modal = $('orderModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'orderModal';
    modal.className = 'modal';
    document.body.appendChild(modal);
  }
  modal.innerHTML = `<div class="modal-card card pad"><div class="row sticky-head"><div><span class="badge green">${esc(order.status || 'در انتظار تماس')}</span><h2>سفارش ${esc(orderCode(order))}</h2></div><button class="soft" onclick="document.getElementById('orderModal').classList.remove('on')">بستن</button></div>${orderDetailsHtml(order)}<div class="actions" style="margin-top:14px"><button class="btn" onclick="copyOrderDetails(${Number(order.id)})">کپی جزئیات</button><button class="soft" onclick="openInstagramForOrder(${Number(order.id)})">باز کردن اینستاگرام</button><button class="soft" onclick="document.getElementById('orderModal').classList.remove('on')">بستن</button></div></div>`;
  modal.classList.add('on');
}

function dashboardFilteredProducts() {
  const q = normalize(dashboardProductSearch);
  return products().filter((p) => {
    const categoryOk = dashboardProductCategory === 'all' || p.category === dashboardProductCategory;
    return categoryOk && (!q || normalize([p.name, p.flavor, p.tags?.join(' ')].join(' ')).includes(q));
  });
}

function renderDashboardProducts() {
  const list = dashboardFilteredProducts();
  return `
    <section class="card pad dashboard-section-card">
      <div class="row wrap dashboard-section-head">
        <div><h2>محصولات</h2><p class="small">${dashboardIsAdmin() ? 'قیمت، موجودی، تصویر و وضعیت نمایش محصول' : 'نمایش موجودی و اطلاعات محصولات؛ ویرایش فقط برای مدیر فعال است.'}</p></div>
        <div class="actions">${dashboardIsAdmin() ? '<button class="btn" onclick="openDashboardProductForm()"><i class="fa-solid fa-plus"></i> افزودن محصول</button>' : '<span class="badge gray">دسترسی فقط خواندنی</span>'}</div>
      </div>
      <div class="dashboard-filters">
        <input class="field" value="${esc(dashboardProductSearch)}" placeholder="جست‌وجوی محصول" oninput="dashboardProductSearch=this.value;renderDashboard()">
        <select class="field" onchange="dashboardProductCategory=this.value;renderDashboard()">
          <option value="all">همه دسته‌ها</option>
          ${categories().map((c) => `<option value="${esc(c.id)}" ${dashboardProductCategory === c.id ? 'selected' : ''}>${esc(c.title)}</option>`).join('')}
        </select>
      </div>
      <div class="table-wrap">${dashboardProductTable(list)}</div>
    </section>`;
}

function dashboardProductTable(list) {
  const actionsHeader = dashboardIsAdmin() ? '<th>عملیات</th>' : '';
  return `<table class="dashboard-table"><thead><tr><th>تصویر</th><th>نام</th><th>دسته</th><th>قیمت</th><th>موجودی</th><th>وضعیت</th>${actionsHeader}</tr></thead><tbody>
    ${list.map((p) => `<tr>
      <td><img class="product-thumb" src="${esc(p.img || DEFAULT_IMG)}" alt="${esc(p.name)}"></td>
      <td><b>${esc(p.name)}</b><br><small>${esc(p.flavor || p.weight || '')}</small></td>
      <td>${esc(catTitle(p.category))}</td>
      <td><b>${productPriceText(p)}</b></td>
      <td>${faNum(p.stock || 0)}</td>
      <td><span class="badge ${p.status === 'active' ? 'green' : 'gray'}">${p.status === 'active' ? 'فعال' : 'غیرفعال'}</span></td>
      ${dashboardIsAdmin() ? `<td><div class="actions"><button class="btn" onclick="openDashboardProductForm(${Number(p.id)})">ویرایش</button><button class="soft" onclick="toggleDashboardProduct(${Number(p.id)})">${p.status === 'active' ? 'غیرفعال' : 'فعال'}</button></div></td>` : ''}
    </tr>`).join('') || `<tr><td colspan="${dashboardIsAdmin() ? 7 : 6}"><div class="dashboard-empty">محصولی پیدا نشد.</div></td></tr>`}
  </tbody></table>`;
}

function dashboardVisibleDefault() {
  return { gallery: true, stock: true, minOrder: true, weight: true };
}

function openDashboardProductForm(id) {
  if (!dashboardIsAdmin()) return alert('ویرایش محصول فقط برای مدیر فعال است.');
  const product = id ? findProduct(id) : null;
  const visible = { ...dashboardVisibleDefault(), ...(product?.visible || {}) };
  const modal = $('productModal');
  modal.innerHTML = `<div class="modal-card card pad">
    <div class="row sticky-head"><h2>${product ? 'ویرایش محصول' : 'افزودن محصول'}</h2><div class="actions"><button class="btn" type="button" onclick="document.getElementById('productForm').requestSubmit()">ذخیره محصول</button><button class="soft" onclick="document.getElementById('productModal').classList.remove('on')">بستن</button></div></div>
    <form id="productForm" class="stack" onsubmit="saveDashboardProduct(event)">
      <input id="pid" type="hidden" value="${product?.id || ''}">
      <div class="form-section"><h3>اطلاعات محصول</h3><div class="grid g2">
        <input id="name" class="field" required placeholder="نام محصول" value="${esc(product?.name || '')}">
        <select id="category" class="field">${categories().map((c) => `<option value="${esc(c.id)}" ${product?.category === c.id ? 'selected' : ''}>${esc(c.title)}</option>`).join('')}</select>
        <input id="flavor" class="field" placeholder="طعم" value="${esc(product?.flavor || '')}">
        <input id="weight" class="field" placeholder="وزن" value="${esc(product?.weight || '')}">
        <input id="price" class="field" type="number" placeholder="قیمت عددی" value="${Number(product?.price || 0)}">
        <input id="priceLabel" class="field" placeholder="متن قیمت جایگزین" value="${esc(product?.priceLabel || '')}">
        <input id="stock" class="field" type="number" placeholder="موجودی" value="${Number(product?.stock || 0)}">
        <input id="minOrder" class="field" type="number" placeholder="حداقل سفارش" value="${Number(product?.minOrder || 1)}">
        <select id="status" class="field"><option value="active" ${product?.status !== 'inactive' ? 'selected' : ''}>فعال</option><option value="inactive" ${product?.status === 'inactive' ? 'selected' : ''}>غیرفعال</option></select>
        <input id="tags" class="field" placeholder="تگ‌ها با کاما" value="${esc((product?.tags || []).join(','))}">
      </div><textarea id="desc" class="field" rows="3" placeholder="توضیحات">${esc(product?.desc || '')}</textarea></div>
      <div class="form-section"><h3>نمایش بخش‌های محصول</h3><div class="switch-grid">${Object.entries({ gallery: 'گالری تصاویر', stock: 'موجودی', minOrder: 'حداقل سفارش', weight: 'وزن محصول' }).map(([key, title]) => `<label class="switch-card"><input id="vis_${key}" type="checkbox" ${visible[key] !== false ? 'checked' : ''}><b>${title}</b><span>در صفحه مشتری نمایش داده شود</span></label>`).join('')}</div></div>
      <div class="form-section"><h3>تصاویر</h3><input id="img" class="field" dir="ltr" placeholder="URL عکس اصلی" value="${esc(product?.img || '')}"><input class="field" type="file" accept="image/*" onchange="uploadDashboardMainImage(this.files)"><textarea id="gallery" class="field" dir="ltr" rows="4" placeholder="هر خط یک URL">${esc((product?.gallery || []).join('\n'))}</textarea><input class="field" type="file" accept="image/*" multiple onchange="uploadDashboardGallery(this.files)"><div id="galleryPreview" class="gallery-preview"></div></div>
      <button class="btn" type="submit">ذخیره محصول</button>
    </form>
  </div>`;
  modal.classList.add('on');
  renderDashboardGalleryPreview();
}

function uploadDashboardMainImage(files) {
  const file = [...(files || [])][0];
  if (!file) return;
  resizeImageFile(file, 900, .72).then((url) => { $('img').value = url; renderDashboardGalleryPreview(); });
}

function uploadDashboardGallery(files) {
  const list = [...(files || [])].slice(0, 10);
  Promise.all(list.map((file) => resizeImageFile(file, 900, .72))).then((urls) => {
    $('gallery').value = [$('gallery').value, ...urls.filter(Boolean)].filter(Boolean).join('\n');
    renderDashboardGalleryPreview();
  });
}

function renderDashboardGalleryPreview() {
  const box = $('galleryPreview');
  if (!box) return;
  const list = [$('img')?.value, ...(($('gallery')?.value || '').split('\n'))].filter(Boolean);
  box.innerHTML = list.slice(0, 12).map((src) => `<span><img src="${esc(src)}" alt=""></span>`).join('');
}

function saveDashboardProduct(event) {
  event.preventDefault();
  if (!dashboardIsAdmin()) return alert('ویرایش محصول فقط برای مدیر فعال است.');
  const id = $('pid').value ? Number($('pid').value) : Date.now();
  const gallery = ($('gallery').value || '').split('\n').map((value) => value.trim()).filter(Boolean);
  const item = {
    id,
    name: $('name').value.trim(),
    category: $('category').value,
    flavor: $('flavor').value,
    weight: $('weight').value,
    price: Number($('price').value) || 0,
    priceLabel: $('priceLabel').value.trim(),
    stock: Number($('stock').value) || 0,
    minOrder: Number($('minOrder').value) || 1,
    status: $('status').value,
    type: 'retail',
    tags: $('tags').value.split(',').map((value) => value.trim()).filter(Boolean),
    desc: $('desc').value,
    ingredients: '',
    img: $('img').value || gallery[0] || DEFAULT_IMG,
    gallery: gallery.length ? gallery : [$('img').value || DEFAULT_IMG],
    visible: {
      ingredients: false,
      gallery: $('vis_gallery').checked,
      stock: $('vis_stock').checked,
      minOrder: $('vis_minOrder').checked,
      weight: $('vis_weight').checked
    },
    updatedAt: new Date().toISOString()
  };
  const list = products();
  const index = list.findIndex((product) => Number(product.id) === id);
  if (index >= 0) list[index] = item;
  else list.push(item);
  if (!saveProducts(list)) return;
  $('productModal').classList.remove('on');
  showToast('محصول ذخیره شد');
  renderDashboard();
}

function toggleDashboardProduct(id) {
  if (!dashboardIsAdmin()) return alert('ویرایش محصول فقط برای مدیر فعال است.');
  saveProducts(products().map((p) => Number(p.id) === Number(id) ? { ...p, status: p.status === 'active' ? 'inactive' : 'active', updatedAt: new Date().toISOString() } : p));
  showToast('وضعیت محصول تغییر کرد');
  renderDashboard();
}

function renderDashboardSettings() {
  if (!dashboardIsAdmin()) return '<div class="card pad">دسترسی غیرمجاز</div>';
  const current = settings();
  return `
    <section class="card pad dashboard-section-card">
      <div class="dashboard-section-head"><h2>تنظیمات برند</h2><p class="small">اطلاعات تماس و مشخصات نمایش‌داده‌شده در سایت</p></div>
      <div class="grid g2">
        <input id="brand" class="field" value="${esc(current.brand || '')}" placeholder="نام برند">
        <input id="subtitle" class="field" value="${esc(current.subtitle || '')}" placeholder="زیرعنوان">
        <input id="phone" class="field" value="${esc(current.phone || '')}" placeholder="تلفن">
        <input id="instagram" class="field" value="${esc(current.instagram || '')}" placeholder="آیدی اینستاگرام">
        <input id="instagramUrl" class="field" dir="ltr" value="${esc(current.instagramUrl || '')}" placeholder="لینک دایرکت اینستاگرام">
        <input id="address" class="field" value="${esc(current.address || '')}" placeholder="آدرس">
      </div>
      <button class="btn" style="margin-top:12px" onclick="saveDashboardSettings()">ذخیره تنظیمات</button>
    </section>
    <section class="card pad dashboard-section-card">
      <h2>کاربران و سطح دسترسی</h2>
      <p class="small">کاربران از Supabase Authentication ساخته می‌شوند. نقش‌های <b>admin</b> و <b>staff</b> در جدول <b>user_roles</b> تعیین می‌شوند. مدیر همه بخش‌ها را می‌بیند و فروشنده فقط سفارش‌ها و فهرست محصولات را مشاهده می‌کند.</p>
      <div class="dashboard-permission-grid"><div><i class="fa-solid fa-user-shield"></i><b>مدیر</b><span>سفارش‌ها، محصولات و تنظیمات</span></div><div><i class="fa-solid fa-user-tag"></i><b>فروشنده</b><span>سفارش‌ها و مشاهده محصولات</span></div></div>
    </section>`;
}

function saveDashboardSettings() {
  if (!dashboardIsAdmin()) return;
  saveSettings({
    ...settings(),
    brand: $('brand').value,
    subtitle: $('subtitle').value,
    phone: $('phone').value,
    instagram: $('instagram').value,
    instagramUrl: $('instagramUrl').value.trim(),
    address: $('address').value
  });
  showToast('تنظیمات ذخیره شد');
  renderDashboard();
}

async function refreshDashboardData() {
  if (!window.DELIZA_DB?.pull) return;
  const result = await window.DELIZA_DB.pull();
  showToast(result.ok ? 'اطلاعات به‌روزرسانی شد' : 'دریافت اطلاعات با خطا مواجه شد');
  renderDashboard();
}

document.addEventListener('DOMContentLoaded', async () => {
  await bootstrapData('staff');
  if (roleAuth('staff')?.role === 'admin') await bootstrapData('admin');
  renderDashboard();
});
