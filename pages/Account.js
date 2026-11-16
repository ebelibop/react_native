import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Account({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Account Details</Text>
      <Text style={styles.subtext}>Manage your CineWave membership</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Full Name</Text>
        <Text style={styles.value}>Elijah Zyrus</Text>

        <Text style={styles.label}>Username</Text>
        <Text style={styles.value}>@elijahzyrus</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>elijah.tipo@cinewave.app</Text>

        <Text style={styles.label}>Plan</Text>
        <Text style={styles.planBadge}>CineWave Student Pass</Text>
      </View>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>← Back to Profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 24,
  },
  heading: {
    color: '#F8FAFC',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtext: {
    color: '#94A3B8',
    fontSize: 14,
    marginBottom: 24,
  },
  infoBox: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
  },
  label: {
    color: '#94A3B8',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
    marginTop: 12,
  },
  value: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: '600',
  },
  planBadge: {
    color: '#38BDF8',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 2,
  },
  button: {
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: '#38BDF8',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#38BDF8',
    fontSize: 15,
    fontWeight: 'bold',
  },
});