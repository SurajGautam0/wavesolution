import { locationPages } from '@/lib/location-pages'
import { servicePageSlugs } from '@/lib/service-pages'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.wavesolution.com.au'
    const lastModified = new Date()

    // Blog posts for comprehensive sitemap
    const blogPosts = [
        'cleaning-tips',
        'eco-friendly',
        'office-cleaning',
        'bond-cleaning-checklist',
        'mould-prevention-gold-coast',
        'after-builders-cleaning-guide',
        'rental-inspection-tips',
        'deep-cleaning-guide',
        'how-often-house-cleaning',
        'end-of-lease-checklist',
        'commercial-cleaning-benefits',
        'move-out-cleaning-mistakes',
        'move-in-cleaning-tips',
        'office-cleaning-schedule',
        'carpet-cleaning-guide',
        'pest-control-guide',
    ]

    return [
        // Homepage - Highest priority
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'daily',
            priority: 1,
        },

        // Main service hub
        {
            url: `${baseUrl}/services`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.95,
        },

        // Individual service pages - High priority for money keywords
        ...servicePageSlugs.map((slug) => ({
            url: `${baseUrl}/${slug}`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: slug === 'cleaning-gold-coast' ? 0.96 : 0.92,
        })),

        // Locations hub
        {
            url: `${baseUrl}/locations`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.85,
        },

        // Individual location pages - High priority for local SEO
        ...locationPages.map((location) => ({
            url: `${baseUrl}/locations/${location.slug}`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.88, // Increased priority for local SEO
        })),

        // Booking page - High conversion priority
        {
            url: `${baseUrl}/book`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },

        // About pages
        {
            url: `${baseUrl}/about`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/team`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.78,
        },

        // Contact
        {
            url: `${baseUrl}/contact`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // Social proof pages
        {
            url: `${baseUrl}/testimonials`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.75,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.75,
        },

        // Blog hub
        {
            url: `${baseUrl}/blog`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.84,
        },

        // Individual blog posts - Good for long-tail keywords
        ...blogPosts.map((slug) => ({
            url: `${baseUrl}/blog/${slug}`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.82,
        })),

        // Linkable asset - Bond cleaning checklist
        {
            url: `${baseUrl}/bond-cleaning-checklist.html`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.85, // High priority as linkable asset
        },
    ]
}
