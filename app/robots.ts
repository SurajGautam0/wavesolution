import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/', '/admin/', '/dashboard/', '/login/', '/register/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/private/', '/api/', '/admin/', '/dashboard/', '/login/', '/register/'],
            },
        ],
        sitemap: 'https://www.wavesolution.com.au/sitemap.xml',
        host: 'https://www.wavesolution.com.au',
    }
}
