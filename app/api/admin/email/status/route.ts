import { NextRequest, NextResponse } from "next/server"
import { testEmailConnection } from "@/lib/email-service"
import { verifyAdminIdToken } from "@/lib/verify-admin-token"

export async function GET(request: NextRequest) {
  const authorization = request.headers.get("authorization") || ""
  const match = authorization.match(/^Bearer\s+(.+)$/i)
  const admin = match ? await verifyAdminIdToken(match[1]) : null
  if (!admin) {
    return NextResponse.json({ connected: false, error: "Admin authentication required." }, { status: 401 })
  }

  const result = await testEmailConnection()
  return NextResponse.json(result, { status: result.connected ? 200 : 503 })
}
