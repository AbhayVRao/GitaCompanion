import React from 'react';
import { View, Button } from 'react-native';
import { api } from '../lib/api';

export const ApiTest = () => {
  const handleTestPress = async () => {
    try {
      await api.testConnection();
    } catch (error) {
      // Error is already logged in the API client
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button 
        title="Test API Connection" 
        onPress={handleTestPress}
      />
    </View>
  );
}; 