import { type NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/firebase"
import { getServicePriceById, updateServicePrice } from "@/lib/firebase/db"
import { getCurrentUserData } from "@/lib/firebase/auth"

// Get a specific price
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    // Get service price by ID
    const servicePrice = await getServicePriceById(id)

    if (!servicePrice) {
      return NextResponse.json({ success: false, message: "Service not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, service: servicePrice })
  } catch (error: any) {
    console.error("Get price error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while fetching price",
      },
      { status: 500 },
    )
  }
}

// Update a specific price (admin only)
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

    // Get service price by ID
    const servicePrice = await getServicePriceById(id)

    if (!servicePrice) {
      return NextResponse.json({ success: false, message: "Service not found" }, { status: 404 })
    }

    // Get update data from request body
    const updateData = await request.json()

    // Update the service price
    const updatedPrice = {
      ...servicePrice,
      ...updateData,
      additionalFees: {
        ...servicePrice.additionalFees,
        ...(updateData.additionalFees || {}),
      },
    }

    // Save the updated price to Firestore
    const result = await updateServicePrice(id, updatedPrice)

    return NextResponse.json({ success: true, service: result })
  } catch (error: any) {
    console.error("Update price error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while updating price",
      },
      { status: 500 },
    )
  }
}

