import { notFound, permanentRedirect } from "next/navigation"

import { legacyServiceRedirects } from "@/lib/service-pages"

type LegacyServicePageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function LegacyServiceRedirectPage({ params }: LegacyServicePageProps) {
  const { slug } = await params
  const redirectTarget = legacyServiceRedirects[slug]

  if (!redirectTarget) {
    notFound()
  }

  permanentRedirect(redirectTarget)
}
