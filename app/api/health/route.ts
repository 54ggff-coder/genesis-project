export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    status: "ok",
    service: "project-genesis",
    time: new Date().toISOString(),
  });
}
