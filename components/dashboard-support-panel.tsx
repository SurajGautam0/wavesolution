"use client"

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { Loader2, Mail, MessageCircle, PhoneCall, Send, ShieldCheck, Clock } from "lucide-react"
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
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Support Center</h2>
          <p className="text-slate-500 text-sm mt-1">
            Reach us on WhatsApp, call directly, or send a support request.
          </p>
        </div>
        <div className="inline-flex items-center rounded-full bg-[#39BDE4]/10 px-3 py-1.5 text-xs font-bold text-[#39BDE4]">
          <Clock className="h-3.5 w-3.5 mr-1.5" />
          Response within 24 hours
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl overflow-hidden hover:border-green-400/30 transition-colors">
          <CardContent className="p-5 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-green-50 flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">WhatsApp</h3>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Quick questions and live assistance.
              </p>
            </div>
            <Button asChild className="w-full h-11 rounded-full bg-green-500 hover:bg-green-600 text-white text-xs font-black uppercase tracking-widest">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                Chat Now
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl overflow-hidden hover:border-[#39BDE4]/30 transition-colors">
          <CardContent className="p-5 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-[#39BDE4]/10 flex items-center justify-center">
              <PhoneCall className="h-6 w-6 text-[#39BDE4]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Call Us</h3>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Best for urgent issues during business hours.
              </p>
            </div>
            <Button asChild variant="outline" className="w-full h-11 rounded-full border-slate-200 text-xs font-black uppercase tracking-widest text-slate-700 hover:border-[#39BDE4]/30 hover:text-[#39BDE4]">
              <a href={businessInfo.phoneHref}>{businessInfo.phoneDisplay}</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl overflow-hidden hover:border-secondary/30 transition-colors">
          <CardContent className="p-5 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
              <Mail className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Email</h3>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Written follow-up via our company inbox.
              </p>
            </div>
            <div className="rounded-full bg-[#F3F3F3] px-4 py-3 text-xs font-bold text-slate-600 text-center">
              {businessInfo.email}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Form + Promise */}
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl overflow-hidden">
          <CardHeader className="border-b border-slate-100 p-5">
            <CardTitle className="text-base font-bold text-slate-900">Write to Support</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl border-slate-200 bg-[#F3F3F3]/50 focus:bg-white focus:border-[#39BDE4]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl border-slate-200 bg-[#F3F3F3]/50 focus:bg-white focus:border-[#39BDE4]"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    placeholder="Optional"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-200 bg-[#F3F3F3]/50 focus:bg-white focus:border-[#39BDE4]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What do you need help with?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl border-slate-200 bg-[#F3F3F3]/50 focus:bg-white focus:border-[#39BDE4]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us what happened and how we can help."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-slate-200 bg-[#F3F3F3]/50 focus:bg-white focus:border-[#39BDE4] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-full bg-[#333365] hover:bg-[#333365]/90 text-white text-xs font-black uppercase tracking-widest"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Support Request
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 shadow-sm bg-[#333365] text-white rounded-2xl overflow-hidden">
          <CardContent className="p-6 space-y-6">
            <div className="space-y-3">
              <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-[#39BDE4]" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Our Support Promise</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Use whichever channel feels easiest. WhatsApp is fastest, calling is best for urgent issues,
                  and the form is ideal when you need a written response.
                </p>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Phone</p>
                <p className="mt-1 text-sm font-bold">{businessInfo.phoneInternationalDisplay}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Email</p>
                <p className="mt-1 text-sm font-bold break-all">{businessInfo.email}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Coverage</p>
                <p className="mt-1 text-sm text-white/70">Gold Coast support for bookings, billing, service updates, and general questions.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
