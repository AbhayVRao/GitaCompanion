import Constants from 'expo-constants';

interface ReflectionRequest {
  userId: string;
  text: string;
}

interface ReflectionResponse {
  id: string;
  userId: string;
  rawText: string;
  aiResponse: string;
  createdAt: string;
}

const API_URL = Constants.expoConfig?.extra?.apiUrl ?? 'http://localhost:3000';

export const api = {
  async postReflection(data: ReflectionRequest): Promise<ReflectionResponse> {
    try {
      const response = await fetch(`${API_URL}/reflection`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('Error posting reflection:', error);
      throw error;
    }
  },

  // Test utility function
  async testConnection() {
    try {
      const testData = {
        userId: 'cmbsjnlce0000sb7a5pp6n1jv', // Our seeded test user
        text: 'Test reflection from mobile app',
      };

      console.log('Testing API connection...');
      console.log('Endpoint:', `${API_URL}/reflection`);
      console.log('Test data:', testData);

      const response = await this.postReflection(testData);
      console.log('API Response:', response);
      return response;
    } catch (error) {
      console.error('API Test Failed:', error);
      throw error;
    }
  },
}; 