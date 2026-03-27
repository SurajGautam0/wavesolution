import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

import { businessInfo } from "@/lib/business-info"

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
    const body = await request.json()

    const name = body.name?.trim?.() || ""
    const email = body.email?.trim?.() || ""
    const phone = body.phone?.trim?.() || ""
    const subject = body.subject?.trim?.() || ""
    const message = body.message?.trim?.() || ""

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, subject, and message are required." },
        { status: 400 },
      )
    }

    const smtpEmail = process.env.SMTP_EMAIL || "qsurajgautam@gmail.com"

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpEmail,
        pass: process.env.SMTP_PASSWORD || "",
      },
    })

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone || "Not provided")
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
        <div style="background: linear-gradient(135deg, #0f172a 0%, #2563eb 100%); padding: 32px;">
          <p style="margin: 0; color: #bfdbfe; font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;">User Dashboard Support</p>
          <h1 style="margin: 12px 0 0; color: #ffffff; font-size: 26px; line-height: 1.2;">New support request from ${safeName}</h1>
        </div>
        <div style="padding: 32px;">
          <div style="background: #ffffff; border-radius: 14px; border: 1px solid #e2e8f0; padding: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 0 0 14px; color: #64748b; font-size: 13px; width: 140px;">Customer</td>
                <td style="padding: 0 0 14px; color: #0f172a; font-size: 14px; font-weight: 600;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 0 0 14px; color: #64748b; font-size: 13px;">Email</td>
                <td style="padding: 0 0 14px; color: #0f172a; font-size: 14px; font-weight: 600;"><a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 0 0 14px; color: #64748b; font-size: 13px;">Phone</td>
                <td style="padding: 0 0 14px; color: #0f172a; font-size: 14px; font-weight: 600;">${safePhone}</td>
              </tr>
              <tr>
                <td style="padding: 0 0 14px; color: #64748b; font-size: 13px;">Subject</td>
                <td style="padding: 0 0 14px; color: #0f172a; font-size: 14px; font-weight: 600;">${safeSubject}</td>
              </tr>
              <tr>
                <td style="padding: 0; color: #64748b; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 0; color: #334155; font-size: 14px; line-height: 1.7;">${safeMessage}</td>
              </tr>
            </table>
          </div>
        </div>
        <div style="padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0; color: #94a3b8; font-size: 12px;">Submitted from the WaveSolution user dashboard. Reply directly to continue the conversation with the customer.</p>
        </div>
      </div>
    `

    const textContent = `
WaveSolution Support Request

Customer: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject}

Message:
${message}
    `.trim()

    await transporter.sendMail({
      from: `"WaveSolution Support" <${smtpEmail}>`,
      to: businessInfo.email,
      replyTo: email,
      subject: `Support Request: ${subject}`,
      text: textContent,
      html: htmlContent,
    })

    return NextResponse.json({ success: true, message: "Support request sent successfully." })
  } catch (error: any) {
    console.error("Support email error:", error)

    return NextResponse.json(
      { success: false, message: error.message || "Failed to send support request." },
      { status: 500 },
    )
  }
}
