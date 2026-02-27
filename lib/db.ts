// This is a simple in-memory database for demonstration purposes
// In a real application, you would use a proper database like PostgreSQL, MongoDB, etc.

import { v4 as uuidv4 } from "uuid"

// Define types
export interface User {
  id: string
  name: string
  email: string
  password: string // In a real app, this would be hashed
  role: "admin" | "worker" | "customer"
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

// Initialize data store
const users: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@wavesolution.com",
    password: "admin123", // In a real app, this would be hashed
    role: "admin",
    status: "active",
    createdAt: "2023-01-01T00:00:00.000Z",
    phone: "0456789012",
    profileImage: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    role: "customer",
    status: "active",
    createdAt: "2024-01-15T00:00:00.000Z",
    phone: "0412345678",
    profileImage: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password123",
    role: "customer",
    status: "active",
    createdAt: "2024-02-20T00:00:00.000Z",
    phone: "0423456789",
    profileImage: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    name: "Michael Brown",
    email: "michael@example.com",
    password: "password123",
    role: "worker",
    status: "active",
    createdAt: "2023-11-10T00:00:00.000Z",
    phone: "0434567890",
    profileImage: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    password: "password123",
    role: "worker",
    status: "active",
    createdAt: "2023-12-05T00:00:00.000Z",
    phone: "0445678901",
    profileImage: "/placeholder.svg?height=200&width=200",
  },
]

const bookings: Booking[] = [
  {
    id: "1",
    service: "home",
    propertyType: "apartment",
    bedrooms: "2",
    bathrooms: "1",
    date: "2024-04-15",
    time: "morning",
    address: "123 Main St",
    city: "Gold Coast",
    postcode: "4215",
    name: "John Doe",
    phone: "0412345678",
    email: "john@example.com",
    notes: "Please be careful with the plants",
    status: "pending",
    createdAt: "2024-04-01T10:30:00.000Z",
    assignedTo: "Michael Brown",
  },
  {
    id: "2",
    service: "office",
    propertyType: "house",
    bedrooms: "3",
    bathrooms: "2",
    date: "2024-04-20",
    time: "afternoon",
    address: "456 Park Ave",
    city: "Melbourne",
    postcode: "3000",
    name: "Jane Smith",
    phone: "0423456789",
    email: "jane@example.com",
    notes: "Entry code is 1234",
    status: "confirmed",
    createdAt: "2024-04-02T14:15:00.000Z",
    assignedTo: "Sarah Johnson",
  },
]

const coupons: Coupon[] = [
  {
    id: "1",
    code: "WELCOME20",
    discount: 20,
    type: "percentage",
    validUntil: "2024-12-31",
    status: "active",
    usageLimit: 100,
    usageCount: 45,
  },
  {
    id: "2",
    code: "SUMMER15",
    discount: 15,
    type: "percentage",
    validUntil: "2024-09-30",
    status: "active",
    usageLimit: 200,
    usageCount: 78,
  },
]

const posts: Post[] = [
  {
    id: "1",
    title: "The Benefits of Regular Home Cleaning",
    slug: "benefits-of-regular-home-cleaning",
    content: `
      <h2>Why Regular Cleaning Matters</h2>
      <p>Regular home cleaning is essential for maintaining a healthy living environment. It helps reduce allergens, prevents the buildup of dust and dirt, and creates a more pleasant space to live in.</p>
      
      <h2>Health Benefits</h2>
      <p>A clean home means fewer allergens and less dust, which can significantly improve respiratory health. Regular cleaning also reduces the presence of harmful bacteria and viruses, leading to fewer illnesses.</p>
      
      <h2>Mental Well-being</h2>
      <p>Living in a clean, organized space has been shown to reduce stress and anxiety. Coming home to a tidy environment can help you relax and unwind after a long day.</p>
      
      <h2>Time and Money Savings</h2>
      <p>Regular maintenance cleaning is more efficient than occasional deep cleaning. It also helps preserve your furniture and fixtures, saving you money on replacements and repairs in the long run.</p>
    `,
    excerpt: "Discover how regular cleaning can improve your health and well-being...",
    author: "Admin",
    date: "2024-03-15",
    status: "published",
    type: "blog",
    featuredImage: "/placeholder.svg?height=600&width=1200",
    seo: {
      title: "The Benefits of Regular Home Cleaning | WaveSolution",
      description:
        "Learn how regular home cleaning can improve your health, save you time and money, and create a more pleasant living environment.",
      keywords: "home cleaning, health benefits, clean home, regular cleaning",
    },
  },
  {
    id: "2",
    title: "Spring Cleaning Tips for a Fresh Home",
    slug: "spring-cleaning-tips",
    content: `
      <h2>Getting Started with Spring Cleaning</h2>
      <p>Spring is the perfect time to give your home a thorough cleaning. Start by creating a checklist of all the areas that need attention, and gather all the necessary supplies before you begin.</p>
      
      <h2>Room-by-Room Approach</h2>
      <p>Tackle your spring cleaning one room at a time to avoid feeling overwhelmed. Begin with the most used rooms, such as the kitchen and bathrooms, then move on to bedrooms and living areas.</p>
      
      <h2>Don't Forget These Often Overlooked Areas</h2>
      <p>When spring cleaning, be sure to clean areas that are often neglected during regular cleaning, such as ceiling fans, baseboards, window treatments, and under furniture.</p>
      
      <h2>Decluttering as You Clean</h2>
      <p>Spring cleaning is also a great opportunity to declutter your home. As you clean each room, set aside items you no longer need or use for donation or disposal.</p>
    `,
    excerpt: "Get your home ready for spring with these essential cleaning tips...",
    author: "Admin",
    date: "2024-03-10",
    status: "published",
    type: "blog",
    featuredImage: "/placeholder.svg?height=600&width=1200",
    seo: {
      title: "Spring Cleaning Tips for a Fresh Home | WaveSolution",
      description:
        "Essential spring cleaning tips to refresh your home. Learn how to tackle spring cleaning room by room and declutter as you go.",
      keywords: "spring cleaning, cleaning tips, decluttering, fresh home",
    },
  },
]

// Database operations
export const db = {
  // User operations
  getUsers: () => [...users],
  getUserById: (id: string) => users.find((user) => user.id === id),
  getUserByEmail: (email: string) => users.find((user) => user.email === email),
  createUser: (userData: Omit<User, "id" | "createdAt">) => {
    const newUser: User = {
      ...userData,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    }
    users.push(newUser)
    return newUser
  },
  updateUser: (id: string, userData: Partial<User>) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1) {
      users[index] = { ...users[index], ...userData }
      return users[index]
    }
    return null
  },
  deleteUser: (id: string) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1) {
      const deletedUser = users[index]
      users.splice(index, 1)
      return deletedUser
    }
    return null
  },

  // Booking operations
  getBookings: () => [...bookings],
  getBookingById: (id: string) => bookings.find((booking) => booking.id === id),
  getBookingsByUser: (email: string) => bookings.filter((booking) => booking.email === email),
  getBookingsByWorker: (name: string) => bookings.filter((booking) => booking.assignedTo === name),
  createBooking: (bookingData: Omit<Booking, "id" | "createdAt">) => {
    const newBooking: Booking = {
      ...bookingData,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    }
    bookings.push(newBooking)
    return newBooking
  },
  updateBooking: (id: string, bookingData: Partial<Booking>) => {
    const index = bookings.findIndex((booking) => booking.id === id)
    if (index !== -1) {
      bookings[index] = { ...bookings[index], ...bookingData }
      return bookings[index]
    }
    return null
  },
  deleteBooking: (id: string) => {
    const index = bookings.findIndex((booking) => booking.id === id)
    if (index !== -1) {
      const deletedBooking = bookings[index]
      bookings.splice(index, 1)
      return deletedBooking
    }
    return null
  },

  // Coupon operations
  getCoupons: () => [...coupons],
  getCouponById: (id: string) => coupons.find((coupon) => coupon.id === id),
  getCouponByCode: (code: string) => coupons.find((coupon) => coupon.code === code),
  createCoupon: (couponData: Omit<Coupon, "id">) => {
    const newCoupon: Coupon = {
      ...couponData,
      id: uuidv4(),
    }
    coupons.push(newCoupon)
    return newCoupon
  },
  updateCoupon: (id: string, couponData: Partial<Coupon>) => {
    const index = coupons.findIndex((coupon) => coupon.id === id)
    if (index !== -1) {
      coupons[index] = { ...coupons[index], ...couponData }
      return coupons[index]
    }
    return null
  },
  deleteCoupon: (id: string) => {
    const index = coupons.findIndex((coupon) => coupon.id === id)
    if (index !== -1) {
      const deletedCoupon = coupons[index]
      coupons.splice(index, 1)
      return deletedCoupon
    }
    return null
  },

  // Post operations
  getPosts: () => [...posts],
  getPostById: (id: string) => posts.find((post) => post.id === id),
  getPostBySlug: (slug: string) => posts.find((post) => post.slug === slug),
  getPublishedPosts: () => posts.filter((post) => post.status === "published"),
  createPost: (postData: Omit<Post, "id">) => {
    const newPost: Post = {
      ...postData,
      id: uuidv4(),
    }
    posts.push(newPost)
    return newPost
  },
  updatePost: (id: string, postData: Partial<Post>) => {
    const index = posts.findIndex((post) => post.id === id)
    if (index !== -1) {
      posts[index] = { ...posts[index], ...postData }
      return posts[index]
    }
    return null
  },
  deletePost: (id: string) => {
    const index = posts.findIndex((post) => post.id === id)
    if (index !== -1) {
      const deletedPost = posts[index]
      posts.splice(index, 1)
      return deletedPost
    }
    return null
  },
}

