"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ServiceType = "regular" | "deep" | "bond" | "carpet"

const EXTRAS = [
  { id: "oven", label: "Oven deep clean", desc: "Racks, glass and interior grease removal" },
  { id: "windows", label: "Interior windows", desc: "Sills, tracks and glass polish" },
  { id: "balcony", label: "Balcony or patio", desc: "Outdoor living area refresh" },
  { id: "carpet", label: "Carpet steam clean", desc: "Hot water extraction and stain care" },
]

const SERVICES: { id: ServiceType; label: string; note: string }[] = [
  { id: "regular", label: "House clean", note: "Routine" },
  { id: "deep", label: "Deep clean", note: "Spring / reset" },
  { id: "bond", label: "Bond clean", note: "Move-out" },
  { id: "carpet", label: "Carpet steam", note: "Refresh" },
]

export function InteractivePricingCalculator() {
  const [service, setService] = React.useState<ServiceType>("regular")
  const [bedrooms, setBedrooms] = React.useState(3)
  const [bathrooms, setBathrooms] = React.useState(2)
  const [selectedExtras, setSelectedExtras] = React.useState<string[]>([])

  const bookingHref = React.useMemo(() => {
    const serviceName = {
      regular: "House Cleaning",
      deep: "Deep Cleaning",
      bond: "Bond Cleaning",
      carpet: "Carpet Cleaning",
    }[service]
    const extras = selectedExtras.map((id) => EXTRAS.find((item) => item.id === id)?.label).filter(Boolean)
    const params = new URLSearchParams({
      service: serviceName,
      bedrooms: String(bedrooms),
      bathrooms: String(bathrooms),
    })
    if (extras.length) params.set("notes", `Interested in: ${extras.join(", ")}`)
    return `/book?${params.toString()}`
  }, [service, bedrooms, bathrooms, selectedExtras])

  const toggleExtra = (id: string) => {
    setSelectedExtras((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  }

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#39BDE4]/10 blur-3xl" />
      <div className="relative mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#39BDE4]/10 px-3.5 py-1.5 text-xs font-semibold text-[#168DB3]">
          <Sparkles className="h-3.5 w-3.5" /> A personal quote, made for your home
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Tell us what you need</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
          Choose a few details and our local team will get back to you with a tailored quote.
        </p>
      </div>

      <div className="relative mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="space-y-6">
          <fieldset>
            <legend className="text-sm font-semibold text-slate-800">What would you like cleaned?</legend>
            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {SERVICES.map((item) => (
                <button key={item.id} type="button" aria-pressed={service === item.id} onClick={() => setService(item.id)}
                  className={cn("flex min-h-20 flex-col items-start justify-center rounded-xl border px-3 py-3 text-left transition-colors",
                    service === item.id ? "border-[#39BDE4] bg-[#39BDE4] text-white" : "border-slate-200 bg-white text-slate-800 hover:border-[#39BDE4]")}
                >
                  <span className={cn("text-[10px] font-semibold uppercase tracking-wide", service === item.id ? "text-white/75" : "text-slate-400")}>{item.note}</span>
                  <span className="mt-1 text-sm font-semibold">{item.label}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-5 sm:grid-cols-2">
            <fieldset>
              <legend className="text-sm font-semibold text-slate-800">Bedrooms</legend>
              <div className="mt-3 flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => <button key={num} type="button" aria-pressed={bedrooms === num} onClick={() => setBedrooms(num)}
                  className={cn("h-11 flex-1 rounded-lg border text-sm font-semibold transition-colors", bedrooms === num ? "border-[#39BDE4] bg-[#39BDE4] text-white" : "border-slate-200 bg-white text-slate-700 hover:border-[#39BDE4]")}>{num === 5 ? "5+" : num}</button>)}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold text-slate-800">Bathrooms</legend>
              <div className="mt-3 flex gap-2">
                {[1, 2, 3, 4].map((num) => <button key={num} type="button" aria-pressed={bathrooms === num} onClick={() => setBathrooms(num)}
                  className={cn("h-11 flex-1 rounded-lg border text-sm font-semibold transition-colors", bathrooms === num ? "border-[#39BDE4] bg-[#39BDE4] text-white" : "border-slate-200 bg-white text-slate-700 hover:border-[#39BDE4]")}>{num === 4 ? "4+" : num}</button>)}
              </div>
            </fieldset>
          </div>

          <fieldset>
            <legend className="text-sm font-semibold text-slate-800">Anything else? <span className="font-normal text-slate-500">Optional</span></legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {EXTRAS.map((extra) => {
                const selected = selectedExtras.includes(extra.id)
                return <button key={extra.id} type="button" aria-pressed={selected} onClick={() => toggleExtra(extra.id)}
                  className={cn("flex items-start gap-3 rounded-xl border bg-white p-3 text-left transition-colors", selected ? "border-[#39BDE4] bg-[#39BDE4]/5" : "border-slate-200 hover:border-[#39BDE4]")}
                >
                  <span className={cn("mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border", selected ? "border-[#39BDE4] bg-[#39BDE4] text-white" : "border-slate-300 bg-white")}>
                    {selected && <Check className="h-3 w-3" />}
                  </span>
                  <span><span className="block text-sm font-semibold text-slate-800">{extra.label}</span><span className="mt-0.5 block text-xs text-slate-500">{extra.desc}</span></span>
                </button>
              })}
            </div>
          </fieldset>
        </div>

        <aside className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#39BDE4]/10 text-[#168DB3]"><Sparkles className="h-5 w-5" /></span>
            <div><h3 className="font-semibold text-slate-900">Your quote request</h3><p className="text-xs text-slate-500">No obligation</p></div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">We’ll review the details with you and confirm the scope and price before you decide to book.</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-700">
            <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-[#168DB3]" /> Friendly local team</li>
            <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-[#168DB3]" /> Free, no-pressure quote</li>
            <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-[#168DB3]" /> Scope confirmed before booking</li>
          </ul>
          <div className="mt-5 rounded-xl bg-slate-50 p-3 text-xs leading-5 text-slate-600">
            {SERVICES.find((item) => item.id === service)?.label} · {bedrooms}{bedrooms === 5 ? "+" : ""} {bedrooms === 1 ? "bedroom" : "bedrooms"} · {bathrooms}{bathrooms === 4 ? "+" : ""} {bathrooms === 1 ? "bathroom" : "bathrooms"}
            {selectedExtras.length > 0 && <span className="block">{selectedExtras.length} extra{selectedExtras.length === 1 ? "" : "s"} selected</span>}
          </div>
          <Button asChild className="mt-5 h-12 w-full rounded-xl bg-[#39BDE4] text-sm font-semibold text-white shadow-none hover:bg-[#249FC5]">
            <Link href={bookingHref} className="flex items-center justify-center gap-2">Request my free quote <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          <p className="mt-3 text-center text-xs text-slate-500">We’ll confirm your details before anything is booked.</p>
        </aside>
      </div>
    </section>
  )
}
