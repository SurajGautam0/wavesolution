import { type NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/firebase"
import { getServicePrices, updateServicePrice } from "@/lib/firebase/db"
import { getCurrentUserData } from "@/lib/firebase/auth"

// Get all prices
export async function GET(request: NextRequest) {
  try {
    // Get all service prices from Firestore
    const prices = await getServicePrices()
    return NextResponse.json({ success: true, prices })
  } catch (error: any) {
    console.error("Get prices error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while fetching prices",
      },
      { status: 500 },
    )
  }
}

// Update all prices (admin only)
export async function PUT(request: NextRequest) {
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

    // Get update data from request body
    const { percentage } = await request.json()

    // Validate percentage
    if (percentage < -50 || percentage > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Percentage must be between -50% and 100%",
        },
        { status: 400 },
      )
    }

    const multiplier = 1 + percentage / 100

    // Get all service prices
    const prices = await getServicePrices()
    const updatedPrices = []

    // Update each service price
    for (const price of prices) {
      const updatedPrice = {
        ...price,
        basePrice: Math.round(price.basePrice * multiplier),
        additionalFees: {},
      }

      // Update all additional fees
      for (const [key, value] of Object.entries(price.additionalFees)) {
        updatedPrice.additionalFees[key] = Math.round(value * multiplier)
      }

      // Save the updated price to Firestore
      await updateServicePrice(price.id, updatedPrice)
      updatedPrices.push(updatedPrice)
    }

    return NextResponse.json({ success: true, prices: updatedPrices })
  } catch (error: any) {
    console.error("Update prices error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while updating prices",
      },
      { status: 500 },
    )
  }
}

