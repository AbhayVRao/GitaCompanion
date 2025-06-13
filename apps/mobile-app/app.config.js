module.exports = {
  expo: {
    name: 'Gita Companion',
    slug: 'gita-companion',
    version: '1.0.0',
    orientation: 'portrait',
    // Comment out icon until we have proper assets
    // icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      // Use a solid color instead of image for now
      // image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#F7FAFC'
    },
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.gitacompanion.app'
    },
    android: {
      adaptiveIcon: {
        // Comment out foreground image until we have proper assets
        // foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#F7FAFC'
      },
      package: 'com.gitacompanion.app'
    },
    extra: {
      // Use explicit IP address instead of localhost for device testing
      apiUrl: process.env.API_URL || 'http://10.18.1.13:3000',
      nodeEnv: process.env.NODE_ENV || 'development',
    },
    // Add dev client config
    developmentClient: {
      silentLaunch: true
    },
    // Add additional development settings
    updates: {
      fallbackToCacheTimeout: 0
    },
    // Ensure Metro can connect
    developer: {
      tool: 'expo-cli'
    }
  }
}; 