import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Wave Solution Cleaning & Pest Control - Gold Coast',
    short_name: 'Wave Solution',
    description: 'Professional house, bond, and office cleaning services across the Gold Coast, Queensland.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#39BDE4',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
