import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  type UserCredential,
  type User as FirebaseUser,
} from "firebase/auth"
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore"
import { auth, db } from "."
import type { User } from "@/lib/types"

// Sign up a new user
export const registerUser = async (
  email: string,
  password: string,
  name: string,
  role: "admin" | "worker" | "customer" = "customer",
): Promise<User> => {
  try {
    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // Update profile with name
    await updateProfile(user, { displayName: name })

    // Create user document in Firestore
    const userData: Omit<User, "id"> = {
      name,
      email,
      role,
      status: "active",
      createdAt: serverTimestamp(),
      phone: "",
      profileImage: "",
    }

    await setDoc(doc(db, "users", user.uid), userData)

    // Return user data
    return {
      id: user.uid,
      ...userData,
      createdAt: new Date().toISOString(),
    }
  } catch (error) {
    console.error("Error registering user:", error)
    throw error
  }
}

// Sign in existing user
export const loginUser = async (email: string, password: string): Promise<UserCredential> => {
  try {
    return await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.error("Error logging in:", error)
    throw error
  }
}

// Sign out user
export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth)
  } catch (error) {
    console.error("Error logging out:", error)
    throw error
  }
}

// Get current user data from Firestore
export const getCurrentUserData = async (user: FirebaseUser): Promise<User | null> => {
  try {
    const userDoc = await getDoc(doc(db, "users", user.uid))

    if (userDoc.exists()) {
      const userData = userDoc.data() as Omit<User, "id">
      return {
        id: user.uid,
        ...userData,
        createdAt: userData.createdAt instanceof Date ? userData.createdAt.toISOString() : new Date().toISOString(),
      }
    }

    return null
  } catch (error) {
    console.error("Error getting user data:", error)
    throw error
  }
}

// Set up auth state observer
export const onAuthStateChanged = (callback: (user: User | null) => void) => {
  return firebaseOnAuthStateChanged(auth, async (user) => {
    if (user) {
      const userData = await getCurrentUserData(user)
      callback(userData)
    } else {
      callback(null)
    }
  })
}

