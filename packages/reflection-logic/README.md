# Reflection Logic

Shared package for managing AI-powered spiritual reflections and guidance logic.

## Features

- LLM prompt management
- Context building for reflections
- Memory and conversation history
- Verse selection logic
- Response formatting

## Usage

```typescript
import { createReflection, buildContext } from '@gita-companion/reflection-logic';

// Create a reflection with context
const reflection = await createReflection({
  verse: 'BG 2.47',
  userContext: 'Feeling anxious about work',
  previousReflections: [],
});

// Build context for LLM
const context = await buildContext({
  verses: ['BG 2.47', 'BG 2.48'],
  theme: 'karma yoga',
});
```

## Development

```bash
# Install dependencies
npm install

# Build package
npm run build

# Watch for changes
npm run dev
```

## Project Structure

```
src/
  ├── prompts/      # LLM prompt templates
  ├── context/      # Context building logic
  ├── memory/       # Conversation memory
  ├── formatting/   # Response formatting
  └── types/        # TypeScript definitions
``` 