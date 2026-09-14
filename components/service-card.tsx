import { Building2, CarIcon as Carpet, Glasses, Home, Sparkles, Truck, Store, ShoppingBag, Sun, Layout, Square, Eraser, Monitor, Utensils, Briefcase, Bug, CalendarClock, Repeat, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  price: string
  href?: string
  ctaLabel?: string
  featured?: boolean
}

export function ServiceCard({ title, description, icon, price, href = "/book", ctaLabel = "View Service", featured = false }: ServiceCardProps) {
  const getIcon = () => {
    const iconClass = "h-6 w-6 transition-transform duration-300 group-hover:scale-110"
    switch (icon) {
      case "Home":
        return <Home className={iconClass} />
      case "Building2":
        return <Building2 className={iconClass} />
      case "Sparkles":
        return <Sparkles className={iconClass} />
      case "Truck":
        return <Truck className={iconClass} />
      case "Glasses":
        return <Glasses className={iconClass} />
      case "Carpet":
        return <Carpet className={iconClass} />
      case "Store":
        return <Store className={iconClass} />
      case "ShoppingBag":
        return <ShoppingBag className={iconClass} />
      case "Sun":
        return <Sun className={iconClass} />
      case "Layout":
        return <Layout className={iconClass} />
      case "Square":
        return <Square className={iconClass} />
      case "Eraser":
        return <Eraser className={iconClass} />
      case "Monitor":
        return <Monitor className={iconClass} />
      case "Utensils":
        return <Utensils className={iconClass} />
      case "Briefcase":
        return <Briefcase className={iconClass} />
      case "Bug":
        return <Bug className={iconClass} />
      case "CalendarClock":
        return <CalendarClock className={iconClass} />
      case "Repeat":
        return <Repeat className={iconClass} />
      default:
        return <Sparkles className={iconClass} />
    }
  }

  // Determine smart badge based on service type
  const getBadge = () => {
    if (title.toLowerCase().includes("house")) return "Most Popular"
    if (title.toLowerCase().includes("bond")) return "100% Bond Back"
    if (title.toLowerCase().includes("office")) return "Tailored Business"
    if (title.toLowerCase().includes("deep")) return "Full Deep Reset"
    if (title.toLowerCase().includes("end of lease")) return "Inspection Ready"
    if (title.toLowerCase().includes("carpet")) return "Steam Extraction"
    return "Gold Coast Local"
  }

  if (featured) {
    return (
      <div className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] bg-secondary p-7 text-white shadow-xl shadow-secondary/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-secondary/30">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#39BDE4]/20 blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#39BDE4] text-white shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-110">
              {getIcon()}
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#39BDE4] px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white">
              <CheckCircle2 className="h-3 w-3" />
              {getBadge()}
            </span>
          </div>
          <h3 className="mt-5 text-xl font-extrabold tracking-tight">
            {title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-white/70">
            {description}
          </p>
        </div>
        <div className="relative z-10 mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
          <div>
            <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/50">Pricing</span>
            <span className="text-base font-extrabold text-white">{price}</span>
          </div>
          <Link
            href={href}
            aria-label={`${ctaLabel}: ${title}`}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#39BDE4] text-white transition-all duration-300 hover:scale-105 hover:bg-[#249FC5]"
          >
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative flex flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#39BDE4]/40 hover:shadow-xl hover:shadow-slate-900/5">
      <div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#39BDE4]/10 text-[#39BDE4] transition-all duration-300 group-hover:bg-[#39BDE4] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#39BDE4]/25">
            {getIcon()}
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-[#F3F3F3] px-3 py-1 text-[11px] font-bold text-slate-600">
            <CheckCircle2 className="h-3 w-3 text-[#39BDE4]" />
            {getBadge()}
          </span>
        </div>
        <h3 className="mt-5 text-xl font-extrabold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
        <div>
          <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Pricing</span>
          <span className="text-base font-extrabold text-secondary">{price}</span>
        </div>
        <Link
          href={href}
          aria-label={`${ctaLabel}: ${title}`}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:border-[#39BDE4] hover:bg-[#39BDE4] hover:text-white"
        >
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}
