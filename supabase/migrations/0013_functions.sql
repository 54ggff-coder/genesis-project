create or replace function public.user_total_score(

user_uuid uuid

)

returns numeric

language sql

stable

as $$

select

coalesce(sum(score),0)

from user_skills

where user_id=user_uuid;

$$;