import Link from "next/link"
import { Phone } from "lucide-react"

import { businessInfo, siteLinks } from "@/lib/business-info"

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <Link
          href={siteLinks.book}
          className="flex-1 rounded-full bg-secondary px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.18em] text-slate-950"
        >
          Get Free Quote
        </Link>
        <Link
          href={businessInfo.phoneHref}
          className="flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-primary"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </Link>
      </div>
    </div>
  )
}
