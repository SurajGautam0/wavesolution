"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

import { trackEvent } from "@/lib/analytics"

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    trackEvent("page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest?.("a")
      if (!anchor) return
      const href = anchor.getAttribute("href") || ""
      if (href.startsWith("tel:")) {
        trackEvent("click_to_call", { link_text: anchor.textContent?.trim().slice(0, 60) || "" })
      } else if (href.startsWith("mailto:")) {
        trackEvent("click_to_email", { link_text: anchor.textContent?.trim().slice(0, 60) || "" })
      } else if (href.includes("wa.me")) {
        trackEvent("click_to_whatsapp", { link_text: anchor.textContent?.trim().slice(0, 60) || "" })
      }
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  return null
}
