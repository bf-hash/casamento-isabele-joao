-- Adiciona a coluna de telefone na tabela de RSVPs.
-- Rode este SQL no painel do Supabase: SQL Editor > New query > Run.
-- É idempotente: pode rodar de novo sem apagar dados.
--
-- IMPORTANTE: rode este SQL ANTES de publicar o site com o novo campo,
-- senão as confirmações de presença vão falhar até a coluna existir.

alter table public.rsvps
  add column if not exists phone text;  -- telefone com prefixo, ex.: "+55 (11) 99999-9999"
