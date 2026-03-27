"use client"

import { createContext, useContext, useEffect, useState } from "react"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
  UserCredential,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import { auth } from "./firebase"
import { saveUser, getUserById } from "./firebase-service"
import { toast } from "sonner"

type User = {
  id: string
  email: string
  name: string
  role: string
  address?: string
} | null

interface AuthContextType {
  user: User
  loading: boolean
  signIn: (email: string, password: string) => Promise<UserCredential>
  signUp: (email: string, password: string, name: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  logout: () => Promise<void>
  updateUserProfile: (userData: Partial<Omit<User, 'id'>>) => Promise<any>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)

  const persistUserSession = (userData: Exclude<User, null>) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
    document.cookie = `user=${JSON.stringify(userData)}; path=/; max-age=86400`
  }

  const clearUserSession = () => {
    setUser(null)
    localStorage.removeItem("user")
    document.cookie = "user=; path=/; max-age=0"
  }

  const buildBasicUser = (firebaseUser: FirebaseUser): Exclude<User, null> => ({
    id: firebaseUser.uid,
    email: firebaseUser.email || "",
    name: firebaseUser.displayName || "User",
    role: "user",
  })

  const hydrateOrCreateUser = async (firebaseUser: FirebaseUser) => {
    try {
      const userData = await getUserById(firebaseUser.uid)

      if (userData) {
        const normalizedUser = userData as Exclude<User, null>
        persistUserSession(normalizedUser)
        return normalizedUser
      }
    } catch (error) {
      console.error("Error fetching user data:", error)
    }

    const basicUser = buildBasicUser(firebaseUser)

    try {
      await saveUser(basicUser)
    } catch (saveError) {
      console.error("Error saving basic user:", saveError)
    }

    persistUserSession(basicUser)
    return basicUser
  }

  useEffect(() => {
    // Check for local storage user on initial load
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Error parsing stored user:", error)
        localStorage.removeItem("user")
      }
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        await hydrateOrCreateUser(firebaseUser)
      } else {
        clearUserSession()
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    const credential = await signInWithEmailAndPassword(auth, email, password)
    await hydrateOrCreateUser(credential.user)
    return credential
  }

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)

      // Create user profile
      const newUser = {
        id: result.user.uid,
        email,
        name,
        role: "user",
      }

      // Save to Firestore with retry logic
      let saveAttempts = 0
      const maxAttempts = 3

      while (saveAttempts < maxAttempts) {
        try {
          await saveUser(newUser)
          break // Exit the loop if saving succeeds
        } catch (error: any) {
          console.error(`Error saving user (attempt ${saveAttempts + 1}):`, error)
          saveAttempts++

          if (saveAttempts >= maxAttempts) {
            // If we've reached max attempts, still allow the account to be created
            // but notify the user there was an issue saving profile details
            toast.error("Your account was created but there was an issue saving your profile details.")
          } else {
            // Wait before retrying (increasing delay with each attempt)
            await new Promise(resolve => setTimeout(resolve, 1000 * saveAttempts))
          }
        }
      }

      // Update local state
      persistUserSession(newUser)

    } catch (error) {
      console.error("Error creating user:", error)
      throw error
    }
  }

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)

      await hydrateOrCreateUser(result.user)
    } catch (error) {
      console.error("Error signing in with Google:", error)
      throw error
    }
  }

  const updateUserProfile = async (userData: Partial<Omit<User, 'id'>>) => {
    if (!user || !user.id) {
      throw new Error("No user is currently logged in")
    }

    try {
      // Update the user data in Firestore
      const updatedUser = {
        ...user,
        ...userData
      }

      await saveUser(updatedUser)

      persistUserSession(updatedUser)

      return updatedUser
    } catch (error) {
      console.error("Error updating user profile:", error)
      throw error
    }
  }

  const logout = async () => {
    await signOut(auth)
    clearUserSession()
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signInWithGoogle, logout, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
} 
