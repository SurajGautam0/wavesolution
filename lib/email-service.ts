// Gmail/SMTP Email Service for Admin Dashboard
// Allows sending partnership emails directly from admin panel

import nodemailer from 'nodemailer'

export interface EmailOptions {
  to: string
  subject: string
  body: string
  html?: string
  from?: string
  replyTo?: string
}

export interface SentEmailRecord {
  id: string
  to: string
  subject: string
  templateUsed?: string
  sentAt: Date
  status: 'sent' | 'failed'
  errorMessage?: string
}

/**
 * Send email via SMTP (Gmail)
 */
export async function sendEmail(options: EmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    // Validate environment variables
    const smtpEmail = process.env.SMTP_EMAIL
    const smtpPassword = process.env.SMTP_PASSWORD

    if (!smtpEmail || !smtpPassword) {
      throw new Error('SMTP credentials not configured. Please set SMTP_EMAIL and SMTP_PASSWORD in environment variables.')
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpEmail,
        pass: smtpPassword
      }
    })

    // Prepare email
    const mailOptions = {
      from: options.from || `Wave Solution <${smtpEmail}>`,
      to: options.to,
      subject: options.subject,
      text: options.body,
      html: options.html || options.body.replace(/\n/g, '<br>'),
      replyTo: options.replyTo || smtpEmail
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    return {
      success: true,
      messageId: info.messageId
    }
  } catch (error: any) {
    console.error('Email sending error:', error)
    return {
      success: false,
      error: error.message || 'Failed to send email'
    }
  }
}

/**
 * Send partnership email using template
 */
export async function sendPartnershipEmail(
  recipientEmail: string,
  recipientName: string,
  businessName: string,
  templateSubject: string,
  templateBody: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  
  // Convert template body to HTML for better formatting
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      ${templateBody.split('\n').map(line => {
        if (line.trim().startsWith('•')) {
          return `<li style="margin: 8px 0;">${line.trim().substring(1).trim()}</li>`
        } else if (line.trim()) {
          return `<p style="margin: 12px 0; line-height: 1.6;">${line.trim()}</p>`
        }
        return '<br>'
      }).join('')}
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; color: #6b7280; font-size: 12px;">
          This email was sent from Wave Solution's partnership outreach system.
        </p>
      </div>
    </div>
  `

  return sendEmail({
    to: recipientEmail,
    subject: templateSubject,
    body: templateBody,
    html: htmlBody
  })
}

/**
 * Test SMTP connection
 */
export async function testEmailConnection(): Promise<{ connected: boolean; email?: string; error?: string }> {
  try {
    const smtpEmail = process.env.SMTP_EMAIL
    const smtpPassword = process.env.SMTP_PASSWORD

    if (!smtpEmail || !smtpPassword) {
      return {
        connected: false,
        error: 'SMTP credentials not configured'
      }
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpEmail,
        pass: smtpPassword
      }
    })

    // Verify connection
    await transporter.verify()

    return {
      connected: true,
      email: smtpEmail
    }
  } catch (error: any) {
    return {
      connected: false,
      error: error.message || 'Connection test failed'
    }
  }
}

/**
 * Send test email
 */
export async function sendTestEmail(toEmail: string): Promise<{ success: boolean; error?: string }> {
  const testSubject = '✅ Wave Solution Admin - Email Test'
  const testBody = `Hi there,

This is a test email from your Wave Solution admin dashboard!

If you're seeing this, your Gmail integration is working perfectly. You can now:
• Send partnership emails directly from the dashboard
• Use pre-built email templates
• Track all sent emails
• Automate follow-ups

Your backlink outreach just got 10X easier! 🚀

Best regards,
Wave Solution Admin System`

  return sendEmail({
    to: toEmail,
    subject: testSubject,
    body: testBody
  })
}

/**
 * Bulk send emails (for campaigns)
 */
export async function sendBulkEmails(
  emails: Array<{
    to: string
    subject: string
    body: string
  }>,
  delayMs: number = 2000 // Delay between emails to avoid spam filters
): Promise<Array<{ to: string; success: boolean; error?: string }>> {
  
  const results = []

  for (const email of emails) {
    const result = await sendEmail(email)
    results.push({
      to: email.to,
      success: result.success,
      error: result.error
    })

    // Wait before sending next email
    if (delayMs > 0) {
      await new Promise(resolve => setTimeout(resolve, delayMs))
    }
  }

  return results
}

/**
 * Format email body with better styling
 */
export function formatEmailBody(body: string): string {
  // Convert plain text to HTML with better formatting
  let html = '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1f2937;">'
  
  const lines = body.split('\n')
  let inList = false

  lines.forEach(line => {
    const trimmed = line.trim()
    
    if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
      if (!inList) {
        html += '<ul style="margin: 15px 0; padding-left: 25px;">'
        inList = true
      }
      html += `<li style="margin: 8px 0; line-height: 1.6;">${trimmed.substring(1).trim()}</li>`
    } else {
      if (inList) {
        html += '</ul>'
        inList = false
      }
      
      if (trimmed.length > 0) {
        // Check if it's a greeting or closing
        if (trimmed.match(/^(Hi|Hello|Dear|Best|Regards|Cheers|Thanks)/i)) {
          html += `<p style="margin: 15px 0; line-height: 1.6; font-weight: 500;">${trimmed}</p>`
        } else {
          html += `<p style="margin: 12px 0; line-height: 1.6;">${trimmed}</p>`
        }
      } else {
        html += '<br>'
      }
    }
  })

  if (inList) {
    html += '</ul>'
  }

  html += '</div>'
  return html
}
