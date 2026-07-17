const DATA_VERSION='delliza_ingredients_cleaned_2026_07_14_01';
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
    "price": 1880000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی",
      "شکلاتی"
    ],
    "img": "../assets/images/products/product-01.jpg",
    "gallery": [
      "../assets/images/products/product-01.jpg"
    ],
    "desc": "",
    "ingredients": "",
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
    "name": "کیک هویج و گردو",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 650000,
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
    "desc": "روغن، هویج، گردو، دارچین",
    "ingredients": "روغن، هویج، گردو، دارچین",
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
      "سینی",
      "شکلاتی"
    ],
    "img": "../assets/images/products/product-03.jpg",
    "gallery": [
      "../assets/images/products/product-03.jpg"
    ],
    "desc": "شیر",
    "ingredients": "شیر",
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
    "desc": "سیب، دارچین",
    "ingredients": "سیب، دارچین",
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
      "سینی",
      "شکلاتی"
    ],
    "img": "../assets/images/products/product-05.jpg",
    "gallery": [
      "../assets/images/products/product-05.jpg"
    ],
    "desc": "خامه، ژلاتین",
    "ingredients": "خامه، ژلاتین",
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
    "desc": "خامه، موز",
    "ingredients": "خامه، موز",
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
    "desc": "پنیر خامه‌ای، رنگ طبیعی",
    "ingredients": "پنیر خامه‌ای، رنگ طبیعی",
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
    "desc": "عسل، خامه، پرتقال",
    "ingredients": "عسل، خامه، پرتقال",
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
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 1120000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی",
      "شکلاتی"
    ],
    "img": "../assets/images/products/product-09.jpg",
    "gallery": [
      "../assets/images/products/product-09.jpg"
    ],
    "desc": "کارامل، بادام‌زمینی",
    "ingredients": "کارامل، بادام‌زمینی",
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
    "desc": "خرما، گردو، دارچین",
    "ingredients": "خرما، گردو، دارچین",
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
    "desc": "بیسکویت، پنیر خامه‌ای، خامه، لوتوس",
    "ingredients": "بیسکویت، پنیر خامه‌ای، خامه، لوتوس",
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
    "desc": "شیر، پودر نارگیل",
    "ingredients": "شیر، پودر نارگیل",
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
    "name": "کیک اوچکلمان",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 1240000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "retail",
    "tags": [
      "سینی",
      "شکلاتی"
    ],
    "img": "../assets/images/products/product-13.jpg",
    "gallery": [
      "../assets/images/products/product-13.jpg"
    ],
    "desc": "خامه، کرم میانی",
    "ingredients": "خامه، کرم میانی",
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
    "desc": "شیر، زعفران",
    "ingredients": "شیر، زعفران",
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
    "desc": "گلابی، دارچین — قیمت برای سفارش سینی",
    "ingredients": "گلابی، دارچین",
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
    "desc": "شیر، خامه، نسکافه",
    "ingredients": "شیر، خامه، نسکافه",
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
    "name": "کیک موکا",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 420000,
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
    "desc": "شیر، قهوه",
    "ingredients": "شیر، قهوه",
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
    "desc": "روغن، گلاب، زعفران",
    "ingredients": "روغن، گلاب، زعفران",
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
    "desc": "روغن، شربت",
    "ingredients": "روغن، شربت",
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
    "desc": "خرما، گردو، دارچین",
    "ingredients": "خرما، گردو، دارچین",
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
    "desc": "روغن، زعفران، پسته",
    "ingredients": "روغن، زعفران، پسته",
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
    "desc": "روغن، گلاب، هویج",
    "ingredients": "روغن، گلاب، هویج",
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
    "desc": "روغن، شیر خشک، هل",
    "ingredients": "روغن، شیر خشک، هل",
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
    "desc": "روغن، هل، زنجبیل",
    "ingredients": "روغن، هل، زنجبیل",
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
    "desc": "روغن، ارده، کنجد",
    "ingredients": "روغن، ارده، کنجد",
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
    "desc": "گلاب، شیر",
    "ingredients": "گلاب، شیر",
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
    "desc": "روغن، گلاب، زعفران",
    "ingredients": "روغن، گلاب، زعفران",
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
    "desc": "روغن، شربت",
    "ingredients": "روغن، شربت",
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
    "desc": "روغن، گلاب، هویج",
    "ingredients": "روغن، گلاب، هویج",
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
    "desc": "روغن، شیر خشک، هل",
    "ingredients": "روغن، شیر خشک، هل",
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
    "desc": "روغن، هل، زنجبیل",
    "ingredients": "روغن، هل، زنجبیل",
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
    "desc": "روغن، زعفران، پسته",
    "ingredients": "روغن، زعفران، پسته",
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
    "desc": "خرما، گردو، دارچین",
    "ingredients": "خرما، گردو، دارچین",
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
    "desc": "گلاب، شیر",
    "ingredients": "گلاب، شیر",
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
    "desc": "شیر، خمیرمایه — قیمت بسته ۱۰ عددی و حداقل سفارش ۱۰ عدد",
    "ingredients": "شیر، خمیرمایه",
    "visible": {
      "ingredients": true,
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
    "desc": "شیر، خمیرمایه — قیمت بسته ۱۰ عددی و حداقل سفارش ۱۰ عدد",
    "ingredients": "شیر، خمیرمایه",
    "visible": {
      "ingredients": true,
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
    "desc": "شیر، خمیرمایه — قیمت بر اساس وزن نهایی محاسبه می‌شود",
    "ingredients": "شیر، خمیرمایه",
    "visible": {
      "ingredients": true,
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
    "desc": "کیک اسفنجی، خامه، فیلینگ",
    "ingredients": "کیک اسفنجی، خامه، فیلینگ",
    "visible": {
      "ingredients": true,
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
    "desc": "روغن، پودر قند، هل، گلاب",
    "ingredients": "روغن، پودر قند، هل، گلاب",
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
    "desc": "روغن، پودر قند، هل",
    "ingredients": "روغن، پودر قند، هل",
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
    "desc": "وانیل",
    "ingredients": "وانیل",
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
    "desc": "پودر قند، وانیل، مغز",
    "ingredients": "پودر قند، وانیل، مغز",
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
    "desc": "نارگیل",
    "ingredients": "نارگیل",
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
    "desc": "پودر قند، هل",
    "ingredients": "پودر قند، هل",
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
    "desc": "عسل، بادام",
    "ingredients": "عسل، بادام",
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
    "desc": "جو دوسر، عسل، مغزها، میوه خشک",
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
      "ingredients": true,
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
    "desc": "خمیر، پنیر، ادویه",
    "ingredients": "خمیر، پنیر، ادویه",
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
    "desc": "بیسکویت، مغز",
    "ingredients": "بیسکویت، مغز",
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
    "desc": "پودر قند، وانیل",
    "ingredients": "پودر قند، وانیل",
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
    "desc": "پودر قند، وانیل",
    "ingredients": "پودر قند، وانیل",
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
    "desc": "نشاسته، کرم — قیمت بسته ۱۰ عددی",
    "ingredients": "نشاسته، کرم",
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
    "desc": "نشاسته، کارامل، بادام‌زمینی — قیمت بسته ۱۰ عددی",
    "ingredients": "نشاسته، کارامل، بادام‌زمینی",
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
    "desc": "خامه، ژلاتین، پوره میوه",
    "ingredients": "خامه، ژلاتین، پوره میوه",
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
  "menuVersion": "delliza_images_b2b_removed_prices_2026_07_12_03"
};