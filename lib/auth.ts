import { cookies } from "next/headers"
import { db, type User } from "@/lib/db"

// Simple authentication functions
// In a real app, you would use a proper authentication library like NextAuth.js

export async function login(email: string, password: string): Promise<User | null> {
  const user = db.getUserByEmail(email)

  if (!user || user.password !== password) {
    return null
  }

  // Set a cookie to maintain the session
  const cookieStore = cookies()
  cookieStore.set("user_id", user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  })

  return user
}

export async function logout(): Promise<void> {
  const cookieStore = cookies()
  cookieStore.delete("user_id")
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = cookies()
  const userId = cookieStore.get("user_id")?.value

  if (!userId) {
    return null
  }

  return db.getUserById(userId)
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

