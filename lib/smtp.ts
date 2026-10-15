import nodemailer from "nodemailer"

/** Build a Nodemailer transport from private environment settings. */
export function createSmtpTransport() {
  const smtpEmail = process.env.SMTP_EMAIL
  const smtpUser = process.env.SMTP_USER || smtpEmail
  const smtpPassword = process.env.SMTP_PASSWORD

  if (!smtpEmail || !smtpUser || !smtpPassword) {
    throw new Error("Email is not configured. Set SMTP_EMAIL, SMTP_USER (if required), and SMTP_PASSWORD.")
  }

  const auth = { user: smtpUser, pass: smtpPassword }
  const host = process.env.SMTP_HOST

  if (!host || host === "smtp.gmail.com") {
    return nodemailer.createTransport({ service: "gmail", auth })
  }

  const port = Number(process.env.SMTP_PORT || 587)
  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth,
  })
}

export function getSmtpSender() {
  const smtpEmail = process.env.SMTP_EMAIL
  if (!smtpEmail) throw new Error("Set SMTP_EMAIL to your verified sender address.")
  return smtpEmail
}
