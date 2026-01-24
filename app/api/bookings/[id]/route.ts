import { type NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/firebase"
import { getBookingById, updateBooking, deleteBooking } from "@/lib/firebase/db"
import { getCurrentUserData } from "@/lib/firebase/auth"

// Get a specific booking
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

    // Get booking by ID
    const booking = await getBookingById(id)

    if (!booking) {
      return NextResponse.json({ success: false, message: "Booking not found" }, { status: 404 })
    }

    // Check if user has permission to view this booking
    if (
      userData.role !== "admin" &&
      userData.role === "worker" &&
      booking.assignedTo !== userData.name &&
      userData.role === "customer" &&
      booking.email !== userData.email
    ) {
      return NextResponse.json({ success: false, message: "Forbidden" }, { status: 403 })
    }

    return NextResponse.json({ success: true, booking })
  } catch (error: any) {
    console.error("Get booking error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while fetching booking",
      },
      { status: 500 },
    )
  }
}

// Update a booking
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

    // Get booking by ID
    const booking = await getBookingById(id)

    if (!booking) {
      return NextResponse.json({ success: false, message: "Booking not found" }, { status: 404 })
    }

    // Check if user has permission to update this booking
    if (
      userData.role !== "admin" &&
      userData.role === "worker" &&
      booking.assignedTo !== userData.name &&
      userData.role === "customer" &&
      booking.email !== userData.email
    ) {
      return NextResponse.json({ success: false, message: "Forbidden" }, { status: 403 })
    }

    // Get update data from request body
    const updateData = await request.json()

    // Update booking
    const updatedBooking = await updateBooking(id, updateData)

    return NextResponse.json({ success: true, booking: updatedBooking })
  } catch (error: any) {
    console.error("Update booking error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while updating booking",
      },
      { status: 500 },
    )
  }
}

// Delete a booking
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

    if (!userData) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    // Get booking by ID
    const booking = await getBookingById(id)

    if (!booking) {
      return NextResponse.json({ success: false, message: "Booking not found" }, { status: 404 })
    }

    // Check if user has permission to delete this booking
    // Only admins or the customer who made the booking can delete it
    if (userData.role !== "admin" && userData.role === "customer" && booking.email !== userData.email) {
      return NextResponse.json({ success: false, message: "Forbidden" }, { status: 403 })
    }

    // Delete booking
    const success = await deleteBooking(id)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Delete booking error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while deleting booking",
      },
      { status: 500 },
    )
  }
}

