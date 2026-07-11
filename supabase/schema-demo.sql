-- Delliza Supabase schema - demo mode
-- این نسخه برای دمو/شروع سریع است. چون سایت استاتیک است، policy نوشتن عمومی باز است.
-- برای نسخه نهایی فروش واقعی باید Supabase Auth و policy امن‌تر بگذاریم.

create table if not exists public.app_data (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.app_data enable row level security;

drop policy if exists "delliza_public_read" on public.app_data;
drop policy if exists "delliza_public_insert" on public.app_data;
drop policy if exists "delliza_public_update" on public.app_data;

create policy "delliza_public_read"
on public.app_data for select
to anon, authenticated
using (true);

create policy "delliza_public_insert"
on public.app_data for insert
to anon, authenticated
with check (key in ('products', 'categories', 'orders', 'staff', 'settings'));

create policy "delliza_public_update"
on public.app_data for update
to anon, authenticated
using (key in ('products', 'categories', 'orders', 'staff', 'settings'))
with check (key in ('products', 'categories', 'orders', 'staff', 'settings'));
