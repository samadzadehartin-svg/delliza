// =============================================
// دلیزا - محصولات (فقط قیمت رینگ) - ۲۱ محصول
// تاریخ: ۲۰۲۶/۰۷/۱۷
// =============================================

const PRODUCTS = [
  
  
  
  // کیک‌ها
  { id: 'mocha-cake', title_fa: 'کیک موکا', title_en: 'Mocha Cake', category: 'کیک', price: 980000, unit: 'هر رینگ (۸ اسلایسی)', badge: '', image: 'assets/images/products/product-17.jpg', description: 'کیک با طعم موکا', tags: ['موکا', 'کیک'], featured: false, today: true },
  { id: 'apple-cinnamon', title_fa: 'سیب دارچین', title_en: 'Apple Cinnamon Cake', category: 'کیک', price: 1600000, unit: 'هر رینگ (۸ اسلایسی)', badge: 'پرطرفدار', image: 'assets/images/products/product-04.jpg', description: 'کیک با سیب و دارچین', tags: ['سیب', 'دارچین'], featured: true, today: true },
  { id: 'carrot-walnut', title_fa: 'هویج گردو', title_en: 'Carrot Walnut Cake', category: 'کیک', price: 860000, unit: 'هر رینگ (۸ اسلایسی)', badge: '', image: 'assets/images/products/product-02.jpg', description: 'کیک هویج با گردو', tags: ['هویج', 'گردو'], featured: false, today: true },
  { id: 'brownie', title_fa: 'براونی', title_en: 'Brownie', category: 'کیک', price: 1600000, unit: 'هر رینگ (۸ اسلایسی)', badge: 'محبوب', image: 'assets/images/products/product-01.jpg', description: 'براونی شکلاتی', tags: ['براونی', 'شکلات'], featured: true, today: true },
  { id: 'ochkatman', title_fa: 'اوچکاتمان', title_en: 'Ochkatman', category: 'کیک', price: 930000, unit: 'هر رینگ (۸ اسلایسی)', badge: '', image: 'assets/images/products/product-13.jpg', description: 'کیک اوچکاتمان', tags: ['اوچکاتمان'], featured: false, today: true },
  { id: 'nescafe-cake', title_fa: 'کیک نسکافه', title_en: 'Nescafe Cake', category: 'کیک', price: 970000, unit: 'هر رینگ (۸ اسلایسی)', badge: '', image: 'assets/images/products/product-16.jpg', description: 'کیک با طعم نسکافه', tags: ['نسکافه', 'کیک'], featured: false, today: true },
  { id: 'snickers-cake', title_fa: 'اسنیکرز', title_en: 'Snickers Cake', category: 'کیک', price: 1730000, unit: 'هر رینگ (۸ اسلایسی)', badge: 'ویژه', image: 'assets/images/products/product-09.jpg', description: 'کیک با طعم اسنیکرز', tags: ['اسنیکرز', 'کارامل'], featured: true, today: true },
  { id: 'moist-cake', title_fa: 'کیک خیس', title_en: 'Moist Cake', category: 'کیک', price: 860000, unit: 'هر رینگ (۸ اسلایسی)', badge: '', image: 'assets/images/products/product-03.jpg', description: 'کیک خیس شکلاتی', tags: ['خیس', 'شکلات'], featured: false, today: true },
  { id: 'sandy-cake', title_fa: 'کیک شنی (نارگیلی)', title_en: 'Sandy Coconut Cake', category: 'کیک', price: 834000, unit: 'هر رینگ (۸ اسلایسی)', badge: '', image: 'assets/images/products/product-12.jpg', description: 'کیک با پودر نارگیل', tags: ['شنی', 'نارگیل'], featured: false, today: true },
  { id: 'date-cake', title_fa: 'کیک دیت (خرمایی)', title_en: 'Date Cake', category: 'کیک', price: 1350000, unit: 'هر رینگ (۸ اسلایسی)', badge: '', image: 'assets/images/products/product-10.jpg', description: 'کیک با خرما', tags: ['خرما', 'دیت'], featured: false, today: true },
  { id: 'banana-cake', title_fa: 'کیک موز', title_en: 'Banana Cake', category: 'کیک', price: 792000, unit: 'هر رینگ (۸ اسلایسی)', badge: '', image: 'assets/images/products/product-06.jpg', description: 'کیک با موز', tags: ['موز', 'کیک'], featured: false, today: true },
  { id: 'red-velvet', title_fa: 'ردولوت', title_en: 'Red Velvet', category: 'کیک', price: 995000, unit: 'هر رینگ (۸ اسلایسی)', badge: 'کلاسیک', image: 'assets/images/products/product-07.jpg', description: 'کیک ردولوت', tags: ['ردولوت', 'کیک'], featured: true, today: true },
  
  // دسرها
  { id: 'lotus-cheesecake', title_fa: 'چیزکیک لوتوس', title_en: 'Lotus Cheesecake', category: 'چیزکیک', price: 1740000, unit: 'هر رینگ (۸ اسلایسی)', badge: 'پرطرفدار', image: 'assets/images/products/product-11.jpg', description: 'چیزکیک با بیسکوییت لوتوس', tags: ['لوتوس', 'چیزکیک'], featured: true, today: true },
  { id: 'chocolate-mousse', title_fa: 'موس شکلاتی', title_en: 'Chocolate Mousse', category: 'موس', price: 1100000, unit: 'هر رینگ (۸ اسلایسی)', badge: 'مجلس', image: 'assets/images/products/product-05.jpg', description: 'موس شکلاتی نرم', tags: ['موس', 'شکلات'], featured: true, today: true }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRODUCTS;
}