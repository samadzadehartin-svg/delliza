-- Delliza patch: حذف همه مواد اولیه از محصولات، اصلاح نام اوچکاتمان و اصلاح قیمت چند محصول
-- اگر بعد از Deploy هنوز اطلاعات قبلی نمایش داده شد، این فایل را در Supabase > SQL Editor اجرا کن.

begin;

update public.app_data
set value = (
  select jsonb_agg(
    case
      when coalesce(item->>'name', item->>'title') in ('کیک اوچکلمان','کیک اوچکاتمان') then
        (item || jsonb_build_object(
          'name','کیک اوچکاتمان',
          'title','کیک اوچکاتمان',
          'price',1440000,
          'priceLabel','۱٬۴۴۰٬۰۰۰ تومان',
          'desc','',
          'description','',
          'ingredients','',
          'visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false)
        )) - 'type' || jsonb_build_object('type','retail')
      when coalesce(item->>'name', item->>'title') = 'کیک براونی' then
        (item || jsonb_build_object(
          'price',1700000,
          'priceLabel','۱٬۷۰۰٬۰۰۰ تومان',
          'desc','',
          'description','',
          'ingredients','',
          'visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false)
        )) - 'type' || jsonb_build_object('type','retail')
      when coalesce(item->>'name', item->>'title') = 'کیک هویج و گردو' then
        (item || jsonb_build_object(
          'price',1038000,
          'priceLabel','۱٬۰۳۸٬۰۰۰ تومان',
          'desc','',
          'description','',
          'ingredients','',
          'visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false)
        )) - 'type' || jsonb_build_object('type','retail')
      when coalesce(item->>'name', item->>'title') = 'استرول کیک سیب و دارچین' then
        (item || jsonb_build_object(
          'price',890000,
          'priceLabel','۸۹۰٬۰۰۰ تومان',
          'desc','',
          'description','',
          'ingredients','',
          'visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false)
        )) - 'type' || jsonb_build_object('type','retail')
      when coalesce(item->>'name', item->>'title') = 'کیک موکا' then
        (item || jsonb_build_object(
          'price',1000000,
          'priceLabel','۱٬۰۰۰٬۰۰۰ تومان',
          'desc','',
          'description','',
          'ingredients','',
          'visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false)
        )) - 'type' || jsonb_build_object('type','retail')
      else
        (item || jsonb_build_object(
          'desc', case when item->>'desc' like '%قیمت بسته ۱۰ عددی%' then 'قیمت بسته ۱۰ عددی و حداقل سفارش ۱۰ عدد' else '' end,
          'description','',
          'ingredients','',
          'visible', coalesce(item->'visible','{}'::jsonb) || jsonb_build_object('ingredients', false)
        )) - 'type' || jsonb_build_object('type','retail')
    end
  )
  from jsonb_array_elements(value) as item
), updated_at = now()
where key = 'products';

update public.app_data
set value = coalesce(value, '{}'::jsonb) || jsonb_build_object('menuVersion','delliza_no_ingredients_renamed_prices_2026_07_14_01'),
    updated_at = now()
where key = 'settings';

commit;
notify pgrst, 'reload schema';
