import { serve } from '@hono/node-server'
import app from './app.js'
import { env } from './config/env.js'

const port = parseInt(env.PORT)

console.log(`\n🚀 Starting Clipping APIs...`)
console.log(`📍 Environment: ${env.NODE_ENV}`)
console.log(`🔗 Server: http://localhost:${port}`)
console.log(`📡 API Endpoint: http://localhost:${port}/api\n`)

serve({
  fetch: app.fetch,
  port,
})
