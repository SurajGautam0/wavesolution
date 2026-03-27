"use client"

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { Loader2, Mail, MessageCircle, PhoneCall, Send, ShieldCheck } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { businessInfo } from "@/lib/business-info"

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

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to send support request.")
      }

      toast.success("Support request sent. Our team will reply by email soon.")
      setFormData(createInitialFormState(user))
    } catch (error: any) {
      toast.error(error.message || "We couldn't send your support request.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Support Center</h1>
          <p className="text-slate-500 font-medium text-base">
            Reach us on WhatsApp, call directly, or send a support request to our company email.
          </p>
        </div>
        <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-600/20">
          Average response: within 24 hours
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-green-50 flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">WhatsApp Support</h2>
              <p className="mt-2 text-sm text-slate-500">
                Start a chat with our team for quick questions and live assistance.
              </p>
            </div>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center">
              <PhoneCall className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Call the Team</h2>
              <p className="mt-2 text-sm text-slate-500">
                Prefer to talk? Call us directly during business hours.
              </p>
            </div>
            <Button asChild variant="outline" className="w-full rounded-xl border-slate-200">
              <a href={businessInfo.phoneHref}>{businessInfo.phoneDisplay}</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-amber-50 flex items-center justify-center">
              <Mail className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Company Email</h2>
              <p className="mt-2 text-sm text-slate-500">
                Need a written follow-up? Your dashboard form below goes straight to our company inbox.
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
              {businessInfo.email}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl overflow-hidden">
          <CardHeader className="border-b border-slate-100 bg-slate-50/50">
            <CardTitle className="text-xl font-bold text-slate-900">Write to Support</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                    Full name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-xl border-slate-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                    Email address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-xl border-slate-200"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                    Phone number
                  </label>
                  <Input
                    id="phone"
                    placeholder="Optional phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-xl border-slate-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-700">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What do you need help with?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="rounded-xl border-slate-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us what happened and how we can help."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-slate-200"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-slate-900 hover:bg-slate-800 text-white"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending support request...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send to Company Email
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="border border-slate-100 shadow-sm bg-slate-900 text-white rounded-2xl overflow-hidden">
          <CardContent className="p-6 space-y-6">
            <div className="space-y-3">
              <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-blue-200" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Support Promise</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Use whichever channel feels easiest. WhatsApp is fastest, calling is best for urgent issues,
                  and the form is ideal when you need a written response sent to our company email.
                </p>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Phone</p>
                <p className="mt-1 text-base font-semibold">{businessInfo.phoneInternationalDisplay}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Email</p>
                <p className="mt-1 text-base font-semibold break-all">{businessInfo.email}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Coverage</p>
                <p className="mt-1 text-sm text-slate-300">Gold Coast support for bookings, billing, service updates, and general questions.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
