import { type NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/firebase"
import { getCoupons, createCoupon, getCouponByCode } from "@/lib/firebase/db"
import { getCurrentUserData } from "@/lib/firebase/auth"

// Get all coupons (admin only)
export async function GET(request: NextRequest) {
  try {
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

    // Get all coupons
    const coupons = await getCoupons()

    return NextResponse.json({ success: true, coupons })
  } catch (error: any) {
    console.error("Get coupons error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while fetching coupons",
      },
      { status: 500 },
    )
  }
}

// Create a new coupon (admin only)
export async function POST(request: NextRequest) {
  try {
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

    // Get coupon data from request body
    const couponData = await request.json()

    // Check if coupon code already exists
    const existingCoupon = await getCouponByCode(couponData.code)
    if (existingCoupon) {
      return NextResponse.json({ success: false, message: "Coupon code already exists" }, { status: 400 })
    }

    // Create new coupon
    const newCoupon = await createCoupon(couponData)

    return NextResponse.json({ success: true, coupon: newCoupon }, { status: 201 })
  } catch (error: any) {
    console.error("Create coupon error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while creating coupon",
      },
      { status: 500 },
    )
  }
}

