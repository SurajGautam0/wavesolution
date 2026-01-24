import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://crystalfront.com.np'

    // Generic routes
    const routes = [
        '',
        '/about',
        '/services',
        '/contact',
        '/book',
        '/blog',
        '/testimonials',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Example: If you had dynamic blog posts, you would fetch them here
    /*
    const posts = await getPosts()
    const postRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
    */

    return [...routes]
}
