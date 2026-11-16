import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function MovieCard({ movie }) {
  return (
    <View style={styles.card}>
      <Image source={movie.image} style={styles.poster} />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.meta}>
          {movie.year}  •  ⭐ {movie.rating}
        </Text>
        <Text style={styles.desc} numberOfLines={3}>
          {movie.desc}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 12,
    marginBottom: 14,
    alignItems: 'center',
  },
  poster: {
    width: 80,
    height: 115,
    borderRadius: 8,
    marginRight: 14,
    backgroundColor: '#334155',
  },
  info: {
    flex: 1,
  },
  title: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  meta: {
    color: '#FACC15',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
  },
  desc: {
    color: '#CBD5E1',
    fontSize: 13,
    lineHeight: 18,
  },
});