import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "./config"
import type { ServicePrice, Coupon, Post } from "@/lib/types"
import { registerUser } from "./auth"

// Initial service prices data
const initialServicePrices: Omit<ServicePrice, "id">[] = [
  {
    name: "Home Cleaning",
    basePrice: 120,
    additionalFees: {
      bedroom: 20,
      bathroom: 15,
      kitchen: 25,
      livingRoom: 15,
      extraHour: 30,
    },
  },
  {
    name: "Office Cleaning",
    basePrice: 200,
    additionalFees: {
      smallOffice: 50,
      mediumOffice: 100,
      largeOffice: 150,
      extraHour: 40,
    },
  },
  {
    name: "Deep Cleaning",
    basePrice: 250,
    additionalFees: {
      bedroom: 30,
      bathroom: 25,
      kitchen: 40,
      livingRoom: 25,
      extraHour: 45,
    },
  },
  {
    name: "Move In/Out Cleaning",
    basePrice: 300,
    additionalFees: {
      bedroom: 35,
      bathroom: 30,
      kitchen: 50,
      livingRoom: 30,
      extraHour: 50,
    },
  },
  {
    name: "Window Cleaning",
    basePrice: 150,
    additionalFees: {
      smallWindow: 10,
      mediumWindow: 15,
      largeWindow: 25,
      extraHour: 35,
    },
  },
  {
    name: "Carpet Cleaning",
    basePrice: 180,
    additionalFees: {
      smallRoom: 40,
      mediumRoom: 60,
      largeRoom: 80,
      stairs: 50,
      extraHour: 40,
    },
  },
]

// Initial coupons data
const initialCoupons: Omit<Coupon, "id">[] = [
  {
    code: "WELCOME20",
    discount: 20,
    type: "percentage",
    validUntil: new Date(2024, 11, 31).toISOString(), // Dec 31, 2024
    status: "active",
    usageLimit: 100,
    usageCount: 45,
  },
  {
    code: "SUMMER15",
    discount: 15,
    type: "percentage",
    validUntil: new Date(2024, 8, 30).toISOString(), // Sep 30, 2024
    status: "active",
    usageLimit: 200,
    usageCount: 78,
  },
]

// Initial posts data
const initialPosts: Omit<Post, "id">[] = [
  {
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
    date: new Date(2024, 2, 15).toISOString(), // Mar 15, 2024
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
    date: new Date(2024, 2, 10).toISOString(), // Mar 10, 2024
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

// Initial users data
const initialUsers = [
  {
    email: "admin@wavesolution.com",
    password: "admin123",
    name: "Admin User",
    role: "admin" as const,
    phone: "0456789012",
    profileImage: "/placeholder.svg?height=200&width=200",
  },
  {
    email: "john@example.com",
    password: "password123",
    name: "John Doe",
    role: "customer" as const,
    phone: "0412345678",
    profileImage: "/placeholder.svg?height=200&width=200",
  },
  {
    email: "jane@example.com",
    password: "password123",
    name: "Jane Smith",
    role: "customer" as const,
    phone: "0423456789",
    profileImage: "/placeholder.svg?height=200&width=200",
  },
  {
    email: "michael@example.com",
    password: "password123",
    name: "Michael Brown",
    role: "worker" as const,
    phone: "0434567890",
    profileImage: "/placeholder.svg?height=200&width=200",
  },
  {
    email: "sarah@example.com",
    password: "password123",
    name: "Sarah Johnson",
    role: "worker" as const,
    phone: "0445678901",
    profileImage: "/placeholder.svg?height=200&width=200",
  },
]

// Seed service prices
export const seedServicePrices = async () => {
  try {
    // Check if service prices already exist
    const pricesSnapshot = await getDocs(collection(db, "servicePrices"))
    if (!pricesSnapshot.empty) {
      console.log("Service prices already exist, skipping seed")
      return
    }

    // Add service prices
    for (const price of initialServicePrices) {
      const priceRef = doc(collection(db, "servicePrices"))
      await setDoc(priceRef, {
        id: priceRef.id,
        ...price,
      })
      console.log(`Added service price: ${price.name}`)
    }

    console.log("Service prices seeded successfully")
  } catch (error) {
    console.error("Error seeding service prices:", error)
  }
}

// Seed coupons
export const seedCoupons = async () => {
  try {
    // Check if coupons already exist
    const couponsSnapshot = await getDocs(collection(db, "coupons"))
    if (!couponsSnapshot.empty) {
      console.log("Coupons already exist, skipping seed")
      return
    }

    // Add coupons
    for (const coupon of initialCoupons) {
      const couponRef = doc(collection(db, "coupons"))
      await setDoc(couponRef, {
        id: couponRef.id,
        ...coupon,
      })
      console.log(`Added coupon: ${coupon.code}`)
    }

    console.log("Coupons seeded successfully")
  } catch (error) {
    console.error("Error seeding coupons:", error)
  }
}

// Seed posts
export const seedPosts = async () => {
  try {
    // Check if posts already exist
    const postsSnapshot = await getDocs(collection(db, "posts"))
    if (!postsSnapshot.empty) {
      console.log("Posts already exist, skipping seed")
      return
    }

    // Add posts
    for (const post of initialPosts) {
      const postRef = doc(collection(db, "posts"))
      await setDoc(postRef, {
        id: postRef.id,
        ...post,
      })
      console.log(`Added post: ${post.title}`)
    }

    console.log("Posts seeded successfully")
  } catch (error) {
    console.error("Error seeding posts:", error)
  }
}

// Seed users
export const seedUsers = async () => {
  try {
    // Check if admin user already exists
    const adminQuery = query(collection(db, "users"), where("email", "==", "admin@wavesolution.com"))
    const adminSnapshot = await getDocs(adminQuery)

    if (!adminSnapshot.empty) {
      console.log("Admin user already exists, skipping user seed")
      return
    }

    // Add users
    for (const userData of initialUsers) {
      try {
        await registerUser(userData.email, userData.password, userData.name, userData.role)

        console.log(`Added user: ${userData.name}`)
      } catch (error) {
        console.error(`Error adding user ${userData.email}:`, error)
      }
    }

    console.log("Users seeded successfully")
  } catch (error) {
    console.error("Error seeding users:", error)
  }
}

// Seed all data
export const seedDatabase = async () => {
  try {
    await seedUsers()
    await seedServicePrices()
    await seedCoupons()
    await seedPosts()
    console.log("Database seeded successfully")
  } catch (error) {
    console.error("Error seeding database:", error)
  }
}

