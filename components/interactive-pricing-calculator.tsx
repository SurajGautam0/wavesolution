"use client"

import * as React from "react"
import Link from "next/link"
import { Check, Sparkles, ShieldCheck, ArrowRight, Home, Flame, Clock, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ServiceType = "regular" | "deep" | "bond" | "carpet"

interface ExtraItem {
  id: string
  label: string
  price: number
  desc: string
}

const EXTRAS: ExtraItem[] = [
  { id: "oven", label: "Oven Deep Clean", price: 65, desc: "Racks, glass & interior grease removal" },
  { id: "windows", label: "Interior Windows", price: 55, desc: "Sills, tracks & glass polish" },
  { id: "balcony", label: "Balcony / Patio Sweep & Mop", price: 45, desc: "Outdoor living refresh" },
  { id: "carpet", label: "Carpet Steam Clean (2 Rooms)", price: 85, desc: "Hot water extraction & stain care" },
]

export function InteractivePricingCalculator() {
  const [service, setService] = React.useState<ServiceType>("regular")
  const [bedrooms, setBedrooms] = React.useState<number>(3)
  const [bathrooms, setBathrooms] = React.useState<number>(2)
  const [selectedExtras, setSelectedExtras] = React.useState<string[]>([])

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  // Calculation logic
  const calculatedEstimate = React.useMemo(() => {
    let base = 0
    let hoursEstimate = "2 - 3 hrs"

    if (service === "regular") {
      base = 90 + bedrooms * 25 + bathrooms * 20
      hoursEstimate = bedrooms <= 2 ? "2 - 2.5 hrs" : "3 - 4 hrs"
    } else if (service === "deep") {
      base = 150 + bedrooms * 35 + bathrooms * 30
      hoursEstimate = bedrooms <= 2 ? "3 - 4 hrs" : "4 - 6 hrs"
    } else if (service === "bond") {
      base = 220 + bedrooms * 45 + bathrooms * 35
      hoursEstimate = bedrooms <= 2 ? "4 - 5 hrs" : "5 - 8 hrs"
    } else if (service === "carpet") {
      base = 80 + bedrooms * 25 + bathrooms * 10
      hoursEstimate = "1.5 - 2.5 hrs"
    }

    const extrasTotal = selectedExtras.reduce((sum, extraId) => {
      const found = EXTRAS.find((e) => e.id === extraId)
      return sum + (found ? found.price : 0)
    }, 0)

    const total = base + extrasTotal
    const minPrice = Math.round(total * 0.95)
    const maxPrice = Math.round(total * 1.08)

    return {
      min: minPrice,
      max: maxPrice,
      hours: hoursEstimate,
    }
  }, [service, bedrooms, bathrooms, selectedExtras])

  const bookingHref = React.useMemo(() => {
    const serviceName =
      service === "regular"
        ? "House Cleaning"
        : service === "deep"
        ? "Deep Cleaning"
        : service === "bond"
        ? "Bond Cleaning"
        : "Carpet Cleaning"
    return `/book?service=${encodeURIComponent(serviceName)}&bedrooms=${bedrooms}&bathrooms=${bathrooms}`
  }, [service, bedrooms, bathrooms])

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-white p-6 shadow-xl sm:p-10 lg:p-12">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

      {/* Header */}
      <div className="relative mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3.5 py-1 text-xs font-bold text-primary">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Transparent Local Rates
        </div>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
          Instant Cleaning Cost Estimator
        </h3>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          Customize your property specifications below to receive an immediate realistic Gold Coast quote range.
        </p>
      </div>

      {/* Main interactive grid */}
      <div className="relative mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        {/* Controls Column */}
        <div className="space-y-6">
          {/* 1. Service Type */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500">
              1. Select Service Type
            </label>
            <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {[
                { id: "regular", label: "House Clean", badge: "Routine" },
                { id: "deep", label: "Deep Clean", badge: "Spring / Reset" },
                { id: "bond", label: "Bond Clean", badge: "100% Back" },
                { id: "carpet", label: "Carpet Steam", badge: "Refresh" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setService(item.id as ServiceType)}
                  className={cn(
                    "flex flex-col items-start rounded-xl border p-3 text-left transition-all",
                    service === item.id
                      ? "border-primary bg-primary text-white shadow-md shadow-primary/20"
                      : "border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50"
                  )}
                >
                  <span className={cn(
                    "rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider",
                    service === item.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                  )}>
                    {item.badge}
                  </span>
                  <span className="mt-2 text-sm font-bold leading-tight">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Bedrooms & Bathrooms */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500">
                2. Bedrooms
              </label>
              <div className="mt-2.5 flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setBedrooms(num)}
                    className={cn(
                      "flex-1 rounded-xl py-2.5 text-center text-sm font-bold transition-all",
                      bedrooms === num
                        ? "bg-slate-900 text-white shadow-sm"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                    )}
                  >
                    {num === 5 ? "5+" : num}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500">
                3. Bathrooms
              </label>
              <div className="mt-2.5 flex items-center gap-1.5">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setBathrooms(num)}
                    className={cn(
                      "flex-1 rounded-xl py-2.5 text-center text-sm font-bold transition-all",
                      bathrooms === num
                        ? "bg-slate-900 text-white shadow-sm"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                    )}
                  >
                    {num === 4 ? "4+" : num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Optional Add-ons */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500">
              4. Popular Add-Ons (Optional)
            </label>
            <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
              {EXTRAS.map((extra) => {
                const isSelected = selectedExtras.includes(extra.id)
                return (
                  <button
                    key={extra.id}
                    type="button"
                    onClick={() => toggleExtra(extra.id)}
className={cn(
                        "flex items-start gap-3 rounded-xl border p-3 text-left transition-all",
                        isSelected
                          ? "border-primary bg-primary/10 text-primary ring-1 ring-primary"
                          : "border-slate-200 bg-white text-slate-800 hover:border-slate-300"
                      )}
                  >
<div
                        className={cn(
                          "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors",
                          isSelected ? "border-primary bg-primary text-white" : "border-slate-300 bg-white"
                        )}
                      >
                      {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span>{extra.label}</span>
                        <span className="text-primary font-black">+${extra.price}</span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-slate-500">{extra.desc}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Live Estimate Card */}
        <div className="flex flex-col justify-between rounded-3xl border border-slate-900/10 bg-gradient-to-br from-slate-950 via-primary to-slate-900 p-6 text-white shadow-2xl sm:p-8">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-black uppercase tracking-widest text-secondary">
                Estimated Price
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold text-white/90">
                <Clock className="h-3 w-3 text-secondary" />
                Est. {calculatedEstimate.hours}
              </span>
            </div>

            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black tracking-tight sm:text-5xl">
                  ${calculatedEstimate.min} - ${calculatedEstimate.max}
                </span>
                <span className="text-xs font-medium text-white/60">AUD</span>
              </div>
              <p className="mt-1 text-xs text-white/70">
                Based on {bedrooms} {bedrooms === 1 ? "bedroom" : "bedrooms"} and {bathrooms}{" "}
                {bathrooms === 1 ? "bathroom" : "bathrooms"}.
              </p>
            </div>

            {/* Checklist of what's included */}
            <div className="mt-6 space-y-2.5 rounded-2xl bg-white/5 p-4 text-xs">
              <div className="flex items-center gap-2 text-white/90">
                <Check className="h-4 w-4 text-secondary shrink-0" />
                <span>All eco-safe cleaning supplies & commercial equipment included</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Check className="h-4 w-4 text-secondary shrink-0" />
                <span>Fully insured & police-checked local Gold Coast cleaners</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Check className="h-4 w-4 text-secondary shrink-0" />
                <span>100% Satisfaction guarantee or free re-clean</span>
              </div>
              {selectedExtras.length > 0 && (
                <div className="flex items-center gap-2 text-secondary font-bold">
                  <Check className="h-4 w-4 text-secondary shrink-0" />
                  <span>{selectedExtras.length} custom add-on(s) selected</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <Button
              asChild
              className="h-12 w-full rounded-full bg-secondary text-xs font-black uppercase tracking-widest text-slate-950 shadow-lg shadow-secondary/30 transition-transform hover:scale-[1.02] hover:bg-secondary/90"
            >
              <Link href={bookingHref} className="flex items-center justify-center gap-2">
                <span>Book With This Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="text-center text-[11px] text-white/60">
              No credit card required upfront • Free rescheduling
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
