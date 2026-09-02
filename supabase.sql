create extension if not exists pgcrypto;
create table if not exists public.students(
 id uuid primary key default gen_random_uuid(), full_name text not null, father_name text,
 guardian_name text, phone text not null, email text, age integer, gender text, grade text,
 disability_code text, support_level text, address text, educational_needs text, notes text,
 medical_certificate boolean not null default false, status text not null default 'pending',
 created_at timestamptz not null default now());
create table if not exists public.admin_users(user_id uuid primary key references auth.users(id) on delete cascade);
create table if not exists public.news(id uuid primary key default gen_random_uuid(),title text not null,content text not null,published boolean default false,published_at timestamptz,created_at timestamptz default now());
create table if not exists public.gallery(id uuid primary key default gen_random_uuid(),title text,image_url text not null,alt_text text,created_at timestamptz default now());
alter table public.students enable row level security;
alter table public.admin_users enable row level security;
alter table public.news enable row level security;
alter table public.gallery enable row level security;
create or replace function public.is_admin() returns boolean language sql stable security definer set search_path=public as $$select exists(select 1 from public.admin_users where user_id=auth.uid())$$;
create policy "submit registration" on public.students for insert to anon,authenticated with check(true);
create policy "admin read" on public.students for select to authenticated using(public.is_admin());
create policy "admin update" on public.students for update to authenticated using(public.is_admin()) with check(public.is_admin());
create policy "published news" on public.news for select to anon,authenticated using(published=true);
create policy "admin news" on public.news for all to authenticated using(public.is_admin()) with check(public.is_admin());
create policy "public gallery" on public.gallery for select to anon,authenticated using(true);
create policy "admin gallery" on public.gallery for all to authenticated using(public.is_admin()) with check(public.is_admin());
