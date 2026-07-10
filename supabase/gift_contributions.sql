-- Tabela para registrar as contribuições de presentes.
-- Rode este SQL no painel do Supabase: SQL Editor > New query > Run.

create table if not exists public.gift_contributions (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  gift_id        text not null,          -- ex.: "barco"
  gift_name      text not null,          -- ex.: "Passeio de barco"
  amount         numeric not null,       -- valor em BRL, ex.: 1000
  name           text not null,          -- nome de quem presenteou
  note           text,                   -- bilhete (opcional)
  payment_method text,                   -- "pix" ou "card"
  status         text not null default 'pending'  -- "pending" | "paid"
);

-- Deixa a tabela protegida. O site grava usando a SERVICE ROLE KEY
-- (server-side, na API route), que ignora o RLS — então nenhuma
-- policy pública é necessária e ninguém consegue ler/escrever pelo
-- navegador.
alter table public.gift_contributions enable row level security;
