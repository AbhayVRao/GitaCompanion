import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { api } from '../lib/api';

type Props = NativeStackScreenProps<RootStackParamList, 'Reflection'>;

export const ReflectionScreen: React.FC<Props> = ({ navigation }) => {
  const [reflectionText, setReflectionText] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmitReflection = async () => {
    if (!reflectionText.trim()) {
      setError('Please enter your reflection');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await api.postReflection({
        userId: 'cmbsjnlce0000sb7a5pp6n1jv', // Using test user ID
        text: reflectionText,
      });
      setAiResponse(response.aiResponse);
    } catch (err) {
      setError('Failed to get reflection. Please try again.');
      console.error('Reflection error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Daily Reflection</Text>
          <Text style={styles.subtitle}>Share your thoughts and receive guidance</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Reflection</Text>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={4}
            placeholder="Share your current situation or question..."
            value={reflectionText}
            onChangeText={setReflectionText}
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {/* Show AI guidance below the input */}
          {aiResponse ? (
            <View style={{ marginTop: 16 }}>
              <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>Guidance:</Text>
              <Text style={{ color: '#2D3748' }}>{aiResponse}</Text>
            </View>
          ) : null}
        </View>

        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#4A5568" />
            <Text style={styles.loadingText}>Generating reflection...</Text>
          </View>
        ) : aiResponse ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Guidance</Text>
            <Text style={styles.text}>{aiResponse}</Text>
          </View>
        ) : null}
      </ScrollView>

      <View style={styles.footer}>
        <Pressable
          style={[styles.button, !reflectionText.trim() && styles.buttonDisabled]}
          onPress={handleSubmitReflection}
          disabled={!reflectionText.trim() || isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? 'Processing...' : 'Get Guidance'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#F7FAFC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#4A5568',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2D3748',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  button: {
    backgroundColor: '#4A5568',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#A0AEC0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  errorText: {
    color: '#E53E3E',
    marginTop: 8,
  },
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#4A5568',
  },
}); 