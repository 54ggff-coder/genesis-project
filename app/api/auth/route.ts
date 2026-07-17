import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { ok: true, message: "API route not implemented yet" },
    { status: 200 }
  );
}

export async function POST(req: Request) {
  return NextResponse.json(
    { ok: true, message: "API route not implemented yet", body: await req.json().catch(() => null) },
    { status: 200 }
  );
}