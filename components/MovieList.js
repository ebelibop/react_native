import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { MOVIES } from '../data/moviesData';
import MovieCard from './MovieCard';

export default function MovieList({ title, category, navigation }) {
  const filtered = MOVIES.filter((movie) =>
    movie.categories.includes(category)
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.navigate('Movies')}
        >
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
        <Text style={styles.heading}>{title}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    backgroundColor: '#1E293B',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 12,
  },
  backText: {
    color: '#38BDF8',
    fontWeight: 'bold',
    fontSize: 14,
  },
  heading: {
    color: '#F8FAFC',
    fontSize: 22,
    fontWeight: 'bold',
  },
});