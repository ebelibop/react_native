import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function ProfilePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>EZ</Text>
      </View>
      <Text style={styles.name}>Elijah Zyrus</Text>
      <Text style={styles.role}>Movie Enthusiast • Cavite, PH</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Profile Message</Text>
        <Text style={styles.message}>
          Welcome to your CineWave profile! Keep exploring new genres, track your top-rated favorites, and enjoy the magic of cinema.
        </Text>
      </View>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={() => navigation.navigate('Account')}
      >
        <Text style={styles.buttonText}>View Account Settings →</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    padding: 24,
    paddingTop: 40,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#38BDF8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: '#0F172A',
    fontSize: 32,
    fontWeight: 'bold',
  },
  name: {
    color: '#F8FAFC',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  role: {
    color: '#94A3B8',
    fontSize: 14,
    marginBottom: 28,
  },
  card: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    marginBottom: 20,
  },
  cardTitle: {
    color: '#38BDF8',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    color: '#CBD5E1',
    fontSize: 14,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#38BDF8',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: 'bold',
  },
});