import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
  Timestamp,
  type DocumentData,
} from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "../firebase"
import type { User, Booking, Coupon, Post, ServicePrice } from "@/lib/types"

// Convert Firestore timestamp to ISO string
const convertTimestampToString = (timestamp: Timestamp | Date | null | undefined): string => {
  if (!timestamp) return new Date().toISOString()
  if (timestamp instanceof Date) return timestamp.toISOString()
  return timestamp.toDate().toISOString()
}

// Convert Firestore document to typed object
const convertDoc = <T extends { id: string }>(doc: DocumentData): T => {
  const data = doc.data()

  // Convert all timestamp fields to ISO strings
  Object.keys(data).forEach((key) => {
    if (data[key] instanceof Timestamp) {
      data[key] = convertTimestampToString(data[key])
    }
  })

  return {
    id: doc.id,
    ...data,
  } as T
}

// USER OPERATIONS
export const getUsers = async (): Promise<User[]> => {
  try {
    const usersSnapshot = await getDocs(collection(db, "users"))
    return usersSnapshot.docs.map((doc) => convertDoc<User>(doc))
  } catch (error) {
    console.error("Error getting users:", error)
    throw error
  }
}

export const getUserById = async (id: string): Promise<User | null> => {
  try {
    const userDoc = await getDoc(doc(db, "users", id))
    if (!userDoc.exists()) return null
    return convertDoc<User>(userDoc)
  } catch (error) {
    console.error("Error getting user:", error)
    throw error
  }
}

export const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const q = query(collection(db, "users"), where("email", "==", email))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.empty) return null
    return convertDoc<User>(querySnapshot.docs[0])
  } catch (error) {
    console.error("Error getting user by email:", error)
    throw error
  }
}

export const createUser = async (userData: Omit<User, "id" | "createdAt">): Promise<User> => {
  try {
    const userRef = doc(collection(db, "users"))
    const newUser = {
      ...userData,
      createdAt: serverTimestamp(),
    }

    await setDoc(userRef, newUser)

    return {
      id: userRef.id,
      ...userData,
      createdAt: new Date().toISOString(),
    }
  } catch (error) {
    console.error("Error creating user:", error)
    throw error
  }
}

export const updateUser = async (id: string, userData: Partial<User>): Promise<User | null> => {
  try {
    const userRef = doc(db, "users", id)
    const userDoc = await getDoc(userRef)

    if (!userDoc.exists()) return null

    await updateDoc(userRef, userData)

    const updatedUserDoc = await getDoc(userRef)
    return convertDoc<User>(updatedUserDoc)
  } catch (error) {
    console.error("Error updating user:", error)
    throw error
  }
}

export const deleteUser = async (id: string): Promise<boolean> => {
  try {
    await deleteDoc(doc(db, "users", id))
    return true
  } catch (error) {
    console.error("Error deleting user:", error)
    throw error
  }
}

// BOOKING OPERATIONS
export const getBookings = async (): Promise<Booking[]> => {
  try {
    const bookingsSnapshot = await getDocs(collection(db, "bookings"))
    return bookingsSnapshot.docs.map((doc) => convertDoc<Booking>(doc))
  } catch (error) {
    console.error("Error getting bookings:", error)
    throw error
  }
}

export const getBookingById = async (id: string): Promise<Booking | null> => {
  try {
    const bookingDoc = await getDoc(doc(db, "bookings", id))
    if (!bookingDoc.exists()) return null
    return convertDoc<Booking>(bookingDoc)
  } catch (error) {
    console.error("Error getting booking:", error)
    throw error
  }
}

export const getBookingsByUser = async (email: string): Promise<Booking[]> => {
  try {
    const q = query(collection(db, "bookings"), where("email", "==", email))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => convertDoc<Booking>(doc))
  } catch (error) {
    console.error("Error getting bookings by user:", error)
    throw error
  }
}

export const getBookingsByWorker = async (name: string): Promise<Booking[]> => {
  try {
    const q = query(collection(db, "bookings"), where("assignedTo", "==", name))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => convertDoc<Booking>(doc))
  } catch (error) {
    console.error("Error getting bookings by worker:", error)
    throw error
  }
}

export const createBooking = async (bookingData: Omit<Booking, "id" | "createdAt">): Promise<Booking> => {
  try {
    const bookingRef = doc(collection(db, "bookings"))
    const newBooking = {
      ...bookingData,
      createdAt: serverTimestamp(),
    }

    await setDoc(bookingRef, newBooking)

    return {
      id: bookingRef.id,
      ...bookingData,
      createdAt: new Date().toISOString(),
    }
  } catch (error) {
    console.error("Error creating booking:", error)
    throw error
  }
}

export const updateBooking = async (id: string, bookingData: Partial<Booking>): Promise<Booking | null> => {
  try {
    const bookingRef = doc(db, "bookings", id)
    const bookingDoc = await getDoc(bookingRef)

    if (!bookingDoc.exists()) return null

    await updateDoc(bookingRef, bookingData)

    const updatedBookingDoc = await getDoc(bookingRef)
    return convertDoc<Booking>(updatedBookingDoc)
  } catch (error) {
    console.error("Error updating booking:", error)
    throw error
  }
}

export const deleteBooking = async (id: string): Promise<boolean> => {
  try {
    await deleteDoc(doc(db, "bookings", id))
    return true
  } catch (error) {
    console.error("Error deleting booking:", error)
    throw error
  }
}

// COUPON OPERATIONS
export const getCoupons = async (): Promise<Coupon[]> => {
  try {
    const couponsSnapshot = await getDocs(collection(db, "coupons"))
    return couponsSnapshot.docs.map((doc) => convertDoc<Coupon>(doc))
  } catch (error) {
    console.error("Error getting coupons:", error)
    throw error
  }
}

export const getCouponById = async (id: string): Promise<Coupon | null> => {
  try {
    const couponDoc = await getDoc(doc(db, "coupons", id))
    if (!couponDoc.exists()) return null
    return convertDoc<Coupon>(couponDoc)
  } catch (error) {
    console.error("Error getting coupon:", error)
    throw error
  }
}

export const getCouponByCode = async (code: string): Promise<Coupon | null> => {
  try {
    const q = query(collection(db, "coupons"), where("code", "==", code))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.empty) return null
    return convertDoc<Coupon>(querySnapshot.docs[0])
  } catch (error) {
    console.error("Error getting coupon by code:", error)
    throw error
  }
}

export const createCoupon = async (couponData: Omit<Coupon, "id">): Promise<Coupon> => {
  try {
    const couponRef = doc(collection(db, "coupons"))
    await setDoc(couponRef, couponData)

    return {
      id: couponRef.id,
      ...couponData,
    }
  } catch (error) {
    console.error("Error creating coupon:", error)
    throw error
  }
}

export const updateCoupon = async (id: string, couponData: Partial<Coupon>): Promise<Coupon | null> => {
  try {
    const couponRef = doc(db, "coupons", id)
    const couponDoc = await getDoc(couponRef)

    if (!couponDoc.exists()) return null

    await updateDoc(couponRef, couponData)

    const updatedCouponDoc = await getDoc(couponRef)
    return convertDoc<Coupon>(updatedCouponDoc)
  } catch (error) {
    console.error("Error updating coupon:", error)
    throw error
  }
}

export const deleteCoupon = async (id: string): Promise<boolean> => {
  try {
    await deleteDoc(doc(db, "coupons", id))
    return true
  } catch (error) {
    console.error("Error deleting coupon:", error)
    throw error
  }
}

// POST OPERATIONS
export const getPosts = async (): Promise<Post[]> => {
  try {
    const postsSnapshot = await getDocs(collection(db, "posts"))
    return postsSnapshot.docs.map((doc) => convertDoc<Post>(doc))
  } catch (error) {
    console.error("Error getting posts:", error)
    throw error
  }
}

export const getPostById = async (id: string): Promise<Post | null> => {
  try {
    const postDoc = await getDoc(doc(db, "posts", id))
    if (!postDoc.exists()) return null
    return convertDoc<Post>(postDoc)
  } catch (error) {
    console.error("Error getting post:", error)
    throw error
  }
}

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const q = query(collection(db, "posts"), where("slug", "==", slug))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.empty) return null
    return convertDoc<Post>(querySnapshot.docs[0])
  } catch (error) {
    console.error("Error getting post by slug:", error)
    throw error
  }
}

export const getPublishedPosts = async (): Promise<Post[]> => {
  try {
    const q = query(collection(db, "posts"), where("status", "==", "published"))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => convertDoc<Post>(doc))
  } catch (error) {
    console.error("Error getting published posts:", error)
    throw error
  }
}

export const createPost = async (postData: Omit<Post, "id">): Promise<Post> => {
  try {
    const postRef = doc(collection(db, "posts"))
    await setDoc(postRef, postData)

    return {
      id: postRef.id,
      ...postData,
    }
  } catch (error) {
    console.error("Error creating post:", error)
    throw error
  }
}

export const updatePost = async (id: string, postData: Partial<Post>): Promise<Post | null> => {
  try {
    const postRef = doc(db, "posts", id)
    const postDoc = await getDoc(postRef)

    if (!postDoc.exists()) return null

    await updateDoc(postRef, postData)

    const updatedPostDoc = await getDoc(postRef)
    return convertDoc<Post>(updatedPostDoc)
  } catch (error) {
    console.error("Error updating post:", error)
    throw error
  }
}

export const deletePost = async (id: string): Promise<boolean> => {
  try {
    await deleteDoc(doc(db, "posts", id))
    return true
  } catch (error) {
    console.error("Error deleting post:", error)
    throw error
  }
}

// SERVICE PRICE OPERATIONS
export const getServicePrices = async (): Promise<ServicePrice[]> => {
  try {
    const pricesSnapshot = await getDocs(collection(db, "servicePrices"))
    return pricesSnapshot.docs.map((doc) => convertDoc<ServicePrice>(doc))
  } catch (error) {
    console.error("Error getting service prices:", error)
    throw error
  }
}

export const getServicePriceById = async (id: string): Promise<ServicePrice | null> => {
  try {
    const priceDoc = await getDoc(doc(db, "servicePrices", id))
    if (!priceDoc.exists()) return null
    return convertDoc<ServicePrice>(priceDoc)
  } catch (error) {
    console.error("Error getting service price:", error)
    throw error
  }
}

export const updateServicePrice = async (
  id: string,
  priceData: Partial<ServicePrice>,
): Promise<ServicePrice | null> => {
  try {
    const priceRef = doc(db, "servicePrices", id)
    const priceDoc = await getDoc(priceRef)

    if (!priceDoc.exists()) return null

    await updateDoc(priceRef, priceData)

    const updatedPriceDoc = await getDoc(priceRef)
    return convertDoc<ServicePrice>(updatedPriceDoc)
  } catch (error) {
    console.error("Error updating service price:", error)
    throw error
  }
}

// FILE UPLOAD
export const uploadFile = async (file: File, path: string): Promise<string> => {
  try {
    const storageRef = ref(storage, `${path}/${Date.now()}-${file.name}`)
    await uploadBytes(storageRef, file)
    return await getDownloadURL(storageRef)
  } catch (error) {
    console.error("Error uploading file:", error)
    throw error
  }
}

