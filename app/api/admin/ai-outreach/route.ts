import { NextRequest, NextResponse } from "next/server"

// OpenRouter API Configuration (Free Agentic Models)
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions"
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || "qwen/qwen3.6-plus:free"

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY?.trim()

    if (!apiKey) {
      return NextResponse.json(
        {
          message: "OPENROUTER_API_KEY is not configured. Get a free key at https://openrouter.ai/keys",
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

    const completionResponse = await fetch(OPENROUTER_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": "https://www.wavesolution.com.au",
        "X-Title": "Wave Solution Admin",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [
          {
            role: "system",
            content: "You write short, professional outreach messages for a cleaning and pest control business. Keep replies under 3 sentences, mention the business name and Gold Coast location, mention relevant services, and end with a light free-quote invitation. Return only the final message text."
          },
          {
            role: "user",
            content: `Business name: ${businessName}\nLocation: ${location}\nBusiness type: ${businessType}\nService focus: ${serviceFocus}\nCompany: Wave Solution, Gold Coast, QLD, Australia.`
          }
        ],
        temperature: 0.7,
        max_tokens: 150,
      }),
    })

    const completionData = await completionResponse.json()

    if (!completionResponse.ok) {
      const message =
        completionData?.error?.message || "OpenRouter request failed. Check your API key and model availability."

      return NextResponse.json({ message }, { status: completionResponse.status })
    }

    const message = completionData?.choices?.[0]?.message?.content?.trim()

    if (!message) {
      return NextResponse.json(
        { message: "OpenRouter returned an empty response." },
        { status: 502 }
      )
    }

    return NextResponse.json({
      message,
      provider: "OpenRouter",
      model: OPENROUTER_MODEL,
    })
  } catch (error: any) {
    console.error("AI outreach generation error:", error)

    return NextResponse.json(
      { message: error?.message || "Failed to generate outreach draft." },
      { status: 500 }
    )
  }
}
