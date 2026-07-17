create table public.answers (

id uuid primary key default gen_random_uuid(),

user_id uuid references profiles(id) on delete cascade,

question_id uuid references questions(id) on delete cascade,

answer integer not null,

created_at timestamptz default now()

);

alter table public.answers enable row level security;