import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedHosts = new Set([
  "localhost",
  "127.0.0.1",
  "littletreefarmns.com",
  "www.littletreefarmns.com",
  "investment.littletreefarmns.com",
  "timber-investment.littletreefarmns.com",
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