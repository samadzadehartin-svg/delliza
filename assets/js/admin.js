(function () {
  const BASE_PRODUCTS = Array.isArray(window.DELLIZA_PRODUCTS) ? window.DELLIZA_PRODUCTS : [];
  const DRAFT_KEY = "delliza-products-draft";

  const imageOptions = [
    "assets/images/menu-photos/mousse-cake.jpg",
    "assets/images/menu-photos/ouchkelman.jpg",
    "assets/images/menu-photos/lotus-cheesecake.jpg",
    "assets/images/menu-photos/pear-cake.jpg",
    "assets/images/menu-photos/fruit-mousse.jpg",
    "assets/images/menu-photos/mochi.jpg",
    "assets/images/menu-photos/croissant.jpg",
    "assets/images/menu-photos/donut.jpg",
    "assets/images/menu-photos/donut-bites.jpg",
    "assets/images/product-cake.svg",
    "assets/images/product-box.svg",
    "assets/images/product-donut.svg",
    "assets/images/product-donut-bite.svg",
    "assets/images/product-croissant.svg",
    "assets/images/product-cookie.svg",
    "assets/images/product-coffee-cookie.svg",
    "assets/images/product-halva.svg",
    "assets/images/product-halva-single.svg",
    "assets/images/product-sweets.svg",
    "assets/images/product-mochi.svg",
    "assets/images/product-dessert.svg"
  ];

  const getDraft = () => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : null;
    } catch (error) {
      return null;
    }
  };

  let products = structuredClone(getDraft() || BASE_PRODUCTS);
  let activeIndex = "";

  const els = {
    form: document.getElementById("product-form"),
    formTitle: document.getElementById("form-title"),
    editingIndex: document.getElementById("editing-index"),
    id: document.getElementById("product-id"),
    title: document.getElementById("product-title"),
    english: document.getElementById("product-english"),
    category: document.getElementById("product-category"),
    price: document.getElementById("product-price"),
    weight: document.getElementById("product-weight"),
    badge: document.getElementById("product-badge"),
    image: document.getElementById("product-image"),
    description: document.getElementById("product-description"),
    tags: document.getElementById("product-tags"),
    featured: document.getElementById("product-featured"),
    today: document.getElementById("product-today"),
    table: document.getElementById("products-table"),
    search: document.getElementById("admin-search"),
    productCount: document.getElementById("product-count"),
    draftStatus: document.getElementById("draft-status"),
    output: document.getElementById("export-output"),
    imageOptions: document.getElementById("image-options")
  };

  const toPersianDigits = (value) => String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);

  const normalize = (value) =>
    String(value || "")
      .trim()
      .replace(/[ي]/g, "ی")
      .replace(/[ك]/g, "ک")
      .toLowerCase();

  const slugify = (value) => {
    const normalized = String(value || "")
      .trim()
      .replace(/[\u064B-\u065F\u0670]/g, "")
      .replace(/[أإآ]/g, "ا")
      .replace(/[ي]/g, "ی")
      .replace(/[ك]/g, "ک")
      .replace(/[^\p{L}\p{N}]+/gu, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase();
    return normalized || `product-${Date.now()}`;
  };

  const categories = () => Array.from(new Set(products.map((product) => product.category).filter(Boolean))).sort();

  const buildProductsJs = () => `window.DELLIZA_PRODUCTS = ${JSON.stringify(products, null, 2)};\n`;

  const toast = (message) => {
    document.querySelectorAll(".toast").forEach((item) => item.remove());
    const node = document.createElement("div");
    node.className = "toast";
    node.textContent = message;
    document.body.appendChild(node);
    window.setTimeout(() => node.remove(), 2600);
  };

  const updateCategorySelect = () => {
    const current = els.category.value;
    const defaults = ["کیک و چیزکیک", "حلوا سینی", "حلوا تک‌نفره", "کلاسیک", "شیرینی و کوکی", "دسر"];
    const list = Array.from(new Set([...defaults, ...categories(), current].filter(Boolean)));
    els.category.innerHTML = list.map((category) => `<option value="${category}">${category}</option>`).join("");
    if (current) els.category.value = current;
  };

  const updateImageOptions = () => {
    const used = products.map((product) => product.image).filter(Boolean);
    const list = Array.from(new Set([...imageOptions, ...used]));
    els.imageOptions.innerHTML = list.map((path) => `<option value="${path}"></option>`).join("");
  };

  const renderOutput = () => {
    els.output.value = buildProductsJs();
  };

  const renderStatus = () => {
    els.productCount.textContent = `${toPersianDigits(products.length)} محصول`;
    els.draftStatus.textContent = getDraft() ? "پیش‌نمایش مرورگر فعال است" : "بدون پیش‌نویس مرورگر";
  };

  const autoSaveDraft = () => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(products));
    renderStatus();
  };

  const filteredProducts = () => {
    const query = normalize(els.search.value);
    if (!query) return products.map((product, index) => ({ product, index }));
    return products
      .map((product, index) => ({ product, index }))
      .filter(({ product }) =>
        normalize([product.title, product.englishTitle, product.category, product.description, product.price].join(" ")).includes(query)
      );
  };

  const renderTable = () => {
    const rows = filteredProducts();
    els.table.innerHTML = rows
      .map(({ product, index }) => `
        <tr>
          <td>
            <div class="admin-product-mini">
              <img src="${product.image || "assets/images/product-dessert.svg"}" alt="" loading="lazy" />
              <div>
                <strong>${product.title || "بدون نام"}</strong>
                <small>${product.id || "بدون شناسه"}</small>
              </div>
            </div>
          </td>
          <td>${product.category || "-"}</td>
          <td>
            <label class="inline-price" aria-label="قیمت ${product.title}">
              <input type="number" min="0" step="1" value="${product.price || 0}" data-inline-price="${index}" />
              <span>هزار تومان</span>
            </label>
          </td>
          <td>${product.image ? "دارد" : "ندارد"}</td>
          <td>
            <div class="row-actions">
              <button type="button" data-edit="${index}">ویرایش</button>
              <button type="button" data-copy="${index}">کپی</button>
            </div>
          </td>
        </tr>`)
      .join("");
    updateCategorySelect();
    updateImageOptions();
    renderStatus();
    renderOutput();
  };

  const clearForm = () => {
    activeIndex = "";
    els.editingIndex.value = "";
    els.formTitle.textContent = "افزودن محصول جدید";
    els.id.value = "";
    els.title.value = "";
    els.english.value = "";
    els.category.value = categories()[0] || "کیک و چیزکیک";
    els.price.value = "";
    els.weight.value = "یک عدد";
    els.badge.value = "";
    els.image.value = "assets/images/product-dessert.svg";
    els.description.value = "";
    els.tags.value = "";
    els.featured.checked = false;
    els.today.checked = false;
  };

  const fillForm = (index) => {
    const product = products[index];
    if (!product) return;
    activeIndex = index;
    els.editingIndex.value = String(index);
    els.formTitle.textContent = `ویرایش ${product.title}`;
    els.id.value = product.id || "";
    els.title.value = product.title || "";
    els.english.value = product.englishTitle || "";
    els.category.value = product.category || "کیک و چیزکیک";
    els.price.value = product.price || 0;
    els.weight.value = product.weight || "";
    els.badge.value = product.badge || "";
    els.image.value = product.image || "";
    els.description.value = product.description || "";
    els.tags.value = Array.isArray(product.tags) ? product.tags.join("، ") : "";
    els.featured.checked = Boolean(product.featured);
    els.today.checked = Boolean(product.today);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formProduct = () => {
    const title = els.title.value.trim();
    const id = slugify(els.id.value || title);
    return {
      id,
      title,
      englishTitle: els.english.value.trim(),
      category: els.category.value.trim(),
      price: Number(els.price.value || 0),
      badge: els.badge.value.trim(),
      weight: els.weight.value.trim() || "یک عدد",
      image: els.image.value.trim() || "assets/images/product-dessert.svg",
      description: els.description.value.trim(),
      tags: els.tags.value
        .split(/[،,]/)
        .map((tag) => tag.trim())
        .filter(Boolean),
      featured: els.featured.checked,
      today: els.today.checked,
      createdAt: new Date().toISOString().slice(0, 10)
    };
  };

  const saveProduct = (event) => {
    event.preventDefault();
    const product = formProduct();
    if (!product.title) {
      toast("نام محصول را وارد کن.");
      return;
    }
    const currentIndex = els.editingIndex.value === "" ? -1 : Number(els.editingIndex.value);
    const duplicateIndex = products.findIndex((item, index) => item.id === product.id && index !== currentIndex);
    if (duplicateIndex !== -1) {
      toast("این شناسه قبلاً استفاده شده. شناسه محصول را تغییر بده.");
      return;
    }
    if (currentIndex >= 0 && products[currentIndex]) {
      product.createdAt = products[currentIndex].createdAt || product.createdAt;
      products[currentIndex] = product;
      toast("محصول ویرایش شد و در پیش‌نمایش ذخیره شد.");
    } else {
      products.unshift(product);
      toast("محصول جدید اضافه شد و در پیش‌نمایش ذخیره شد.");
    }
    autoSaveDraft();
    renderTable();
    fillForm(products.findIndex((item) => item.id === product.id));
  };

  const duplicateCurrent = () => {
    const sourceIndex = els.editingIndex.value === "" ? 0 : Number(els.editingIndex.value);
    const source = products[sourceIndex];
    if (!source) return toast("اول یک محصول را انتخاب کن.");
    const copy = structuredClone(source);
    copy.id = `${source.id || "product"}-copy-${Date.now()}`;
    copy.title = `${source.title || "محصول"} کپی`;
    copy.createdAt = new Date().toISOString().slice(0, 10);
    products.unshift(copy);
    autoSaveDraft();
    renderTable();
    fillForm(0);
    toast("کپی محصول ساخته شد.");
  };

  const deleteCurrent = () => {
    const index = els.editingIndex.value === "" ? -1 : Number(els.editingIndex.value);
    if (index < 0 || !products[index]) return toast("محصولی برای حذف انتخاب نشده.");
    const title = products[index].title;
    const ok = window.confirm(`محصول «${title}» حذف شود؟`);
    if (!ok) return;
    products.splice(index, 1);
    autoSaveDraft();
    clearForm();
    renderTable();
    toast("محصول حذف شد.");
  };

  const applyTableEdits = () => {
    document.querySelectorAll("[data-inline-price]").forEach((input) => {
      const index = Number(input.dataset.inlinePrice);
      if (!products[index]) return;
      const value = Number(input.value || 0);
      products[index].price = Number.isFinite(value) && value >= 0 ? value : 0;
    });
    autoSaveDraft();
    renderTable();
    toast("قیمت‌های جدول ذخیره شد. برای انتشار روی GitHub خروجی products.js بگیر.");
  };

  const saveDraft = () => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(products));
    renderStatus();
    toast("پیش‌نمایش ذخیره شد. سایت را refresh کن یا دکمه دیدن سایت را بزن.");
  };

  const clearDraft = () => {
    localStorage.removeItem(DRAFT_KEY);
    renderStatus();
    toast("پیش‌نمایش مرورگر پاک شد.");
  };

  const copyJs = async () => {
    try {
      await navigator.clipboard.writeText(buildProductsJs());
      toast("کد products.js کپی شد.");
    } catch (error) {
      els.output.select();
      document.execCommand("copy");
      toast("کد products.js انتخاب/کپی شد.");
    }
  };

  const downloadJs = () => {
    const blob = new Blob([buildProductsJs()], { type: "text/javascript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "products.js";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    toast("فایل products.js دانلود شد.");
  };

  const handleAction = (event) => {
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (!action) return;
    const actions = {
      "new-product": clearForm,
      "duplicate-product": duplicateCurrent,
      "delete-product": deleteCurrent,
      "apply-table-edits": applyTableEdits,
      "save-draft": saveDraft,
      "clear-draft": clearDraft,
      "copy-js": copyJs,
      "download-js": downloadJs
    };
    actions[action]?.();
  };

  const handleTable = (event) => {
    const edit = event.target.closest("[data-edit]");
    const copy = event.target.closest("[data-copy]");
    if (edit) fillForm(Number(edit.dataset.edit));
    if (copy) {
      fillForm(Number(copy.dataset.copy));
      duplicateCurrent();
    }
  };

  const handleInlineTableChange = (event) => {
    const input = event.target.closest("[data-inline-price]");
    if (!input) return;
    const index = Number(input.dataset.inlinePrice);
    if (!products[index]) return;
    const value = Number(input.value || 0);
    products[index].price = Number.isFinite(value) && value >= 0 ? value : 0;
    autoSaveDraft();
    renderOutput();
    toast("قیمت در پنل ذخیره شد.");
  };

  els.form.addEventListener("submit", saveProduct);
  els.search.addEventListener("input", renderTable);
  document.addEventListener("click", handleAction);
  els.table.addEventListener("click", handleTable);
  els.table.addEventListener("change", handleInlineTableChange);
  els.title.addEventListener("input", () => {
    if (!els.id.value || els.id.dataset.auto === "true") {
      els.id.value = slugify(els.title.value);
      els.id.dataset.auto = "true";
    }
  });
  els.id.addEventListener("input", () => {
    els.id.dataset.auto = "false";
  });

  updateCategorySelect();
  updateImageOptions();
  renderTable();
  fillForm(0);
})();
