// Buyer page: catalog, cart and order submission.

let cart = read('cart', []);

function saveCart() {
  write('cart', cart, { skipRemote: true, silent: true });
  renderCartDock();
}

function addCart(id) {
  const product = findProduct(id);
  if (!product) return;

  const item = cart.find((cartItem) => String(cartItem.id) === String(id));
  if (item) item.qty += 1;
  else cart.push({ id: product.id, qty: Math.max(1, product.minOrder || 1) });

  saveCart();
  showToast('به سفارش اضافه شد');
}

function removeCart(id) {
  cart = cart.filter((item) => String(item.id) !== String(id));
  saveCart();
  renderCart();
}

function qtyCart(id, qty) {
  const item = cart.find((cartItem) => String(cartItem.id) === String(id));
  const product = findProduct(id);
  const minQty = Math.max(1, Number(product?.minOrder) || 1);

  if (item) {
    item.qty = Math.max(minQty, Number(qty) || minQty);
    saveCart();
    renderCart();
  }
}

function activeProducts() {
  return products().filter((product) => product.status === 'active');
}

function productCard(product) {
  const id = JSON.stringify(product.id);
  const visibleWeight = product.weight && product.visible?.weight !== false;
  const tagHtml = (product.tags || [])
    .slice(0, 2)
    .map((tag) => `<span>${esc(tag)}</span>`)
    .join('');

  return `<article class="card product-card">
    <button class="product-image-btn" onclick='openProduct(${id})' aria-label="مشاهده ${esc(product.name)}">
      <img class="product-img" src="${esc(product.img || DEFAULT_IMG)}" alt="${esc(product.name)}" loading="lazy">
    </button>
    <div class="product-body">
      <div class="row">
        <span class="badge pink">${esc(catTitle(product.category))}</span>
        <span class="badge ${product.stock > 0 ? 'green' : 'gray'}">${product.stock > 0 ? 'موجود' : 'ناموجود'}</span>
      </div>
      <h3 class="product-title">${esc(product.name)}</h3>
      <div class="meta">${visibleWeight ? `<span>${esc(product.weight)}</span>` : ''}${tagHtml}</div>
      <p class="small desc-line">${esc(product.desc || '')}</p>
      <div class="row">
        <b class="price">${productPriceText(product)}</b>
        <button class="btn" onclick='addCart(${id})'>افزودن</button>
      </div>
      <button class="soft" style="width:100%;margin-top:8px" onclick='openProduct(${id})'>جزئیات محصول</button>
    </div>
  </article>`;
}

function categoryStrip(categoryList) {
  return `<div class="category-strip">${categoryList
    .map((category) => `<button class="cat-pill" onclick="selectCategory('${esc(category.id)}')">${esc(category.title)}</button>`)
    .join('')}</div>`;
}

function selectCategory(id) {
  $('cat').value = id;
  filterProducts();
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderHome() {
  const categoryList = categories().filter((category) => category.active !== false);
  const topImages = heroImages();

  $('app').innerHTML = `<section class="hero">
    <div class="hero-grid">
      <div class="hero-copy">
        <span class="badge pink">کاتالوگ آنلاین دلیزا</span>
        <h1>شیرینی‌های دست‌ساز برای لحظه‌های خوشمزه</h1>
        <div class="actions">
          <a class="btn" href="#products">مشاهده محصولات</a>
          <button class="soft" onclick="openCart()">سبد سفارش</button>
        </div>
      </div>
      <div class="hero-showcase">
        ${topImages.map((src, index) => `<img src="${esc(src)}" alt="تصویر منتخب دلیزا ${faNum(index + 1)}">`).join('')}
      </div>
    </div>
  </section>

  ${categoryStrip(categoryList)}

  <section id="products" class="card pad products-shell">
    <div class="row wrap">
      <div>
        <span class="badge">محصولات</span>
        <h2>انتخاب محصول</h2>
        <p class="small">همه محصولات دلیزا در این بخش قابل مشاهده و سفارش هستند.</p>
      </div>
    </div>

    <div class="filters">
      <input id="q" class="field" placeholder="جستجوی محصول..." oninput="filterProducts()">
      <select id="cat" class="field" onchange="filterProducts()">
        <option value="all">همه دسته‌ها</option>
        ${categoryList.map((category) => `<option value="${esc(category.id)}">${esc(category.title)}</option>`).join('')}
      </select>
      <select id="sort" class="field" onchange="filterProducts()">
        <option value="default">پیش‌فرض</option>
        <option value="asc">ارزان‌تر</option>
        <option value="desc">گران‌تر</option>
      </select>
      <label class="soft"><input id="stockOnly" type="checkbox" onchange="filterProducts()"> فقط موجود</label>
    </div>

    <div id="resultMeta" class="small"></div>
    <div id="grid" class="grid g3"></div>
  </section>

  <div id="productModal" class="modal"></div>
  <div id="cartModal" class="modal"></div>
  <div id="cartDock" class="cart-dock row"></div>`;

  filterProducts();
  renderCartDock();
}

function filterProducts() {
  const query = normalize($('q')?.value || '');
  const category = $('cat')?.value || 'all';
  const sort = $('sort')?.value || 'default';
  const stockOnly = $('stockOnly')?.checked;

  let list = activeProducts();
  if (query) {
    list = list.filter((product) => normalize([
      product.name,
      product.flavor,
      product.desc,
      product.ingredients,
      ...(product.tags || [])
    ].join(' ')).includes(query));
  }
  if (category !== 'all') list = list.filter((product) => product.category === category);
  if (stockOnly) list = list.filter((product) => product.stock > 0);
  if (sort === 'asc') list.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
  if (sort === 'desc') list.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));

  $('resultMeta').textContent = `${faNum(list.length)} محصول نمایش داده شد`;
  $('grid').innerHTML = list.map(productCard).join('') || '<div class="card pad">محصولی پیدا نشد.</div>';
}

function openProduct(id) {
  const product = findProduct(id);
  if (!product) return;

  const modal = $('productModal');
  const galleryHtml = (product.gallery || [])
    .map((src) => `<img src="${esc(src)}" alt="${esc(product.name)}">`)
    .join('');
  const idJson = JSON.stringify(product.id);

  modal.innerHTML = `<div class="modal-card card pad">
    <div class="row sticky-head">
      <h2>${esc(product.name)}</h2>
      <button class="soft" onclick="document.getElementById('productModal').classList.remove('on')">بستن</button>
    </div>

    <div class="grid g2">
      <img class="product-img modal-product-img" src="${esc(product.img)}" alt="${esc(product.name)}">
      <div>
        <span class="badge pink">${esc(catTitle(product.category))}</span>
        <h3 class="price">${productPriceText(product)}</h3>
        <p>${esc(product.desc || '')}</p>
        ${product.visible?.ingredients !== false ? `<p><b>ترکیبات:</b> ${esc(product.ingredients || '—')}</p>` : ''}
        ${product.visible?.weight !== false ? `<p><b>وزن:</b> ${esc(product.weight || '—')}</p>` : ''}
        ${product.visible?.minOrder !== false ? `<p><b>حداقل سفارش:</b> ${faNum(product.minOrder || 1)}</p>` : ''}
        ${product.visible?.stock !== false ? `<p><b>موجودی:</b> ${faNum(product.stock || 0)}</p>` : ''}
        <button class="btn" onclick='addCart(${idJson})'>افزودن سفارش</button>
      </div>
    </div>

    ${product.visible?.gallery !== false ? `<div class="gallery-preview" style="margin-top:14px">${galleryHtml}</div>` : ''}
  </div>`;
  modal.classList.add('on');
}

function cartCount() {
  return cart.reduce((sum, item) => sum + Number(item.qty || 0), 0);
}

function renderCartDock() {
  const dock = $('cartDock');
  if (!dock) return;

  const count = cartCount();
  dock.classList.toggle('on', count > 0);
  dock.innerHTML = `<b>${faNum(count)} آیتم سفارش</b><button class="btn" onclick="openCart()">تکمیل سفارش</button>`;
}

function openCart() {
  const modal = $('cartModal');
  modal.innerHTML = `<div class="modal-card card pad">
    <div class="row sticky-head"><h2>سبد سفارش</h2><button class="soft" onclick="document.getElementById('cartModal').classList.remove('on')">بستن</button></div>
    <div id="cartBox"></div>
  </div>`;
  modal.classList.add('on');
  renderCart();
}

function cartTotals() {
  const subtotal = cart.reduce((sum, item) => {
    const product = findProduct(item.id);
    return sum + (product ? productNumericPrice(product) * Number(item.qty || 1) : 0);
  }, 0);
  return { subtotal, deliveryFee: 0, total: subtotal };
}

function cartRow(item) {
  const product = findProduct(item.id);
  if (!product) return '';

  const idJson = JSON.stringify(item.id);
  const lineTotal = productNumericPrice(product) * Number(item.qty || 1);

  return `<div class="card pad row wrap">
    <div>
      <b>${esc(product.name)}</b>
      <p class="small">${productCartPriceText(product)} × <input class="field" style="width:90px" type="number" min="${Number(product.minOrder) || 1}" value="${Number(item.qty) || 1}" onchange='qtyCart(${idJson},this.value)'></p>
    </div>
    <b class="price">${productNumericPrice(product) > 0 ? money(lineTotal) : productPriceText(product)}</b>
    <button class="danger" onclick='removeCart(${idJson})'>حذف</button>
  </div>`;
}

function renderCart() {
  const box = $('cartBox');
  if (!box) return;

  const rows = cart.map(cartRow).join('');
  const totals = cartTotals();

  box.innerHTML = (rows || '<p>سبد سفارش خالی است.</p>') + `<div class="card pad">
    <h3>ثبت اطلاعات مشتری</h3>
    <div class="grid g2">
      <input id="customerName" class="field" placeholder="نام و نام خانوادگی">
      <input id="customerPhone" class="field" placeholder="شماره تماس">
      <input id="customerCity" class="field" placeholder="شهر/آدرس">
      <textarea id="customerNote" class="field" placeholder="توضیحات سفارش"></textarea>
    </div>

    <div class="card pad invoice-summary" style="margin:12px 0;background:var(--soft)">
      <div class="row"><span>جمع محصولات:</span><b>${money(totals.subtotal)}</b></div>
      <div class="row"><b>جمع کل فاکتور:</b><span class="price">${money(totals.total)}</span></div>
    </div>

    <div class="row"><button class="btn" onclick="submitOrder()">ثبت سفارش</button></div>
  </div>`;
}

function submitOrder() {
  if (!cart.length) return alert('سبد خالی است');

  const name = $('customerName').value.trim();
  const phone = $('customerPhone').value.trim();
  if (!name || !phone) return alert('نام و نام خانوادگی و شماره تماس را وارد کنید');

  const itemDetails = orderItemSnapshots(cart);
  const subtotal = itemDetails.reduce((sum, item) => sum + Number(item.lineTotal || 0), 0);
  const deliveryFee = 0;
  const total = subtotal;
  const id = Date.now();

  const order = {
    id,
    code: `DLZ-${String(id).slice(-6)}`,
    name,
    phone,
    city: $('customerCity').value.trim(),
    note: $('customerNote').value.trim(),
    items: cart.map((item) => ({ id: item.id, qty: Number(item.qty) || 1 })),
    itemDetails,
    subtotal,
    deliveryFee,
    total,
    contactTarget: 'whatsapp',
    status: 'در انتظار تماس',
    source: 'website',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  if (!saveOrders([order, ...orders()])) return;

  cart = [];
  saveCart();
  showOrderSuccess(order);
  copyTextToClipboard(orderDetailsText(order));
}

function showOrderSuccess(order) {
  const modal = $('cartModal');
  const idJson = JSON.stringify(order.id);

  modal.innerHTML = `<div class="modal-card card pad">
    <div class="row sticky-head">
      <h2>سفارش ثبت شد</h2>
      <button class="soft" onclick="document.getElementById('cartModal').classList.remove('on')">بستن</button>
    </div>

    <div class="card pad">
      <p>سفارش شما با کد <b>${esc(orderCode(order))}</b> ثبت شد و جزئیات آن در پنل فروش ذخیره شد.</p>
      <div class="card pad payment-instructions">
        <p><b>شماره کارت:</b> <span dir="ltr">6274881201467544</span></p>
        <p><b>به نام:</b> روح اله زرگریان</p>
        <p>لطفا فیش واریزی خود را داخل واتس آپ ارسال کنید</p>
      </div>
      ${contactLinksHtml(orderDetailsText(order), 'order-contact-actions')}
    </div>

    ${orderDetailsHtml(order)}

    <div class="actions" style="margin-top:14px">
      <button class="btn" onclick='openWhatsAppForOrder(${idJson})'>ارسال در واتساپ</button>
      <button class="soft" onclick='copyOrderDetails(${idJson})'>کپی جزئیات سفارش</button>
      <button class="soft" onclick="document.getElementById('cartModal').classList.remove('on')">ادامه خرید</button>
    </div>
  </div>`;

  modal.classList.add('on');
  showToast('سفارش ثبت شد و در پنل فروش ذخیره شد');
}

document.addEventListener('DOMContentLoaded', async () => {
  await bootstrapData('buyer');
  mount('buyer');
  renderHome();
});
