# Voice Kit

Shared package for managing text-to-speech and voice-related functionality using ElevenLabs.

## Features

- ElevenLabs TTS integration
- Voice profile management
- Audio file handling
- Caching and optimization
- Multi-voice support

## Usage

```typescript
import { textToSpeech, VoiceProfile } from '@gita-companion/voice-kit';

// Create audio from text
const audio = await textToSpeech({
  text: 'Om Namah Shivaya',
  voiceId: 'your-voice-id',
  language: 'sanskrit',
});

// Manage voice profiles
const profile = await VoiceProfile.create({
  name: 'Sanskrit Teacher',
  gender: 'female',
  accent: 'indian',
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

## Environment Variables

Required in consuming applications:
```
ELEVENLABS_API_KEY=your_key_here
```

## Project Structure

```
src/
  ├── tts/         # Text-to-speech core
  ├── profiles/    # Voice profile management
  ├── cache/       # Audio caching
  ├── utils/       # Helper functions
  └── types/       # TypeScript definitions
``` 