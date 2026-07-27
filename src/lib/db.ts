import { neon } from "@neondatabase/serverless";

// Cliente do Neon (Postgres puro). Usa o driver serverless via HTTP, que
// funciona bem nas API routes da Vercel sem precisar gerenciar pool de
// conexões. A connection string vem das env vars que a integração do Neon
// com a Vercel configura automaticamente.
let _sql: ReturnType<typeof neon> | null = null;

export function getSql() {
  if (!_sql) {
    const url =
      process.env.DATABASE_URL ||
      process.env.POSTGRES_URL ||
      process.env.DATABASE_URL_UNPOOLED;

    if (!url) {
      throw new Error(
        "Connection string do Neon não encontrada. Defina DATABASE_URL (ou POSTGRES_URL) no ambiente."
      );
    }

    _sql = neon(url);
  }
  return _sql;
}
