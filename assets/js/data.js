const DATA_VERSION='delliza_final_merged_clean_2026_07_15_01';
const DEFAULT_IMG='../assets/images/product-default.svg';
const DEFAULT_CATEGORIES=[
  {
    "id": "cake",
    "title": "کیک و چیزکیک",
    "active": true
  },
  {
    "id": "halva-tray",
    "title": "حلوا سینی / یک کیلویی",
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
    "name": "کیک براونی",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 1700000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-01.jpg",
    "gallery": [
      "../assets/images/products/product-01.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    },
    "priceLabel": "1٬700٬000 تومان"
  },
  {
    "id": 2,
    "name": "کیک هویج و گردو",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 1038000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-02.jpg",
    "gallery": [
      "../assets/images/products/product-02.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    },
    "priceLabel": "1٬038٬000 تومان"
  },
  {
    "id": 3,
    "name": "کیک خیس شکلاتی",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 800000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-03.jpg",
    "gallery": [
      "../assets/images/products/product-03.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 4,
    "name": "استرول کیک سیب و دارچین",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 890000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-04.jpg",
    "gallery": [
      "../assets/images/products/product-04.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    },
    "priceLabel": "890٬000 تومان"
  },
  {
    "id": 5,
    "name": "کیک موس شکلاتی",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 1380000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-05.jpg",
    "gallery": [
      "../assets/images/products/product-05.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 6,
    "name": "کیک ترافل موز",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 430000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-06.jpg",
    "gallery": [
      "../assets/images/products/product-06.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 7,
    "name": "کیک ردولوت",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 470000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-07.jpg",
    "gallery": [
      "../assets/images/products/product-07.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 8,
    "name": "کیک مدوویک پرتقالی",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 610000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-08.jpg",
    "gallery": [
      "../assets/images/products/product-08.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
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
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 1120000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-09.jpg",
    "gallery": [
      "../assets/images/products/product-09.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 10,
    "name": "کیک دیت خرمایی",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 560000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-10.jpg",
    "gallery": [
      "../assets/images/products/product-10.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 11,
    "name": "چیزکیک لوتوس",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 1120000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-11.jpg",
    "gallery": [
      "../assets/images/products/product-11.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 12,
    "name": "کیک شنی",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 610000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-12.jpg",
    "gallery": [
      "../assets/images/products/product-12.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 13,
    "name": "کیک اوچکاتمان",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 1440000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-13.jpg",
    "gallery": [
      "../assets/images/products/product-13.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    },
    "priceLabel": "1٬440٬000 تومان"
  },
  {
    "id": 14,
    "name": "کیک زعفرانی",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 1030000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی",
      "زعفرانی"
    ],
    "img": "../assets/images/products/product-14.jpg",
    "gallery": [
      "../assets/images/products/product-14.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 15,
    "name": "کیک گلابی",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 770000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-15.jpg",
    "gallery": [
      "../assets/images/products/product-15.jpg"
    ],
    "desc": "قیمت برای سفارش سینی",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 16,
    "name": "کیک نسکافه‌ای",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 410000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-16.jpg",
    "gallery": [
      "../assets/images/products/product-16.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 17,
    "name": "کیک موکا",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 1000000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-17.jpg",
    "gallery": [
      "../assets/images/products/product-17.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    },
    "priceLabel": "1٬000٬000 تومان"
  },
  {
    "id": 18,
    "name": "زعفرانی",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "تک نفره",
      "زعفرانی"
    ],
    "img": "../assets/images/products/product-18.jpg",
    "gallery": [
      "../assets/images/products/product-18.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 19,
    "name": "سه آرد",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "تک نفره"
    ],
    "img": "../assets/images/products/product-19.jpg",
    "gallery": [
      "../assets/images/products/product-19.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 20,
    "name": "خرمایی گردویی",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "تک نفره"
    ],
    "img": "../assets/images/products/product-20.jpg",
    "gallery": [
      "../assets/images/products/product-20.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 21,
    "name": "پسته‌ای (تاپینگ)",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "تک نفره",
      "پسته‌ای"
    ],
    "img": "../assets/images/products/product-21.jpg",
    "gallery": [
      "../assets/images/products/product-21.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 22,
    "name": "هویج",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "تک نفره"
    ],
    "img": "../assets/images/products/product-22.jpg",
    "gallery": [
      "../assets/images/products/product-22.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 23,
    "name": "عربی",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "تک نفره"
    ],
    "img": "../assets/images/products/product-23.jpg",
    "gallery": [
      "../assets/images/products/product-23.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 24,
    "name": "زنجبیلی",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "تک نفره"
    ],
    "img": "../assets/images/products/product-24.jpg",
    "gallery": [
      "../assets/images/products/product-24.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 25,
    "name": "کنجدی",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "تک نفره"
    ],
    "img": "../assets/images/products/product-25.jpg",
    "gallery": [
      "../assets/images/products/product-25.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 26,
    "name": "شیر",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "تک نفره"
    ],
    "img": "../assets/images/products/product-26.jpg",
    "gallery": [
      "../assets/images/products/product-26.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 27,
    "name": "حلوای زعفرانی نذری",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 370000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی / ۱ کیلویی",
      "زعفرانی"
    ],
    "img": "../assets/images/products/product-27.jpg",
    "gallery": [
      "../assets/images/products/product-27.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 28,
    "name": "حلوای سه آرد",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 430000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی / ۱ کیلویی"
    ],
    "img": "../assets/images/products/product-28.jpg",
    "gallery": [
      "../assets/images/products/product-28.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 29,
    "name": "حلوای هویج",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 370000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی / ۱ کیلویی"
    ],
    "img": "../assets/images/products/product-29.jpg",
    "gallery": [
      "../assets/images/products/product-29.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 30,
    "name": "حلوای عربی",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 480000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی / ۱ کیلویی"
    ],
    "img": "../assets/images/products/product-30.jpg",
    "gallery": [
      "../assets/images/products/product-30.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 31,
    "name": "حلوای زنجبیلی",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 370000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی / ۱ کیلویی"
    ],
    "img": "../assets/images/products/product-31.jpg",
    "gallery": [
      "../assets/images/products/product-31.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 32,
    "name": "حلوای پسته‌ای (تاپینگ)",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 680000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی / ۱ کیلویی",
      "پسته‌ای"
    ],
    "img": "../assets/images/products/product-32.jpg",
    "gallery": [
      "../assets/images/products/product-32.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 33,
    "name": "حلوای خرمایی گردویی",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 490000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی / ۱ کیلویی"
    ],
    "img": "../assets/images/products/product-33.jpg",
    "gallery": [
      "../assets/images/products/product-33.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 34,
    "name": "حلوای شیر",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 500000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی / ۱ کیلویی"
    ],
    "img": "../assets/images/products/product-34.jpg",
    "gallery": [
      "../assets/images/products/product-34.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 35,
    "name": "دونات",
    "category": "classic",
    "flavor": "حداقل سفارش ۱۰ عدد",
    "weight": "بسته ۱۰ عددی",
    "price": 890000,
    "stock": 80,
    "minOrder": 10,
    "status": "active",
    "type": "retail",
    "tags": [
      "حداقل سفارش ۱۰ عدد",
      "بسته ۱۰ عددی"
    ],
    "img": "../assets/images/products/product-35.jpg",
    "gallery": [
      "../assets/images/products/product-35.jpg"
    ],
    "desc": "قیمت بسته ۱۰ عددی و حداقل سفارش ۱۰ عدد",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    },
    "priceLabel": "۸۹۰٬۰۰۰ تومان / بسته ۱۰ عددی",
    "priceMode": "package",
    "packageQty": 10
  },
  {
    "id": 36,
    "name": "کروسان",
    "category": "classic",
    "flavor": "حداقل سفارش ۱۰ عدد",
    "weight": "بسته ۱۰ عددی",
    "price": 990000,
    "stock": 80,
    "minOrder": 10,
    "status": "active",
    "type": "retail",
    "tags": [
      "حداقل سفارش ۱۰ عدد",
      "بسته ۱۰ عددی"
    ],
    "img": "../assets/images/products/product-36.jpg",
    "gallery": [
      "../assets/images/products/product-36.jpg"
    ],
    "desc": "قیمت بسته ۱۰ عددی و حداقل سفارش ۱۰ عدد",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    },
    "priceLabel": "۹۹۰٬۰۰۰ تومان / بسته ۱۰ عددی",
    "priceMode": "package",
    "packageQty": 10
  },
  {
    "id": 37,
    "name": "دونات بایت",
    "category": "classic",
    "flavor": "کیلویی",
    "weight": "کیلویی",
    "price": 0,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "کیلویی",
      "بیس سفارش"
    ],
    "img": "../assets/images/products/product-37.jpg",
    "gallery": [
      "../assets/images/products/product-37.jpg"
    ],
    "desc": "قیمت بر اساس وزن نهایی محاسبه می‌شود",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    },
    "priceLabel": "قیمت کیلویی / بر اساس وزن نهایی"
  },
  {
    "id": 38,
    "name": "کیک تولد",
    "category": "classic",
    "flavor": "کلاسیک",
    "weight": "یک عدد",
    "price": 870000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [],
    "img": "../assets/images/products/product-38.jpg",
    "gallery": [
      "../assets/images/products/product-38.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    },
    "priceLabel": "۸۷۰٬۰۰۰ تومان / کیلو"
  },
  {
    "id": 39,
    "name": "شیرینی برنجی",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 700000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-39.jpg",
    "gallery": [
      "../assets/images/products/product-39.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 40,
    "name": "شیرینی نخودچی",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 1140000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-40.jpg",
    "gallery": [
      "../assets/images/products/product-40.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 41,
    "name": "شیرینی خونگی",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 480000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-41.jpg",
    "gallery": [
      "../assets/images/products/product-41.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 42,
    "name": "شیرینی قیطونی",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 440000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-42.jpg",
    "gallery": [
      "../assets/images/products/product-42.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 43,
    "name": "تسمه‌ای نارگیلی",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 420000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-43.jpg",
    "gallery": [
      "../assets/images/products/product-43.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 44,
    "name": "شیرینی بوشتوک",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 800000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-44.jpg",
    "gallery": [
      "../assets/images/products/product-44.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 45,
    "name": "عسلی بادامی",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 340000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-45.jpg",
    "gallery": [
      "../assets/images/products/product-45.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 46,
    "name": "گرانول",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 800000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-46.jpg",
    "gallery": [
      "../assets/images/products/product-46.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 47,
    "name": "کوکی آمریکایی",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 740000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-47.jpg",
    "gallery": [
      "../assets/images/products/product-47.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 48,
    "name": "سیگارت چیسی",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 560000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-48.jpg",
    "gallery": [
      "../assets/images/products/product-48.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 49,
    "name": "بیسکو کالیکا",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 480000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-49.jpg",
    "gallery": [
      "../assets/images/products/product-49.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 50,
    "name": "شیرینی پفکی (زرده‌ای)",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 890000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-50.jpg",
    "gallery": [
      "../assets/images/products/product-50.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 51,
    "name": "شیرینی پفکی (سفیده‌ای)",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 450000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-51.jpg",
    "gallery": [
      "../assets/images/products/product-51.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 52,
    "name": "موچی ساده",
    "category": "dessert",
    "flavor": "بیس سفارش ۱۰ عدد",
    "weight": "بسته ۱۰ عدد",
    "price": 430000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "بیس سفارش ۱۰ عدد",
      "بسته ۱۰ عدد"
    ],
    "img": "../assets/images/products/product-52.jpg",
    "gallery": [
      "../assets/images/products/product-52.jpg"
    ],
    "desc": "قیمت بسته ۱۰ عددی",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 53,
    "name": "موچی با فیلینگ اسنیکرز کارامل",
    "category": "dessert",
    "flavor": "بیس سفارش ۱۰ عدد",
    "weight": "بسته ۱۰ عدد",
    "price": 440000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "بیس سفارش ۱۰ عدد",
      "بسته ۱۰ عدد"
    ],
    "img": "../assets/images/products/product-53.jpg",
    "gallery": [
      "../assets/images/products/product-53.jpg"
    ],
    "desc": "قیمت بسته ۱۰ عددی",
    "ingredients": "",
    "visible": {
      "ingredients": false,
      "gallery": true,
      "stock": true,
      "minOrder": true,
      "weight": true
    }
  },
  {
    "id": 54,
    "name": "موس میوه",
    "category": "dessert",
    "flavor": "دسر",
    "weight": "سینی",
    "price": 260000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/products/product-54.jpg",
    "gallery": [
      "../assets/images/products/product-54.jpg"
    ],
    "desc": "",
    "ingredients": "",
    "visible": {
      "ingredients": false,
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
    "name": "کارشناس فروش دوم",
    "username": "staff02",
    "password": "deliza02",
    "active": true
  }
];
const DEFAULT_SETTINGS={
  "brand": "دلیزا",
  "subtitle": "منوی کامل کیک، شیرینی، حلوا، کلاسیک و دسر",
  "phone": "۰۹۰۲۲۱۲۲۲۸۶",
  "address": "تهران، ایران",
  "instagram": "@delliza.bakery",
  "instagramUrl": "https://ig.me/m/delliza.bakery",
  "menuVersion": "delliza_final_merged_clean_2026_07_15_01"
};
