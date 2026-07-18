import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { calculateScore, categorize } from "@/lib/assessment";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SubmitBody = z.object({
  answers: z.record(z.string(), z.number().int().min(1).max(5)),
});

export async function POST(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: authData, error: authErr } = await supabase.auth.getUser();

  if (authErr || !authData.user) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const parsed = SubmitBody.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Invalid payload.",
        details: parsed.error.flatten(),
      },
      { status: 400 }
    );
  }

  const values = Object.values(parsed.data.answers);
  const result = calculateScore(values);
  const category = categorize(result.average);

  const { error } = await supabase.from("assessments").insert({
    user_id: authData.user.id,
    answers: parsed.data.answers,
    score: Math.round(result.average * 100) / 100,
  });

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    result: {
      total: result.total,
      average: Number(result.average.toFixed(2)),
      category,
      count: result.count,
    },
  });
}
