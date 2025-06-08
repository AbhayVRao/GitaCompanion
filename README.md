# Gita Companion

A Hindu lifestyle application powered by AI that provides personalized spiritual guidance, voice interactions, and reflections based on sacred texts.

## Project Structure

```
/apps
  /mobile-app        - React Native (Expo) mobile application
  /backend-api       - TypeScript-based API server with Prisma
/llm-engine          - Python AI services (Whisper, embeddings, knowledge graph)
/packages
  /voice-kit         - ElevenLabs TTS integration and audio utilities
  /reflection-logic  - LLM prompting and memory management
  /shared           - Shared TypeScript types and utilities
/infra
  /prisma           - Database schema and migrations
  /scripts          - Development and deployment tools
```

## Core Technologies

- **Frontend**: React Native (Expo) with TypeScript
- **Backend API**: Express.js/tRPC with Prisma ORM
- **AI & Voice**:
  - OpenAI GPT-4/Claude for reflections
  - Whisper for speech-to-text
  - ElevenLabs for text-to-speech
  - Qdrant for vector storage
- **Database**: PostgreSQL
- **Future**: Neo4j knowledge graph integration

## Development Requirements

- Node.js 22.14.0 (or use nvm)
- Python 3.11+
- Docker & Docker Compose
- Xcode (iOS) / Android Studio (Android)

## Getting Started

1. **Set up Node.js environment**:
   ```bash
   # Using nvm (recommended)
   nvm install 22.14.0
   nvm use 22.14.0
   
   # Verify version
   node -v  # Should show v22.14.0
   ```

2. **Run the setup script**:
   ```bash
   # This will:
   # - Check Node.js version
   # - Clean existing installations
   # - Install all dependencies
   # - Build all packages
   node scripts/setup.js
   ```

3. **Set up environment variables**:
   ```bash
   # Root level
   cp .env.example .env
   
   # Backend API
   cp apps/backend-api/.env.example apps/backend-api/.env
   
   # Mobile app
   cp apps/mobile-app/.env.example apps/mobile-app/.env
   
   # LLM engine
   cp llm-engine/.env.example llm-engine/.env
   ```

4. **Start development services**:
   ```bash
   # Start database services
   docker-compose up -d
   
   # In separate terminals:
   npm run dev:api    # Start backend API
   npm run dev:mobile # Start mobile app
   ```

## Development Scripts

- `npm run dev:mobile` - Start the Expo development server
- `npm run dev:api` - Start the backend API in development mode
- `npm run build` - Build all packages
- `npm run lint` - Run ESLint checks
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## Environment Variables

Required API keys and configurations:
- OpenAI API Key
- ElevenLabs API Key
- (Optional) Claude API Key
- PostgreSQL connection string
- Qdrant connection details

## Project Dependencies

The monorepo uses npm workspaces to manage dependencies:
- `/apps/*` - Application packages
- `/packages/*` - Shared internal packages
- Root level dependencies are development tools only

## Troubleshooting

If you encounter issues:

1. **Node.js version mismatch**:
   ```bash
   nvm use 22.14.0
   node scripts/setup.js
   ```

2. **Clean installation**:
   ```bash
   # Remove all dependencies and lock files
   node scripts/setup.js
   ```

3. **Build errors**:
   ```bash
   # Rebuild all packages
   npm run build
   ```

## License

[License details here]
