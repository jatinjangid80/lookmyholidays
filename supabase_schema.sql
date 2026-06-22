-- 1. Create contact_enquiries table (For Bookings and General Enquiries)
create table if not exists public.contact_enquiries (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  phone text not null,
  email text not null,
  destination text,
  travel_date date,
  message text
);

-- Enable RLS
alter table public.contact_enquiries enable row level security;

-- RLS Policies for contact_enquiries
drop policy if exists "Allow public inserts" on public.contact_enquiries;
create policy "Allow public inserts" on public.contact_enquiries 
  for insert 
  with check (true);

drop policy if exists "Allow read access" on public.contact_enquiries;
create policy "Allow read access" on public.contact_enquiries 
  for select 
  using (true);


-- 2. Create searches table (For tracking search queries and parameters)
create table if not exists public.searches (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  destination text not null,
  check_in date,
  travellers text
);

-- Enable RLS
alter table public.searches enable row level security;

-- RLS Policies for searches
drop policy if exists "Allow public inserts" on public.searches;
create policy "Allow public inserts" on public.searches 
  for insert 
  with check (true);

drop policy if exists "Allow read access" on public.searches;
create policy "Allow read access" on public.searches 
  for select 
  using (true);


-- 3. Create newsletter_subscriptions table (For capturing newsletter emails)
create table if not exists public.newsletter_subscriptions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text not null unique
);

-- Enable RLS
alter table public.newsletter_subscriptions enable row level security;

-- RLS Policies for newsletter_subscriptions
drop policy if exists "Allow public inserts" on public.newsletter_subscriptions;
create policy "Allow public inserts" on public.newsletter_subscriptions 
  for insert 
  with check (true);

drop policy if exists "Allow read access" on public.newsletter_subscriptions;
create policy "Allow read access" on public.newsletter_subscriptions 
  for select 
  using (true);
