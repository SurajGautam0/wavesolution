// Quick verification script to check environment variables
import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load .env.local
config({ path: join(__dirname, '.env.local') })

console.log('\n🔍 CHECKING ENVIRONMENT VARIABLES...\n')

const openRouterKey = process.env.OPENROUTER_API_KEY
const openRouterModel = process.env.OPENROUTER_MODEL

if (openRouterKey) {
  console.log('✅ OPENROUTER_API_KEY: Found!')
  console.log(`   Key preview: ${openRouterKey.substring(0, 15)}...${openRouterKey.substring(openRouterKey.length - 4)}`)
  console.log(`   Length: ${openRouterKey.length} characters`)
} else {
  console.log('❌ OPENROUTER_API_KEY: NOT FOUND')
}

if (openRouterModel) {
  console.log(`✅ OPENROUTER_MODEL: ${openRouterModel}`)
} else {
  console.log('⚠️  OPENROUTER_MODEL: Using default (google/gemini-flash-1.5-8b-exp)')
}

console.log('\n📋 SMTP Configuration:')
console.log(`   SMTP_EMAIL: ${process.env.SMTP_EMAIL ? '✅ Found' : '❌ Not found'}`)
console.log(`   SMTP_PASSWORD: ${process.env.SMTP_PASSWORD ? '✅ Found' : '❌ Not found'}`)

console.log('\n💡 NEXT STEPS:')
if (!openRouterKey) {
  console.log('   1. Check .env.local file exists')
  console.log('   2. Verify OPENROUTER_API_KEY line has no extra spaces')
  console.log('   3. Restart your dev server: npm run dev')
} else {
  console.log('   ✅ Environment variables loaded correctly!')
  console.log('   🚀 Restart your dev server: npm run dev')
  console.log('   🧪 Test the AI generation in admin dashboard')
}

console.log('\n')
