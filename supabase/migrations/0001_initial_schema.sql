create extension if not exists "pgcrypto";

create table public.profiles (

id uuid primary key references auth.users(id) on delete cascade,

email text unique not null,

full_name text,

username text unique,

avatar_url text,

country text,

city text,

birth_date date,

gender text,

bio text,

created_at timestamptz default now(),

updated_at timestamptz default now()

);

alter table public.profiles enable row level security;