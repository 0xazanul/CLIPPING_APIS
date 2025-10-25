import { Hono } from 'hono'

const api = new Hono()

// Welcome endpoint
api.get('/', (c) => {
  return c.json({
    status: 'success',
    message: 'Hello ! Clippers',
    data: {
      version: '1.0.0',
      endpoints: [
        'GET /',
        'GET /api',
      ],
    },
  })
})

export default api
