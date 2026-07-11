-- Delliza Instagram handle update
-- Run this in Supabase SQL Editor if the site still shows the old Instagram handle.

insert into public.app_data (key, value, updated_at)
values (
  'settings',
  jsonb_build_object(
    'brand', 'دلیزا',
    'subtitle', 'منوی کامل کیک، شیرینی، حلوا، کلاسیک و دسر',
    'phone', '۰۹۰۲۲۱۲۲۲۸۶',
    'address', 'تهران، ایران',
    'instagram', '@delliza.bakery',
    'instagramUrl', 'https://ig.me/m/delliza.bakery',
    'menuVersion', 'delliza_instagram_delliza_bakery_2026_07_11_02'
  ),
  now()
)
on conflict (key) do update
set value = public.app_data.value || excluded.value,
    updated_at = now();
