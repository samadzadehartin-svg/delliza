-- Delliza safe settings update: packaging fee label + remove subtitle - 2026-07-18
-- این فایل فقط تنظیمات را آپدیت می‌کند و به سفارش‌ها دست نمی‌زند.

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
    'deliveryFee', 0,
    'serviceFeeLabel', '',
    'orderContactMode', 'whatsapp_sms',
    'whatsapp', '09022122286',
    'sms', '09022122286',
    'menuVersion', 'delliza_no_packaging_fee_2026_07_18_01'
  ),
  now()
)
on conflict (key) do update set
  value = public.app_data.value || excluded.value,
  updated_at = now();
