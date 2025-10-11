import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;

  // Redirect if no "www" subdomain
  if (url.hostname === "calladoc.ae") {
    url.hostname = "www.calladoc.ae";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Apply only to site requests (not /_next, /api, etc.)
export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
