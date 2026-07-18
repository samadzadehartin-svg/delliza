-- Delliza settings update: editable top images - 2026-07-18
-- این فایل فقط تنظیمات را آپدیت می‌کند و به سفارش‌ها دست نمی‌زند.
-- اضافه شدن قابلیت جابجایی محصولات با آپلود ZIP انجام می‌شود، نه با SQL.

create table if not exists public.app_data (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

insert into public.app_data (key, value, updated_at)
values (
  'settings',
  jsonb_build_object(
    'subtitle', '',
    'deliveryFee', 90000,
    'serviceFeeLabel', 'هزینه بسته‌بندی',
    'orderContactMode', 'whatsapp_sms',
    'whatsapp', '09022122286',
    'sms', '09022122286',
    'heroImages', jsonb_build_array(
      '../assets/images/fresh-products/assigned-2026-07-18/donut-plain.jpg',
      '../assets/images/fresh-products/assigned-2026-07-18/donut-creamfill.jpg',
      '../assets/images/fresh-products/assigned-2026-07-18/croissant-creamfill-chocolate-nuts.jpg',
      '../assets/images/fresh-products/assigned-2026-07-18/birthday-cake.jpg'
    ),
    'menuVersion', 'delliza_packaging_fee_label_2026_07_18_01'
  ),
  now()
)
on conflict (key) do update set
  value = public.app_data.value || excluded.value,
  updated_at = now();
