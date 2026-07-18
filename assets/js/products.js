// =============================================
// دلیزا - محصولات منتخب با قیمت رینگ/عدد
// تاریخ: ۲۰۲۶/۰۷/۱۸
// =============================================

const PRODUCTS = [
  {
    "id": "donut-plain",
    "title_fa": "دونات ساده",
    "title_en": "Plain Donut",
    "category": "دونات",
    "price": 40000,
    "unit": "یک عدد",
    "priceLabel": "قیمت هر عدد: ۴۰٬۰۰۰ تومان",
    "badge": "دونات",
    "image": "assets/images/fresh-products/assigned-2026-07-18/donut-plain.jpg",
    "description": "دونات ساده",
    "tags": [
      "دونات"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "donut-creamfill",
    "title_fa": "دونات کرمفیل",
    "title_en": "Cream Filled Donut",
    "category": "دونات",
    "price": 60000,
    "unit": "یک عدد",
    "priceLabel": "قیمت هر عدد: ۶۰٬۰۰۰ تومان",
    "badge": "کرمفیل",
    "image": "assets/images/fresh-products/assigned-2026-07-18/donut-creamfill.jpg",
    "description": "دونات کرمفیل",
    "tags": [
      "دونات",
      "کرمفیل"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "donut-chocolate",
    "title_fa": "دونات روکش شکلاتی",
    "title_en": "Chocolate Coated Donut",
    "category": "دونات",
    "price": 90000,
    "unit": "یک عدد",
    "priceLabel": "قیمت هر عدد: ۹۰٬۰۰۰ تومان",
    "badge": "شکلاتی",
    "image": "assets/images/fresh-products/assigned-2026-07-18/donut-chocolate.jpg",
    "description": "دونات با روکش شکلاتی",
    "tags": [
      "دونات",
      "شکلاتی"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "croissant-plain",
    "title_fa": "کروسان ساده",
    "title_en": "Plain Croissant",
    "category": "کروسان",
    "price": 90000,
    "unit": "یک عدد",
    "priceLabel": "قیمت هر عدد: ۹۰٬۰۰۰ تومان",
    "badge": "کروسان",
    "image": "assets/images/fresh-products/assigned-2026-07-18/croissant-plain.jpg",
    "description": "کروسان ساده",
    "tags": [
      "کروسان"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "croissant-cream",
    "title_fa": "کروسان کرم‌دار",
    "title_en": "Cream Croissant",
    "category": "کروسان",
    "price": 120000,
    "unit": "یک عدد",
    "priceLabel": "قیمت هر عدد: ۱۲۰٬۰۰۰ تومان",
    "badge": "کرم‌دار",
    "image": "assets/images/fresh-products/assigned-2026-07-18/croissant-cream.jpg",
    "description": "کروسان کرم‌دار",
    "tags": [
      "کروسان",
      "کرم‌دار"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "croissant-cream-chocolate-nuts",
    "title_fa": "کروسان کرم‌دار با روکش شکلات و مغزهای آجیلی",
    "title_en": "Cream Chocolate Nuts Croissant",
    "category": "کروسان",
    "price": 150000,
    "unit": "یک عدد",
    "priceLabel": "قیمت هر عدد: ۱۵۰٬۰۰۰ تومان",
    "badge": "ویژه",
    "image": "assets/images/fresh-products/assigned-2026-07-18/croissant-cream-chocolate-nuts.jpg",
    "description": "کروسان کرم‌دار با روکش شکلات و مغزهای آجیلی",
    "tags": [
      "کروسان",
      "شکلات",
      "مغزها"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "cinnamon-roll",
    "title_fa": "رول دارچینی",
    "title_en": "Cinnamon Roll",
    "category": "کلاسیک",
    "price": 79000,
    "unit": "یک عدد",
    "priceLabel": "قیمت هر عدد: ۷۹٬۰۰۰ تومان",
    "badge": "دارچینی",
    "image": "assets/images/fresh-products/assigned-2026-07-18/cinnamon-roll.jpg",
    "description": "رول دارچینی",
    "tags": [
      "دارچین",
      "رول"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "mocha-cake",
    "title_fa": "کیک موکا",
    "title_en": "Mocha Cake",
    "category": "کیک و چیزکیک",
    "price": 980000,
    "unit": "هر رینگ (۸ اسلایسی)",
    "priceLabel": "قیمت هر رینگ (۸ اسلایسی): ۹۸۰٬۰۰۰ تومان",
    "badge": "رینگ ۸ اسلایسی",
    "image": "assets/images/fresh-products/assigned-2026-07-18/mocha-cake.jpg",
    "description": "کیک با طعم موکا",
    "tags": [
      "کیک",
      "موکا"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "apple-cinnamon",
    "title_fa": "سیب دارچین",
    "title_en": "Apple Cinnamon Cake",
    "category": "کیک و چیزکیک",
    "price": 1600000,
    "unit": "هر رینگ (۸ اسلایسی)",
    "priceLabel": "قیمت هر رینگ (۸ اسلایسی): ۱٬۶۰۰٬۰۰۰ تومان",
    "badge": "پرطرفدار",
    "image": "assets/images/fresh-products/assigned-2026-07-18/apple-cinnamon.jpg",
    "description": "کیک سیب و دارچین",
    "tags": [
      "کیک",
      "سیب",
      "دارچین"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "carrot-walnut",
    "title_fa": "هویج گردو",
    "title_en": "Carrot Walnut Cake",
    "category": "کیک و چیزکیک",
    "price": 860000,
    "unit": "هر رینگ (۸ اسلایسی)",
    "priceLabel": "قیمت هر رینگ (۸ اسلایسی): ۸۶۰٬۰۰۰ تومان",
    "badge": "کلاسیک",
    "image": "assets/images/fresh-products/assigned-2026-07-18/carrot-walnut.jpg",
    "description": "کیک هویج و گردو",
    "tags": [
      "کیک",
      "هویج",
      "گردو"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "brownie",
    "title_fa": "براونی",
    "title_en": "Brownie",
    "category": "کیک و چیزکیک",
    "price": 1600000,
    "unit": "هر رینگ (۸ اسلایسی)",
    "priceLabel": "قیمت هر رینگ (۸ اسلایسی): ۱٬۶۰۰٬۰۰۰ تومان",
    "badge": "محبوب",
    "image": "assets/images/fresh-products/assigned-2026-07-18/brownie.jpg",
    "description": "براونی شکلاتی",
    "tags": [
      "کیک",
      "براونی",
      "شکلاتی"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "ochkatman",
    "title_fa": "اوچکاتمان",
    "title_en": "Ochkatman",
    "category": "کیک و چیزکیک",
    "price": 930000,
    "unit": "هر رینگ (۸ اسلایسی)",
    "priceLabel": "قیمت هر رینگ (۸ اسلایسی): ۹۳۰٬۰۰۰ تومان",
    "badge": "رینگ ۸ اسلایسی",
    "image": "assets/images/fresh-products/assigned-2026-07-18/ochkatman.jpg",
    "description": "کیک اوچکاتمان",
    "tags": [
      "کیک",
      "اوچکاتمان"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "nescafe-cake",
    "title_fa": "کیک نسکافه",
    "title_en": "Nescafe Cake",
    "category": "کیک و چیزکیک",
    "price": 970000,
    "unit": "هر رینگ (۸ اسلایسی)",
    "priceLabel": "قیمت هر رینگ (۸ اسلایسی): ۹۷۰٬۰۰۰ تومان",
    "badge": "قهوه‌ای",
    "image": "assets/images/fresh-products/assigned-2026-07-18/nescafe-cake.jpg",
    "description": "کیک با طعم نسکافه",
    "tags": [
      "کیک",
      "نسکافه"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "snickers-cake",
    "title_fa": "اسنیکرز",
    "title_en": "Snickers Cake",
    "category": "کیک و چیزکیک",
    "price": 1730000,
    "unit": "هر رینگ (۸ اسلایسی)",
    "priceLabel": "قیمت هر رینگ (۸ اسلایسی): ۱٬۷۳۰٬۰۰۰ تومان",
    "badge": "ویژه",
    "image": "assets/images/fresh-products/assigned-2026-07-18/snickers-cake.jpg",
    "description": "کیک با طعم اسنیکرز",
    "tags": [
      "کیک",
      "اسنیکرز",
      "کارامل"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "lotus-cheesecake",
    "title_fa": "چیزکیک لوتوس",
    "title_en": "Lotus Cheesecake",
    "category": "کیک و چیزکیک",
    "price": 1740000,
    "unit": "هر رینگ (۸ اسلایسی)",
    "priceLabel": "قیمت هر رینگ (۸ اسلایسی): ۱٬۷۴۰٬۰۰۰ تومان",
    "badge": "پرطرفدار",
    "image": "assets/images/fresh-products/assigned-2026-07-18/lotus-cheesecake.jpg",
    "description": "چیزکیک با بیسکوییت لوتوس",
    "tags": [
      "چیزکیک",
      "لوتوس"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "moist-cake",
    "title_fa": "کیک خیس",
    "title_en": "Moist Cake",
    "category": "کیک و چیزکیک",
    "price": 860000,
    "unit": "هر رینگ (۸ اسلایسی)",
    "priceLabel": "قیمت هر رینگ (۸ اسلایسی): ۸۶۰٬۰۰۰ تومان",
    "badge": "شکلاتی",
    "image": "assets/images/fresh-products/assigned-2026-07-18/moist-cake.jpg",
    "description": "کیک خیس شکلاتی",
    "tags": [
      "کیک",
      "خیس",
      "شکلاتی"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "sandy-cake",
    "title_fa": "کیک شنی (نارگیلی)",
    "title_en": "Sandy Coconut Cake",
    "category": "کیک و چیزکیک",
    "price": 834000,
    "unit": "هر رینگ (۸ اسلایسی)",
    "priceLabel": "قیمت هر رینگ (۸ اسلایسی): ۸۳۴٬۰۰۰ تومان",
    "badge": "نارگیلی",
    "image": "assets/images/fresh-products/assigned-2026-07-18/sandy-cake.jpg",
    "description": "کیک شنی نارگیلی",
    "tags": [
      "کیک",
      "شنی",
      "نارگیل"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "date-cake",
    "title_fa": "کیک دیت (خرمایی)",
    "title_en": "Date Cake",
    "category": "کیک و چیزکیک",
    "price": 1350000,
    "unit": "هر رینگ (۸ اسلایسی)",
    "priceLabel": "قیمت هر رینگ (۸ اسلایسی): ۱٬۳۵۰٬۰۰۰ تومان",
    "badge": "خرمایی",
    "image": "assets/images/fresh-products/assigned-2026-07-18/date-cake.jpg",
    "description": "کیک خرمایی",
    "tags": [
      "کیک",
      "خرما",
      "دیت"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "banana-cake",
    "title_fa": "کیک موز",
    "title_en": "Banana Cake",
    "category": "کیک و چیزکیک",
    "price": 792000,
    "unit": "هر رینگ (۸ اسلایسی)",
    "priceLabel": "قیمت هر رینگ (۸ اسلایسی): ۷۹۲٬۰۰۰ تومان",
    "badge": "موزی",
    "image": "assets/images/fresh-products/assigned-2026-07-18/banana-cake.jpg",
    "description": "کیک موز",
    "tags": [
      "کیک",
      "موز"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "chocolate-mousse",
    "title_fa": "موس شکلاتی",
    "title_en": "Chocolate Mousse",
    "category": "کیک و چیزکیک",
    "price": 1100000,
    "unit": "هر رینگ (۸ اسلایسی)",
    "priceLabel": "قیمت هر رینگ (۸ اسلایسی): ۱٬۱۰۰٬۰۰۰ تومان",
    "badge": "مجلس",
    "image": "assets/images/fresh-products/assigned-2026-07-18/chocolate-mousse.jpg",
    "description": "موس شکلاتی",
    "tags": [
      "موس",
      "شکلات"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "red-velvet",
    "title_fa": "ردولوت",
    "title_en": "Red Velvet",
    "category": "کیک و چیزکیک",
    "price": 995000,
    "unit": "هر رینگ (۸ اسلایسی)",
    "priceLabel": "قیمت هر رینگ (۸ اسلایسی): ۹۹۵٬۰۰۰ تومان",
    "badge": "کلاسیک",
    "image": "assets/images/fresh-products/assigned-2026-07-18/red-velvet.jpg",
    "description": "کیک ردولوت",
    "tags": [
      "کیک",
      "ردولوت"
    ],
    "featured": true,
    "today": true
  },
  {
    "id": "birthday-cake",
    "title_fa": "کیک تولد",
    "title_en": "Birthday Cake",
    "category": "کیک و چیزکیک",
    "price": 1400000,
    "unit": "هر رینگ (۸ اسلایسی)",
    "priceLabel": "قیمت هر رینگ (۸ اسلایسی): ۱٬۴۰۰٬۰۰۰ تومان",
    "badge": "تولد",
    "image": "assets/images/fresh-products/assigned-2026-07-18/birthday-cake.jpg",
    "description": "کیک تولد شکلاتی",
    "tags": [
      "کیک",
      "تولد",
      "سفارشی"
    ],
    "featured": true,
    "today": true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRODUCTS;
}
