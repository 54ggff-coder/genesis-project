create table public.subscriptions (

id uuid primary key default gen_random_uuid(),

user_id uuid references profiles(id) on delete cascade,

plan text,

status text,

expires_at timestamptz,

created_at timestamptz default now()

);

alter table public.subscriptions enable row level security;