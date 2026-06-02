import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const sitePassword = process.env.SITE_PASSWORD;

  // Fail closed: if no password is configured, block all access.
  if (!sitePassword) {
    return new NextResponse("Service Unavailable", { status: 503 });
  }

  const authHeader = req.headers.get("authorization");

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ", 2);

    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      // Split on the first colon only so passwords containing colons work.
      const colonIndex = decoded.indexOf(":");
      if (colonIndex !== -1) {
        const username = decoded.slice(0, colonIndex);
        const password = decoded.slice(colonIndex + 1);

        if (username === "reviewer" && password === sitePassword) {
          return NextResponse.next();
        }
      }
    }
  }

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Site Preview"' },
  });
}

export const config = {
  matcher:
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)",
};
