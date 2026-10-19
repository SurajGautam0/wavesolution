import { businessInfo } from '@/lib/business-info'
import { locationPages } from '@/lib/location-pages'
import { servicePageSlugs } from '@/lib/service-pages'
import { serviceLocationPages } from '@/lib/service-location-pages'
import { carpetLocationPages } from '@/lib/carpet-location-pages'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = businessInfo.baseUrl

    // Static pages with realistic last-modified dates
    const homeLastModified = new Date('2026-10-15')
    const servicesLastModified = new Date('2026-10-15')
    const bookLastModified = new Date('2026-10-16')
    const carpetCleaningLastModified = new Date('2026-10-16')
    const aboutLastModified = new Date('2026-10-15')
    const contactLastModified = new Date('2026-09-01')
    const teamLastModified = new Date('2026-08-15')
    const testimonialsLastModified = new Date('2026-09-10')
    const galleryLastModified = new Date('2026-09-10')
    const blogLastModified = new Date('2026-10-15')
    const checklistLastModified = new Date('2026-08-20')

    // Blog posts with actual publish dates
    const blogPosts: { slug: string; lastModified: string }[] = [
        { slug: 'end-of-lease-cleaning-requirements-qld', lastModified: '2026-10-15' },
        { slug: 'end-of-lease-cleaning-cost-gold-coast', lastModified: '2025-09-22' },
        { slug: 'cleaning-tips', lastModified: '2026-02-15' },
        { slug: 'house-cleaning-checklist', lastModified: '2026-10-16' },
        { slug: 'eco-friendly', lastModified: '2026-02-02' },
        { slug: 'office-cleaning', lastModified: '2026-01-20' },
        { slug: 'bond-cleaning-checklist', lastModified: '2025-01-15' },
        { slug: 'mould-prevention-gold-coast', lastModified: '2025-02-15' },
        { slug: 'after-builders-cleaning-guide', lastModified: '2025-04-01' },
        { slug: 'rental-inspection-tips', lastModified: '2025-04-15' },
        { slug: 'deep-cleaning-guide', lastModified: '2025-03-10' },
        { slug: 'how-often-house-cleaning', lastModified: '2025-02-10' },
        { slug: 'end-of-lease-checklist', lastModified: '2025-01-20' },
        { slug: 'commercial-cleaning-benefits', lastModified: '2025-04-10' },
        { slug: 'move-out-cleaning-mistakes', lastModified: '2025-02-01' },
        { slug: 'move-in-cleaning-tips', lastModified: '2025-04-05' },
        { slug: 'office-cleaning-schedule', lastModified: '2025-03-15' },
        { slug: 'carpet-cleaning-guide', lastModified: '2025-03-01' },
        { slug: 'pest-control-guide', lastModified: '2025-03-20' },
        { slug: 'end-of-lease-pest-control-gold-coast', lastModified: '2026-10-19' },
        { slug: 'professional-vs-diy-bond-cleaning-costs-benefits-wavesolution', lastModified: '2026-10-15' },
        { slug: 'spring-cleaning-guide-gold-coast', lastModified: '2026-10-15' },
    ]

    return [
        // Homepage - Highest priority
        {
            url: baseUrl,
            lastModified: homeLastModified,
            changeFrequency: 'daily',
            priority: 1,
        },

        // Main service hub
        {
            url: `${baseUrl}/services`,
            lastModified: servicesLastModified,
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/property-managers`,
            lastModified: new Date('2026-10-17'),
            changeFrequency: 'monthly',
            priority: 0.85,
        },

        // Individual service pages - High priority for money keywords
        ...servicePageSlugs.map((slug) => ({
            url: `${baseUrl}/${slug}`,
            lastModified: slug === 'carpet-cleaning-gold-coast' ? carpetCleaningLastModified : servicesLastModified,
            changeFrequency: 'weekly' as const,
            priority: slug === 'cleaning-gold-coast' ? 0.96 : slug === 'cleaning-carrara' ? 0.93 : 0.92,
        })),
        ...carpetLocationPages.map((page) => ({
            url: `${baseUrl}/carpet-cleaning-${page.slug}`,
            lastModified: new Date('2026-10-17'),
            changeFrequency: 'weekly' as const,
            priority: 0.88,
        })),

        // High-intent guide pages
        {
            url: `${baseUrl}/cleaning-prices-gold-coast`,
            lastModified: new Date('2026-09-27'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/bond-cleaning-cost-gold-coast`,
            lastModified: new Date('2026-09-27'),
            changeFrequency: 'monthly',
            priority: 0.88,
        },
        {
            url: `${baseUrl}/house-cleaning-cost-gold-coast`,
            lastModified: new Date('2026-09-27'),
            changeFrequency: 'monthly',
            priority: 0.88,
        },
        {
            url: `${baseUrl}/pest-control-cost-gold-coast`,
            lastModified: new Date('2026-09-27'),
            changeFrequency: 'monthly',
            priority: 0.88,
        },
        {
            url: `${baseUrl}/bond-pest-carpet-end-of-lease`,
            lastModified: new Date('2026-09-27'),
            changeFrequency: 'monthly',
            priority: 0.88,
        },
        {
            url: `${baseUrl}/end-of-lease-cleaning-checklist`,
            lastModified: new Date('2026-09-27'),
            changeFrequency: 'monthly',
            priority: 0.88,
        },

        // Niche commercial pages
        {
            url: `${baseUrl}/airbnb-cleaning-gold-coast`,
            lastModified: new Date('2026-09-27'),
            changeFrequency: 'monthly',
            priority: 0.87,
        },
        {
            url: `${baseUrl}/strata-cleaning-gold-coast`,
            lastModified: new Date('2026-09-27'),
            changeFrequency: 'monthly',
            priority: 0.87,
        },
        {
            url: `${baseUrl}/medical-cleaning-gold-coast`,
            lastModified: new Date('2026-09-27'),
            changeFrequency: 'monthly',
            priority: 0.87,
        },

        // Locations hub
        {
            url: `${baseUrl}/locations`,
            lastModified: aboutLastModified,
            changeFrequency: 'weekly',
            priority: 0.85,
        },

        // Service x suburb landing pages
        ...serviceLocationPages.map((page) => ({
            url: `${baseUrl}/${page.serviceSlug}/${page.suburbSlug}`,
            lastModified: new Date('2026-09-27'),
            changeFrequency: 'weekly' as const,
            priority: 0.86,
        })),

        // Individual location pages
        ...locationPages.map((location) => ({
            url: `${baseUrl}/locations/${location.slug}`,
            lastModified: aboutLastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.88,
        })),

        // Booking page
        {
            url: `${baseUrl}/book`,
            lastModified: bookLastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },

        // About pages
        {
            url: `${baseUrl}/about`,
            lastModified: aboutLastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/team`,
            lastModified: teamLastModified,
            changeFrequency: 'monthly',
            priority: 0.78,
        },

        // Contact
        {
            url: `${baseUrl}/contact`,
            lastModified: contactLastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // Social proof pages
        {
            url: `${baseUrl}/testimonials`,
            lastModified: testimonialsLastModified,
            changeFrequency: 'weekly',
            priority: 0.75,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: galleryLastModified,
            changeFrequency: 'weekly',
            priority: 0.75,
        },

        // Blog hub
        {
            url: `${baseUrl}/blog`,
            lastModified: blogLastModified,
            changeFrequency: 'weekly',
            priority: 0.84,
        },

        // Individual blog posts with actual dates
        ...blogPosts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.lastModified),
            changeFrequency: 'monthly' as const,
            priority: 0.82,
        })),
    ]
}
