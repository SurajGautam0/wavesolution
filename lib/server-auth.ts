import { cookies } from "next/headers"
import { db, type User } from "@/lib/db"

export async function login(email: string, password: string): Promise<User | null> {
  const user = db.getUserByEmail(email)

  if (!user || user.password !== password) {
    return null
  }

  // Set a cookie to maintain the session
  const cookieStore = await cookies()
  cookieStore.set("user_id", user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  })

  return user
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete("user_id")
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies()
  const userId = cookieStore.get("user_id")?.value

  if (!userId) {
    return null
  }

  const user = db.getUserById(userId)
  return user || null
}

export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser()
  return !!user
}

export async function isAdmin(): Promise<boolean> {
  const user = await getCurrentUser()
  return !!user && user.role === "admin"
}

export async function isWorker(): Promise<boolean> {
  const user = await getCurrentUser()
  return !!user && user.role === "worker"
}

export async function isCustomer(): Promise<boolean> {
  const user = await getCurrentUser()
  return !!user && user.role === "customer"
} 