import { Hono } from 'hono'

const app = new Hono()

// Simple API endpoint
app.get('/api', (c) => {
  return c.json({ message: 'Hello ! Clippers' })
})

// Health check
app.get('/', (c) => {
  return c.text('Clipping APIs - Running 🚀')
})

const port = 3000
console.log(`🔥 Server running at http://localhost:${port}`)

export default {
  port,
  fetch: app.fetch,
}
