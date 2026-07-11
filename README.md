# Delliza Bakery — GitHub + Decap CMS

این نسخه برای آپلود روی GitHub Pages آماده شده است.

## مسیرها

- سایت اصلی: `index.html`
- پنل مدیریت: `admin/index.html` یا `/admin/`
- فایل محتوای محصولات: `data/products.json`
- تنظیمات CMS: `admin/config.yml`

## مرحله ضروری بعد از آپلود

داخل فایل زیر:

```txt
admin/config.yml
```

این خط را عوض کن:

```yml
repo: YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME
```

مثلاً:

```yml
repo: safaro/delliza-bakery
```

بعد commit بزن.

## نکته مهم درباره ورود پنل

Decap CMS برای ذخیره مستقیم روی GitHub نیاز به احراز هویت GitHub/OAuth دارد. اگر پنل در GitHub Pages باز شد ولی Login/Save کار نکرد، باید OAuth Decap/GitHub را برای ریپو تنظیم کنی یا یک OAuth backend استفاده کنی. خود سایت و فایل محصولات بدون دیتابیس هستند و از `data/products.json` خوانده می‌شوند.

## قیمت‌ها

در پنل قیمت را به هزار تومان وارد کن. یعنی:

```txt
144
```

در سایت نمایش داده می‌شود:

```txt
۱۴۴ هزار تومان
```
