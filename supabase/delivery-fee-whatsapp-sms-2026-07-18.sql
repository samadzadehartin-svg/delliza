-- Delliza update: WhatsApp/SMS after order + packaging fee 90,000 - 2026-07-18
-- این فایل فقط تنظیمات عمومی app_data را آپدیت می‌کند و سفارش‌ها را حذف یا تغییر نمی‌دهد.

create table if not exists public.app_data (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

insert into public.app_data (key, value, updated_at)
select
  'settings',
  coalesce((select value from public.app_data where key = 'settings'), '{}'::jsonb) || jsonb_build_object(
    'brand', 'دلیزا',
    'phone', '۰۹۰۲۲۱۲۲۲۸۶',
    'whatsapp', '09022122286',
    'sms', '09022122286',
    'deliveryFee', 90000,
    'orderContactMode', 'whatsapp_sms',
    'menuVersion', 'delliza_delivery_fee_whatsapp_sms_2026_07_18_01'
  ),
  now()
on conflict (key) do update set
  value = public.app_data.value || excluded.value,
  updated_at = now();
