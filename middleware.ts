import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

function isLocalHost(hostname: string) {
  return hostname === "localhost" || hostname === "::1" || hostname.startsWith("127.")
}

function makeCssNonBlocking(html: string): string {
  // Convert <link rel="stylesheet" href="..." ...> to preload with onload
  return html.replace(
    /<link\s+rel="stylesheet"\s+href="([^"]+)"([^>]*)\/?\s*>/gi,
    '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'"$2><noscript><link rel="stylesheet" href="$1"$2></noscript>'
  )
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

  const response = NextResponse.next()

  // Make CSS non-render-blocking for HTML responses
  const contentType = response.headers.get("content-type")
  if (contentType && contentType.includes("text/html")) {
    const body = response.body
    if (body) {
      const reader = body.getReader()
      const decoder = new TextDecoder()
      const encoder = new TextEncoder()
      const chunks: Uint8Array[] = []

      const transform = new TransformStream({
        transform(chunk, controller) {
          const html = decoder.decode(chunk, { stream: true })
          const modified = makeCssNonBlocking(html)
          controller.enqueue(encoder.encode(modified))
        },
        flush(controller) {
          controller.terminate()
        },
      })

      const transformedStream = body.pipeThrough(transform)
      return new Response(transformedStream, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      })
    }
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
