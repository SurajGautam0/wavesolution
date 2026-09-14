import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, address, preferredDate, notes, service, packageSize, frequency, includeDeepClean } = body

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL || "qsurajgautam@gmail.com",
        pass: process.env.SMTP_PASSWORD || "",
      },
    })

    const formattedDate = preferredDate
      ? new Date(preferredDate).toLocaleString("en-AU", {
          dateStyle: "full",
          timeStyle: "short",
          timeZone: "Australia/Brisbane",
        })
      : "Not specified"

    // Email content
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #333366 0%, #4dd0e2 100%); padding: 32px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">🧹 New Booking Request</h1>
          <p style="color: #ffffff; margin: 8px 0 0; font-size: 14px;">WaveSolution — Gold Coast</p>
        </div>
        
        <div style="padding: 32px;">
          <h2 style="color: #333366; font-size: 18px; margin: 0 0 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">📋 Service Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; width: 140px;">Service Type</td>
              <td style="padding: 10px 0; color: #333366; font-size: 14px; font-weight: 600; text-transform: capitalize;">${service} Cleaning</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Property Size</td>
              <td style="padding: 10px 0; color: #333366; font-size: 14px; font-weight: 600;">${packageSize}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Frequency</td>
              <td style="padding: 10px 0; color: #333366; font-size: 14px; font-weight: 600; text-transform: capitalize;">${frequency}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Deep Clean Add-on</td>
              <td style="padding: 10px 0; color: #333366; font-size: 14px; font-weight: 600;">${includeDeepClean ? "✅ Yes" : "❌ No"}</td>
            </tr>
          </table>

          <h2 style="color: #333366; font-size: 18px; margin: 28px 0 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">👤 Customer Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; width: 140px;">Name</td>
              <td style="padding: 10px 0; color: #333366; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Phone</td>
              <td style="padding: 10px 0; color: #333366; font-size: 14px; font-weight: 600;"><a href="tel:${phone}" style="color: #4dd0e2; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; color: #333366; font-size: 14px; font-weight: 600;"><a href="mailto:${email}" style="color: #4dd0e2; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Address</td>
              <td style="padding: 10px 0; color: #333366; font-size: 14px; font-weight: 600;">${address}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Preferred Date</td>
              <td style="padding: 10px 0; color: #333366; font-size: 14px; font-weight: 600;">${formattedDate}</td>
            </tr>
            ${notes ? `
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; vertical-align: top;">Notes</td>
              <td style="padding: 10px 0; color: #333366; font-size: 14px; font-weight: 600;">${notes}</td>
            </tr>
            ` : ""}
          </table>
        </div>

        <div style="background: #f1f5f9; padding: 20px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 12px; margin: 0;">This booking was submitted via wavesolution.com.au</p>
        </div>
      </div>
    `

    const textContent = `
New Booking Request — WaveSolution

SERVICE DETAILS
- Service: ${service} Cleaning
- Property Size: ${packageSize}
- Frequency: ${frequency}
- Deep Clean: ${includeDeepClean ? "Yes" : "No"}

CUSTOMER DETAILS
- Name: ${name}
- Phone: ${phone}
- Email: ${email}
- Address: ${address}
- Preferred Date: ${formattedDate}
${notes ? `- Notes: ${notes}` : ""}
    `.trim()

    // Send notification to business owner
    await transporter.sendMail({
      from: `"WaveSolution Booking" <${process.env.SMTP_EMAIL || "qsurajgautam@gmail.com"}>`,
      to: "susanttimalcena@gmail.com",
      replyTo: email,
      subject: `New Booking: ${service} cleaning — ${name}`,
      text: textContent,
      html: htmlContent,
    })

    // Send confirmation to customer
    const customerHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #333366 0%, #4dd0e2 100%); padding: 32px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">✅ Booking Received!</h1>
          <p style="color: #ffffff; margin: 8px 0 0; font-size: 14px;">WaveSolution — Gold Coast</p>
        </div>
        
        <div style="padding: 32px;">
          <p style="color: #333366; font-size: 16px; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
          <p style="color: #475569; font-size: 14px; line-height: 1.6;">Thank you for your booking request! We've received your details and our team will get back to you within <strong>15 minutes</strong> with a personalised quote.</p>
          
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h2 style="color: #333366; font-size: 16px; margin: 0 0 16px;">Your Booking Summary</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Service</td>
                <td style="padding: 8px 0; color: #333366; font-size: 14px; font-weight: 600; text-transform: capitalize;">${service} Cleaning</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Property Size</td>
                <td style="padding: 8px 0; color: #333366; font-size: 14px; font-weight: 600;">${packageSize}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Frequency</td>
                <td style="padding: 8px 0; color: #333366; font-size: 14px; font-weight: 600; text-transform: capitalize;">${frequency}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Preferred Date</td>
                <td style="padding: 8px 0; color: #333366; font-size: 14px; font-weight: 600;">${formattedDate}</td>
              </tr>
            </table>
          </div>

          <p style="color: #475569; font-size: 14px; line-height: 1.6;">If you have any questions, feel free to reply to this email or call us.</p>
          <p style="color: #475569; font-size: 14px; line-height: 1.6;">Best regards,<br/><strong>WaveSolution Team</strong></p>
        </div>

        <div style="background: #f1f5f9; padding: 20px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 12px; margin: 0;">WaveSolution — Professional Cleaning Services, Gold Coast</p>
          <p style="color: #64748b; font-size: 12px; margin: 4px 0 0;"><a href="https://wavesolution.com.au" style="color: #4dd0e2;">wavesolution.com.au</a></p>
        </div>
      </div>
    `

    if (email) {
      await transporter.sendMail({
        from: `"WaveSolution" <${process.env.SMTP_EMAIL || "qsurajgautam@gmail.com"}>`,
        to: email,
        subject: `Booking Confirmed — WaveSolution`,
        html: customerHtml,
      })
    }

    return NextResponse.json({ success: true, message: "Booking sent successfully" })
  } catch (error: any) {
    console.error("Email send error:", error)
    return NextResponse.json(
      { success: false, message: error.message || "Failed to send booking email" },
      { status: 500 }
    )
  }
}
