import { type NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/firebase"
import {
  getBookings,
  getBookingsByUser,
  getBookingsByWorker,
  createBooking,
  getCouponByCode,
  updateCoupon,
} from "@/lib/firebase/db"
import { getCurrentUserData } from "@/lib/firebase/auth"

// Get all bookings (filtered by role)
export async function GET(request: NextRequest) {
  try {
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

    let bookings = []

    // Filter bookings based on user role
    if (userData.role === "admin") {
      // Admins can see all bookings
      bookings = await getBookings()
    } else if (userData.role === "worker") {
      // Workers can see bookings assigned to them
      bookings = await getBookingsByWorker(userData.name)
    } else {
      // Customers can see their own bookings
      bookings = await getBookingsByUser(userData.email)
    }

    return NextResponse.json({ success: true, bookings })
  } catch (error: any) {
    console.error("Get bookings error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while fetching bookings",
      },
      { status: 500 },
    )
  }
}

// Create a new booking
export async function POST(request: NextRequest) {
  try {
    // Get booking data from request body
    const bookingData = await request.json()

    // Check if user is authenticated
    const currentUser = auth.currentUser

    if (currentUser) {
      const userData = await getCurrentUserData(currentUser)
      if (userData && !bookingData.email) {
        // Associate booking with current user if not specified
        bookingData.email = userData.email
        bookingData.name = userData.name
        bookingData.phone = userData.phone || ""
      }
    }

    // Apply coupon if provided
    if (bookingData.couponCode) {
      const coupon = await getCouponByCode(bookingData.couponCode)
      if (
        coupon &&
        coupon.status === "active" &&
        new Date(coupon.validUntil) >= new Date() &&
        coupon.usageCount < coupon.usageLimit
      ) {
        // Update coupon usage count
        await updateCoupon(coupon.id, { usageCount: coupon.usageCount + 1 })

        // Add discount to booking
        bookingData.discount = {
          code: coupon.code,
          amount: coupon.discount,
          type: coupon.type,
        }
      }

      // Remove coupon code from booking data
      delete bookingData.couponCode
    }

    // Create new booking
    const newBooking = await createBooking(bookingData)

    return NextResponse.json({ success: true, booking: newBooking }, { status: 201 })
  } catch (error: any) {
    console.error("Create booking error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while creating booking",
      },
      { status: 500 },
    )
  }
}

