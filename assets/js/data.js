const DATA_VERSION='delliza_menu_uploaded_index_12_2026_02';
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
    "type": "B2C",
    "tags": [
      "سینی",
      "شکلاتی"
    ],
    "img": "../assets/images/fresh-products/layered-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/layered-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، کره، شکر، شکلات، پودر کاکائو",
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
    "id": 2,
    "name": "کیک هویج و گردو",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 650000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، شکر، روغن، هویج، گردو، دارچین",
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
    "id": 3,
    "name": "کیک خیس شکلاتی",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 800000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی",
      "شکلاتی"
    ],
    "img": "../assets/images/fresh-products/layered-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/layered-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، شیر، شکر، شکلات، پودر کاکائو",
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
    "id": 4,
    "name": "استرول کیک سیب و دارچین",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 890000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، کره، شکر، سیب، دارچین",
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
    "id": 5,
    "name": "کیک موس شکلاتی",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 1380000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی",
      "شکلاتی"
    ],
    "img": "../assets/images/fresh-products/layered-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/layered-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، خامه، شکلات، پودر کاکائو، ژلاتین",
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
    "id": 6,
    "name": "کیک ترافل موز",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 430000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، خامه، شکر، موز، شکلات",
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
    "id": 7,
    "name": "کیک ردولوت",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 470000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، شکر، کره، پودر کاکائو، پنیر خامه‌ای، رنگ طبیعی",
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
    "id": 8,
    "name": "کیک مدوویک پرتقالی",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 610000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، کره، عسل، خامه، پرتقال",
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
    "id": 9,
    "name": "پایه کیک شکلاتی اسنیکرز",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 1120000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی",
      "شکلاتی"
    ],
    "img": "../assets/images/fresh-products/layered-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/layered-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، کره، شکلات، کارامل، بادام‌زمینی",
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
    "name": "کیک دیت خرمایی",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 560000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، کره، خرما، گردو، دارچین",
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
    "id": 11,
    "name": "چیزکیک لوتوس",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 1120000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/lotus-cheesecake.jpg",
    "gallery": [
      "../assets/images/fresh-products/lotus-cheesecake.jpg"
    ],
    "desc": "بیسکویت، کره، پنیر خامه‌ای، خامه، لوتوس",
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
    "id": 12,
    "name": "کیک شنی",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 610000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، شیر، کره، شکر، پودر نارگیل",
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
    "id": 13,
    "name": "کیک اوچکلمان",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 1240000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی",
      "شکلاتی"
    ],
    "img": "../assets/images/fresh-products/layered-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/layered-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، خامه، شکر، شکلات، کرم میانی",
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
    "id": 14,
    "name": "کیک زعفرانی",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 1030000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی",
      "زعفرانی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، شیر، کره، شکر، زعفران",
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
    "id": 15,
    "name": "کیک گلابی",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 770000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، کره، شکر، گلابی، دارچین — قیمت برای سفارش سینی",
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
    "id": 16,
    "name": "کیک نسکافه‌ای",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 410000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، شیر، خامه، شکر، نسکافه",
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
    "id": 17,
    "name": "کیک موکا",
    "category": "cake",
    "flavor": "کیک و شیرینی",
    "weight": "سینی",
    "price": 420000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، شیر، شکر، قهوه، شکلات",
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
    "id": 18,
    "name": "زعفرانی",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک نفره",
      "زعفرانی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "آرد، روغن، شکر، گلاب، زعفران",
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
    "id": 19,
    "name": "سه آرد",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک نفره"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "آرد سفید، آرد برنج، آرد نخودچی، روغن، شکر، شربت",
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
    "id": 20,
    "name": "خرمایی گردویی",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک نفره"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "آرد، کره، خرما، گردو، دارچین",
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
    "id": 21,
    "name": "پسته‌ای (تاپینگ)",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک نفره",
      "پسته‌ای"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "آرد، روغن، شکر، زعفران، پسته",
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
    "id": 22,
    "name": "هویج",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک نفره"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "آرد، روغن، شکر، گلاب، هویج",
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
    "id": 23,
    "name": "عربی",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک نفره"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "آرد، روغن، شکر، شیر خشک، هل",
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
    "id": 24,
    "name": "زنجبیلی",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک نفره"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "آرد، روغن، شکر، هل، زنجبیل",
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
    "id": 25,
    "name": "کنجدی",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک نفره"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "آرد، روغن، شکر، ارده، کنجد",
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
    "id": 26,
    "name": "شیر",
    "category": "halva-single",
    "flavor": "تک نفره",
    "weight": "تک نفره",
    "price": 20000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "تک نفره"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "آرد، کره، شکر، گلاب، شیر",
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
    "name": "حلوای زعفرانی نذری",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 370000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی / ۱ کیلویی",
      "زعفرانی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "آرد، روغن، شکر، گلاب، زعفران",
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
    "id": 28,
    "name": "حلوای سه آرد",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 430000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی / ۱ کیلویی"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "آرد سفید، آرد برنج، آرد نخودچی، روغن، شکر، شربت",
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
    "id": 29,
    "name": "حلوای هویج",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 370000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی / ۱ کیلویی"
    ],
    "img": "../assets/images/fresh-products/pear-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/pear-cake.jpg"
    ],
    "desc": "آرد، روغن، شکر، گلاب، هویج",
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
    "id": 30,
    "name": "حلوای عربی",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 480000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی / ۱ کیلویی"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "آرد، روغن، شکر، شیر خشک، هل",
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
    "id": 31,
    "name": "حلوای زنجبیلی",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 370000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی / ۱ کیلویی"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "آرد، روغن، شکر، هل، زنجبیل",
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
    "id": 32,
    "name": "حلوای پسته‌ای (تاپینگ)",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 680000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی / ۱ کیلویی",
      "پسته‌ای"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "آرد، روغن، شکر، زعفران، پسته",
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
    "id": 33,
    "name": "حلوای خرمایی گردویی",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 490000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی / ۱ کیلویی"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "آرد، کره، خرما، گردو، دارچین",
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
    "id": 34,
    "name": "حلوای شیر",
    "category": "halva-tray",
    "flavor": "سینی / ۱ کیلویی",
    "weight": "سینی / ۱ کیلویی",
    "price": 500000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی / ۱ کیلویی"
    ],
    "img": "../assets/images/fresh-products/halva.jpg",
    "gallery": [
      "../assets/images/fresh-products/halva.jpg"
    ],
    "desc": "آرد، کره، شکر، گلاب، شیر",
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
    "id": 35,
    "name": "دونات",
    "category": "classic",
    "flavor": "بیس سفارش ۱۰ عدد",
    "weight": "عدد",
    "price": 170000,
    "stock": 80,
    "minOrder": 10,
    "status": "active",
    "type": "B2C",
    "tags": [
      "بیس سفارش ۱۰ عدد",
      "عدد",
      "بیس سفارش"
    ],
    "img": "../assets/images/fresh-products/donut.jpg",
    "gallery": [
      "../assets/images/fresh-products/donut.jpg"
    ],
    "desc": "آرد، شیر، تخم‌مرغ، شکر، خمیرمایه — حداقل سفارش ۱۰ عدد",
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
    "id": 36,
    "name": "کروسان",
    "category": "classic",
    "flavor": "بیس سفارش ۱۰ عدد",
    "weight": "عدد",
    "price": 180000,
    "stock": 80,
    "minOrder": 10,
    "status": "active",
    "type": "B2C",
    "tags": [
      "بیس سفارش ۱۰ عدد",
      "عدد",
      "بیس سفارش"
    ],
    "img": "../assets/images/fresh-products/croissant.jpg",
    "gallery": [
      "../assets/images/fresh-products/croissant.jpg"
    ],
    "desc": "آرد، کره، شیر، تخم‌مرغ، خمیرمایه — حداقل سفارش ۱۰ عدد",
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
    "id": 37,
    "name": "دونات بایت",
    "category": "classic",
    "flavor": "کیلویی",
    "weight": "کیلویی",
    "price": 0,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "کیلویی",
      "بیس سفارش"
    ],
    "img": "../assets/images/fresh-products/donut.jpg",
    "gallery": [
      "../assets/images/fresh-products/donut.jpg"
    ],
    "desc": "آرد، شیر، تخم‌مرغ، شکر، خمیرمایه — قیمت بر اساس وزن نهایی محاسبه می‌شود",
    "ingredients": "آرد، شیر، تخم‌مرغ، شکر، خمیرمایه",
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
    "type": "B2C",
    "tags": [],
    "img": "../assets/images/fresh-products/mousse-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/mousse-cake.jpg"
    ],
    "desc": "کیک اسفنجی، خامه، فیلینگ، میوه یا شکلات",
    "ingredients": "کیک اسفنجی، خامه، فیلینگ، میوه یا شکلات",
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
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "آرد برنج، روغن، پودر قند، هل، گلاب",
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
    "id": 40,
    "name": "شیرینی نخودچی",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 1140000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "آرد نخودچی، روغن، پودر قند، هل",
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
    "id": 41,
    "name": "شیرینی خونگی",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 480000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، کره، شکر، وانیل",
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
    "id": 42,
    "name": "شیرینی قیطونی",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 440000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "آرد، کره، پودر قند، وانیل، مغز",
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
    "id": 43,
    "name": "تسمه‌ای نارگیلی",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 420000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "آرد، سفیده تخم‌مرغ، شکر، نارگیل",
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
    "id": 44,
    "name": "شیرینی بوشتوک",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 800000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "آرد نخودچی، کره، پودر قند، هل",
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
    "id": 45,
    "name": "عسلی بادامی",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 340000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "کره، شکر، عسل، بادام",
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
    "id": 46,
    "name": "گرانول",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 800000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
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
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "آرد، تخم‌مرغ، کره، شکر قهوه‌ای، شکلات",
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
    "id": 48,
    "name": "سیگارت چیسی",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 560000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "خمیر، کره، پنیر، ادویه",
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
    "id": 49,
    "name": "بیسکو کالیکا",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 480000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "بیسکویت، کره، پودر کاکائو، مغز",
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
    "id": 50,
    "name": "شیرینی پفکی (زرده‌ای)",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 890000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "زرده تخم‌مرغ، پودر قند، وانیل",
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
    "id": 51,
    "name": "شیرینی پفکی (سفیده‌ای)",
    "category": "sweets",
    "flavor": "شیرینی و کوکی",
    "weight": "سینی",
    "price": 450000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/cookies.jpg",
    "gallery": [
      "../assets/images/fresh-products/cookies.jpg"
    ],
    "desc": "سفیده تخم‌مرغ، پودر قند، وانیل",
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
    "id": 52,
    "name": "موچی ساده",
    "category": "dessert",
    "flavor": "بیس سفارش ۱۰ عدد",
    "weight": "بسته ۱۰ عدد",
    "price": 430000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "بیس سفارش ۱۰ عدد",
      "بسته ۱۰ عدد"
    ],
    "img": "../assets/images/fresh-products/mochi.jpg",
    "gallery": [
      "../assets/images/fresh-products/mochi.jpg"
    ],
    "desc": "آرد برنج، نشاسته، شکر، کرم — قیمت بسته ۱۰ عددی",
    "ingredients": "آرد برنج، نشاسته، شکر، کرم",
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
    "type": "B2C",
    "tags": [
      "بیس سفارش ۱۰ عدد",
      "بسته ۱۰ عدد"
    ],
    "img": "../assets/images/fresh-products/layered-cake.jpg",
    "gallery": [
      "../assets/images/fresh-products/layered-cake.jpg"
    ],
    "desc": "آرد برنج، نشاسته، شکر، کارامل، شکلات، بادام‌زمینی — قیمت بسته ۱۰ عددی",
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
    "id": 54,
    "name": "موس میوه",
    "category": "dessert",
    "flavor": "دسر",
    "weight": "سینی",
    "price": 260000,
    "stock": 80,
    "minOrder": 1,
    "status": "active",
    "type": "B2C",
    "tags": [
      "سینی"
    ],
    "img": "../assets/images/fresh-products/fruit-mousse.jpg",
    "gallery": [
      "../assets/images/fresh-products/fruit-mousse.jpg"
    ],
    "desc": "خامه، شکر، ژلاتین، پوره میوه",
    "ingredients": "خامه، شکر، ژلاتین، پوره میوه",
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
  "subtitle": "منوی کامل کیک، شیرینی، حلوا، کلاسیک و دسر",
  "phone": "۰۹۰۲۲۱۲۲۲۸۶",
  "address": "تهران، ایران",
  "instagram": "@Delliza.bakery",
  "menuVersion": "delliza_menu_uploaded_index_12_2026_02"
};
