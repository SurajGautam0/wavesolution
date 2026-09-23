import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

function isLocalHost(hostname: string) {
  return hostname === "localhost" || hostname === "::1" || hostname.startsWith("127.")
}

export function middleware(request: NextRequest) {
  const requestHost =
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    request.nextUrl.host
  const hostname = requestHost.split(":")[0].toLowerCase()

  // Only redirect bare domain to www — skip Vercel preview URLs and localhost
  if (!isLocalHost(hostname) && hostname === "wavesolution.com.au") {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.protocol = "https"
    redirectUrl.host = "www.wavesolution.com.au"
    return NextResponse.redirect(redirectUrl, 308)
  }

  const path = request.nextUrl.pathname

  if (path === "/locations/sydney") {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = "/locations"
    redirectUrl.search = ""
    return NextResponse.redirect(redirectUrl, 308)
  }

  if (path === "/bond-cleaning-checklist.html") {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = "/blog/bond-cleaning-checklist"
    redirectUrl.search = ""
    return NextResponse.redirect(redirectUrl, 301)
  }

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
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/bond-cleaning-checklist.html", "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
