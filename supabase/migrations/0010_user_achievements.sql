create table public.user_achievements (

id uuid primary key default gen_random_uuid(),

user_id uuid references profiles(id) on delete cascade,

achievement_id uuid references achievements(id),

earned_at timestamptz default now()

);

alter table public.user_achievements enable row level security;