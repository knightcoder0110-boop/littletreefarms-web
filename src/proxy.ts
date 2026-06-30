import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// The one canonical investment host. Alias hosts permanently redirect here.
const CANONICAL_HOST = "timber-investment.littletreefarmns.com";

// Legacy / alias investment hosts that should 308-redirect to the canonical host
// so old links and bookmarks consolidate onto a single domain (good for SEO).
const redirectHosts = new Set([
  "invest.littletreefarmns.com",
  "investment.littletreefarmns.com",
]);

// Hosts allowed to serve the site directly (no redirect).
const allowedHosts = new Set([
  "localhost",
  "127.0.0.1",
  "littletreefarmns.com",
  "www.littletreefarmns.com",
  CANONICAL_HOST,
]);

function normalizeHost(hostHeader: string | null): string {
  return (hostHeader ?? "").trim().toLowerCase().split(":")[0] ?? "";
}

function isAllowedHost(host: string): boolean {
  if (!host) {
    return true;
  }

  if (allowedHosts.has(host)) {
    return true;
  }

  if (host.endsWith(".vercel.app")) {
    return true;
  }

  return false;
}

export function proxy(request: NextRequest) {
  const host = normalizeHost(request.headers.get("host"));
  const { pathname } = request.nextUrl;

  // Permanently redirect known alias hosts to the canonical host, preserving the
  // path and query string so deep links keep working.
  if (redirectHosts.has(host)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = "https:";
    redirectUrl.hostname = CANONICAL_HOST;
    redirectUrl.port = "";
    return NextResponse.redirect(redirectUrl, 308);
  }

  if (pathname === "/not-allowed" || isAllowedHost(host)) {
    return NextResponse.next();
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = "/not-allowed";
  rewriteUrl.searchParams.set("host", host);

  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*$).*)"],
};