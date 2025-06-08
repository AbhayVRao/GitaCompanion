# Shared

Common TypeScript types, utilities, and constants shared across the Gita Companion applications.

## Features

- Shared TypeScript interfaces
- Common utilities
- API response types
- Constants and configurations
- Validation schemas

## Usage

```typescript
import { User, Reflection, Scripture } from '@gita-companion/shared/types';
import { formatVerse, parseReference } from '@gita-companion/shared/utils';
import { API_ROUTES } from '@gita-companion/shared/constants';

// Use shared types
const user: User = {
  id: '123',
  name: 'Arjuna',
  email: 'arjuna@example.com',
};

// Use shared utilities
const verse = parseReference('BG 2.47');
const formatted = formatVerse(verse);
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
  ├── types/       # Shared TypeScript interfaces
  ├── utils/       # Common helper functions
  ├── constants/   # Shared constants
  ├── validation/  # Zod schemas
  └── config/      # Shared configurations
``` 