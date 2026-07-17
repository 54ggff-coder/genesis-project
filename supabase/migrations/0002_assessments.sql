create table public.assessments (

id uuid primary key default gen_random_uuid(),

title text not null,

description text,

category text,

is_active boolean default true,

created_at timestamptz default now()

);

alter table public.assessments enable row level security;