"use client"

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { Clock3, Loader2, Mail, MessageCircle, PhoneCall, Send, ShieldCheck } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { businessInfo } from "@/lib/business-info"
import { saveContact } from "@/lib/firebase-service"

type DashboardSupportPanelProps = {
  user?: {
    name?: string
    email?: string
  } | null
}

type SupportFormState = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const fieldClassName =
  "h-11 rounded-lg border-slate-300 bg-white text-sm focus-visible:border-[#333365] focus-visible:ring-2 focus-visible:ring-[#333365]/15 focus-visible:ring-offset-0"

function createInitialFormState(user?: DashboardSupportPanelProps["user"]): SupportFormState {
  return {
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    subject: "",
    message: "",
  }
}

export function DashboardSupportPanel({ user }: DashboardSupportPanelProps) {
  const [formData, setFormData] = useState<SupportFormState>(() => createInitialFormState(user))
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setFormData((current) => ({
      ...current,
      name: current.name || user?.name || "",
      email: current.email || user?.email || "",
    }))
  }, [user?.email, user?.name])

  const whatsappHref = useMemo(() => {
    const whatsappNumber = businessInfo.phoneE164.replace(/\D/g, "")
    const prefilledMessage = encodeURIComponent(
      `Hi WaveSolution, I need support with my account${user?.name ? `. My name is ${user.name}.` : "."}`,
    )

    return `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`
  }, [user?.name])

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { id, value } = event.target
    setFormData((current) => ({ ...current, [id]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    let supportSaved = false
    let emailSent = false
    try {
      await saveContact({ ...formData, source: "customer-dashboard-support", subject: `Support: ${formData.subject}` })
      supportSaved = true
    } catch (error) {
      console.error("Support request could not be saved to the admin database", error)
    }

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok || !data.success) throw new Error(data.message || "Failed to send support request.")
      emailSent = true
    } catch (error: any) {
      console.error("Support notification email failed", error)
    }

    if (supportSaved || emailSent) {
      toast.success(supportSaved && emailSent
        ? "Support request emailed to both inboxes and saved in admin enquiries."
        : supportSaved
          ? "Support request saved in admin enquiries, but the email alert could not be sent."
          : "Support request emailed to both inboxes, but could not be saved to admin enquiries.")
      setFormData(createInitialFormState(user))
    } else {
      toast.error("We couldn't save or email your support request. Please try again.")
    }
    setIsSubmitting(false)
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Support</p>
          <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900">Contact support</h2>
          <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500">
            Reach the team about a booking, a payment or anything else on your account.
          </p>
        </div>
        <p className="inline-flex shrink-0 items-center gap-1.5 text-xs text-slate-500">
          <Clock3 className="h-3.5 w-3.5 text-slate-400" />
          Replies within one business day
        </p>
      </div>

      {/* Contact channels */}
      <div className="grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
        <div className="flex flex-col bg-white p-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
            <MessageCircle className="h-4 w-4 text-slate-600" />
          </span>
          <h3 className="mt-3 text-sm font-semibold text-slate-900">WhatsApp</h3>
          <p className="mt-1 flex-1 text-xs leading-5 text-slate-500">
            Quick questions and live assistance during business hours.
          </p>
          <Button asChild variant="outline" className="mt-4 h-9 rounded-lg border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Message on WhatsApp
            </a>
          </Button>
        </div>

        <div className="flex flex-col bg-white p-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
            <PhoneCall className="h-4 w-4 text-slate-600" />
          </span>
          <h3 className="mt-3 text-sm font-semibold text-slate-900">Phone</h3>
          <p className="mt-1 flex-1 text-xs leading-5 text-slate-500">
            Best for urgent issues and same-day changes.
          </p>
          <Button asChild variant="outline" className="mt-4 h-9 rounded-lg border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900">
            <a href={businessInfo.phoneHref}>{businessInfo.phoneDisplay}</a>
          </Button>
        </div>

        <div className="flex flex-col bg-white p-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
            <Mail className="h-4 w-4 text-slate-600" />
          </span>
          <h3 className="mt-3 text-sm font-semibold text-slate-900">Email</h3>
          <p className="mt-1 flex-1 text-xs leading-5 text-slate-500">
            For written follow-ups and documentation.
          </p>
          <Button asChild variant="outline" className="mt-4 h-9 rounded-lg border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900">
            <a href={`mailto:${businessInfo.email}`} className="truncate">
              Send an email
            </a>
          </Button>
        </div>
      </div>

      {/* Form + policy */}
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <header className="border-b border-slate-200 px-5 py-4">
            <h3 className="text-sm font-semibold text-slate-900">Send a support request</h3>
            <p className="mt-0.5 text-xs text-slate-500">Include your booking reference if your question relates to a service</p>
          </header>
          <form onSubmit={handleSubmit}>
            <div className="space-y-5 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-slate-600">
                    Full name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className={fieldClassName}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-slate-600">
                    Email address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className={fieldClassName}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-medium text-slate-600">
                    Phone number <span className="font-normal text-slate-400">(optional)</span>
                  </label>
                  <Input
                    id="phone"
                    placeholder="0400 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    className={fieldClassName}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-medium text-slate-600">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What do you need help with?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={fieldClassName}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-slate-600">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us what happened and how we can help."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-28 resize-y rounded-lg border-slate-300 bg-white text-sm focus-visible:border-[#333365] focus-visible:ring-2 focus-visible:ring-[#333365]/15 focus-visible:ring-offset-0"
                />
              </div>
            </div>
            <div className="flex justify-end border-t border-slate-200 bg-slate-50 px-5 py-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-10 rounded-lg bg-[#333365] px-5 text-sm font-medium text-white hover:bg-[#3d3d78]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send request
                  </>
                )}
              </Button>
            </div>
          </form>
        </section>

        <section className="flex flex-col rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
              <ShieldCheck className="h-4 w-4 text-slate-600" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Support policy</h3>
              <p className="text-xs text-slate-500">What to expect when you contact us</p>
            </div>
          </div>

          <dl className="mt-4 divide-y divide-slate-100 rounded-lg border border-slate-200">
            <div className="px-4 py-3">
              <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">Hours</dt>
              <dd className="mt-1 text-sm text-slate-700">Monday to Friday, 8am–6pm</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">Response time</dt>
              <dd className="mt-1 text-sm text-slate-700">Within one business day, usually sooner</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">Coverage</dt>
              <dd className="mt-1 text-sm text-slate-700">Bookings, billing, service updates and general questions across the Gold Coast</dd>
            </div>
          </dl>

          <div className="mt-4 rounded-lg bg-slate-50 p-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">Direct contacts</p>
            <a href={businessInfo.phoneHref} className="mt-2 block text-sm font-medium text-slate-900 hover:underline">
              {businessInfo.phoneInternationalDisplay}
            </a>
            <a href={`mailto:${businessInfo.email}`} className="mt-1 block break-all text-sm text-slate-600 hover:underline">
              {businessInfo.email}
            </a>
          </div>

          <div className="mt-auto pt-5">
            <div className="rounded-lg border border-slate-200 px-4 py-3">
              <p className="text-xs font-medium text-slate-900">Need a same-day change?</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Call us directly and we will do our best to move your appointment.
              </p>
              <a
                href={businessInfo.phoneHref}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:underline"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                {businessInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
