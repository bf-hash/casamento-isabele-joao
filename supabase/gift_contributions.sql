-- Tabela para registrar as contribuições de presentes.
-- Rode este SQL no painel do Supabase: SQL Editor > New query > Run.
-- É idempotente: pode rodar de novo sem apagar dados.

create table if not exists public.gift_contributions (
  id                  uuid primary key default gen_random_uuid(),
  created_at          timestamptz not null default now(),
  gift_id             text not null,          -- ex.: "barco"
  gift_name           text not null,          -- ex.: "Passeio de barco"
  amount              numeric not null,       -- valor em BRL, ex.: 1000
  name                text not null,          -- nome de quem presenteou
  note                text,                   -- bilhete (opcional)
  payment_method      text,                   -- "pix" ou "card" (opcional)
  status              text not null default 'pending',  -- "pending" | "paid"
  provider_billing_id text,                   -- id da cobrança no AbacatePay
  paid_at             timestamptz             -- preenchido pelo webhook
);

-- Caso a tabela já exista de uma versão anterior, garante as colunas novas.
alter table public.gift_contributions
  add column if not exists provider_billing_id text,
  add column if not exists paid_at timestamptz;

-- Deixa a tabela protegida. O site grava usando a SERVICE ROLE KEY
-- (server-side, nas API routes), que ignora o RLS — então nenhuma
-- policy pública é necessária e ninguém consegue ler/escrever pelo
-- navegador.
alter table public.gift_contributions enable row level security;
