create table public.user_skills (

id uuid primary key default gen_random_uuid(),

user_id uuid references profiles(id) on delete cascade,

skill_id uuid references skills(id) on delete cascade,

score numeric default 0,

created_at timestamptz default now()

);

alter table public.user_skills enable row level security;