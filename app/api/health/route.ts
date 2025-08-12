export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function GET() {
  return Response.json(
    { status: "ok", service: "durtyseedz-api" },
    { status: 200, headers: { "Access-Control-Allow-Origin": "*" } }
  );
}
