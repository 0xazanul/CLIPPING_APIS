# Clipping APIs

🚀 High-performance, scalable REST API built with Hono.js and TypeScript.

## Features

- ⚡️ Lightning-fast Hono.js framework
- 🔒 TypeScript for type safety
- 📁 Modular folder structure
- 🔧 Environment-based configuration
- 🪵 Request logging
- 🌐 CORS enabled
- ✨ Pretty JSON responses
- 🔄 Hot reload in development

## Project Structure

```
src/
├── config/          # Configuration files
│   └── env.ts       # Environment variables
├── routes/          # API routes
│   └── api.routes.ts
├── app.ts           # Hono app setup
└── server.ts        # Server entry point
```

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
```

### Development

```bash
# Start development server with hot reload
npm run dev
```

### Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## API Endpoints

### Health Check
- `GET /` - Server health status

### API Routes
- `GET /api` - Welcome message: "Hello ! Clippers"

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
API_VERSION=v1
```

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Hono.js
- **Language**: TypeScript
- **Dev Tools**: tsx (TypeScript execution)

## Development Tips

- Add new routes in `src/routes/`
- Configure environment in `.env`
- Middleware in `src/app.ts`
- Server configuration in `src/server.ts`

## License

MIT
