import { type NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/firebase"
import { getCouponById, updateCoupon, deleteCoupon, getCouponByCode } from "@/lib/firebase/db"
import { getCurrentUserData } from "@/lib/firebase/auth"

// Get a specific coupon (admin only)
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

    if (!userData || userData.role !== "admin") {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 403 })
    }

    // Get coupon by ID
    const coupon = await getCouponById(id)

    if (!coupon) {
      return NextResponse.json({ success: false, message: "Coupon not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, coupon })
  } catch (error: any) {
    console.error("Get coupon error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while fetching coupon",
      },
      { status: 500 },
    )
  }
}

// Update a coupon (admin only)
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

    if (!userData || userData.role !== "admin") {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 403 })
    }

    // Get update data from request body
    const updateData = await request.json()

    // If changing code, check if new code already exists
    if (updateData.code) {
      const existingCoupon = await getCouponByCode(updateData.code)
      if (existingCoupon && existingCoupon.id !== id) {
        return NextResponse.json({ success: false, message: "Coupon code already exists" }, { status: 400 })
      }
    }

    // Update coupon
    const updatedCoupon = await updateCoupon(id, updateData)

    if (!updatedCoupon) {
      return NextResponse.json({ success: false, message: "Coupon not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, coupon: updatedCoupon })
  } catch (error: any) {
    console.error("Update coupon error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while updating coupon",
      },
      { status: 500 },
    )
  }
}

// Delete a coupon (admin only)
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

    // Delete coupon
    const success = await deleteCoupon(id)

    if (!success) {
      return NextResponse.json({ success: false, message: "Coupon not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Delete coupon error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while deleting coupon",
      },
      { status: 500 },
    )
  }
}

