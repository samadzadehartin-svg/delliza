-- Delliza safe settings update: remove packaging fee - 2026-07-18
-- This script only updates the settings row. It does NOT touch orders.

insert into app_data (key, value, updated_at)
values (
  'settings',
  jsonb_build_object(
    'brand', 'دلیزا',
    'subtitle', '',
    'phone', '۰۹۰۲۲۱۲۲۲۸۶',
    'whatsapp', '09022122286',
    'sms', '09022122286',
    'deliveryFee', 0,
    'serviceFeeLabel', '',
    'orderContactMode', 'whatsapp_sms',
    'heroImages', jsonb_build_array(
      '../assets/images/fresh-products/assigned-2026-07-18/donut-plain.jpg',
      '../assets/images/fresh-products/assigned-2026-07-18/donut-creamfill.jpg',
      '../assets/images/fresh-products/assigned-2026-07-18/croissant-cream-chocolate-nuts.jpg',
      '../assets/images/fresh-products/assigned-2026-07-18/birthday-cake.jpg'
    ),
    'address', 'تهران، ایران',
    'instagram', '@delliza.bakery',
    'instagramUrl', 'https://ig.me/m/delliza.bakery',
    'menuVersion', 'delliza_no_packaging_fee_2026_07_18_01'
  ),
  now()
)
on conflict (key) do update
set value = app_data.value
  || jsonb_build_object(
    'subtitle', '',
    'deliveryFee', 0,
    'serviceFeeLabel', '',
    'orderContactMode', 'whatsapp_sms',
    'menuVersion', 'delliza_no_packaging_fee_2026_07_18_01'
  ),
  updated_at = now();
