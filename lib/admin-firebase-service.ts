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
  getDoc,
  setDoc,
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
  } catch (error: any) {
    // If the constrained query failed (e.g. missing index or missing field for orderBy), fallback to a plain collection fetch
    if (constraints.length > 0) {
      try {
        console.warn(`Constrained query for ${collectionName} failed (${error?.message || error}). Falling back to plain collection fetch...`)
        const collectionRef = collection(adminDb, collectionName)
        const querySnapshot = await getDocs(collectionRef)
        const docs = querySnapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }))
        // In-memory sort by createdAt descending
        return docs.sort((a: any, b: any) => {
          const aTime = a.createdAt?.seconds ? a.createdAt.seconds * 1000 : (a.createdAt ? new Date(a.createdAt).getTime() : 0)
          const bTime = b.createdAt?.seconds ? b.createdAt.seconds * 1000 : (b.createdAt ? new Date(b.createdAt).getTime() : 0)
          return bTime - aTime
        })
      } catch (fallbackError) {
        console.error(`Error getting admin fallback ${collectionName}:`, fallbackError)
        return []
      }
    }
    console.error(`Error getting admin ${collectionName}:`, error)
    return []
  }
}

// ── Read ──────────────────────────────────────────────────────────────────────

export const getAllBookings = async () =>
  getAdminCollectionDocuments("bookings", [orderBy("createdAt", "desc")])

export const getApprovedTestimonials = async () => {
  const all = await getAdminCollectionDocuments("testimonials", [orderBy("createdAt", "desc")])
  return all.filter((t: any) => t.approved === true)
}

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

export const updateBookingOperations = async (bookingId: string, data: {
  assignedTo?: string
  scheduledDate?: string
  scheduledTime?: string
  internalNotes?: string
}) => {
  const ref = doc(adminDb, "bookings", bookingId)
  await updateDoc(ref, { ...data, updatedAt: serverTimestamp() })
}

export const updateContactLead = async (contactId: string, data: {
  leadStatus: string
  internalNotes?: string
}) => {
  const ref = doc(adminDb, "contacts", contactId)
  await updateDoc(ref, { ...data, updatedAt: serverTimestamp() })
}

export const getAllQuotes = async () =>
  getAdminCollectionDocuments("quotes", [orderBy("createdAt", "desc")])

export const createQuote = async (quote: {
  customerName: string
  customerEmail: string
  customerPhone: string
  service: string
  propertySize: string
  bedrooms: number
  bathrooms: number
  addOns: string[]
  amount: number
  status: "draft" | "sent" | "accepted" | "declined"
}) => {
  const ref = await addDoc(collection(adminDb, "quotes"), {
    ...quote,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
  return { id: ref.id, ...quote }
}

export const updateQuoteStatus = async (quoteId: string, status: string) => {
  await updateDoc(doc(adminDb, "quotes", quoteId), { status, updatedAt: serverTimestamp() })
}

export const getAuditLog = async () =>
  getAdminCollectionDocuments("adminAuditLog", [orderBy("createdAt", "desc")])

export const recordAdminActivity = async (entry: {
  actor: string
  action: string
  target: string
  details: string
}) => {
  await addDoc(collection(adminDb, "adminAuditLog"), {
    ...entry,
    createdAt: serverTimestamp(),
  })
}

export const getAllInvoices = async () =>
  getAdminCollectionDocuments("invoices", [orderBy("createdAt", "desc")])

export const createInvoice = async (invoice: {
  bookingId: string
  invoiceNumber: string
  customerName: string
  customerEmail: string
  customerPhone: string
  service: string
  amountDue: number
  amountPaid: number
  status: "unpaid" | "partial" | "paid"
  currency: "AUD"
  issuedAt: string
}) => {
  const ref = doc(adminDb, "invoices", invoice.bookingId)
  const existing = await getDoc(ref)
  if (existing.exists()) throw new Error("An invoice already exists for this booking")
  await setDoc(ref, { ...invoice, createdAt: serverTimestamp(), updatedAt: serverTimestamp() })
  return { id: ref.id, ...invoice }
}

export const updateInvoicePayment = async (invoiceId: string, data: {
  amountPaid: number
  status: "unpaid" | "partial" | "paid"
  paymentMethod: string
  paymentReference: string
}) => {
  await updateDoc(doc(adminDb, "invoices", invoiceId), { ...data, updatedAt: serverTimestamp() })
}

export const saveEmailRecord = async (record: {
  to: string
  subject: string
  body: string
  status: "sent" | "failed"
  messageId?: string
  error?: string
  sentBy: string
}) => {
  const ref = await addDoc(collection(adminDb, "adminEmails"), {
    ...record,
    createdAt: serverTimestamp(),
  })
  return { id: ref.id, ...record }
}

export const getEmailRecords = async () =>
  getAdminCollectionDocuments("adminEmails", [orderBy("createdAt", "desc")])

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
    status: "active",
    usageCount: couponData.usedCount,
    usageLimit: couponData.maxUses ?? 999999,
    type: "percentage",
    validUntil: couponData.expiry || "2099-12-31T23:59:59.999Z",
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
  excerpt?: string
  seoTitle?: string
  seoDescription?: string
}) => {
  const ref = await addDoc(collection(adminDb, "posts"), {
    ...postData,
    createdAt: serverTimestamp(),
    published: false,
  })
  return { id: ref.id, ...postData, published: false }
}

export const updatePost = async (postId: string, postData: {
  title: string
  content: string
  slug: string
  excerpt?: string
  seoTitle?: string
  seoDescription?: string
}) => {
  await updateDoc(doc(adminDb, "posts", postId), { ...postData, updatedAt: serverTimestamp() })
  return { id: postId, ...postData }
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
