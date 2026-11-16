import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const CATEGORIES = [
  {
    id: '1',
    name: 'Latest',
    target: 'LatestPage',
    subtitle: 'Fresh releases and recent hits',
    color: '#38BDF8',
  },
  {
    id: '2',
    name: 'Top Rated',
    target: 'TopRatedPage',
    subtitle: 'Highest critically acclaimed films',
    color: '#FACC15',
  },
  {
    id: '3',
    name: 'Popular',
    target: 'PopularPage',
    subtitle: 'Trending movies everyone is watching',
    color: '#F472B6',
  },
  {
    id: '4',
    name: 'Recommended',
    target: 'RecommendedPage',
    subtitle: 'Curated picks just for you',
    color: '#4ADE80',
  },
];

export default function MoviesPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Browse Categories</Text>
      <Text style={styles.subtext}>Select a category to view movies</Text>

      {CATEGORIES.map((item) => (
        <Pressable
          key={item.id}
          style={({ pressed }) => [
            styles.card,
            { borderLeftColor: item.color },
            pressed && styles.cardPressed,
          ]}
          onPress={() => navigation.navigate(item.target)}
        >
          <View>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
          </View>
          <Text style={[styles.arrow, { color: item.color }]}>›</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 20,
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
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 12,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 5,
  },
  cardPressed: {
    opacity: 0.75,
  },
  cardTitle: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    color: '#94A3B8',
    fontSize: 13,
  },
  arrow: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});