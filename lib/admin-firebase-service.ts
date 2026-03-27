import { collection, getDocs, orderBy, query, QueryConstraint, where } from "firebase/firestore"

import { adminDb } from "./admin-firebase"

async function getAdminCollectionDocuments(
  collectionName: string,
  constraints: QueryConstraint[] = [],
): Promise<any[]> {
  try {
    const collectionRef = collection(adminDb, collectionName)
    const collectionQuery = constraints.length > 0 ? query(collectionRef, ...constraints) : collectionRef
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

export const getAllBookings = async () =>
  getAdminCollectionDocuments("bookings", [orderBy("createdAt", "desc")])

export const getApprovedTestimonials = async () =>
  getAdminCollectionDocuments("testimonials", [
    where("approved", "==", true),
    orderBy("createdAt", "desc"),
  ])

export const getAllServices = async () =>
  getAdminCollectionDocuments("services", [orderBy("createdAt", "desc")])

export const getAllContacts = async () =>
  getAdminCollectionDocuments("contacts", [orderBy("createdAt", "desc")])

export const getAllSubscriptions = async () =>
  getAdminCollectionDocuments("subscriptions", [orderBy("createdAt", "desc")])
