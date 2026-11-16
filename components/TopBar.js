import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function TopBar() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>🎬 WATCHELI</Text>

      <Pressable
        style={({ pressed }) => [
          styles.searchButton,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.searchText}>🔍</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0F172A',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#38BDF8',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  searchButton: {
    backgroundColor: '#1E293B',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  pressed: {
    opacity: 0.7,
  },
  searchText: {
    color: '#CBD5E1',
    fontSize: 13,
    fontWeight: '600',
  },
});