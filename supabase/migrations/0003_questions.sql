create table public.questions (

id uuid primary key default gen_random_uuid(),

assessment_id uuid references assessments(id) on delete cascade,

question text not null,

question_order integer,

created_at timestamptz default now()

);

alter table public.questions enable row level security;