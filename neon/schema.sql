-- Schema do banco no Neon (Postgres puro).
--
-- Como rodar:
--   1. Neon Console > seu projeto > SQL Editor
--   2. Cole este arquivo e clique em "Run"
--   (ou via psql:  psql "$DATABASE_URL" -f neon/schema.sql)
--
-- É idempotente: pode rodar de novo sem apagar dados.
--
-- Diferente do Supabase, aqui não há RLS nem policies: o site acessa o banco
-- apenas server-side (nas API routes) usando a connection string, que nunca é
-- exposta ao navegador.

-- Confirmações de presença.
create table if not exists rsvps (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  name         text not null,
  phone        text,                              -- ex.: "+55 (11) 99999-9999"
  attending    boolean not null default false,
  guest_count  integer not null default 0,
  guests       jsonb not null default '[]'::jsonb, -- [{ "name": "...", "dietary": "..." }]
  own_dietary  text,
  message      text
);

-- Contribuições de presentes.
create table if not exists gift_contributions (
  id                  uuid primary key default gen_random_uuid(),
  created_at          timestamptz not null default now(),
  gift_id             text not null,          -- ex.: "barco"
  gift_name           text not null,          -- ex.: "Passeio de barco"
  amount              numeric not null,       -- valor em BRL, ex.: 1000
  name                text not null,          -- nome de quem presenteou
  note                text,                   -- bilhete (opcional)
  payment_method      text,                   -- "mercado_pago" | "pix" | "card"
  status              text not null default 'pending',  -- "pending" | "paid"
  provider_billing_id text,                   -- id da cobrança no AbacatePay
  paid_at             timestamptz             -- preenchido pelo webhook
);

-- Lista de convidados usada pelo lembrete de WhatsApp.
create table if not exists guests (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  name           text,
  phone          text,
  rsvp_confirmed boolean not null default false
);

-- Pedidos de salão (cabelo/maquiagem) recebidos pelo webhook do WhatsApp.
create table if not exists salon_requests (
  id         uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  phone      text,
  name       text,
  message    text
);
