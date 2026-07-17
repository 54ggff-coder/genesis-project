create table public.skills (

id uuid primary key default gen_random_uuid(),

name text not null,

description text,

icon text,

created_at timestamptz default now()

);

alter table public.skills enable row level security;