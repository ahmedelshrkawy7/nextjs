export const dynamic = "force-dynamic";

export async function GET() {
  const date = new Date().toLocaleTimeString();

  return Response.json({
    time: date,
  });
}
