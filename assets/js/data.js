const DATA_VERSION='delliza_full_products_2026_01';
const DEFAULT_IMG='../assets/images/product-default.svg';
const DEFAULT_CATEGORIES=[
  {
    "id": "cake",
    "title": "کیک و چیزکیک",
    "active": true
  },
  {
    "id": "halva-tray",
    "title": "حلوا سینی",
    "active": true
  },
  {
    "id": "halva-single",
    "title": "حلوا تک‌نفره",
    "active": true
  },
  {
    "id": "classic",
    "title": "کلاسیک",
    "active": true
  },
  {
    "id": "sweets",
    "title": "شیرینی و کوکی",
    "active": true
  },
  {
    "id": "dessert",
    "title": "دسر",
    "active": true
  }
];
const DEFAULT_PRODUCTS=[
  {
    "id": 1,
    "name": "کیک اوچکلمان",
    "category": "cake",
    "flavor": "شکلاتی",
    "weight": "یک عدد",
    "price": 144000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "پرفروش",
      "شکلاتی"
    ],
    "img": "../assets/images/fresh-products/layered-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/layered-cake.jpg"
    ],
    "desc": "کیک لایه‌ای شکلاتی با کرم مخصوص و تزیین شکلاتی.",
    "ingredients": "آرد، تخم‌مرغ، خامه، شکر، شکلات، کرم میانی",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 2,
    "name": "کیک موس شکلاتی",
    "category": "cake",
    "flavor": "شکلات تلخ",
    "weight": "یک عدد",
    "price": 161000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "ویژه",
      "شکلاتی"
    ],
    "img": "../assets/images/fresh-products/mousse-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/mousse-cake.jpg"
    ],
    "desc": "موس لطیف شکلات تلخ روی کیک شکلاتی با روکش گاناش براق.",
    "ingredients": "آرد، تخم‌مرغ، خامه، شکلات، پودر کاکائو، ژلاتین",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 3,
    "name": "کیک گلابی",
    "category": "cake",
    "flavor": "گلابی و دارچین",
    "weight": "یک عدد",
    "price": 85000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "خانگی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "کیک کره‌ای گلابی با بافت نرم و عطر دارچین.",
    "ingredients": "آرد، تخم‌مرغ، کره، شکر، گلابی، دارچین",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 4,
    "name": "چیزکیک لوتوس",
    "category": "cake",
    "flavor": "لوتوس",
    "weight": "یک عدد",
    "price": 129000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "محبوب"
    ],
    "img": "../assets/images/fresh-products/lotus-cheesecake.jpg",
    "gallery": [
      "../assets/images/fresh-products/lotus-cheesecake.jpg"
    ],
    "desc": "چیزکیک لطیف با بیسکویت لوتوس و کرم کارامل مخصوص.",
    "ingredients": "بیسکویت، کره، پنیر خامه‌ای، خامه، لوتوس",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 5,
    "name": "کیک براونی",
    "category": "cake",
    "flavor": "شکلاتی",
    "weight": "یک عدد",
    "price": 75000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "شکلاتی"
    ],
    "img": "../assets/images/fresh-products/mousse-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/mousse-cake.jpg"
    ],
    "desc": "براونی شکلاتی متراکم و مرطوب برای دوست‌داران شکلات.",
    "ingredients": "آرد، تخم‌مرغ، کره، شکر، شکلات، پودر کاکائو",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 6,
    "name": "کیک زعفرانی",
    "category": "cake",
    "flavor": "زعفران",
    "weight": "یک عدد",
    "price": 78000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "زعفرانی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "کیک زعفرانی معطر با بافت نرم و طعم ایرانی.",
    "ingredients": "آرد، تخم‌مرغ، شیر، کره، شکر، زعفران",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 7,
    "name": "استرول کیک سیب و دارچین",
    "category": "cake",
    "flavor": "سیب و دارچین",
    "weight": "یک عدد",
    "price": 66000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "دارچینی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "کیک سیب و دارچین با تاپینگ استرول کرانچی.",
    "ingredients": "آرد، تخم‌مرغ، کره، شکر، سیب، دارچین",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 8,
    "name": "کیک خیس شکلاتی",
    "category": "cake",
    "flavor": "شکلاتی",
    "weight": "یک عدد",
    "price": 71000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "شکلاتی"
    ],
    "img": "../assets/images/fresh-products/mousse-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/mousse-cake.jpg"
    ],
    "desc": "کیک خیس شکلاتی با بافت نرم و طعم غلیظ کاکائو.",
    "ingredients": "آرد، تخم‌مرغ، شیر، شکر، شکلات، پودر کاکائو",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 9,
    "name": "پایه کیک شکلاتی اسنیکرز",
    "category": "cake",
    "flavor": "اسنیکرز",
    "weight": "یک عدد",
    "price": 52000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "کاراملی"
    ],
    "img": "../assets/images/fresh-products/layered-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/layered-cake.jpg"
    ],
    "desc": "پایه کیک شکلاتی با ترکیب کارامل و بادام‌زمینی.",
    "ingredients": "آرد، تخم‌مرغ، کره، شکلات، کارامل، بادام‌زمینی",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 10,
    "name": "کیک هویج و گردو",
    "category": "cake",
    "flavor": "هویج و گردو",
    "weight": "یک عدد",
    "price": 56000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "کلاسیک"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "کیک کلاسیک هویج و گردو با عطر دارچین.",
    "ingredients": "آرد، تخم‌مرغ، شکر، روغن، هویج، گردو، دارچین",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 11,
    "name": "کیک دیت خرمایی",
    "category": "cake",
    "flavor": "خرما",
    "weight": "یک عدد",
    "price": 39000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "خرمایی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "کیک خرمایی نرم با گردو و دارچین.",
    "ingredients": "آرد، تخم‌مرغ، کره، خرما، گردو، دارچین",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 12,
    "name": "کیک مدوویک پرتقالی",
    "category": "cake",
    "flavor": "پرتقال و عسل",
    "weight": "یک عدد",
    "price": 52000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "عسلی"
    ],
    "img": "../assets/images/fresh-products/lotus-cheesecake.jpg",
    "gallery": [
      "../assets/images/fresh-products/lotus-cheesecake.jpg"
    ],
    "desc": "مدوویک لطیف با عسل، خامه و رایحه پرتقال.",
    "ingredients": "آرد، تخم‌مرغ، کره، عسل، خامه، پرتقال",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 13,
    "name": "کیک ترافل موز",
    "category": "cake",
    "flavor": "موز و شکلات",
    "weight": "یک عدد",
    "price": 34000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "موزی"
    ],
    "img": "../assets/images/fresh-products/layered-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/layered-cake.jpg"
    ],
    "desc": "کیک موزی با خامه و ترافل شکلاتی.",
    "ingredients": "آرد، تخم‌مرغ، خامه، شکر، موز، شکلات",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 14,
    "name": "کیک ردولوت",
    "category": "cake",
    "flavor": "ردولوت",
    "weight": "یک عدد",
    "price": 38000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "کرم‌دار"
    ],
    "img": "../assets/images/fresh-products/fruit-mousse.jpg",
    "gallery": [
      "../assets/images/fresh-products/fruit-mousse.jpg"
    ],
    "desc": "ردولوت با کرم پنیر خامه‌ای و بافت مخملی.",
    "ingredients": "آرد، تخم‌مرغ، شکر، کره، پودر کاکائو، پنیر خامه‌ای، رنگ طبیعی",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 15,
    "name": "کیک شنی",
    "category": "cake",
    "flavor": "نارگیل",
    "weight": "یک عدد",
    "price": 32000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "خانگی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "کیک شنی سبک با طعم نارگیل و بافت لطیف.",
    "ingredients": "آرد، تخم‌مرغ، شیر، کره، شکر، پودر نارگیل",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 16,
    "name": "کیک موکا",
    "category": "cake",
    "flavor": "موکا",
    "weight": "یک عدد",
    "price": 33000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "قهوه"
    ],
    "img": "../assets/images/fresh-products/mousse-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/mousse-cake.jpg"
    ],
    "desc": "کیک موکا با ترکیب قهوه و شکلات.",
    "ingredients": "آرد، تخم‌مرغ، شیر، شکر، قهوه، شکلات",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 17,
    "name": "کیک نسکافه‌ای",
    "category": "cake",
    "flavor": "نسکافه",
    "weight": "یک عدد",
    "price": 32000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "قهوه"
    ],
    "img": "../assets/images/fresh-products/layered-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/layered-cake.jpg"
    ],
    "desc": "کیک نسکافه‌ای با طعم ملایم قهوه.",
    "ingredients": "آرد، تخم‌مرغ، شیر، خامه، شکر، نسکافه",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 18,
    "name": "حلوای شیر سینی ۱ کیلویی",
    "category": "halva-tray",
    "flavor": "شیر",
    "weight": "سینی ۱ کیلویی",
    "price": 405000,
    "stock": 30,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "سینی",
      "مناسبتی"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای شیر سینی ۱ کیلویی مناسب مراسم، پذیرایی و سفارش سازمانی.",
    "ingredients": "آرد، کره، شکر، گلاب، شیر",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 19,
    "name": "حلوای پسته‌ای تاپینگ سینی ۱ کیلویی",
    "category": "halva-tray",
    "flavor": "پسته",
    "weight": "سینی ۱ کیلویی",
    "price": 585000,
    "stock": 30,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "سینی",
      "مناسبتی"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای پسته‌ای تاپینگ سینی ۱ کیلویی مناسب مراسم، پذیرایی و سفارش سازمانی.",
    "ingredients": "آرد، روغن، شکر، زعفران، پسته",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 20,
    "name": "حلوای عربی سینی ۱ کیلویی",
    "category": "halva-tray",
    "flavor": "عربی",
    "weight": "سینی ۱ کیلویی",
    "price": 385000,
    "stock": 30,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "سینی",
      "مناسبتی"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای عربی سینی ۱ کیلویی مناسب مراسم، پذیرایی و سفارش سازمانی.",
    "ingredients": "آرد، روغن، شکر، شیر خشک، هل",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 21,
    "name": "حلوای خرمایی گردویی سینی ۱ کیلویی",
    "category": "halva-tray",
    "flavor": "خرما و گردو",
    "weight": "سینی ۱ کیلویی",
    "price": 395000,
    "stock": 30,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "سینی",
      "مناسبتی"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای خرمایی گردویی سینی ۱ کیلویی مناسب مراسم، پذیرایی و سفارش سازمانی.",
    "ingredients": "آرد، کره، خرما، گردو، دارچین",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 22,
    "name": "حلوای زعفرانی نذری سینی ۱ کیلویی",
    "category": "halva-tray",
    "flavor": "زعفران",
    "weight": "سینی ۱ کیلویی",
    "price": 275000,
    "stock": 30,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "سینی",
      "مناسبتی"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای زعفرانی نذری سینی ۱ کیلویی مناسب مراسم، پذیرایی و سفارش سازمانی.",
    "ingredients": "آرد، روغن، شکر، گلاب، زعفران",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 23,
    "name": "حلوای سه آرد سینی ۱ کیلویی",
    "category": "halva-tray",
    "flavor": "سه آرد",
    "weight": "سینی ۱ کیلویی",
    "price": 335000,
    "stock": 30,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "سینی",
      "مناسبتی"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای سه آرد سینی ۱ کیلویی مناسب مراسم، پذیرایی و سفارش سازمانی.",
    "ingredients": "آرد سفید، آرد برنج، آرد نخودچی، روغن، شکر، شربت",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 24,
    "name": "حلوای هویج سینی ۱ کیلویی",
    "category": "halva-tray",
    "flavor": "هویج",
    "weight": "سینی ۱ کیلویی",
    "price": 275000,
    "stock": 30,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "سینی",
      "مناسبتی"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای هویج سینی ۱ کیلویی مناسب مراسم، پذیرایی و سفارش سازمانی.",
    "ingredients": "آرد، روغن، شکر، گلاب، هویج",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 25,
    "name": "حلوای زنجبیلی سینی ۱ کیلویی",
    "category": "halva-tray",
    "flavor": "زنجبیل",
    "weight": "سینی ۱ کیلویی",
    "price": 275000,
    "stock": 30,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "سینی",
      "مناسبتی"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای زنجبیلی سینی ۱ کیلویی مناسب مراسم، پذیرایی و سفارش سازمانی.",
    "ingredients": "آرد، روغن، شکر، هل، زنجبیل",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 26,
    "name": "حلوای شیر تک‌نفره",
    "category": "halva-single",
    "flavor": "شیر",
    "weight": "تک‌نفره",
    "price": 16000,
    "stock": 120,
    "minOrder": 12,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک‌نفره"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای شیر تک‌نفره مناسب باکس پذیرایی و سفارش مناسبتی.",
    "ingredients": "آرد، کره، شکر، گلاب، شیر",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 27,
    "name": "حلوای پسته‌ای تاپینگ تک‌نفره",
    "category": "halva-single",
    "flavor": "پسته",
    "weight": "تک‌نفره",
    "price": 18000,
    "stock": 120,
    "minOrder": 12,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک‌نفره"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای پسته‌ای تاپینگ تک‌نفره مناسب باکس پذیرایی و سفارش مناسبتی.",
    "ingredients": "آرد، روغن، شکر، زعفران، پسته",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 28,
    "name": "حلوای خرمایی گردویی تک‌نفره",
    "category": "halva-single",
    "flavor": "خرما و گردو",
    "weight": "تک‌نفره",
    "price": 15000,
    "stock": 120,
    "minOrder": 12,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک‌نفره"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای خرمایی گردویی تک‌نفره مناسب باکس پذیرایی و سفارش مناسبتی.",
    "ingredients": "آرد، کره، خرما، گردو، دارچین",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 29,
    "name": "حلوای کنجدی تک‌نفره",
    "category": "halva-single",
    "flavor": "کنجد",
    "weight": "تک‌نفره",
    "price": 16000,
    "stock": 120,
    "minOrder": 12,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک‌نفره"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای کنجدی تک‌نفره مناسب باکس پذیرایی و سفارش مناسبتی.",
    "ingredients": "آرد، روغن، شکر، ارده، کنجد",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 30,
    "name": "حلوای زعفرانی تک‌نفره",
    "category": "halva-single",
    "flavor": "زعفران",
    "weight": "تک‌نفره",
    "price": 14000,
    "stock": 120,
    "minOrder": 12,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک‌نفره"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای زعفرانی تک‌نفره مناسب باکس پذیرایی و سفارش مناسبتی.",
    "ingredients": "آرد، روغن، شکر، گلاب، زعفران",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 31,
    "name": "حلوای عربی تک‌نفره",
    "category": "halva-single",
    "flavor": "عربی",
    "weight": "تک‌نفره",
    "price": 15000,
    "stock": 120,
    "minOrder": 12,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک‌نفره"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای عربی تک‌نفره مناسب باکس پذیرایی و سفارش مناسبتی.",
    "ingredients": "آرد، روغن، شکر، شیر خشک، هل",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 32,
    "name": "حلوای سه آرد تک‌نفره",
    "category": "halva-single",
    "flavor": "سه آرد",
    "weight": "تک‌نفره",
    "price": 14000,
    "stock": 120,
    "minOrder": 12,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک‌نفره"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای سه آرد تک‌نفره مناسب باکس پذیرایی و سفارش مناسبتی.",
    "ingredients": "آرد سفید، آرد برنج، آرد نخودچی، روغن، شکر، شربت",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 33,
    "name": "حلوای زنجبیلی تک‌نفره",
    "category": "halva-single",
    "flavor": "زنجبیل",
    "weight": "تک‌نفره",
    "price": 14000,
    "stock": 120,
    "minOrder": 12,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک‌نفره"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای زنجبیلی تک‌نفره مناسب باکس پذیرایی و سفارش مناسبتی.",
    "ingredients": "آرد، روغن، شکر، هل، زنجبیل",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 34,
    "name": "حلوای هویج تک‌نفره",
    "category": "halva-single",
    "flavor": "هویج",
    "weight": "تک‌نفره",
    "price": 14000,
    "stock": 120,
    "minOrder": 12,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک‌نفره"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "حلوای هویج تک‌نفره مناسب باکس پذیرایی و سفارش مناسبتی.",
    "ingredients": "آرد، روغن، شکر، گلاب، هویج",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 35,
    "name": "کروسان",
    "category": "classic",
    "flavor": "کره‌ای",
    "weight": "یک عدد",
    "price": 90000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "کلاسیک"
    ],
    "img": "../assets/images/fresh-products/croissant.jpg",
    "gallery": [
      "../assets/images/fresh-products/croissant.jpg"
    ],
    "desc": "کروسان فرانسوی لایه‌ای، تازه و خوش‌عطر.",
    "ingredients": "آرد، کره، شیر، تخم‌مرغ، خمیرمایه",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 36,
    "name": "کیک تولد",
    "category": "classic",
    "flavor": "سفارشی",
    "weight": "هر کیلوگرم",
    "price": 780000,
    "stock": 10,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سفارشی",
      "تولد"
    ],
    "img": "../assets/images/fresh-products/mousse-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/mousse-cake.jpg"
    ],
    "desc": "کیک تولد سفارشی با فیلینگ و دکور دلخواه.",
    "ingredients": "کیک اسفنجی، خامه، فیلینگ، میوه یا شکلات",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 37,
    "name": "دونات بایت",
    "category": "classic",
    "flavor": "متنوع",
    "weight": "تک عدد",
    "price": 4000,
    "stock": 400,
    "minOrder": 20,
    "status": "active",
    "type": "B2B",
    "tags": [
      "مینی",
      "پذیرایی"
    ],
    "img": "../assets/images/fresh-products/donut.jpg",
    "gallery": [
      "../assets/images/fresh-products/donut.jpg"
    ],
    "desc": "لقمه‌های دوناتی کوچک برای پذیرایی و کنار قهوه.",
    "ingredients": "آرد، شیر، تخم‌مرغ، شکر، خمیرمایه",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 38,
    "name": "دونات",
    "category": "classic",
    "flavor": "متنوع",
    "weight": "یک عدد",
    "price": 80000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "پرفروش"
    ],
    "img": "../assets/images/fresh-products/donut.jpg",
    "gallery": [
      "../assets/images/fresh-products/donut.jpg"
    ],
    "desc": "دونات نرم و پفکی با روکش‌های متنوع.",
    "ingredients": "آرد، شیر، تخم‌مرغ، شکر، خمیرمایه",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 39,
    "name": "شیرینی نخودچی",
    "category": "sweets",
    "flavor": "نخودچی",
    "weight": "هر کیلوگرم",
    "price": 420000,
    "stock": 50,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "کیلویی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "شیرینی نخودچی به‌ازای هر کیلوگرم؛ وزن نهایی هنگام ثبت سفارش هماهنگ می‌شود.",
    "ingredients": "آرد نخودچی، روغن، پودر قند، هل",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 40,
    "name": "شیرینی بوشتوک",
    "category": "sweets",
    "flavor": "بوشتوک",
    "weight": "هر کیلوگرم",
    "price": 450000,
    "stock": 50,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "کیلویی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "شیرینی بوشتوک به‌ازای هر کیلوگرم؛ وزن نهایی هنگام ثبت سفارش هماهنگ می‌شود.",
    "ingredients": "آرد نخودچی، کره، پودر قند، هل",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 41,
    "name": "شیرینی برنجی",
    "category": "sweets",
    "flavor": "برنجی",
    "weight": "هر کیلوگرم",
    "price": 350000,
    "stock": 50,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "کیلویی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "شیرینی برنجی به‌ازای هر کیلوگرم؛ وزن نهایی هنگام ثبت سفارش هماهنگ می‌شود.",
    "ingredients": "آرد برنج، روغن، پودر قند، هل، گلاب",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 42,
    "name": "شیرینی پفکی زرده‌ای",
    "category": "sweets",
    "flavor": "پفکی",
    "weight": "هر کیلوگرم",
    "price": 390000,
    "stock": 50,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "کیلویی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "شیرینی پفکی زرده‌ای به‌ازای هر کیلوگرم؛ وزن نهایی هنگام ثبت سفارش هماهنگ می‌شود.",
    "ingredients": "زرده تخم‌مرغ، پودر قند، وانیل",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 43,
    "name": "کوکی آمریکایی",
    "category": "sweets",
    "flavor": "شکلات چیپسی",
    "weight": "هر کیلوگرم",
    "price": 320000,
    "stock": 50,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "کیلویی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "کوکی آمریکایی به‌ازای هر کیلوگرم؛ وزن نهایی هنگام ثبت سفارش هماهنگ می‌شود.",
    "ingredients": "آرد، تخم‌مرغ، کره، شکر قهوه‌ای، شکلات",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 44,
    "name": "تسمه‌ای نارگیلی",
    "category": "sweets",
    "flavor": "نارگیل",
    "weight": "هر کیلوگرم",
    "price": 320000,
    "stock": 50,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "کیلویی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "تسمه‌ای نارگیلی به‌ازای هر کیلوگرم؛ وزن نهایی هنگام ثبت سفارش هماهنگ می‌شود.",
    "ingredients": "آرد، سفیده تخم‌مرغ، شکر، نارگیل",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 45,
    "name": "گرانول",
    "category": "sweets",
    "flavor": "گرانولا",
    "weight": "هر کیلوگرم",
    "price": 250000,
    "stock": 50,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "کیلویی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "گرانول به‌ازای هر کیلوگرم؛ وزن نهایی هنگام ثبت سفارش هماهنگ می‌شود.",
    "ingredients": "جو دوسر، عسل، مغزها، میوه خشک",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 46,
    "name": "سیگارت چیسی",
    "category": "sweets",
    "flavor": "پنیری",
    "weight": "هر کیلوگرم",
    "price": 310000,
    "stock": 50,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "کیلویی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "سیگارت چیسی به‌ازای هر کیلوگرم؛ وزن نهایی هنگام ثبت سفارش هماهنگ می‌شود.",
    "ingredients": "خمیر، کره، پنیر، ادویه",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 47,
    "name": "شیرینی خونگی",
    "category": "sweets",
    "flavor": "خانگی",
    "weight": "هر کیلوگرم",
    "price": 180000,
    "stock": 50,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "کیلویی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "شیرینی خونگی به‌ازای هر کیلوگرم؛ وزن نهایی هنگام ثبت سفارش هماهنگ می‌شود.",
    "ingredients": "آرد، تخم‌مرغ، کره، شکر، وانیل",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 48,
    "name": "بیسکو کالیکا",
    "category": "sweets",
    "flavor": "کاکائویی",
    "weight": "هر کیلوگرم",
    "price": 180000,
    "stock": 50,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "کیلویی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "بیسکو کالیکا به‌ازای هر کیلوگرم؛ وزن نهایی هنگام ثبت سفارش هماهنگ می‌شود.",
    "ingredients": "بیسکویت، کره، پودر کاکائو، مغز",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 49,
    "name": "شیرینی پفکی سفیده‌ای",
    "category": "sweets",
    "flavor": "پفکی",
    "weight": "هر کیلوگرم",
    "price": 175000,
    "stock": 50,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "کیلویی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "شیرینی پفکی سفیده‌ای به‌ازای هر کیلوگرم؛ وزن نهایی هنگام ثبت سفارش هماهنگ می‌شود.",
    "ingredients": "سفیده تخم‌مرغ، پودر قند، وانیل",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 50,
    "name": "شیرینی قیطونی",
    "category": "sweets",
    "flavor": "قیطونی",
    "weight": "هر کیلوگرم",
    "price": 180000,
    "stock": 50,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "کیلویی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "شیرینی قیطونی به‌ازای هر کیلوگرم؛ وزن نهایی هنگام ثبت سفارش هماهنگ می‌شود.",
    "ingredients": "آرد، کره، پودر قند، وانیل، مغز",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 51,
    "name": "عسلی بادامی",
    "category": "sweets",
    "flavor": "عسل و بادام",
    "weight": "هر کیلوگرم",
    "price": 150000,
    "stock": 50,
    "minOrder": 1,
    "status": "active",
    "type": "B2B",
    "tags": [
      "کیلویی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "عسلی بادامی به‌ازای هر کیلوگرم؛ وزن نهایی هنگام ثبت سفارش هماهنگ می‌شود.",
    "ingredients": "کره، شکر، عسل، بادام",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 52,
    "name": "موچی با فیلینگ اسنیکرز کارامل",
    "category": "dessert",
    "flavor": "اسنیکرز کارامل",
    "weight": "یک عدد",
    "price": 25000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "دسر"
    ],
    "img": "../assets/images/fresh-products/mochi.jpg",
    "gallery": [
      "../assets/images/fresh-products/mochi.jpg"
    ],
    "desc": "موچی نرم با فیلینگ اسنیکرز کارامل.",
    "ingredients": "آرد برنج، نشاسته، شکر، کارامل، شکلات، بادام‌زمینی",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 53,
    "name": "موس میوه",
    "category": "dessert",
    "flavor": "میوه‌ای",
    "weight": "یک عدد",
    "price": 25000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "دسر",
      "خنک"
    ],
    "img": "../assets/images/fresh-products/fruit-mousse.jpg",
    "gallery": [
      "../assets/images/fresh-products/fruit-mousse.jpg"
    ],
    "desc": "موس لطیف با طعم میوه‌های تازه.",
    "ingredients": "خامه، شکر، ژلاتین، پوره میوه",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 54,
    "name": "موچی ساده",
    "category": "dessert",
    "flavor": "خامه‌ای",
    "weight": "یک عدد",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "دسر"
    ],
    "img": "../assets/images/fresh-products/mochi.jpg",
    "gallery": [
      "../assets/images/fresh-products/mochi.jpg"
    ],
    "desc": "موچی ساده با بافت لطیف و مغزی کرمی.",
    "ingredients": "آرد برنج، نشاسته، شکر، کرم",
    "visible": {
      "ingredients": true,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  }
];
const DEFAULT_STAFF=[
  {
    "id": "staff-01",
    "name": "کارشناس فروش",
    "username": "staff123",
    "password": "staff123",
    "active": true
  },
  {
    "id": "staff-02",
    "name": "فروش عمده",
    "username": "staff02",
    "password": "deliza02",
    "active": true
  }
];
const DEFAULT_SETTINGS={
  "brand": "دلیزا",
  "subtitle": "کیک، شیرینی و دسرهای دست‌ساز",
  "phone": "۰۹۰۲۲۱۲۲۲۸۶",
  "address": "تهران، ایران",
  "instagram": "@Delliza.bakery"
};
