-- Delliza safe settings update: WhatsApp only + payment info - 2026-07-18
-- This script only updates the settings row. It does NOT touch orders.

insert into app_data (key, value, updated_at)
values (
  'settings',
  jsonb_build_object(
    'brand', 'دلیزا',
    'subtitle', '',
    'phone', '۰۹۰۲۲۱۲۲۲۸۶',
    'whatsapp', '09022122286',
    'sms', '',
    'deliveryFee', 0,
    'serviceFeeLabel', '',
    'orderContactMode', 'whatsapp',
    'paymentCardNumber', '6274881201467544',
    'paymentCardOwner', 'روح اله زرگریان',
    'paymentInstruction', 'لطفا فیش واریزی خود را داخل واتس آپ ارسال کنید',
    'heroImages', jsonb_build_array(
      '../assets/images/fresh-products/assigned-2026-07-18/donut-plain.jpg',
      '../assets/images/fresh-products/assigned-2026-07-18/donut-creamfill.jpg',
      '../assets/images/fresh-products/assigned-2026-07-18/croissant-cream-chocolate-nuts.jpg',
      '../assets/images/fresh-products/assigned-2026-07-18/birthday-cake.jpg'
    ),
    'address', 'تهران، ایران',
    'instagram', '@delliza.bakery',
    'instagramUrl', 'https://ig.me/m/delliza.bakery',
    'menuVersion', 'delliza_whatsapp_payment_info_2026_07_18_01'
  ),
  now()
)
on conflict (key) do update
set value = app_data.value
  || jsonb_build_object(
    'subtitle', '',
    'sms', '',
    'deliveryFee', 0,
    'serviceFeeLabel', '',
    'orderContactMode', 'whatsapp',
    'paymentCardNumber', '6274881201467544',
    'paymentCardOwner', 'روح اله زرگریان',
    'paymentInstruction', 'لطفا فیش واریزی خود را داخل واتس آپ ارسال کنید',
    'menuVersion', 'delliza_whatsapp_payment_info_2026_07_18_01'
  ),
  updated_at = now();
