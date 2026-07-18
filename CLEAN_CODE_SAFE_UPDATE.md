# Delliza clean code + safe orders update

این نسخه برای مرتب‌سازی کد و امن‌کردن آپدیت‌ها ساخته شده است.

## تغییرات مهم

- کدهای اصلی مشتری و سینک Supabase مرتب‌تر و خواناتر شدند.
- `buyer/index.html`, `admin/index.html`, `staff/index.html` و `index.html` فرمت مرتب گرفتند.
- مسیرهای قدیمی ادمین/استف به داشبورد یکپارچه هدایت می‌شوند.
- آپدیت خودکار منو فقط این کلیدها را در Supabase می‌نویسد:
  - `products`
  - `categories`
  - `settings`
- کلیدهای زیر موقع آپدیت منو دستکاری نمی‌شوند:
  - `orders`
  - `staff`
- هزینه بسته‌بندی ۹۰٬۰۰۰ تومان در ثبت سفارش حفظ شده است.
- بعد از ثبت سفارش، کاربر به واتساپ یا پیامک هدایت می‌شود، نه اینستاگرام.

## فایل SQL امن

فایل زیر داخل پوشه `supabase` قرار دارد:

```text
supabase/clean-code-safe-menu-update-2026-07-18.sql
```

این فایل قبل از آپدیت، یک بکاپ اختیاری از ردیف `orders` داخل جدول `app_data_orders_backup` می‌گیرد و سپس فقط `products/categories/settings` را آپدیت می‌کند.
