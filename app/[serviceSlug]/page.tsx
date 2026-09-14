import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ServiceLandingPage } from "@/components/service-landing-page"
import { businessInfo } from "@/lib/business-info"
import { getServicePage, servicePageSlugs } from "@/lib/service-pages"

type ServicePageProps = {
  params: Promise<{
    serviceSlug: string
  }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return servicePageSlugs.map((serviceSlug) => ({ serviceSlug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { serviceSlug } = await params
  const page = getServicePage(serviceSlug)

  if (!page) {
    return {}
  }

  const url = `${businessInfo.baseUrl}/${page.slug}`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      type: "website",
      images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: page.metaTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: ["/gold-coast-cleaning-services.jpeg"],
    },
  }
}

export default async function MarketingServicePage({ params }: ServicePageProps) {
  const { serviceSlug } = await params
  const page = getServicePage(serviceSlug)

  if (!page) {
    notFound()
  }

  return <ServiceLandingPage page={page} />
}
