import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'
import apiRoutes from './routes/api.routes.js'

const app = new Hono()

// Middleware
app.use('*', logger())
app.use('*', cors())
app.use('*', prettyJSON())

// Health check
app.get('/', (c) => {
  return c.json({
    status: 'success',
    message: 'Clipping APIs - Running 🚀',
    timestamp: new Date().toISOString(),
  })
})

// API Routes
app.route('/api', apiRoutes)

// 404 handler
app.notFound((c) => {
  return c.json({ status: 'error', message: 'Route not found' }, 404)
})

// Error handler
app.onError((err, c) => {
  console.error('Error:', err)
  return c.json(
    {
      status: 'error',
      message: err.message || 'Internal Server Error',
    },
    500
  )
})

export default app
