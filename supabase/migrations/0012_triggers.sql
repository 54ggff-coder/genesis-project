create or replace function update_updated_at_column()

returns trigger

language plpgsql

as $$

begin

new.updated_at = now();

return new;

end;

$$;

create trigger update_profiles_updated_at

before update

on profiles

for each row

execute procedure update_updated_at_column();