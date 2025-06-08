# Gita Companion Mobile App

React Native mobile application for the Gita Companion, built with Expo.

## Requirements

- Node.js 22.14.0 (specified in root `.nvmrc`)
- npm (included with Node.js)
- Expo CLI
- iOS Simulator (for iOS) or Android Studio (for Android)

## Setup

1. **Node.js Version**
   ```bash
   # From project root
   nvm use
   ```

2. **Install Dependencies**
   ```bash
   # From project root (installs all workspace dependencies)
   npm install
   ```

3. **Environment Setup**
   ```bash
   # From apps/mobile-app
   cp .env.example .env
   ```

4. **Run the App**
   ```bash
   # From project root
   npm run dev:mobile
   
   # Or from apps/mobile-app
   npx expo start
   ```

## App Structure

```
src/
  ├── screens/           # Screen components
  │   ├── OnboardingScreen.tsx    # Welcome & intro
  │   ├── ChapterReaderScreen.tsx # Gita verse reader
  │   └── ReflectionScreen.tsx    # AI reflection view
  ├── navigation/        # React Navigation setup
  ├── components/        # Shared components
  └── utils/            # Helper functions
```

## Navigation Flow

The app uses `@react-navigation/native-stack` with the following screens:

1. **Onboarding** (Initial screen)
   - Welcome message
   - Get started button

2. **ChapterReader**
   - Displays Gita verses
   - Sanskrit and translation
   - Navigation to reflection

3. **Reflection**
   - AI-powered guidance
   - Context input
   - Navigation back to start

## Development

- Uses TypeScript for type safety
- Follows React Native best practices
- Implements modern React patterns
- Uses Expo for easy development

## Available Scripts

- `npm start` - Start Expo development server
- `npm run ios` - Start iOS simulator
- `npm run android` - Start Android simulator
- `npm run web` - Start web version (experimental)

## Dependencies

Key packages:
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `expo-av` (for audio)
- `expo-file-system`
- `twrnc` (TailwindCSS-style utilities)

## Troubleshooting

1. **Metro Bundler Issues**
   ```bash
   # Clear Metro cache
   npx expo start -c
   ```

2. **iOS Simulator Issues**
   ```bash
   # Reset iOS simulator
   xcrun simctl erase all
   ```

3. **Android Issues**
   ```bash
   # Clear Android build
   cd android && ./gradlew clean
   ``` 