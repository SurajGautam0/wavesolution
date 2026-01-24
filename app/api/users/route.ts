import { type NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/firebase"
import { getUsers, getUserByEmail } from "@/lib/firebase/db"
import { registerUser } from "@/lib/firebase/auth"

// Get all users (admin only)
export async function GET(request: NextRequest) {
  try {
    // Check if user is authenticated and is an admin
    const currentUser = auth.currentUser

    if (!currentUser) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    // Get user data to check role
    const idToken = await currentUser.getIdTokenResult()
    const isAdmin = idToken.claims.role === "admin"

    if (!isAdmin) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 403 })
    }

    // Get all users
    const users = await getUsers()

    return NextResponse.json({ success: true, users })
  } catch (error: any) {
    console.error("Get users error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while fetching users",
      },
      { status: 500 },
    )
  }
}

// Create a new user (admin only)
export async function POST(request: NextRequest) {
  try {
    // Check if user is authenticated and is an admin
    const currentUser = auth.currentUser

    if (!currentUser) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    // Get user data to check role
    const idToken = await currentUser.getIdTokenResult()
    const isAdmin = idToken.claims.role === "admin"

    if (!isAdmin) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 403 })
    }

    // Get user data from request body
    const userData = await request.json()
    const { email, password, name, role } = userData

    // Check if email already exists
    const existingUser = await getUserByEmail(email)
    if (existingUser) {
      return NextResponse.json({ success: false, message: "Email already exists" }, { status: 400 })
    }

    // Create new user
    const newUser = await registerUser(email, password, name, role)

    return NextResponse.json({ success: true, user: newUser }, { status: 201 })
  } catch (error: any) {
    console.error("Create user error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while creating user",
      },
      { status: 500 },
    )
  }
}

