-- Contact form storage for the StrengthHub Online website.
-- The website inserts rows using the public anon key from the browser, so RLS
-- must allow anonymous INSERTs while keeping the submissions private (no public
-- SELECT). Read the data from the Supabase dashboard or with the service role.

create table if not exists public.contact_submissions (
  id         uuid        primary key default gen_random_uuid(),
  created_at timestamptz not null    default now(),
  full_name  text        not null,
  email      text        not null,
  phone      text        not null,
  goals      text
);

alter table public.contact_submissions enable row level security;

-- Allow anyone (the website's anon key) to submit the form.
drop policy if exists "Anyone can submit a contact form" on public.contact_submissions;
create policy "Anyone can submit a contact form"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (true);

-- No SELECT/UPDATE/DELETE policy is defined, so submissions are not readable by
-- the anon or authenticated roles. Access them via the Supabase dashboard or the
-- service_role key only.
