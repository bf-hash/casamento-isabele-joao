import { getSupabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { data, error } = await getSupabase().from("rsvps").insert({
    name: body.name,
    phone: body.phone,
    attending: body.attending,
    guest_count: body.guestCount,
    guests: body.guests,
    own_dietary: body.ownDietary,
    message: body.message,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function GET() {
  const { data, error } = await getSupabase()
    .from("rsvps")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
