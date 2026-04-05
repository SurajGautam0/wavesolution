// Direct OpenRouter API Test Script
// This bypasses Next.js to test the API directly

const OPENROUTER_API_KEY = "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"
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions"

// Test models (we'll try each one)
const modelsToTest = [
  "google/gemma-2-9b-it:free",
  "meta-llama/llama-3.1-8b-instruct:free",
  "microsoft/phi-3-mini-128k-instruct:free",
  "mistralai/mistral-7b-instruct:free",
  "google/gemini-flash-1.5",
  "openai/gpt-3.5-turbo"
]

console.log("\n🧪 TESTING OPENROUTER API\n")
console.log("=" .repeat(60))

async function testModel(modelId) {
  console.log(`\n📡 Testing: ${modelId}`)
  console.log("-".repeat(60))
  
  try {
    const response = await fetch(OPENROUTER_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://www.wavesolution.com.au",
        "X-Title": "Wave Solution Test",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: modelId,
        messages: [
          {
            role: "system",
            content: "You write short professional business emails."
          },
          {
            role: "user",
            content: "Write a 2-sentence email to Ray White real estate about bond cleaning partnership."
          }
        ],
        temperature: 0.7,
        max_tokens: 100,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.log(`❌ FAILED`)
      console.log(`   Status: ${response.status}`)
      console.log(`   Error: ${data.error?.message || JSON.stringify(data)}`)
      return false
    }

    const message = data?.choices?.[0]?.message?.content?.trim()
    
    if (message) {
      console.log(`✅ SUCCESS!`)
      console.log(`   Response: ${message.substring(0, 100)}...`)
      console.log(`   Tokens: ${data.usage?.total_tokens || 'N/A'}`)
      return true
    } else {
      console.log(`⚠️  Empty response`)
      console.log(`   Data: ${JSON.stringify(data)}`)
      return false
    }
    
  } catch (error) {
    console.log(`❌ ERROR: ${error.message}`)
    return false
  }
}

async function runTests() {
  console.log(`\n🔑 API Key: ${OPENROUTER_API_KEY.substring(0, 20)}...${OPENROUTER_API_KEY.substring(OPENROUTER_API_KEY.length - 4)}`)
  console.log(`📍 URL: ${OPENROUTER_API_URL}`)
  
  let workingModels = []
  
  for (const model of modelsToTest) {
    const works = await testModel(model)
    if (works) {
      workingModels.push(model)
    }
    // Wait 1 second between tests to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
  
  console.log("\n" + "=".repeat(60))
  console.log("\n📊 RESULTS SUMMARY\n")
  
  if (workingModels.length === 0) {
    console.log("❌ NO MODELS WORKED!")
    console.log("\nPossible issues:")
    console.log("  1. Invalid API key")
    console.log("  2. No credits remaining")
    console.log("  3. API key restrictions")
    console.log("\n💡 Check: https://openrouter.ai/keys")
    console.log("💡 Check credits: https://openrouter.ai/credits")
  } else {
    console.log(`✅ ${workingModels.length} MODELS WORKING:\n`)
    workingModels.forEach((model, i) => {
      console.log(`   ${i + 1}. ${model} ${i === 0 ? '⭐ (RECOMMENDED)' : ''}`)
    })
    
    console.log(`\n💡 UPDATE YOUR .env.local:\n`)
    console.log(`OPENROUTER_MODEL=${workingModels[0]}`)
    
    console.log(`\n📝 UPDATE YOUR route.ts:\n`)
    console.log(`const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || "${workingModels[0]}"`)
  }
  
  console.log("\n" + "=".repeat(60))
  console.log("\n")
}

// Run the tests
runTests().catch(err => {
  console.error("\n❌ FATAL ERROR:", err)
  process.exit(1)
})
