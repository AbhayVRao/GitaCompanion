import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from './src/navigation/types';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { ChapterReaderScreen } from './src/screens/ChapterReaderScreen';
import { ReflectionScreen } from './src/screens/ReflectionScreen';
import { ApiTest } from './src/components/ApiTest';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F7FAFC',
          },
          headerTintColor: '#4A5568',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ 
            headerShown: false,
            headerRight: () => <ApiTest />
          }}
        />
        <Stack.Screen
          name="ChapterReader"
          component={ChapterReaderScreen}
          options={{ title: 'Bhagavad Gita' }}
        />
        <Stack.Screen
          name="Reflection"
          component={ReflectionScreen}
          options={{ title: 'Daily Reflection' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
