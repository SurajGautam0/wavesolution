import { NextRequest, NextResponse } from "next/server"

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"
const GROQ_MODEL = "llama-3.1-8b-instant"

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GROQ_API_KEY?.trim()

    if (!apiKey) {
      return NextResponse.json(
        {
          message: "GROQ_API_KEY is not configured. Add it to your environment variables to enable AI draft generation.",
        },
        { status: 500 }
      )
    }

    const body = await request.json()
    const businessName = String(body.businessName || "").trim()
    const location = String(body.location || "Gold Coast").trim()
    const businessType = String(body.businessType || "local business").trim()
    const serviceFocus = String(
      body.serviceFocus || "commercial cleaning, carpet cleaning, pest control"
    ).trim()

    if (!businessName) {
      return NextResponse.json({ message: "Business name is required." }, { status: 400 })
    }

    const completionResponse = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        temperature: 0.7,
        max_tokens: 120,
        messages: [
          {
            role: "system",
            content:
              "You write short, professional outreach messages for a cleaning and pest control business. Keep replies under 3 sentences, mention the business name and Gold Coast location, mention relevant services, and end with a light free-quote invitation. Return only the final message text.",
          },
          {
            role: "user",
            content: `Business name: ${businessName}\nLocation: ${location}\nBusiness type: ${businessType}\nService focus: ${serviceFocus}\nCompany: Wave Solution, Gold Coast, QLD, Australia.`,
          },
        ],
      }),
    })

    const completionData = await completionResponse.json()

    if (!completionResponse.ok) {
      const message =
        completionData?.error?.message || "Groq request failed while generating outreach draft."

      return NextResponse.json({ message }, { status: completionResponse.status })
    }

    const message = completionData?.choices?.[0]?.message?.content?.trim()

    if (!message) {
      return NextResponse.json(
        { message: "The AI provider returned an empty response." },
        { status: 502 }
      )
    }

    return NextResponse.json({
      message,
      provider: "Groq",
      model: GROQ_MODEL,
    })
  } catch (error: any) {
    console.error("AI outreach generation error:", error)

    return NextResponse.json(
      { message: error?.message || "Failed to generate outreach draft." },
      { status: 500 }
    )
  }
}
