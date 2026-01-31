import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname

  // Check if the path is protected
  const isProtectedPath = path.startsWith("/admin") || path.startsWith("/dashboard")

  if (isProtectedPath) {
    // Get user data from localStorage (client-side)
    const user = request.cookies.get("user")?.value

    if (!user) {
      // Redirect to login if no user data
      return NextResponse.redirect(new URL("/login", request.url))
    }

    try {
      const userData = JSON.parse(user)

      // Check role-based access
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
  matcher: ["/admin/:path*", "/dashboard/:path*"],
} 