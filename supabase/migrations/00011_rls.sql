-- =====================================
-- Project Genesis Database
-- Part 3 - Row Level Security (RLS)
-- =====================================

-- Enable RLS

alter table public.profiles enable row level security;
alter table public.assessments enable row level security;
alter table public.questions enable row level security;
alter table public.answers enable row level security;
alter table public.skills enable row level security;
alter table public.user_skills enable row level security;
alter table public.reports enable row level security;
alter table public.goals enable row level security;
alter table public.achievements enable row level security;
alter table public.user_achievements enable row level security;
alter table public.daily_missions enable row level security;
alter table public.user_daily_missions enable row level security;
alter table public.notifications enable row level security;
alter table public.subscription_plans enable row level security;
alter table public.user_subscriptions enable row level security;
alter table public.feedback enable row level security;
alter table public.ai_reports enable row level security;

--------------------------------------------------
-- Profiles
--------------------------------------------------

create policy "profiles_select_own"

on public.profiles

for select

using (auth.uid() = id);

create policy "profiles_insert_own"

on public.profiles

for insert

with check (auth.uid() = id);

create policy "profiles_update_own"

on public.profiles

for update

using (auth.uid() = id);

--------------------------------------------------
-- Assessments
--------------------------------------------------

create policy "assessments_public"

on public.assessments

for select

using (true);

--------------------------------------------------
-- Questions
--------------------------------------------------

create policy "questions_public"

on public.questions

for select

using (true);

--------------------------------------------------
-- Skills
--------------------------------------------------

create policy "skills_public"

on public.skills

for select

using (true);

--------------------------------------------------
-- Answers
--------------------------------------------------

create policy "answers_owner"

on public.answers

for all

using (auth.uid() = user_id)

with check (auth.uid() = user_id);

--------------------------------------------------
-- User Skills
--------------------------------------------------

create policy "user_skills_owner"

on public.user_skills

for all

using (auth.uid() = user_id)

with check (auth.uid() = user_id);

--------------------------------------------------
-- Reports
--------------------------------------------------

create policy "reports_owner"

on public.reports

for all

using (auth.uid() = user_id)

with check (auth.uid() = user_id);

--------------------------------------------------
-- Goals
--------------------------------------------------

create policy "goals_owner"

on public.goals

for all

using (auth.uid() = user_id)

with check (auth.uid() = user_id);

--------------------------------------------------
-- User Achievements
--------------------------------------------------

create policy "user_achievements_owner"

on public.user_achievements

for select

using (auth.uid() = user_id);

--------------------------------------------------
-- Daily Missions
--------------------------------------------------

create policy "daily_missions_public"

on public.daily_missions

for select

using (true);

--------------------------------------------------
-- User Daily Missions
--------------------------------------------------

create policy "user_daily_missions_owner"

on public.user_daily_missions

for all

using (auth.uid() = user_id)

with check (auth.uid() = user_id);

--------------------------------------------------
-- Notifications
--------------------------------------------------

create policy "notifications_owner"

on public.notifications

for all

using (auth.uid() = user_id)

with check (auth.uid() = user_id);

--------------------------------------------------
-- Subscription Plans
--------------------------------------------------

create policy "subscription_plans_public"

on public.subscription_plans

for select

using (true);

--------------------------------------------------
-- User Subscriptions
--------------------------------------------------

create policy "user_subscriptions_owner"

on public.user_subscriptions

for all

using (auth.uid() = user_id)

with check (auth.uid() = user_id);

--------------------------------------------------
-- Feedback
--------------------------------------------------

create policy "feedback_owner"

on public.feedback

for all

using (auth.uid() = user_id)

with check (auth.uid() = user_id);

--------------------------------------------------
-- AI Reports
--------------------------------------------------

create policy "ai_reports_owner"

on public.ai_reports

for all

using (auth.uid() = user_id)

with check (auth.uid() = user_id);