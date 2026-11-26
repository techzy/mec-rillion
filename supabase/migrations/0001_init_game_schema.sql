-- Applied to the mec-rillion Supabase project on 2026-11-26.
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null check (username ~ '^[A-Za-z0-9_]{3,20}$'),
  created_at timestamptz not null default now()
);
create unique index profiles_username_lower on public.profiles (lower(username));
alter table public.profiles enable row level security;
create policy "profiles are public" on public.profiles for select using (true);
create policy "insert own profile" on public.profiles for insert to authenticated with check ((select auth.uid()) = id);
create policy "update own profile" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

create table public.daily_results (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null,
  idx smallint not null check (idx between 0 and 6),
  prompt_id text not null,
  started_at timestamptz not null default now(),
  answered_at timestamptz,
  answer text,
  points smallint check (points between 0 and 100),
  primary key (user_id, day, idx)
);
create index daily_results_day on public.daily_results (day);
alter table public.daily_results enable row level security;
create policy "read own daily" on public.daily_results for select to authenticated using ((select auth.uid()) = user_id);

create table public.pack_results (
  user_id uuid not null references auth.users(id) on delete cascade,
  pack_id text not null,
  chapter smallint not null,
  idx smallint not null,
  prompt_id text not null,
  answer text,
  points smallint not null check (points between 0 and 100),
  updated_at timestamptz not null default now(),
  primary key (user_id, pack_id, chapter, idx)
);
alter table public.pack_results enable row level security;
create policy "read own packs" on public.pack_results for select to authenticated using ((select auth.uid()) = user_id);

-- Server-held secret: only the Next.js server knows it, so results can only be written through the game API.
create schema if not exists private;
revoke all on schema private from public, anon, authenticated;
create table private.app_secret (id boolean primary key default true check (id), secret text not null);
insert into private.app_secret (secret) values (encode(extensions.gen_random_bytes(32), 'hex'));

create function private.check_secret(p text) returns void
language plpgsql security definer set search_path = '' as $$
begin
  if p is null or not exists (select 1 from private.app_secret s where s.secret = p) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if (select auth.uid()) is null then
    raise exception 'not signed in' using errcode = '42501';
  end if;
end $$;

create function public.daily_start(p_secret text, p_day date, p_idx int, p_prompt text)
returns public.daily_results
language plpgsql security definer set search_path = '' as $$
declare r public.daily_results; uid uuid := auth.uid();
begin
  perform private.check_secret(p_secret);
  insert into public.daily_results (user_id, day, idx, prompt_id)
  values (uid, p_day, p_idx, p_prompt)
  on conflict (user_id, day, idx) do nothing;
  update public.daily_results set points = 0, answered_at = now()
   where user_id = uid and day = p_day and idx = p_idx and points is null
     and started_at < now() - interval '28 seconds';
  select * into r from public.daily_results where user_id = uid and day = p_day and idx = p_idx;
  return r;
end $$;

create function public.daily_answer(p_secret text, p_day date, p_idx int, p_answer text, p_points int)
returns public.daily_results
language plpgsql security definer set search_path = '' as $$
declare r public.daily_results; uid uuid := auth.uid();
begin
  perform private.check_secret(p_secret);
  update public.daily_results set answer = p_answer, points = p_points, answered_at = now()
   where user_id = uid and day = p_day and idx = p_idx and points is null
     and started_at >= now() - interval '28 seconds';
  if not found then
    update public.daily_results set points = 0, answered_at = now()
     where user_id = uid and day = p_day and idx = p_idx and points is null;
  end if;
  select * into r from public.daily_results where user_id = uid and day = p_day and idx = p_idx;
  return r;
end $$;

create function public.pack_record(p_secret text, p_pack text, p_chapter int, p_idx int, p_prompt text, p_answer text, p_points int)
returns void
language plpgsql security definer set search_path = '' as $$
begin
  perform private.check_secret(p_secret);
  insert into public.pack_results (user_id, pack_id, chapter, idx, prompt_id, answer, points)
  values (auth.uid(), p_pack, p_chapter, p_idx, p_prompt, p_answer, p_points)
  on conflict (user_id, pack_id, chapter, idx) do update
    set answer = excluded.answer, points = excluded.points, updated_at = now()
    where public.pack_results.points < excluded.points;
end $$;

create function public.leaderboard_daily(p_day date)
returns table (username text, score int, answered int)
language sql stable security definer set search_path = '' as $$
  select p.username, sum(coalesce(d.points, 0))::int, count(d.points)::int
  from public.daily_results d join public.profiles p on p.id = d.user_id
  where d.day = p_day
  group by p.username
  order by 2 desc, max(d.answered_at) asc nulls last
  limit 100
$$;

create function public.leaderboard_alltime()
returns table (username text, score int, days int)
language sql stable security definer set search_path = '' as $$
  select p.username, sum(coalesce(d.points, 0))::int, count(distinct d.day)::int
  from public.daily_results d join public.profiles p on p.id = d.user_id
  group by p.username
  order by 2 desc
  limit 100
$$;

create function public.leaderboard_packs()
returns table (username text, score int, prompts int)
language sql stable security definer set search_path = '' as $$
  select p.username, sum(r.points)::int, count(*)::int
  from public.pack_results r join public.profiles p on p.id = r.user_id
  group by p.username
  order by 2 desc
  limit 100
$$;

revoke execute on all functions in schema public from public, anon;
grant execute on function public.leaderboard_daily(date), public.leaderboard_alltime(), public.leaderboard_packs() to anon, authenticated;
grant execute on function public.daily_start(text, date, int, text), public.daily_answer(text, date, int, text, int), public.pack_record(text, text, int, int, text, text, int) to authenticated;
revoke execute on function private.check_secret(text) from public, anon, authenticated;
