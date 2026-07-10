import { getSupabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { data, error } = await getSupabase()
    .from("gift_contributions")
    .insert({
      gift_id: body.giftId,
      gift_name: body.giftName,
      amount: body.amount,
      name: body.name,
      note: body.note,
      payment_method: body.method,
      status: "pending",
    })
    .select("id")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, id: data?.id });
}

export async function GET() {
  const { data, error } = await getSupabase()
    .from("gift_contributions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
