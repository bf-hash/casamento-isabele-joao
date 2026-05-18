import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name")?.trim().toLowerCase();

  if (!name) {
    return NextResponse.json({ exists: false });
  }

  const { data } = await supabase
    .from("rsvps")
    .select("name, attending")
    .ilike("name", name)
    .limit(1);

  if (data && data.length > 0) {
    return NextResponse.json({ exists: true, attending: data[0].attending });
  }

  return NextResponse.json({ exists: false });
}
