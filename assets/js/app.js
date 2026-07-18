(function () {
  let products = [];
  const instagramUrl = "https://www.instagram.com/Delliza.bakery";

  const state = {
    category: "همه",
    query: "",
    sort: "featured"
  };

  const els = {
    navToggle: document.querySelector(".nav-toggle"),
    navLinks: document.querySelector("[data-nav-links]"),
    categoryChips: document.getElementById("category-chips"),
    productGrid: document.getElementById("product-grid"),
    searchInput: document.getElementById("search-input"),
    sortSelect: document.getElementById("sort-select"),
    resultsCount: document.getElementById("results-count"),
    resetFilters: document.getElementById("reset-filters"),
    emptyState: document.getElementById("empty-state"),
    modal: document.getElementById("product-modal"),
    modalContent: document.getElementById("modal-content")
  };

  const toPersianDigits = (value) => String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
  const formatPrice = (price) => `${toPersianDigits(price)} هزار تومان`;

  const normalize = (value) =>
    String(value || "")
      .trim()
      .replace(/[ي]/g, "ی")
      .replace(/[ك]/g, "ک")
      .toLowerCase();

  const safeText = (value) => String(value || "");

  const loadProducts = async () => {
    try {
      const response = await fetch("data/products.json", { cache: "no-store" });
      if (!response.ok) throw new Error(`products.json ${response.status}`);
      const data = await response.json();
      products = Array.isArray(data) ? data : Array.isArray(data.products) ? data.products : [];
      products = products.filter((product) => product && product.active !== false);
    } catch (error) {
      console.error("Could not load products.json", error);
      products = [];
      if (els.productGrid) {
        els.productGrid.innerHTML = `<div class="empty-state inline-error"><strong>محصولات بارگذاری نشد.</strong><p>فایل data/products.json را بررسی کن.</p></div>`;
      }
    }
  };

  const uniqueCategories = () => ["همه", ...new Set(products.map((product) => product.category).filter(Boolean))];

  const getCategoryCount = (category) =>
    category === "همه" ? products.length : products.filter((product) => product.category === category).length;

  const getFilteredProducts = () => {
    const query = normalize(state.query);

    return products
      .filter((product) => {
        const matchesCategory = state.category === "همه" || product.category === state.category;
        const haystack = normalize([
          product.title,
          product.englishTitle,
          product.category,
          product.description,
          ...(product.tags || [])
        ].join(" "));
        const matchesQuery = !query || haystack.includes(query);
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        if (state.sort === "price-desc") return Number(b.price || 0) - Number(a.price || 0);
        if (state.sort === "price-asc") return Number(a.price || 0) - Number(b.price || 0);
        if (state.sort === "newest") return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        return Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || Number(b.price || 0) - Number(a.price || 0);
      });
  };

  const productCard = (product) => `
    <article class="product-card reveal" data-product-id="${safeText(product.id)}">
      <button class="product-image" type="button" data-view-product="${safeText(product.id)}" aria-label="مشاهده ${safeText(product.title)}">
        <img src="${safeText(product.image)}" alt="${safeText(product.title)}" loading="lazy" />
        <span>${safeText(product.badge || product.category)}</span>
      </button>
      <div class="product-body">
        <div>
          <p class="product-category">${safeText(product.category)}</p>
          <h3>${safeText(product.title)}</h3>
          <small>${safeText(product.englishTitle)}</small>
        </div>
        <p>${safeText(product.description)}</p>
        <div class="product-meta">
          <span>${safeText(product.weight)}</span>
          <strong>${formatPrice(Number(product.price || 0))}</strong>
        </div>
        <div class="product-actions">
          <button class="btn btn-small btn-dark" type="button" data-view-product="${safeText(product.id)}">جزئیات</button>
          <a class="btn btn-small btn-light" href="${instagramUrl}" target="_blank" rel="noopener">سفارش</a>
        </div>
      </div>
    </article>`;

  const renderChips = () => {
    if (!els.categoryChips) return;
    els.categoryChips.innerHTML = uniqueCategories()
      .map(
        (category) => `
          <button class="chip ${state.category === category ? "active" : ""}" type="button" data-category="${category}">
            ${category}
            <span>${toPersianDigits(getCategoryCount(category))}</span>
          </button>`
      )
      .join("");
  };

  const renderProducts = () => {
    if (!els.productGrid) return;
    const filtered = getFilteredProducts();
    els.productGrid.innerHTML = filtered.map(productCard).join("");
    if (els.resultsCount) els.resultsCount.textContent = `${toPersianDigits(filtered.length)} محصول`;
    if (els.emptyState) els.emptyState.hidden = filtered.length > 0;
    renderChips();
    observeReveals();
  };

  const openProduct = (id) => {
    const product = products.find((item) => item.id === id);
    if (!product || !els.modal || !els.modalContent) return;

    els.modalContent.innerHTML = `
      <div class="modal-grid">
        <div class="modal-image">
          <img src="${safeText(product.image)}" alt="${safeText(product.title)}" />
        </div>
        <div class="modal-info">
          <p class="product-category">${safeText(product.category)}</p>
          <h2 id="modal-title">${safeText(product.title)}</h2>
          <small>${safeText(product.englishTitle)}</small>
          <p>${safeText(product.description)}</p>
          <ul class="tag-list">
            ${(product.tags || []).map((tag) => `<li>${safeText(tag)}</li>`).join("")}
          </ul>
          <div class="modal-price">
            <span>${safeText(product.weight)}</span>
            <strong>${formatPrice(Number(product.price || 0))}</strong>
          </div>
          <a class="btn btn-primary" href="${instagramUrl}" target="_blank" rel="noopener">سفارش از اینستاگرام</a>
        </div>
      </div>`;

    els.modal.showModal();
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    if (!els.modal) return;
    els.modal.close();
    document.body.classList.remove("modal-open");
  };

  const observeReveals = () => {
    const revealItems = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    revealItems.forEach((item) => observer.observe(item));
  };

  const addProductStructuredData = () => {
    const existing = document.getElementById("product-structured-data");
    if (existing) existing.remove();

    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "محصولات دلیزا",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.title,
          description: product.description,
          category: product.category,
          image: product.image,
          offers: {
            "@type": "Offer",
            priceCurrency: "IRR",
            price: Number(product.price || 0) * 10000,
            availability: "https://schema.org/InStock"
          }
        }
      }))
    };

    const script = document.createElement("script");
    script.id = "product-structured-data";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  };

  const bindEvents = () => {
    els.navToggle?.addEventListener("click", () => {
      const isOpen = els.navToggle.getAttribute("aria-expanded") === "true";
      els.navToggle.setAttribute("aria-expanded", String(!isOpen));
      els.navLinks?.classList.toggle("open", !isOpen);
    });

    els.searchInput?.addEventListener("input", (event) => {
      state.query = event.target.value;
      renderProducts();
    });

    els.sortSelect?.addEventListener("change", (event) => {
      state.sort = event.target.value;
      renderProducts();
    });

    els.categoryChips?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      state.category = button.dataset.category;
      renderProducts();
    });

    els.resetFilters?.addEventListener("click", () => {
      state.category = "همه";
      state.query = "";
      state.sort = "featured";
      if (els.searchInput) els.searchInput.value = "";
      if (els.sortSelect) els.sortSelect.value = "featured";
      renderProducts();
    });

    document.addEventListener("click", (event) => {
      const viewButton = event.target.closest("[data-view-product]");
      if (viewButton) openProduct(viewButton.dataset.viewProduct);
      if (event.target.matches("[data-close-modal]")) closeModal();
    });

    els.modal?.addEventListener("click", (event) => {
      if (event.target === els.modal) closeModal();
    });
  };

  const init = async () => {
    bindEvents();
    await loadProducts();
    renderProducts();
    addProductStructuredData();
    observeReveals();
  };

  init();
})();
