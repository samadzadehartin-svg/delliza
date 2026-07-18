-- Delliza patch: حذف نمایش B2B/B2C و اصلاح قیمت دونات/کروسان
-- این فایل را در Supabase > SQL Editor اجرا کن اگر سایت هنوز داده‌های قدیمی را از Supabase می‌خواند.

begin;

update public.app_data
set value = (
  select jsonb_agg(
    case
      when item->>'name' = 'دونات' then
        (item - 'type') || jsonb_build_object(
          'type','retail',
          'flavor','حداقل سفارش ۱۰ عدد',
          'weight','بسته ۱۰ عددی',
          'price',890000,
          'priceLabel','۸۹۰٬۰۰۰ تومان / بسته ۱۰ عددی',
          'priceMode','package',
          'packageQty',10,
          'minOrder',10,
          'tags', jsonb_build_array('حداقل سفارش ۱۰ عدد','بسته ۱۰ عددی'),
          'desc',''
        )
      when item->>'name' = 'کروسان' then
        (item - 'type') || jsonb_build_object(
          'type','retail',
          'flavor','حداقل سفارش ۱۰ عدد',
          'weight','بسته ۱۰ عددی',
          'price',990000,
          'priceLabel','۹۹۰٬۰۰۰ تومان / بسته ۱۰ عددی',
          'priceMode','package',
          'packageQty',10,
          'minOrder',10,
          'tags', jsonb_build_array('حداقل سفارش ۱۰ عدد','بسته ۱۰ عددی'),
          'desc',''
        )
      else
        (item - 'type') || jsonb_build_object('type','retail')
    end
  )
  from jsonb_array_elements(value) as item
), updated_at = now()
where key = 'products';

update public.app_data
set value = value || jsonb_build_object('menuVersion','delliza_remove_b2b_b2c_price_update_2026_07_12_01'),
    updated_at = now()
where key = 'settings';

commit;

notify pgrst, 'reload schema';
