-- Delliza Supabase Auth roles setup
-- این فایل برای مرحله ۲ و ۳ امنیت است: اتصال پنل‌ها به Supabase Auth و نقش‌های admin/staff.
-- اجرا: Supabase Dashboard > SQL Editor > New query > Run

create table if not exists public.user_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('admin', 'staff')),
  display_name text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.user_roles enable row level security;

create or replace function public.delliza_current_role()
returns text
language sql
security definer
set search_path = public
stable
as $$
  select ur.role
  from public.user_roles ur
  where ur.user_id = auth.uid()
    and ur.active = true
  limit 1
$$;

revoke all on function public.delliza_current_role() from public;
grant execute on function public.delliza_current_role() to authenticated;

drop policy if exists "delliza_user_can_read_own_role" on public.user_roles;
drop policy if exists "delliza_admin_can_select_roles" on public.user_roles;
drop policy if exists "delliza_admin_can_insert_roles" on public.user_roles;
drop policy if exists "delliza_admin_can_update_roles" on public.user_roles;
drop policy if exists "delliza_admin_can_delete_roles" on public.user_roles;

create policy "delliza_user_can_read_own_role"
on public.user_roles
for select
to authenticated
using (auth.uid() = user_id);

create policy "delliza_admin_can_select_roles"
on public.user_roles
for select
to authenticated
using (public.delliza_current_role() = 'admin');

create policy "delliza_admin_can_insert_roles"
on public.user_roles
for insert
to authenticated
with check (public.delliza_current_role() = 'admin');

create policy "delliza_admin_can_update_roles"
on public.user_roles
for update
to authenticated
using (public.delliza_current_role() = 'admin')
with check (public.delliza_current_role() = 'admin');

create policy "delliza_admin_can_delete_roles"
on public.user_roles
for delete
to authenticated
using (public.delliza_current_role() = 'admin');

-- مرحله ساخت اولین مدیر:
-- 1) در Supabase > Authentication > Users یک user با ایمیل مدیر بساز.
-- 2) ایمیل زیر را با ایمیل همان user جایگزین کن و فقط همین insert را اجرا کن.
-- insert into public.user_roles (user_id, role, display_name, active)
-- select id, 'admin', 'مدیر دلیزا', true
-- from auth.users
-- where email = 'YOUR_ADMIN_EMAIL@example.com'
-- on conflict (user_id) do update set role = 'admin', display_name = excluded.display_name, active = true, updated_at = now();

-- برای ساخت فروشنده:
-- اول user فروشنده را در Authentication > Users بساز، بعد ایمیل زیر را عوض کن و اجرا کن.
-- insert into public.user_roles (user_id, role, display_name, active)
-- select id, 'staff', 'فروش دلیزا', true
-- from auth.users
-- where email = 'STAFF_EMAIL@example.com'
-- on conflict (user_id) do update set role = 'staff', display_name = excluded.display_name, active = true, updated_at = now();
