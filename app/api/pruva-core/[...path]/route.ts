const BACKEND_BASE =
  process.env.PRUV_API_BASE_URL ||
  process.env.NEXT_PUBLIC_PRUV_API_BASE_URL ||
  "https://pruva-assist.onrender.com";

type RouteContext = {
  params: Promise<{
    path: string[];
  }>;
};

async function proxyRequest(request: Request, context: RouteContext) {
  const { path } = await context.params;
  const targetUrl = `${BACKEND_BASE}/pruva-core/${path.join("/")}`;

  const response = await fetch(targetUrl, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body:
      request.method === "GET" || request.method === "HEAD"
        ? undefined
        : await request.text(),
    cache: "no-store",
  });

  const text = await response.text();

  return new Response(text, {
    status: response.status,
    headers: {
      "Content-Type": response.headers.get("Content-Type") || "application/json",
    },
  });
}

export async function GET(request: Request, context: RouteContext) {
  return proxyRequest(request, context);
}

export async function POST(request: Request, context: RouteContext) {
  return proxyRequest(request, context);
}
