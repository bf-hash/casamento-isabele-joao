import { getSql } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name")?.trim().toLowerCase();

  if (!name) {
    return NextResponse.json({ exists: false });
  }

  try {
    const rows = (await getSql()`
      select name, attending from rsvps
      where name ilike ${name}
      limit 1
    `) as Array<{ name: string; attending: boolean }>;

    if (rows.length > 0) {
      return NextResponse.json({ exists: true, attending: rows[0].attending });
    }
  } catch {
    // se a checagem falhar, seguimos como se não existisse
  }

  return NextResponse.json({ exists: false });
}
