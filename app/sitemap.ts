import { locationPages } from '@/lib/location-pages'
import { servicePageSlugs } from '@/lib/service-pages'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.wavesolution.com.au'

    // Static pages with realistic last-modified dates
    const homeLastModified = new Date('2026-09-14')
    const servicesLastModified = new Date('2026-09-14')
    const bookLastModified = new Date('2026-09-14')
    const aboutLastModified = new Date('2026-09-01')
    const contactLastModified = new Date('2026-09-01')
    const teamLastModified = new Date('2026-08-15')
    const testimonialsLastModified = new Date('2026-09-10')
    const galleryLastModified = new Date('2026-09-10')
    const blogLastModified = new Date('2026-09-14')
    const checklistLastModified = new Date('2026-08-20')

    // Blog posts with actual publish dates
    const blogPosts: { slug: string; lastModified: string }[] = [
        { slug: 'end-of-lease-cleaning-requirements-qld', lastModified: '2026-03-01' },
        { slug: 'end-of-lease-cleaning-cost-gold-coast', lastModified: '2025-09-22' },
        { slug: 'cleaning-tips', lastModified: '2026-02-15' },
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

        // Individual service pages - High priority for money keywords
        ...servicePageSlugs.map((slug) => ({
            url: `${baseUrl}/${slug}`,
            lastModified: servicesLastModified,
            changeFrequency: 'weekly' as const,
            priority: slug === 'cleaning-gold-coast' ? 0.96 : 0.92,
        })),

        // Locations hub
        {
            url: `${baseUrl}/locations`,
            lastModified: aboutLastModified,
            changeFrequency: 'weekly',
            priority: 0.85,
        },

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
