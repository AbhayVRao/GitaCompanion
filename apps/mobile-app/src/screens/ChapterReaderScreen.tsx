import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ChapterReader'>;

export const ChapterReaderScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.chapterTitle}>Chapter 1: Arjuna's Dilemma</Text>
        
        <View style={styles.verseContainer}>
          <Text style={styles.verseNumber}>Verse 1.1</Text>
          <Text style={styles.sanskrit}>
            धृतराष्ट्र उवाच |
            धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |
            मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||१||
          </Text>
          <Text style={styles.translation}>
            Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do when they assembled on the holy field of Kurukshetra, eager for battle?
          </Text>
        </View>
      </ScrollView>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Reflection')}
      >
        <Text style={styles.buttonText}>Open Reflection</Text>
      </Pressable>
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
    padding: 20,
  },
  chapterTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  verseContainer: {
    marginBottom: 24,
  },
  verseNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A5568',
    marginBottom: 8,
  },
  sanskrit: {
    fontSize: 18,
    marginBottom: 12,
    lineHeight: 26,
  },
  translation: {
    fontSize: 16,
    color: '#4A5568',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#4A5568',
    padding: 16,
    margin: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
}); 