import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone(); // clone to avoid mutating original

  // ✅ If hostname is "calladoc.ae" (no www), redirect to "www.calladoc.ae"
  if (url.hostname === "calladoc.ae") {
    url.hostname = "www.calladoc.ae";

    // Force HTTPS if you want to ensure secure redirect
    url.protocol = "https:";

    // Return a permanent redirect (HTTP 308)
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

// ✅ Match all routes except _next, api, static files
export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
