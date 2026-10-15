import { NextRequest, NextResponse } from "next/server"
import { businessInfo } from "@/lib/business-info"
import { sendEmail } from "@/lib/email-service"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()
    const type = payload.type === "testimonial" || payload.type === "newsletter" ? payload.type : "contact"
    const name = typeof payload.name === "string" ? payload.name.trim().slice(0, 120) : ""
    const email = typeof payload.email === "string" ? payload.email.trim().slice(0, 254) : ""
    const subject = typeof payload.subject === "string" ? payload.subject.trim().slice(0, 180) : ""
    const message = typeof payload.message === "string" ? payload.message.trim().slice(0, 5000) : ""
    const phone = typeof payload.phone === "string" ? payload.phone.trim().slice(0, 50) : ""

    if ((type !== "newsletter" && (!name || !message)) ||
      (type === "newsletter" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ||
      (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
      return NextResponse.json({ success: false, message: "Please provide a name and valid message details." }, { status: 400 })
    }

    const title = type === "testimonial"
      ? "New customer review for approval"
      : type === "newsletter"
        ? "New newsletter subscriber"
        : subject || "New website enquiry"
    const details = [
      `Type: ${type === "testimonial" ? "Customer review" : type === "newsletter" ? "Newsletter subscription" : "Website enquiry"}`,
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
      phone ? `Phone: ${phone}` : "",
      subject && type === "contact" ? `Subject: ${subject}` : "",
      `Message:\n${message}`,
    ].filter(Boolean).join("\n")

    const result = await sendEmail({
      to: businessInfo.notificationEmails,
      subject: `[Wave Solution] ${title}`,
      body: details,
      html: `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#1e293b"><h2>${escapeHtml(title)}</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p>${email ? `<p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>` : ""}${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}${subject && type === "contact" ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}<p><strong>Message:</strong></p><p style="white-space:pre-wrap">${escapeHtml(message)}</p></div>`,
      ...(email ? { replyTo: email } : {}),
    })

    if (!result.success) {
      return NextResponse.json({ success: false, message: "Notification email could not be sent." }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Enquiry notification failed", error)
    return NextResponse.json({ success: false, message: "Could not send enquiry notification." }, { status: 500 })
  }
}
