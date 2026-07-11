let cart = read('cart', []);
function saveCart(){ write('cart', cart); renderCartDock(); }
function addCart(id){ const p=findProduct(id); if(!p) return; const it=cart.find(x=>x.id===id); if(it) it.qty++; else cart.push({id, qty:Math.max(1, p.minOrder||1)}); saveCart(); showToast('به سفارش اضافه شد'); }
function removeCart(id){ cart=cart.filter(x=>x.id!==id); saveCart(); renderCart(); }
function qtyCart(id,q){ const it=cart.find(x=>x.id===id); if(it){ it.qty=Math.max(1, Number(q)||1); saveCart(); renderCart(); } }

function productCard(p){
  return `<article class="card product-card">
    <button class="product-image-btn" onclick="openProduct(${p.id})" aria-label="مشاهده ${p.name}">
      <img class="product-img" src="${p.img||DEFAULT_IMG}" alt="${p.name}" loading="lazy">
    </button>
    <div class="product-body">
      <div class="row"><span class="badge pink">${catTitle(p.category)}</span><span class="badge ${p.stock>0?'green':'gray'}">${p.stock>0?'موجود':'ناموجود'}</span></div>
      <h3 class="product-title">${p.name}</h3>
      <div class="meta">${p.weight&&p.visible?.weight!==false?`<span>${p.weight}</span>`:''}<span>${p.type||'B2C'}</span>${(p.tags||[]).slice(0,2).map(t=>`<span>${t}</span>`).join('')}</div>
      <p class="small desc-line">${p.desc||''}</p>
      <div class="row"><b class="price">${productPriceText(p)}</b><button class="btn" onclick="addCart(${p.id})">افزودن</button></div>
      <button class="soft" style="width:100%;margin-top:8px" onclick="openProduct(${p.id})">جزئیات محصول</button>
    </div>
  </article>`;
}

function categoryStrip(cats){
  return `<div class="category-strip">${cats.map(c=>`<button class="cat-pill" onclick="selectCategory('${c.id}')">${c.title}</button>`).join('')}</div>`;
}

function selectCategory(id){
  $('cat').value = id;
  filterProducts();
  document.getElementById('products')?.scrollIntoView({behavior:'smooth', block:'start'});
}

function renderHome(){
  const s=settings();
  const cats=categories().filter(c=>c.active!==false);
  const featured=products().filter(p=>p.status==='active').slice(0,4);
  $('app').innerHTML=`
    <section class="hero">
      <div class="hero-grid">
        <div class="hero-copy">
          <span class="badge pink">کاتالوگ آنلاین دلیزا</span>
          <h1>شیرینی‌های دست‌ساز برای لحظه‌های خوشمزه</h1>
          <p>مشاهده و ثبت سفارش کیک، شیرینی، دونات، کوکی، حلوا و دسرهای دلیزا با دسته‌بندی کامل و قیمت به‌روز.</p>
          <div class="actions"><a class="btn" href="#products">مشاهده محصولات</a><button class="soft" onclick="openCart()">سبد سفارش</button></div>
        </div>
        <div class="hero-showcase">
          ${featured.map(p=>`<img src="${p.img}" alt="${p.name}">`).join('')}
        </div>
      </div>
    </section>
    ${categoryStrip(cats)}
    <section id="products" class="card pad products-shell">
      <div class="row wrap"><div><span class="badge">محصولات</span><h2>انتخاب محصول</h2><p class="small">همه محصولات دلیزا در این بخش قابل مشاهده و سفارش هستند.</p></div></div>
      <div class="filters"><input id="q" class="field" placeholder="جستجوی محصول..." oninput="filterProducts()"><select id="cat" class="field" onchange="filterProducts()"><option value="all">همه دسته‌ها</option>${cats.map(c=>`<option value="${c.id}">${c.title}</option>`).join('')}</select><select id="type" class="field" onchange="filterProducts()"><option value="all">همه فروش‌ها</option><option value="B2B">عمده B2B</option><option value="B2C">تکی B2C</option></select><select id="sort" class="field" onchange="filterProducts()"><option value="default">پیش‌فرض</option><option value="asc">ارزان‌تر</option><option value="desc">گران‌تر</option></select><label class="soft"><input id="stockOnly" type="checkbox" onchange="filterProducts()"> فقط موجود</label></div>
      <div id="resultMeta" class="small"></div>
      <div id="grid" class="grid g3"></div>
    </section>
    <div id="productModal" class="modal"></div><div id="cartModal" class="modal"></div><div id="cartDock" class="cart-dock row"></div>`;
  filterProducts(); renderCartDock();
}

function filterProducts(){
  const q=normalize($('q')?.value||''), cat=$('cat')?.value||'all', type=$('type')?.value||'all', sort=$('sort')?.value||'default', stock=$('stockOnly')?.checked;
  let list=products().filter(p=>p.status==='active');
  if(q) list=list.filter(p=>normalize([p.name,p.flavor,p.desc,p.ingredients,...(p.tags||[])].join(' ')).includes(q));
  if(cat!=='all') list=list.filter(p=>p.category===cat);
  if(type!=='all') list=list.filter(p=>p.type===type);
  if(stock) list=list.filter(p=>p.stock>0);
  if(sort==='asc') list.sort((a,b)=>a.price-b.price);
  if(sort==='desc') list.sort((a,b)=>b.price-a.price);
  $('resultMeta').textContent = `${faNum(list.length)} محصول نمایش داده شد`;
  $('grid').innerHTML=list.map(productCard).join('')||'<div class="card pad">محصولی پیدا نشد.</div>';
}

function openProduct(id){
  const p=findProduct(id); if(!p) return;
  const m=$('productModal');
  m.innerHTML=`<div class="modal-card card pad"><div class="row sticky-head"><h2>${p.name}</h2><button class="soft" onclick="$('productModal').classList.remove('on')">بستن</button></div><div class="grid g2"><img class="product-img modal-product-img" src="${p.img}" alt="${p.name}"><div><span class="badge pink">${catTitle(p.category)}</span><h3 class="price">${productPriceText(p)}</h3><p>${p.desc||''}</p>${p.visible?.ingredients!==false?`<p><b>ترکیبات:</b> ${p.ingredients||'—'}</p>`:''}${p.visible?.weight!==false?`<p><b>وزن:</b> ${p.weight||'—'}</p>`:''}${p.visible?.minOrder!==false?`<p><b>حداقل سفارش:</b> ${faNum(p.minOrder||1)}</p>`:''}${p.visible?.stock!==false?`<p><b>موجودی:</b> ${faNum(p.stock||0)}</p>`:''}<button class="btn" onclick="addCart(${p.id})">افزودن سفارش</button></div></div>${p.visible?.gallery!==false?`<div class="gallery-preview" style="margin-top:14px">${(p.gallery||[]).map(x=>`<img src="${x}">`).join('')}</div>`:''}</div>`;
  m.classList.add('on');
}

function renderCartDock(){ const n=cart.reduce((s,x)=>s+x.qty,0); const d=$('cartDock'); if(!d)return; d.classList.toggle('on',n>0); d.innerHTML=`<b>${faNum(n)} آیتم سفارش</b><button class="btn" onclick="openCart()">تکمیل سفارش</button>`; }
function openCart(){ const m=$('cartModal'); m.innerHTML=`<div class="modal-card card pad"><div class="row sticky-head"><h2>سبد سفارش</h2><button class="soft" onclick="$('cartModal').classList.remove('on')">بستن</button></div><div id="cartBox"></div></div>`; m.classList.add('on'); renderCart(); }
function renderCart(){ const box=$('cartBox'); if(!box)return; const rows=cart.map(it=>{const p=findProduct(it.id); return p?`<div class="card pad row wrap"><div><b>${p.name}</b><p class="small">${productPriceText(p)} × <input class="field" style="width:90px" type="number" value="${it.qty}" onchange="qtyCart(${it.id},this.value)"></p></div><b class="price">${productNumericPrice(p)>0?money(productNumericPrice(p)*it.qty):productPriceText(p)}</b><button class="danger" onclick="removeCart(${it.id})">حذف</button></div>`:''}).join(''); const total=cart.reduce((s,it)=>{const p=findProduct(it.id); return s+(p?productNumericPrice(p)*it.qty:0)},0); box.innerHTML=(rows||'<p>سبد سفارش خالی است.</p>')+`<div class="card pad"><h3>ثبت اطلاعات مشتری</h3><div class="grid g2"><input id="customerName" class="field" placeholder="نام مشتری"><input id="customerPhone" class="field" placeholder="شماره تماس"><input id="customerCity" class="field" placeholder="شهر/آدرس"><textarea id="customerNote" class="field" placeholder="توضیحات سفارش"></textarea></div><div class="row"><b class="price">جمع: ${money(total)}</b><button class="btn" onclick="submitOrder()">ثبت سفارش</button></div></div>`; }
function submitOrder(){ if(!cart.length)return alert('سبد خالی است'); const name=$('customerName').value.trim(), phone=$('customerPhone').value.trim(); if(!name||!phone)return alert('نام و شماره تماس را وارد کنید'); const order={id:Date.now(), name, phone, city:$('customerCity').value, note:$('customerNote').value, items:cart, total:cart.reduce((s,it)=>{const p=findProduct(it.id);return s+(p?productNumericPrice(p)*it.qty:0)},0), status:'در انتظار تماس', createdAt:new Date().toISOString()}; saveOrders([order,...orders()]); cart=[]; saveCart(); $('cartModal').classList.remove('on'); showToast('سفارش ثبت شد'); }
document.addEventListener('DOMContentLoaded', async()=>{ await bootstrapData('buyer'); mount('buyer'); renderHome(); });
