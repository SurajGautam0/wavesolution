"use client"

import { useEffect, useRef } from "react"

export function ObfuscatedEmail({ className }: { className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (ref.current) {
      const user = "info"
      const domain = "wavesolution.com.au"
      ref.current.href = `mailto:${user}@${domain}`
      ref.current.textContent = `${user}@${domain}`
    }
  }, [])

  return (
    <a
      ref={ref}
      className={className}
      aria-label="Email Wave Solution"
    >
      Loading...
    </a>
  )
}
