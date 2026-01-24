import { type NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/firebase"
import { getUserById, updateUser, deleteUser } from "@/lib/firebase/db"
import { getCurrentUserData } from "@/lib/firebase/auth"

// Get a specific user
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    // Check if user is authenticated
    const currentUser = auth.currentUser

    if (!currentUser) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    // Get user data to check permissions
    const userData = await getCurrentUserData(currentUser)

    if (!userData) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    // Only admins can access other users' data
    if (userData.role !== "admin" && userData.id !== id) {
      return NextResponse.json({ success: false, message: "Forbidden" }, { status: 403 })
    }

    // Get user by ID
    const user = await getUserById(id)

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, user })
  } catch (error: any) {
    console.error("Get user error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while fetching user",
      },
      { status: 500 },
    )
  }
}

// Update a user
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    // Check if user is authenticated
    const currentUser = auth.currentUser

    if (!currentUser) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    // Get user data to check permissions
    const userData = await getCurrentUserData(currentUser)

    if (!userData) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    // Only admins or the user themselves can update user data
    if (userData.role !== "admin" && userData.id !== id) {
      return NextResponse.json({ success: false, message: "Forbidden" }, { status: 403 })
    }

    // Get update data from request body
    const updateData = await request.json()

    // Update user
    const updatedUser = await updateUser(id, updateData)

    if (!updatedUser) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, user: updatedUser })
  } catch (error: any) {
    console.error("Update user error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while updating user",
      },
      { status: 500 },
    )
  }
}

// Delete a user
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    // Check if user is authenticated
    const currentUser = auth.currentUser

    if (!currentUser) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    // Get user data to check permissions
    const userData = await getCurrentUserData(currentUser)

    if (!userData || userData.role !== "admin") {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 403 })
    }

    // Prevent deleting yourself
    if (userData.id === id) {
      return NextResponse.json({ success: false, message: "Cannot delete your own account" }, { status: 400 })
    }

    // Delete user
    const success = await deleteUser(id)

    if (!success) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Delete user error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while deleting user",
      },
      { status: 500 },
    )
  }
}

