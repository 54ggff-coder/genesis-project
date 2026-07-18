import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SignInBody = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const SignUpBody = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  fullName: z.string().min(2).max(80).optional(),
});

export async function POST(request: NextRequest) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const body = raw as { action?: string } | null;
  const action = body?.action ?? "signIn";

  const supabase = await createSupabaseServerClient();
  const origin = new URL(request.url).origin;

  if (action === "signIn") {
    const parsed = SignInBody.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid input.",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.auth.signInWithPassword(
      parsed.data
    );
    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 401 }
      );
    }
    return NextResponse.json({
      ok: true,
      user: {
        id: data.user?.id ?? null,
        email: data.user?.email ?? null,
      },
    });
  }

  if (action === "signUp") {
    const parsed = SignUpBody.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid input.",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        emailRedirectTo: `${origin}/dashboard`,
        data: parsed.data.fullName
          ? { full_name: parsed.data.fullName }
          : undefined,
      },
    });
    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json({ ok: true, userId: data.user?.id ?? null });
  }

  if (action === "signOut") {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json({ ok: true });
  }

  if (action === "me") {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 401 }
      );
    }
    return NextResponse.json({
      ok: true,
      user: data.user
        ? { id: data.user.id, email: data.user.email ?? null }
        : null,
    });
  }

  return NextResponse.json(
    { ok: false, error: `Unsupported action: ${action}` },
    { status: 400 }
  );
}
