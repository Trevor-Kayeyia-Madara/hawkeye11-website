import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // In production you'd validate and send email or store to DB here.
    console.log('Contact form submitted', body);
    return NextResponse.json({ ok: true, message: 'Received' });
  } catch (err) {
    return NextResponse.json({ ok: false, message: 'Invalid request' }, { status: 400 });
  }
}
