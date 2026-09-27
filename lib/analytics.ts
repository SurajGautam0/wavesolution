export type AnalyticsParams = Record<string, string | number | boolean>

export function trackEvent(name: string, params?: AnalyticsParams) {
  if (typeof window === "undefined") return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag === "function") {
    gtag("event", name, params ?? {})
    return
  }
  const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer
  if (Array.isArray(dataLayer)) {
    dataLayer.push(["event", name, params ?? {}])
  }
}
