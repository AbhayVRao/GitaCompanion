module.exports = {
  expo: {
    name: 'Gita Companion',
    slug: 'gita-companion',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
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
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      package: 'com.gitacompanion.app'
    },
    extra: {
      apiUrl: process.env.API_URL || 'http://localhost:3000',
      nodeEnv: process.env.NODE_ENV || 'development',
    }
  }
}; 