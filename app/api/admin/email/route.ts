import { NextRequest, NextResponse } from "next/server"
import { sendEmail } from "@/lib/email-service"
import { verifyAdminIdToken } from "@/lib/verify-admin-token"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: NextRequest) {
  const authorization = request.headers.get("authorization") || ""
  const match = authorization.match(/^Bearer\s+(.+)$/i)
  const admin = match ? await verifyAdminIdToken(match[1]) : null
  if (!admin) {
    return NextResponse.json({ success: false, message: "Admin authentication required." }, { status: 401 })
  }

  try {
    const payload = await request.json()
    const to = typeof payload.to === "string" ? payload.to.trim() : ""
    const subject = typeof payload.subject === "string" ? payload.subject.trim() : ""
    const body = typeof payload.body === "string" ? payload.body.trim() : ""

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to) || to.length > 254) {
      return NextResponse.json({ success: false, message: "Enter a valid recipient email." }, { status: 400 })
    }
    if (!subject || subject.length > 180 || !body || body.length > 12_000) {
      return NextResponse.json({ success: false, message: "Subject and message are required and must fit the limits." }, { status: 400 })
    }

    const html = `<div style="font-family:Arial,sans-serif;white-space:pre-wrap;line-height:1.6">${escapeHtml(body)}</div>`
    const result = await sendEmail({ to, subject, body, html })
    if (!result.success) {
      return NextResponse.json({ success: false, message: result.error || "Email could not be sent." }, { status: 502 })
    }

    return NextResponse.json({ success: true, messageId: result.messageId, sentBy: admin.email })
  } catch {
    return NextResponse.json({ success: false, message: "Invalid email request." }, { status: 400 })
  }
}
