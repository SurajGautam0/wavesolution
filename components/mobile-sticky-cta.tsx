import Link from "next/link"
import { Phone, Sparkles } from "lucide-react"

import { businessInfo, siteLinks } from "@/lib/business-info"

export function MobileStickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/95 px-4 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0.75rem)", paddingTop: "0.75rem" }}
    >
      <div className="mx-auto flex max-w-md gap-3">
        <Link
          href={siteLinks.book}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#39BDE4] px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-md transition-transform active:scale-95"
        >
          <Sparkles className="h-3.5 w-3.5 shrink-0" />
          Get Free Quote
        </Link>
        <Link
          href={businessInfo.phoneHref}
          className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#333365] shadow-sm transition-transform active:scale-95"
        >
          <Phone className="h-3.5 w-3.5 shrink-0 text-[#39BDE4]" />
          Call Now
        </Link>
      </div>
    </div>
  )
}
