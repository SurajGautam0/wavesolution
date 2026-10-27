import { NextRequest, NextResponse } from "next/server"

import { discoverLeads } from "@/lib/lead-discovery"
import { findLeadArea, findLeadCategory } from "@/lib/lead-discovery-config"
import { verifyAdminIdToken } from "@/lib/verify-admin-token"

export const runtime = "nodejs"
export const maxDuration = 60
export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
    const authorization = request.headers.get("authorization") || ""
    const match = authorization.match(/^Bearer\s+(.+)$/i)
    const admin = match ? await verifyAdminIdToken(match[1]) : null

    if (!admin) {
        return NextResponse.json({ success: false, message: "Admin authentication required." }, { status: 401 })
    }

    let payload: { area?: unknown; category?: unknown }
    try {
        payload = await request.json()
    } catch {
        return NextResponse.json({ success: false, message: "Invalid request." }, { status: 400 })
    }

    const area = findLeadArea(String(payload.area || ""))
    const category = findLeadCategory(String(payload.category || ""))

    if (!area || !category) {
        return NextResponse.json({ success: false, message: "Choose a valid area and business type." }, { status: 400 })
    }

    try {
        const result = await discoverLeads(area, category)
        return NextResponse.json({
            success: true,
            area: area.label,
            category: category.label,
            ...result,
        })
    } catch (error) {
        console.error("Lead discovery failed:", error)
        return NextResponse.json(
            { success: false, message: "Lead search could not be completed. Please try again or choose another category." },
            { status: 502 },
        )
    }
}
