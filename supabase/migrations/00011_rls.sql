alter table profiles enable row level security;
alter table assessments enable row level security;
alter table questions enable row level security;
alter table answers enable row level security;
alter table reports enable row level security;
alter table skills enable row level security;
alter table user_skills enable row level security;
alter table subscriptions enable row level security;
alter table achievements enable row level security;
alter table user_achievements enable row level security;

create policy "Users can view their profile"
on profiles
for select
using (auth.uid() = id);

create policy "Users can update their profile"
on profiles
for update
using (auth.uid() = id);

create policy "Users can insert profile"
on profiles
for insert
with check (auth.uid() = id);

create policy "Anyone can read assessments"
on assessments
for select
using (true);

create policy "Anyone can read questions"
on questions
for select
using (true);

create policy "Users can manage answers"
on answers
for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can view reports"
on reports
for select
using (auth.uid() = user_id);

create policy "Users can manage skills"
on user_skills
for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Everyone can read achievements"
on achievements
for select
using (true);

create policy "Users can read their achievements"
on user_achievements
for select
using (auth.uid() = user_id);