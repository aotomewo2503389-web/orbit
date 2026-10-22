-- Orbit by SLAWN: database setup
-- Run once in Supabase: SQL Editor -> New query -> paste -> Run.
-- Safe to run again; it won't duplicate anything.

-- 1. Past questions ------------------------------------------------------
-- One row per question. `options` is a JSON array; exactly one option has "ok": true.
-- Wrong options carry a mistake tag ("tag") and a short reason ("why").
create table if not exists public.questions (
  id          text primary key,                                   -- e.g. 'PHY211-001'
  course      text not null,                                      -- e.g. 'PHY211' (must match a course code in the app)
  topic       text not null default 'General',
  prompt      text not null,
  d           smallint not null default 2 check (d between 1 and 3),  -- 1 easy, 2 standard, 3 hard
  options     jsonb not null check (jsonb_typeof(options) = 'array'),
  explain     text not null default '',                           -- the worked answer
  created_at  timestamptz not null default now()
);

create index if not exists questions_course_idx on public.questions (course);

alter table public.questions enable row level security;

drop policy if exists "Signed-in users can read questions" on public.questions;
create policy "Signed-in users can read questions"
  on public.questions for select to authenticated
  using (true);
-- No insert/update/delete policies on purpose: add questions from the Supabase
-- dashboard (Table Editor) or SQL Editor, never from the browser.

-- 2. Per-user progress ---------------------------------------------------
-- One row per signed-in user holding their attempts, mistake tags and settings.
create table if not exists public.progress (
  user_id     uuid primary key references auth.users (id) on delete cascade,
  data        jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);

alter table public.progress enable row level security;

drop policy if exists "Users read their own progress" on public.progress;
create policy "Users read their own progress"
  on public.progress for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users create their own progress" on public.progress;
create policy "Users create their own progress"
  on public.progress for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users update their own progress" on public.progress;
create policy "Users update their own progress"
  on public.progress for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- 3. Short-code challenges -----------------------------------------------
-- Challenge codes are shareable, but match rows are visible only to participants.
create table if not exists public.challenge_matches (
  id                  uuid primary key default gen_random_uuid(),
  creator_request_id  uuid not null,
  code                text not null check (code ~ '^[A-Z0-9]{4}$'),
  creator_user_id     uuid not null references auth.users (id) on delete cascade,
  opponent_user_id    uuid references auth.users (id) on delete set null,
  course              text not null,
  seed                integer not null check (seed between 1 and 1679615),
  question_count      smallint not null check (question_count between 1 and 100),
  difficulty          text not null check (difficulty in ('mixed', 'easy', 'standard', 'hard')),
  timer_seconds       integer not null check (timer_seconds between 0 and 3600),
  creator_score       smallint not null check (creator_score between 0 and question_count),
  opponent_score      smallint check (opponent_score between 0 and question_count),
  creator_name        text not null default 'Friend',
  opponent_name       text,
  status              text not null default 'open' check (status in ('open', 'playing', 'completed')),
  created_at          timestamptz not null default now(),
  completed_at        timestamptz,
  unique (creator_user_id, creator_request_id)
);

create unique index if not exists challenge_matches_active_code_idx
  on public.challenge_matches (code) where status in ('open', 'playing');
create index if not exists challenge_matches_expiry_idx
  on public.challenge_matches (created_at) where status in ('open', 'playing');

alter table public.challenge_matches enable row level security;
drop policy if exists "Challenge participants can read matches" on public.challenge_matches;
create policy "Challenge participants can read matches"
  on public.challenge_matches for select to authenticated
  using ((select auth.uid()) = creator_user_id or (select auth.uid()) = opponent_user_id);
revoke all on public.challenge_matches from anon, authenticated;
grant select on public.challenge_matches to authenticated;

create table if not exists public.challenge_join_attempts (
  user_id uuid not null references auth.users (id) on delete cascade,
  attempted_at timestamptz not null default now()
);
create index if not exists challenge_join_attempts_user_time_idx
  on public.challenge_join_attempts (user_id, attempted_at desc);
alter table public.challenge_join_attempts enable row level security;
revoke all on public.challenge_join_attempts from anon, authenticated;

create or replace function public.orbit_create_challenge(
  p_request_id uuid,
  p_code text,
  p_course text,
  p_seed integer,
  p_question_count smallint,
  p_difficulty text,
  p_timer_seconds integer,
  p_creator_score smallint,
  p_creator_name text
) returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  owner_id uuid := auth.uid();
  match_id uuid;
  saved_code text;
begin
  if owner_id is null then raise exception 'Sign in to create a challenge'; end if;
  if p_request_id is null or p_code !~ '^[A-Z0-9]{4}$'
    or p_course !~ '^[A-Z0-9]{3,10}$'
    or p_seed not between 1 and 1679615
    or p_question_count not between 1 and 100
    or p_difficulty not in ('mixed', 'easy', 'standard', 'hard')
    or p_timer_seconds not between 0 and 3600
    or p_creator_score not between 0 and p_question_count then
    raise exception 'Invalid challenge details';
  end if;

  perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtext(owner_id::text || p_request_id::text));
  select id, code into match_id, saved_code
    from public.challenge_matches
    where creator_user_id = owner_id and creator_request_id = p_request_id;
  if found then
    return pg_catalog.jsonb_build_object('id', match_id, 'code', saved_code);
  end if;

  delete from public.challenge_matches
    where status in ('open', 'playing') and created_at < now() - interval '30 days';

  insert into public.challenge_matches (
    creator_request_id, code, creator_user_id, course, seed, question_count,
    difficulty, timer_seconds, creator_score, creator_name
  ) values (
    p_request_id, p_code, owner_id, p_course, p_seed, p_question_count,
    p_difficulty, p_timer_seconds, p_creator_score,
    pg_catalog.left(pg_catalog.regexp_replace(coalesce(p_creator_name, ''), '[^[:alnum:] ]', '', 'g'), 24)
  )
  on conflict (code) where status in ('open', 'playing') do nothing
  returning id into match_id;

  if match_id is null then return null; end if;
  return pg_catalog.jsonb_build_object('id', match_id, 'code', p_code);
end;
$$;

create or replace function public.orbit_join_challenge(
  p_code text,
  p_opponent_name text
) returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  owner_id uuid := auth.uid();
  challenge public.challenge_matches%rowtype;
  recent_attempts integer;
begin
  if owner_id is null then raise exception 'Sign in to join a challenge'; end if;

  perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtext(owner_id::text || 'orbit-challenge-join'));
  delete from public.challenge_join_attempts
    where user_id = owner_id and attempted_at < now() - interval '1 day';
  select count(*) into recent_attempts from public.challenge_join_attempts
    where user_id = owner_id and attempted_at > now() - interval '10 minutes';
  if recent_attempts >= 10 then raise exception 'Too many code attempts. Wait a few minutes and try again'; end if;
  insert into public.challenge_join_attempts (user_id) values (owner_id);

  if p_code is null or p_code !~ '^[A-Z0-9]{4}$' then return null; end if;

  update public.challenge_matches
    set opponent_user_id = owner_id,
        opponent_name = pg_catalog.left(pg_catalog.regexp_replace(coalesce(p_opponent_name, ''), '[^[:alnum:] ]', '', 'g'), 24),
        status = 'playing'
    where code = p_code and creator_user_id <> owner_id
      and (status = 'open' or (status = 'playing' and opponent_user_id = owner_id))
    returning * into challenge;

  if not found then return null; end if;
  return pg_catalog.jsonb_build_object(
    'id', challenge.id,
    'course', challenge.course,
    'seed', challenge.seed,
    'question_count', challenge.question_count,
    'difficulty', challenge.difficulty,
    'timer_seconds', challenge.timer_seconds,
    'creator_score', challenge.creator_score,
    'creator_name', challenge.creator_name
  );
end;
$$;

create or replace function public.orbit_submit_challenge_score(
  p_match_id uuid,
  p_score smallint,
  p_opponent_name text
) returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  owner_id uuid := auth.uid();
  challenge public.challenge_matches%rowtype;
begin
  if owner_id is null then raise exception 'Sign in to submit a challenge result'; end if;
  select * into challenge from public.challenge_matches
    where id = p_match_id and opponent_user_id = owner_id for update;
  if not found then raise exception 'Challenge result could not be found'; end if;

  if challenge.status = 'completed' then
    if challenge.opponent_score = p_score then
      return pg_catalog.to_jsonb(challenge);
    end if;
    raise exception 'A different result has already been submitted';
  end if;
  if challenge.status <> 'playing' or p_score not between 0 and challenge.question_count then
    raise exception 'Invalid challenge result';
  end if;

  update public.challenge_matches
    set opponent_score = p_score,
        opponent_name = pg_catalog.left(pg_catalog.regexp_replace(coalesce(p_opponent_name, challenge.opponent_name, ''), '[^[:alnum:] ]', '', 'g'), 24),
        status = 'completed',
        completed_at = now()
    where id = challenge.id
    returning * into challenge;
  return pg_catalog.to_jsonb(challenge);
end;
$$;

revoke all on function public.orbit_create_challenge(uuid, text, text, integer, smallint, text, integer, smallint, text) from public, anon;
revoke all on function public.orbit_join_challenge(text, text) from public, anon;
revoke all on function public.orbit_submit_challenge_score(uuid, smallint, text) from public, anon;
grant execute on function public.orbit_create_challenge(uuid, text, text, integer, smallint, text, integer, smallint, text) to authenticated;
grant execute on function public.orbit_join_challenge(text, text) to authenticated;
grant execute on function public.orbit_submit_challenge_score(uuid, smallint, text) to authenticated;

-- 4. Example question (uncomment to try) --------------------------------
-- insert into public.questions (id, course, topic, prompt, d, options, explain) values (
--   'PHY211-001', 'PHY211', 'Electrostatics',
--   'What is the magnitude of the electric field 2.0 m from a point charge of 8.0 nC? (k = 9.0 × 10⁹ N m² C⁻²)',
--   2,
--   '[
--     {"t": "18 N/C", "ok": true},
--     {"t": "36 N/C", "tag": "Forgot to square r", "why": "You divided by r once. The field goes as 1/r², so divide by 4 m²."},
--     {"t": "72 N/C", "tag": "Left out the distance", "why": "72 is just kq. The field still has to be divided by r²."}
--   ]'::jsonb,
--   'E = kq/r² = (9.0 × 10⁹)(8.0 × 10⁻⁹)/(2.0)² = 72/4 = 18 N/C.'
-- );
