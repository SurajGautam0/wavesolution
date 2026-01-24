"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { db, type User, type Booking, type Coupon, type Post } from "@/lib/db"
import { login, logout, getCurrentUser } from "@/lib/auth"

// Authentication actions
export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return { success: false, message: "Email and password are required" }
  }

  const user = await login(email, password)

  if (!user) {
    return { success: false, message: "Invalid email or password" }
  }

  // Redirect based on user role
  if (user.role === "admin") {
    redirect("/admin")
  } else if (user.role === "worker") {
    redirect("/worker")
  } else {
    redirect("/dashboard")
  }
}

export async function logoutAction() {
  await logout()
  redirect("/login")
}

// User actions
export async function createUserAction(userData: Omit<User, "id" | "createdAt">) {
  const currentUser = await getCurrentUser()

  // Only admins can create users
  if (!currentUser || currentUser.role !== "admin") {
    return { success: false, message: "Unauthorized" }
  }

  // Check if email already exists
  const existingUser = db.getUserByEmail(userData.email)
  if (existingUser) {
    return { success: false, message: "Email already exists" }
  }

  const newUser = db.createUser(userData)
  revalidatePath("/admin/users")

  return { success: true, user: newUser }
}

export async function updateUserAction(id: string, userData: Partial<User>) {
  const currentUser = await getCurrentUser()

  // Only admins or the user themselves can update user data
  if (!currentUser || (currentUser.role !== "admin" && currentUser.id !== id)) {
    return { success: false, message: "Unauthorized" }
  }

  // If changing email, check if new email already exists
  if (userData.email) {
    const existingUser = db.getUserByEmail(userData.email)
    if (existingUser && existingUser.id !== id) {
      return { success: false, message: "Email already exists" }
    }
  }

  const updatedUser = db.updateUser(id, userData)

  if (!updatedUser) {
    return { success: false, message: "User not found" }
  }

  revalidatePath("/admin/users")
  if (currentUser.id === id) {
    revalidatePath("/dashboard/profile")
  }

  return { success: true, user: updatedUser }
}

export async function deleteUserAction(id: string) {
  const currentUser = await getCurrentUser()

  // Only admins can delete users
  if (!currentUser || currentUser.role !== "admin") {
    return { success: false, message: "Unauthorized" }
  }

  // Prevent deleting yourself
  if (currentUser.id === id) {
    return { success: false, message: "Cannot delete your own account" }
  }

  const deletedUser = db.deleteUser(id)

  if (!deletedUser) {
    return { success: false, message: "User not found" }
  }

  revalidatePath("/admin/users")

  return { success: true }
}

// Booking actions
export async function createBookingAction(bookingData: Omit<Booking, "id" | "createdAt">) {
  const currentUser = await getCurrentUser()

  // Anyone can create a booking, but we'll associate it with the current user if logged in
  if (currentUser && !bookingData.email) {
    bookingData.email = currentUser.email
    bookingData.name = currentUser.name
    bookingData.phone = currentUser.phone || ""
  }

  // Apply coupon if provided
  if (bookingData.discount?.code) {
    const coupon = db.getCouponByCode(bookingData.discount.code)
    if (
      coupon &&
      coupon.status === "active" &&
      new Date(coupon.validUntil) >= new Date() &&
      coupon.usageCount < coupon.usageLimit
    ) {
      // Update coupon usage count
      db.updateCoupon(coupon.id, { usageCount: coupon.usageCount + 1 })
    } else {
      // Invalid coupon, remove discount
      delete bookingData.discount
    }
  }

  const newBooking = db.createBooking(bookingData)

  revalidatePath("/dashboard")
  revalidatePath("/admin/bookings")

  return { success: true, booking: newBooking }
}

export async function updateBookingAction(id: string, bookingData: Partial<Booking>) {
  const currentUser = await getCurrentUser()
  const booking = db.getBookingById(id)

  if (!booking) {
    return { success: false, message: "Booking not found" }
  }

  // Check permissions
  if (!currentUser) {
    return { success: false, message: "Unauthorized" }
  }

  // Admins can update any booking
  // Workers can update bookings assigned to them
  // Customers can only update their own bookings
  if (
    currentUser.role !== "admin" &&
    currentUser.role === "worker" &&
    booking.assignedTo !== currentUser.name &&
    currentUser.role === "customer" &&
    booking.email !== currentUser.email
  ) {
    return { success: false, message: "Unauthorized" }
  }

  const updatedBooking = db.updateBooking(id, bookingData)

  revalidatePath("/dashboard")
  revalidatePath("/admin/bookings")
  revalidatePath("/worker")

  return { success: true, booking: updatedBooking }
}

export async function deleteBookingAction(id: string) {
  const currentUser = await getCurrentUser()
  const booking = db.getBookingById(id)

  if (!booking) {
    return { success: false, message: "Booking not found" }
  }

  // Check permissions
  if (!currentUser) {
    return { success: false, message: "Unauthorized" }
  }

  // Only admins or the customer who made the booking can delete it
  if (currentUser.role !== "admin" && currentUser.role === "customer" && booking.email !== currentUser.email) {
    return { success: false, message: "Unauthorized" }
  }

  const deletedBooking = db.deleteBooking(id)

  revalidatePath("/dashboard")
  revalidatePath("/admin/bookings")

  return { success: true }
}

// Coupon actions
export async function createCouponAction(couponData: Omit<Coupon, "id">) {
  const currentUser = await getCurrentUser()

  // Only admins can create coupons
  if (!currentUser || currentUser.role !== "admin") {
    return { success: false, message: "Unauthorized" }
  }

  // Check if coupon code already exists
  const existingCoupon = db.getCouponByCode(couponData.code)
  if (existingCoupon) {
    return { success: false, message: "Coupon code already exists" }
  }

  const newCoupon = db.createCoupon(couponData)

  revalidatePath("/admin/coupons")

  return { success: true, coupon: newCoupon }
}

export async function updateCouponAction(id: string, couponData: Partial<Coupon>) {
  const currentUser = await getCurrentUser()

  // Only admins can update coupons
  if (!currentUser || currentUser.role !== "admin") {
    return { success: false, message: "Unauthorized" }
  }

  // If changing code, check if new code already exists
  if (couponData.code) {
    const existingCoupon = db.getCouponByCode(couponData.code)
    if (existingCoupon && existingCoupon.id !== id) {
      return { success: false, message: "Coupon code already exists" }
    }
  }

  const updatedCoupon = db.updateCoupon(id, couponData)

  if (!updatedCoupon) {
    return { success: false, message: "Coupon not found" }
  }

  revalidatePath("/admin/coupons")

  return { success: true, coupon: updatedCoupon }
}

export async function deleteCouponAction(id: string) {
  const currentUser = await getCurrentUser()

  // Only admins can delete coupons
  if (!currentUser || currentUser.role !== "admin") {
    return { success: false, message: "Unauthorized" }
  }

  const deletedCoupon = db.deleteCoupon(id)

  if (!deletedCoupon) {
    return { success: false, message: "Coupon not found" }
  }

  revalidatePath("/admin/coupons")

  return { success: true }
}

// Post actions
export async function createPostAction(postData: Omit<Post, "id">) {
  const currentUser = await getCurrentUser()

  // Only admins and workers can create posts
  if (!currentUser || (currentUser.role !== "admin" && currentUser.role !== "worker")) {
    return { success: false, message: "Unauthorized" }
  }

  // Set author to current user's name if not provided
  if (!postData.author) {
    postData.author = currentUser.name
  }

  // If worker is creating a post, set status to pending
  if (currentUser.role === "worker") {
    postData.status = "pending"
  }

  // Check if slug already exists
  const existingPost = db.getPostBySlug(postData.slug)
  if (existingPost) {
    return { success: false, message: "Slug already exists" }
  }

  const newPost = db.createPost(postData)

  revalidatePath("/admin/posts")
  revalidatePath("/blog")

  return { success: true, post: newPost }
}

export async function updatePostAction(id: string, postData: Partial<Post>) {
  const currentUser = await getCurrentUser()
  const post = db.getPostById(id)

  if (!post) {
    return { success: false, message: "Post not found" }
  }

  // Check permissions
  if (!currentUser) {
    return { success: false, message: "Unauthorized" }
  }

  // Admins can update any post
  // Workers can only update their own posts
  if (currentUser.role !== "admin" && currentUser.role === "worker" && post.author !== currentUser.name) {
    return { success: false, message: "Unauthorized" }
  }

  // If worker is updating a post, set status to pending
  if (currentUser.role === "worker") {
    postData.status = "pending"
  }

  // If changing slug, check if new slug already exists
  if (postData.slug) {
    const existingPost = db.getPostBySlug(postData.slug)
    if (existingPost && existingPost.id !== id) {
      return { success: false, message: "Slug already exists" }
    }
  }

  const updatedPost = db.updatePost(id, postData)

  revalidatePath("/admin/posts")
  revalidatePath("/blog")
  if (post.slug) {
    revalidatePath(`/blog/${post.slug}`)
  }

  return { success: true, post: updatedPost }
}

export async function deletePostAction(id: string) {
  const currentUser = await getCurrentUser()
  const post = db.getPostById(id)

  if (!post) {
    return { success: false, message: "Post not found" }
  }

  // Check permissions
  if (!currentUser) {
    return { success: false, message: "Unauthorized" }
  }

  // Admins can delete any post
  // Workers can only delete their own posts
  if (currentUser.role !== "admin" && currentUser.role === "worker" && post.author !== currentUser.name) {
    return { success: false, message: "Unauthorized" }
  }

  const deletedPost = db.deletePost(id)

  revalidatePath("/admin/posts")
  revalidatePath("/blog")

  return { success: true }
}

// File upload action
export async function uploadFileAction(formData: FormData) {
  const currentUser = await getCurrentUser()

  // Only authenticated users can upload files
  if (!currentUser) {
    return { success: false, message: "Unauthorized" }
  }

  const file = formData.get("file") as File

  if (!file) {
    return { success: false, message: "No file provided" }
  }

  // In a real app, you would upload the file to a storage service like AWS S3
  // For this demo, we'll just return a placeholder URL
  const fileType = file.type.split("/")[0]
  const fileName = file.name.replace(/\s+/g, "-").toLowerCase()

  // Generate a fake URL for the uploaded file
  const fileUrl = `/uploads/${fileType}/${Date.now()}-${fileName}`

  return { success: true, fileUrl }
}

// Pricing actions
interface ServicePrice {
  id: string
  name: string
  basePrice: number
  additionalFees: {
    [key: string]: number
  }
}

// In-memory store for service prices
let servicePrices: ServicePrice[] = [
  {
    id: "home",
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
    id: "office",
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
    id: "deep",
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
    id: "move",
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
    id: "window",
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
    id: "carpet",
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

export async function getPricesAction() {
  return { success: true, prices: servicePrices }
}

export async function updatePriceAction(id: string, updates: Partial<ServicePrice>) {
  const currentUser = await getCurrentUser()

  // Only admins can update prices
  if (!currentUser || currentUser.role !== "admin") {
    return { success: false, message: "Unauthorized" }
  }

  const index = servicePrices.findIndex((service) => service.id === id)

  if (index === -1) {
    return { success: false, message: "Service not found" }
  }

  // Update the service price
  servicePrices[index] = {
    ...servicePrices[index],
    ...updates,
    additionalFees: {
      ...servicePrices[index].additionalFees,
      ...(updates.additionalFees || {}),
    },
  }

  revalidatePath("/admin/pricing")
  revalidatePath("/services")

  return { success: true, service: servicePrices[index] }
}

export async function adjustAllPricesAction(percentage: number) {
  const currentUser = await getCurrentUser()

  // Only admins can update prices
  if (!currentUser || currentUser.role !== "admin") {
    return { success: false, message: "Unauthorized" }
  }

  // Validate percentage
  if (percentage < -50 || percentage > 100) {
    return { success: false, message: "Percentage must be between -50% and 100%" }
  }

  const multiplier = 1 + percentage / 100

  // Update all service prices
  servicePrices = servicePrices.map((service) => {
    const updatedService = {
      ...service,
      basePrice: Math.round(service.basePrice * multiplier),
      additionalFees: {},
    }

    // Update all additional fees
    for (const [key, value] of Object.entries(service.additionalFees)) {
      updatedService.additionalFees[key] = Math.round(value * multiplier)
    }

    return updatedService
  })

  revalidatePath("/admin/pricing")
  revalidatePath("/services")

  return { success: true, prices: servicePrices }
}

