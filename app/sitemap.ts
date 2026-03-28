import { MetadataRoute } from 'next'
import { locationPages } from '@/lib/location-pages'
import { servicePageSlugs } from '@/lib/service-pages'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.wavesolution.com.au'
    const lastModified = new Date()

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/services`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        ...servicePageSlugs.map((slug) => ({
            url: `${baseUrl}/${slug}`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: slug === 'cleaning-gold-coast' ? 0.96 : 0.92,
        })),
        {
            url: `${baseUrl}/locations`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/book`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
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
        {
            url: `${baseUrl}/contact`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/testimonials`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.84,
        },
        {
            url: `${baseUrl}/blog/cleaning-tips`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/eco-friendly`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/office-cleaning`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...locationPages.map((location) => ({
            url: `${baseUrl}/locations/${location.slug}`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.82,
        })),
    ]
}
