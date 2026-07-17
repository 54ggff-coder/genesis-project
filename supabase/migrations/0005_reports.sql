create table public.reports (

id uuid primary key default gen_random_uuid(),

user_id uuid references profiles(id) on delete cascade,

assessment_id uuid references assessments(id),

score numeric,

level text,

summary text,

strengths text[],

weaknesses text[],

recommendations text[],

created_at timestamptz default now()

);

alter table public.reports enable row level security;