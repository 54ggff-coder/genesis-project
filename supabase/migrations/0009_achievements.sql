create table public.achievements (

id uuid primary key default gen_random_uuid(),

title text,

description text,

xp integer default 0,

created_at timestamptz default now()

);

alter table public.achievements enable row level security;