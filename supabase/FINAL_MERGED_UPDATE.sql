-- Delliza FINAL merged patch
-- حذف B2B/B2C، حذف مواد اولیه، اصلاح نام اوچکاتمان، اصلاح قیمت‌ها، اصلاح دونات/کروسان، و جایگزینی عکس‌های جدید
-- اگر بعد از Deploy هنوز دیتای قبلی نمایش داده شد، این فایل را در Supabase SQL Editor اجرا کن.

begin;

update public.app_data
set value = (
  select jsonb_agg(
    case
      when (item->>'id')::int = 1 or coalesce(item->>'name', item->>'title') = 'کیک براونی' then
        (item - 'type') || jsonb_build_object('type','retail','price',1700000,'priceLabel','۱٬۷۰۰٬۰۰۰ تومان','desc','','description','','ingredients','','visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false))
      when (item->>'id')::int = 2 or coalesce(item->>'name', item->>'title') = 'کیک هویج و گردو' then
        (item - 'type') || jsonb_build_object('type','retail','price',1038000,'priceLabel','۱٬۰۳۸٬۰۰۰ تومان','desc','','description','','ingredients','','visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false))
      when (item->>'id')::int = 4 or coalesce(item->>'name', item->>'title') = 'استرول کیک سیب و دارچین' then
        (item - 'type') || jsonb_build_object('type','retail','price',890000,'priceLabel','۸۹۰٬۰۰۰ تومان','desc','','description','','ingredients','','visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false))
      when (item->>'id')::int = 13 or coalesce(item->>'name', item->>'title') in ('کیک اوچکلمان','کیک اوچکاتمان') then
        (item - 'type') || jsonb_build_object('type','retail','name','کیک اوچکاتمان','title','کیک اوچکاتمان','price',1440000,'priceLabel','۱٬۴۴۰٬۰۰۰ تومان','img','../assets/images/products/product-13.jpg','gallery', jsonb_build_array('../assets/images/products/product-13.jpg'),'desc','','description','','ingredients','','visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false))
      when (item->>'id')::int = 17 or coalesce(item->>'name', item->>'title') = 'کیک موکا' then
        (item - 'type') || jsonb_build_object('type','retail','price',1000000,'priceLabel','۱٬۰۰۰٬۰۰۰ تومان','desc','','description','','ingredients','','visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false))
      when (item->>'id')::int = 12 or coalesce(item->>'name', item->>'title') = 'کیک شنی' then
        (item - 'type') || jsonb_build_object('type','retail','img','../assets/images/products/product-12.jpg','gallery', jsonb_build_array('../assets/images/products/product-12.jpg'),'desc','','description','','ingredients','','visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false))
      when (item->>'id')::int = 35 or coalesce(item->>'name', item->>'title') = 'دونات' then
        (item - 'type') || jsonb_build_object('type','retail','flavor','حداقل سفارش ۱۰ عدد','weight','بسته ۱۰ عددی','price',890000,'priceMode','package','packageQty',10,'minOrder',10,'priceLabel','۸۹۰٬۰۰۰ تومان / بسته ۱۰ عددی','tags', jsonb_build_array('حداقل سفارش ۱۰ عدد','بسته ۱۰ عددی'),'img','../assets/images/products/product-35.jpg','gallery', jsonb_build_array('../assets/images/products/product-35.jpg'),'desc','','description','','ingredients','','visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false))
      when (item->>'id')::int = 36 or coalesce(item->>'name', item->>'title') = 'کروسان' then
        (item - 'type') || jsonb_build_object('type','retail','flavor','حداقل سفارش ۱۰ عدد','weight','بسته ۱۰ عددی','price',990000,'priceMode','package','packageQty',10,'minOrder',10,'priceLabel','۹۹۰٬۰۰۰ تومان / بسته ۱۰ عددی','tags', jsonb_build_array('حداقل سفارش ۱۰ عدد','بسته ۱۰ عددی'),'img','../assets/images/products/product-36.jpg','gallery', jsonb_build_array('../assets/images/products/product-36.jpg'),'desc','','description','','ingredients','','visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false))
      when (item->>'id')::int in (27,28,29,30,31,32,33,34,52,53,54) then
        (item - 'type') || jsonb_build_object('type','retail','img', '../assets/images/products/product-' || lpad((item->>'id'), 2, '0') || '.jpg','gallery', jsonb_build_array('../assets/images/products/product-' || lpad((item->>'id'), 2, '0') || '.jpg'),'desc','','description','','ingredients','','visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false))
      else
        (item - 'type') || jsonb_build_object('type','retail','desc','','description','','ingredients','','visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false))
    end
  )
  from jsonb_array_elements(value) as item
), updated_at = now()
where key = 'products';

update public.app_data
set value = value || jsonb_build_object('menuVersion','delliza_final_merged_clean_2026_07_15_01'),
    updated_at = now()
where key = 'settings';

commit;

notify pgrst, 'reload schema';
