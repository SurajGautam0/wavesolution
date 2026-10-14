export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "dispatcher" | "worker" | "customer"
  status: "active" | "inactive"
  createdAt: string
  phone?: string
  profileImage?: string
}

export interface Booking {
  id: string
  service: string
  propertyType: string
  bedrooms: string
  bathrooms: string
  date: string
  time: string
  address: string
  city: string
  postcode: string
  name: string
  phone: string
  email: string
  notes: string
  status: string
  createdAt: string
  assignedTo?: string
  scheduledDate?: string
  scheduledTime?: string
  internalNotes?: string
  workerChecklist?: Record<string, boolean>
  workerNotes?: string
  workerIssue?: { category: string; description: string; reportedAt: string }
  workerIssueResolvedAt?: string
  workerStartedAt?: string
  workerCompletedAt?: string
  workerCheckInAt?: string
  workerPhotoUrls?: string[]
  discount?: {
    code: string
    amount: number
    type: string
  }
}

export interface Coupon {
  id: string
  code: string
  discount: number
  type: string
  validUntil: string
  status: string
  usageLimit: number
  usageCount: number
}

export interface Post {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  author: string
  date: string
  status: string
  type: string
  featuredImage?: string
  seo?: {
    title?: string
    description?: string
    keywords?: string
  }
}

export interface ServicePrice {
  id: string
  name: string
  basePrice: number
  additionalFees: {
    [key: string]: number
  }
}

