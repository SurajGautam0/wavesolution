import { type NextRequest, NextResponse } from "next/server"
import { seedDatabase } from "@/lib/firebase/seed"

export async function GET(request: NextRequest) {
  try {
    // This endpoint should be protected in production
    await seedDatabase()

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully",
    })
  } catch (error: any) {
    console.error("Error seeding database:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while seeding the database",
      },
      { status: 500 },
    )
  }
}

