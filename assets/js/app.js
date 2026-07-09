(function () {
  const getProducts = () => {
    const baseProducts = Array.isArray(window.DELLIZA_PRODUCTS) ? window.DELLIZA_PRODUCTS : [];
    try {
      const draft = localStorage.getItem("delliza-products-draft");
      if (!draft) return baseProducts;
      const parsed = JSON.parse(draft);
      return Array.isArray(parsed) ? parsed : baseProducts;
    } catch (error) {
      return baseProducts;
    }
  };

  const products = getProducts();
  const instagramUrl = "https://www.instagram.com/Delliza.bakery";

  const state = {
    category: "همه",
    query: "",
    sort: "featured"
  };

  const els = {
    navToggle: document.querySelector(".nav-toggle"),
    navLinks: document.querySelector("[data-nav-links]"),
    categoryStrip: document.getElementById("category-strip"),
    showcaseGrid: document.getElementById("showcase-grid"),
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

  const uniqueCategories = () => ["همه", ...new Set(products.map((product) => product.category))];

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
        if (state.sort === "price-desc") return b.price - a.price;
        if (state.sort === "price-asc") return a.price - b.price;
        if (state.sort === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
        return Number(b.featured) - Number(a.featured) || b.price - a.price;
      });
  };

  const productCard = (product) => `
    <article class="product-card reveal" data-product-id="${product.id}">
      <button class="product-image" type="button" data-view-product="${product.id}" aria-label="مشاهده ${product.title}">
        <img src="${product.image}" alt="${product.title}" loading="lazy" />
      </button>
      <div class="product-body">
        <p class="product-category">${product.category}</p>
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="product-meta">
          <span>${product.weight}</span>
          <strong>${formatPrice(product.price)}</strong>
        </div>
        <div class="product-actions">
          <button class="btn btn-small btn-dark" type="button" data-view-product="${product.id}">جزئیات</button>
          <a class="btn btn-small btn-light" href="${instagramUrl}" target="_blank" rel="noopener">سفارش</a>
        </div>
      </div>
    </article>`;

  const renderCategoryStrip = () => {
    if (!els.categoryStrip) return;
    const categoryVisuals = {
      "کیک و چیزکیک": "ک",
      "حلوا سینی": "ح",
      "حلوا تک‌نفره": "ت",
      "کلاسیک": "د",
      "شیرینی و کوکی": "ش",
      "دسر": "م"
    };

    els.categoryStrip.innerHTML = uniqueCategories()
      .filter((category) => category !== "همه")
      .map(
        (category) => `
          <a class="strip-card reveal" href="#products" data-strip-category="${category}">
            <span aria-hidden="true">${categoryVisuals[category] || "•"}</span>
            <strong>${category}</strong>
            <small>${toPersianDigits(getCategoryCount(category))} محصول</small>
          </a>`
      )
      .join("");
  };

  const renderChips = () => {
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

  const renderShowcase = () => {
    if (!els.showcaseGrid) return;
    els.showcaseGrid.innerHTML = products
      .filter((product) => product.today)
      .slice(0, 4)
      .map(productCard)
      .join("");
  };

  const renderProducts = () => {
    const filtered = getFilteredProducts();
    els.productGrid.innerHTML = filtered.map(productCard).join("");
    els.resultsCount.textContent = `${toPersianDigits(filtered.length)} محصول`;
    els.emptyState.hidden = filtered.length > 0;
    renderChips();
    observeReveals();
  };

  const openProduct = (id) => {
    const product = products.find((item) => item.id === id);
    if (!product) return;

    els.modalContent.innerHTML = `
      <div class="modal-grid">
        <div class="modal-image">
          <img src="${product.image}" alt="${product.title}" />
        </div>
        <div class="modal-info">
          <p class="product-category">${product.category}</p>
          <h2 id="modal-title">${product.title}</h2>
          <small>${product.englishTitle}</small>
          <p>${product.description}</p>
          <ul class="tag-list">
            ${(product.tags || []).map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
          <div class="modal-price">
            <span>${product.weight}</span>
            <strong>${formatPrice(product.price)}</strong>
          </div>
          <a class="btn btn-primary" href="${instagramUrl}" target="_blank" rel="noopener">سفارش از اینستاگرام</a>
        </div>
      </div>`;

    els.modal.showModal();
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
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
            price: product.price * 10000,
            availability: "https://schema.org/InStock"
          }
        }
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  };

  document.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-view-product]");
    const chip = event.target.closest("[data-category]");
    const stripCategory = event.target.closest("[data-strip-category]");
    const closeButton = event.target.closest("[data-close-modal]");

    if (viewButton) {
      openProduct(viewButton.dataset.viewProduct);
    }

    if (chip) {
      state.category = chip.dataset.category;
      renderProducts();
    }

    if (stripCategory) {
      state.category = stripCategory.dataset.stripCategory;
      renderProducts();
    }

    if (closeButton) {
      closeModal();
    }
  });

  els.modal.addEventListener("click", (event) => {
    if (event.target === els.modal) closeModal();
  });

  els.modal.addEventListener("cancel", () => {
    document.body.classList.remove("modal-open");
  });

  if (els.searchInput) els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderProducts();
  });

  if (els.sortSelect) els.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });

  if (els.resetFilters) els.resetFilters.addEventListener("click", () => {
    state.category = "همه";
    state.query = "";
    state.sort = "featured";
    els.searchInput.value = "";
    els.sortSelect.value = "featured";
    renderProducts();
  });

  if (els.navToggle && els.navLinks) els.navToggle.addEventListener("click", () => {
    const isOpen = els.navToggle.getAttribute("aria-expanded") === "true";
    els.navToggle.setAttribute("aria-expanded", String(!isOpen));
    els.navLinks.classList.toggle("is-open", !isOpen);
  });

  if (els.navLinks) els.navLinks.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      els.navToggle.setAttribute("aria-expanded", "false");
      els.navLinks.classList.remove("is-open");
    }
  });

  renderCategoryStrip();
  renderShowcase();
  renderProducts();
  addProductStructuredData();
  observeReveals();
})();
