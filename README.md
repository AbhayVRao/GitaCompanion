# Gita Companion

A Hindu lifestyle application powered by AI that provides personalized spiritual guidance, voice interactions, and reflections based on sacred texts.

## Current Functionality

### Backend API (Express + TypeScript)
- Health check endpoint (`/health`)
- Reflection endpoint (`/reflection`) for AI-powered guidance
- PostgreSQL database with Prisma ORM
- Basic error handling and CORS configuration
- Development environment setup with Docker

### Mobile App (React Native + Expo)
- Onboarding screen with "Get Started" flow
- Chapter reader showing Bhagavad Gita verses
- Reflection screen with text input and AI guidance
- API integration with backend
- Environment configuration support

## Project Structure

```
/gita-companion
├── apps/
│   ├── backend-api/           # Express + TypeScript backend
│   │   ├── src/
│   │   │   ├── routes/       # API endpoints
│   │   │   ├── lib/         # Business logic
│   │   │   └── index.ts     # Main server file
│   │   ├── prisma/          # Database schema and migrations
│   │   └── package.json
│   │
│   └── mobile-app/          # React Native + Expo app
│       ├── src/
│       │   ├── screens/     # App screens
│       │   ├── components/  # Reusable components
│       │   ├── lib/        # API client and utilities
│       │   └── navigation/ # Navigation configuration
│       └── package.json
│
├── packages/                # Shared packages (future)
├── infra/                  # Infrastructure and Docker configs
└── package.json           # Root package.json for workspaces
```

## Tech Stack

### Backend
- Node.js with TypeScript
- Express.js for API
- Prisma ORM for database
- PostgreSQL database
- Docker for development
- Yarn workspaces for monorepo

### Mobile
- React Native with Expo
- TypeScript
- React Navigation
- Expo Constants for env
- React Native Dotenv

### Development Tools
- Yarn 4.9.2 with Corepack
- TypeScript
- ESLint
- Docker
- Git

## Getting Started

1. **Set up Node.js environment**:
   ```bash
   # Using nvm (recommended)
   nvm install 22.14.0
   nvm use 22.14.0
   
   # Verify version
   node -v  # Should show v22.14.0
   ```

2. **Install dependencies**:
   ```bash
   # Install Yarn Berry
   corepack enable
   yarn set version 4.9.2
   
   # Install dependencies
   yarn install
   ```

3. **Set up environment variables**:
   ```bash
   # Backend API
   cp apps/backend-api/.env.example apps/backend-api/.env
   
   # Mobile app
   cp apps/mobile-app/.env.example apps/mobile-app/.env
   ```

4. **Start development services**:
   ```bash
   # Start database
   docker-compose up -d
   
   # In separate terminals:
   cd apps/backend-api && yarn dev    # Start backend API
   cd apps/mobile-app && yarn dev     # Start mobile app
   ```

## Development Workflow

1. **Backend Development**:
   - API endpoints in `apps/backend-api/src/routes/`
   - Database schema in `apps/backend-api/prisma/schema.prisma`
   - Run migrations: `yarn prisma migrate dev`

2. **Mobile Development**:
   - Screens in `apps/mobile-app/src/screens/`
   - Components in `apps/mobile-app/src/components/`
   - API client in `apps/mobile-app/src/lib/api.ts`

## Current Features

### Backend
- RESTful API endpoints
- PostgreSQL database with Prisma
- Basic error handling
- CORS configuration
- Development environment setup

### Mobile App
- Onboarding flow
- Chapter reader
- Reflection input
- API integration
- Environment configuration

## Next Steps

### Backend
1. Authentication & Authorization
2. Input validation
3. Error handling
4. API documentation
5. Testing setup

### Mobile
1. User authentication
2. Error handling
3. Loading states
4. Offline support
5. UI/UX improvements

## Troubleshooting

1. **Database Issues**:
   ```bash
   # Reset database
   yarn prisma migrate reset
   ```

2. **Mobile App Issues**:
   - Clear Metro bundler cache: `yarn expo start --clear`
   - Check API URL in `.env`

3. **Backend Issues**:
   - Check database connection
   - Verify environment variables
   - Check logs for errors

## License

[License details here]
