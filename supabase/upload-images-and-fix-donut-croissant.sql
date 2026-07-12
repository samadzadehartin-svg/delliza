-- Delliza: remove B2B/B2C display data, update uploaded product images, and fix donut/croissant package prices.
-- Run this in Supabase SQL Editor if the site still shows old images/prices after deploy.

begin;

update public.app_data
set value = (
  select jsonb_agg(
    case
      when (item->>'id')::int = 35 then
        (item - 'type') || jsonb_build_object(
          'type','retail',
          'flavor','حداقل سفارش ۱۰ عدد',
          'weight','بسته ۱۰ عددی',
          'price',890000,
          'priceMode','package',
          'packageQty',10,
          'minOrder',10,
          'priceLabel','۸۹۰٬۰۰۰ تومان / بسته ۱۰ عددی',
          'tags', jsonb_build_array('حداقل سفارش ۱۰ عدد','بسته ۱۰ عددی'),
          'img','../assets/images/products/product-35.jpg',
          'gallery', jsonb_build_array('../assets/images/products/product-35.jpg'),
          'desc','آرد، شیر، تخم‌مرغ، شکر، خمیرمایه — قیمت بسته ۱۰ عددی و حداقل سفارش ۱۰ عدد'
        )
      when (item->>'id')::int = 36 then
        (item - 'type') || jsonb_build_object(
          'type','retail',
          'flavor','حداقل سفارش ۱۰ عدد',
          'weight','بسته ۱۰ عددی',
          'price',990000,
          'priceMode','package',
          'packageQty',10,
          'minOrder',10,
          'priceLabel','۹۹۰٬۰۰۰ تومان / بسته ۱۰ عددی',
          'tags', jsonb_build_array('حداقل سفارش ۱۰ عدد','بسته ۱۰ عددی'),
          'img','../assets/images/products/product-36.jpg',
          'gallery', jsonb_build_array('../assets/images/products/product-36.jpg'),
          'desc','آرد، کره، شیر، تخم‌مرغ، خمیرمایه — قیمت بسته ۱۰ عددی و حداقل سفارش ۱۰ عدد'
        )
      when (item->>'id')::int in (27,28,29,30,31,32,52,53,54) then
        (item - 'type') || jsonb_build_object(
          'type','retail',
          'img', '../assets/images/products/product-' || lpad((item->>'id'), 2, '0') || '.jpg',
          'gallery', jsonb_build_array('../assets/images/products/product-' || lpad((item->>'id'), 2, '0') || '.jpg')
        )
      else
        (item - 'type') || jsonb_build_object('type','retail')
    end
  )
  from jsonb_array_elements(value) as item
), updated_at = now()
where key = 'products';

update public.app_data
set value = jsonb_set(value, '{menuVersion}', to_jsonb('delliza_images_b2b_removed_prices_2026_07_12_03'::text), true),
    updated_at = now()
where key = 'settings';

commit;
notify pgrst, 'reload schema';
