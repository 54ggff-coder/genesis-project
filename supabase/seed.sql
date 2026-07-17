-- =====================================
-- Project Genesis Database
-- Part 5 - Seed Data
-- =====================================

insert into public.assessments
(title,description,category)
values
(
'Genesis Core Assessment',
'Discover your strengths and hidden potential.',
'personality'
)
on conflict do nothing;

--------------------------------------------------

insert into public.skills(name,description)
values

('Leadership','Ability to lead and inspire others'),

('Communication','Ability to communicate clearly'),

('Problem Solving','Finding practical solutions'),

('Critical Thinking','Logical analysis'),

('Creativity','Generating new ideas'),

('Teamwork','Working effectively with others'),

('Self Discipline','Staying consistent'),

('Adaptability','Adjusting to change'),

('Learning','Learning new skills quickly'),

('Entrepreneurship','Business mindset'),

('Decision Making','Making effective decisions'),

('Emotional Intelligence','Understanding emotions'),

('Negotiation','Negotiating effectively'),

('Planning','Planning projects'),

('Innovation','Building new ideas')

on conflict (name) do nothing;

--------------------------------------------------

insert into public.subscription_plans
(name,price,duration_days,description)

values

(
'Free',
0,
3650,
'Basic assessment and dashboard'
),

(
'Premium Monthly',
9.99,
30,
'Unlimited reports and AI analysis'
),

(
'Premium Yearly',
79.99,
365,
'Best value annual subscription'
)

on conflict do nothing;

--------------------------------------------------

insert into public.daily_missions
(title,description,xp_reward)

values

(
'Complete Assessment',
'Finish one assessment today.',
50
),

(
'Update Profile',
'Complete your profile.',
20
),

(
'Read Your Report',
'Open your latest report.',
15
)

on conflict do nothing;

insert into public.questions
(
assessment_id,
question,
question_order,
weight
)

select

a.id,

q.question,

q.position,

1

from public.assessments a,

(

values

('I enjoy solving difficult problems.',1),

('I enjoy helping people.',2),

('I stay calm under pressure.',3),

('I like learning new things.',4),

('I prefer planning before acting.',5),

('I enjoy leading groups.',6),

('I work well with teams.',7),

('I enjoy building businesses.',8),

('I adapt quickly to change.',9),

('I finish what I start.',10)

) as q(question,position)

where a.title='Genesis Core Assessment';