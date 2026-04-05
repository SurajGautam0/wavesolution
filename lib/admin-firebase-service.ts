import {
  collection,
  getDocs,
  orderBy,
  query,
  QueryConstraint,
  where,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore"

import { adminDb } from "./admin-firebase"

async function getAdminCollectionDocuments(
  collectionName: string,
  constraints: QueryConstraint[] = [],
): Promise<any[]> {
  try {
    const collectionRef = collection(adminDb, collectionName)
    const collectionQuery =
      constraints.length > 0 ? query(collectionRef, ...constraints) : collectionRef
    const querySnapshot = await getDocs(collectionQuery)

    return querySnapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }))
  } catch (error) {
    console.error(`Error getting admin ${collectionName}:`, error)
    throw error
  }
}

// ── Read ──────────────────────────────────────────────────────────────────────

export const getAllBookings = async () =>
  getAdminCollectionDocuments("bookings", [orderBy("createdAt", "desc")])

export const getApprovedTestimonials = async () =>
  getAdminCollectionDocuments("testimonials", [
    where("approved", "==", true),
    orderBy("createdAt", "desc"),
  ])

export const getAllTestimonials = async () =>
  getAdminCollectionDocuments("testimonials", [orderBy("createdAt", "desc")])

export const getAllServices = async () =>
  getAdminCollectionDocuments("services", [orderBy("createdAt", "desc")])

export const getAllContacts = async () =>
  getAdminCollectionDocuments("contacts", [orderBy("createdAt", "desc")])

export const getAllSubscriptions = async () =>
  getAdminCollectionDocuments("subscriptions", [orderBy("createdAt", "desc")])

export const getAllUsers = async () =>
  getAdminCollectionDocuments("users", [orderBy("createdAt", "desc")])

export const getAllCoupons = async () =>
  getAdminCollectionDocuments("coupons", [orderBy("createdAt", "desc")])

export const getAllPosts = async () =>
  getAdminCollectionDocuments("posts", [orderBy("createdAt", "desc")])

export const getAllPricing = async () =>
  getAdminCollectionDocuments("pricing", [])

// ── Bookings ──────────────────────────────────────────────────────────────────

export const updateBookingStatus = async (bookingId: string, status: string) => {
  const ref = doc(adminDb, "bookings", bookingId)
  await updateDoc(ref, { status, updatedAt: serverTimestamp() })
}

// ── Testimonials ──────────────────────────────────────────────────────────────

export const approveTestimonial = async (testimonialId: string, approved: boolean) => {
  const ref = doc(adminDb, "testimonials", testimonialId)
  await updateDoc(ref, { approved, updatedAt: serverTimestamp() })
}

// ── Users ─────────────────────────────────────────────────────────────────────

export const updateUserRole = async (userId: string, role: string) => {
  const ref = doc(adminDb, "users", userId)
  await updateDoc(ref, { role, updatedAt: serverTimestamp() })
}

// ── Coupons ───────────────────────────────────────────────────────────────────

export const saveCoupon = async (couponData: {
  code: string
  discount: number
  expiry?: string | null
  maxUses?: number | null
  usedCount: number
}) => {
  const ref = await addDoc(collection(adminDb, "coupons"), {
    ...couponData,
    createdAt: serverTimestamp(),
    active: true,
  })
  return { id: ref.id, ...couponData }
}

export const deleteCoupon = async (couponId: string) => {
  await deleteDoc(doc(adminDb, "coupons", couponId))
}

// ── Posts ─────────────────────────────────────────────────────────────────────

export const savePost = async (postData: {
  title: string
  content: string
  slug: string
}) => {
  const ref = await addDoc(collection(adminDb, "posts"), {
    ...postData,
    createdAt: serverTimestamp(),
    published: false,
  })
  return { id: ref.id, ...postData, published: false }
}

export const deletePost = async (postId: string) => {
  await deleteDoc(doc(adminDb, "posts", postId))
}

export const togglePostPublished = async (postId: string, published: boolean) => {
  const ref = doc(adminDb, "posts", postId)
  await updateDoc(ref, { published, updatedAt: serverTimestamp() })
}

// ── Pricing ───────────────────────────────────────────────────────────────────

export const savePricingTier = async (tierId: string, data: {
  name: string
  price: number
  unit: string
}) => {
  if (tierId) {
    const ref = doc(adminDb, "pricing", tierId)
    await updateDoc(ref, { ...data, updatedAt: serverTimestamp() })
    return { id: tierId, ...data }
  } else {
    const ref = await addDoc(collection(adminDb, "pricing"), {
      ...data,
      createdAt: serverTimestamp(),
    })
    return { id: ref.id, ...data }
  }
}
