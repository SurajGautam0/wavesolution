// Advanced SEO Schema Markup Generator for Wave Solution Cleaning
// This file contains reusable schema markup templates for different page types

import { businessInfo } from './business-info';

// FAQ Schema - Use on service pages with FAQ sections
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// BreadcrumbList Schema - Use on all interior pages
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${businessInfo.baseUrl}${crumb.url}`,
    })),
  }
}

// Service Schema - Use on individual service pages
export function generateServiceSchema(service: {
  name: string
  description: string
  areaServed: string[]
  price?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: businessInfo.businessNameWithLocation,
      telephone: businessInfo.phoneE164,
      url: businessInfo.baseUrl,
    },
    description: service.description,
    areaServed: service.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
      containedInPlace: {
        '@type': 'State',
        name: 'Queensland',
      },
    })),
    offers: service.price
      ? {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
      }
      : undefined,
    url: `${businessInfo.baseUrl}${service.url}`,
  }
}

// Review Schema - Use on testimonials pages or service pages with reviews
export function generateReviewSchema(reviews: Array<{
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}>) {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: businessInfo.businessNameWithLocation,
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  }))
}

// HowTo Schema - Use for guides and checklists
export function generateHowToSchema(howTo: {
  name: string
  description: string
  totalTime?: string
  estimatedCost?: string
  steps: Array<{ name: string; text: string; image?: string }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    totalTime: howTo.totalTime,
    estimatedCost: howTo.estimatedCost
      ? {
        '@type': 'MonetaryAmount',
        currency: 'AUD',
        value: howTo.estimatedCost,
      }
      : undefined,
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  }
}

// Article Schema - Use for blog posts
export function generateArticleSchema(article: {
  headline: string
  description: string
  datePublished: string
  dateModified: string
  author?: string
  jobTitle?: string
  image: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: `${businessInfo.baseUrl}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author || 'Suraj Gautam',
      jobTitle: article.jobTitle || 'Operations Director & Quality Assurance Lead',
      worksFor: {
        '@type': 'Organization',
        name: businessInfo.businessName,
        url: businessInfo.baseUrl,
      },
      url: `${businessInfo.baseUrl}/team`,
    },
    publisher: {
      '@type': 'Organization',
      name: businessInfo.businessNameWithLocation,
      logo: {
        '@type': 'ImageObject',
        url: `${businessInfo.baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${businessInfo.baseUrl}${article.url}`,
    },
  }
}

// LocalBusiness Enhanced Schema with more properties
export function generateEnhancedLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'CleaningService'],
    '@id': `${businessInfo.baseUrl}/#business`,
    name: businessInfo.businessNameWithLocation,
    alternateName: businessInfo.brandName,
    description:
      'Professional cleaning services in Gold Coast including house cleaning, office cleaning, bond cleaning, end of lease cleaning, deep cleaning, commercial cleaning, carpet cleaning, and pest control.',
    image: `${businessInfo.baseUrl}/gold-coast-cleaning-services.jpeg`,
    logo: `${businessInfo.baseUrl}/logo.png`,
    url: businessInfo.baseUrl,
    telephone: businessInfo.phoneE164,
    email: businessInfo.email,
    priceRange: '$120 - $600',
    currenciesAccepted: 'AUD',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',

    // Enhanced properties for better local SEO
    slogan: 'Professional Cleaning Services Across Gold Coast',

    // Service area with more detail
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: businessInfo.coordinates.latitude,
          longitude: businessInfo.coordinates.longitude,
        },
        geoRadius: '30000', // 30km radius
      },
      ...businessInfo.serviceAreas.map((area) => ({
        '@type': 'City',
        name: area,
        containedInPlace: {
          '@type': 'State',
          name: 'Queensland',
          containedInPlace: {
            '@type': 'Country',
            name: 'Australia',
          },
        },
      })),
    ],

    // Address
    address: {
      '@type': 'PostalAddress',
      addressLocality: businessInfo.address.locality,
      addressRegion: businessInfo.address.region,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.countryCode,
    },

    // Geo coordinates
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessInfo.coordinates.latitude,
      longitude: businessInfo.coordinates.longitude,
    },

    // Opening hours
    openingHoursSpecification: businessInfo.openingHoursSpecification,

    // Ratings and reviews
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '87',
      bestRating: '5',
      worstRating: '1',
    },

    // Contact points
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: businessInfo.phoneE164,
        contactType: 'customer service',
        areaServed: 'AU',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        email: businessInfo.email,
        contactType: 'sales',
        areaServed: 'AU',
      },
    ],

    // Services offered
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cleaning Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'House Cleaning Gold Coast',
            description: 'Professional house cleaning services for homes across Gold Coast.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bond Cleaning Gold Coast',
            description: 'Detailed bond cleaning with bond-back guarantee for Gold Coast tenants.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Office Cleaning Gold Coast',
            description: 'Commercial office cleaning for businesses across Gold Coast.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Deep Cleaning Gold Coast',
            description: 'Thorough deep cleaning for kitchens, bathrooms, and entire properties.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'End of Lease Cleaning Gold Coast',
            description: 'Complete end of lease cleaning for rentals with satisfaction guarantee.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Cleaning Gold Coast',
            description: 'Tailored commercial cleaning for offices and business spaces.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carpet Cleaning Gold Coast',
            description: 'Professional carpet steam cleaning for homes and offices.',
          },
        },
      ],
    },

    // Same as - verified social profiles
    sameAs: [
      'https://maps.app.goo.gl/gabLdzZ7v3VRzgk87',
      'https://www.facebook.com/wavesolutioncleaning',
      'https://www.instagram.com/wavesolutioncleaning',
    ],
  }
}

// Location Page Schema
export function generateLocationSchema(location: {
  name: string
  description: string
  url: string
  latitude?: number
  longitude?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: location.name,
    description: location.description,
    geo: location.latitude && location.longitude
      ? {
        '@type': 'GeoCoordinates',
        latitude: location.latitude.toString(),
        longitude: location.longitude.toString(),
      }
      : undefined,
    containedInPlace: {
      '@type': 'City',
      name: 'Gold Coast',
      containedInPlace: {
        '@type': 'State',
        name: 'Queensland',
      },
    },
    url: `${businessInfo.baseUrl}${location.url}`,
  }
}

// Video Schema - For future video content
export function generateVideoSchema(video: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  contentUrl: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.contentUrl,
    embedUrl: video.contentUrl,
  }
}

// Event Schema - For promotional events or workshops
export function generateEventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  offers?: { price: string; url: string }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Gold Coast',
        addressRegion: 'Queensland',
        addressCountry: 'AU',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: businessInfo.businessNameWithLocation,
      url: businessInfo.baseUrl,
    },
    offers: event.offers
      ? {
        '@type': 'Offer',
        price: event.offers.price,
        priceCurrency: 'AUD',
        url: event.offers.url,
        availability: 'https://schema.org/InStock',
      }
      : undefined,
  }
}
