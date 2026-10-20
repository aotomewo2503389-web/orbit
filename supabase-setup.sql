-- Orbit by CU: database setup
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

-- 3. Example question (uncomment to try) --------------------------------
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
