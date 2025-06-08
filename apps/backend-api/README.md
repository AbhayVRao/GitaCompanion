# Backend API

TypeScript-based API server for the Gita Companion, handling user data, authentication, and AI service coordination.

## Features

- RESTful/tRPC API endpoints
- Prisma ORM integration
- Authentication and authorization
- AI service orchestration
- Voice processing coordination

## Tech Stack

- Node.js with TypeScript
- Express.js/tRPC
- Prisma ORM
- PostgreSQL
- OpenAI/Claude integration

## Development

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

## Environment Variables

Create a `.env` file with:
```
DATABASE_URL="postgresql://gita:gita123@localhost:5432/gita_companion"
OPENAI_API_KEY=your_key_here
CLAUDE_API_KEY=your_key_here
JWT_SECRET=your_secret_here
```

## API Structure

```
src/
  ├── controllers/   # Request handlers
  ├── services/     # Business logic
  ├── models/       # Data models
  ├── middleware/   # Express middleware
  ├── routes/       # API routes
  ├── utils/        # Helper functions
  └── types/        # TypeScript definitions
``` 