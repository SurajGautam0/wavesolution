import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const canonicalHostFromEnv =
  process.env.NEXT_PUBLIC_CANONICAL_HOST?.trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "") || ""
const CANONICAL_HOST = canonicalHostFromEnv || "www.wavesolution.com.au"

function isLocalHost(hostname: string) {
  return hostname === "localhost" || hostname === "::1" || hostname.startsWith("127.")
}

export function middleware(request: NextRequest) {
  const requestHost =
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    request.nextUrl.host
  const hostname = requestHost.split(":")[0].toLowerCase()

  // Force a single canonical host to prevent duplicate indexing.
  if (!isLocalHost(hostname) && hostname !== CANONICAL_HOST) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.protocol = "https"
    redirectUrl.host = CANONICAL_HOST
    return NextResponse.redirect(redirectUrl, 308)
  }

  const path = request.nextUrl.pathname

  const isProtectedPath = path.startsWith("/admin") || path.startsWith("/dashboard")

  if (isProtectedPath) {
    const user = request.cookies.get("user")?.value

    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    try {
      const userData = JSON.parse(user)

      if (path.startsWith("/admin") && userData.role !== "admin") {
        return NextResponse.redirect(new URL("/dashboard", request.url))
      }

      if (path.startsWith("/dashboard") && userData.role === "admin") {
        return NextResponse.redirect(new URL("/admin", request.url))
      }
    } catch (error) {
      // If user data is invalid, redirect to login
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
