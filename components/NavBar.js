import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Navbar({ state, navigation }) {
  // Define only the 3 main tabs you want visible in the bottom bar
  const navItems = [
    { name: 'Home', label: 'Home', icon: 'home', activeIcon: 'home' },
    { name: 'Movies', label: 'Movies', icon: 'film-outline', activeIcon: 'film' },
    { name: 'Profile', label: 'Profile', icon: 'person-outline', activeIcon: 'person' },
  ];

  // Get the name of the currently active screen
  const currentRouteName = state.routes[state.index].name;

  return (
    <View style={styles.navbar}>
      {navItems.map((item) => {
        const isFocused = currentRouteName === item.name;

        return (
          <Pressable
            key={item.name}
            style={({ pressed }) => [
              styles.navButton,
              pressed && styles.pressed,
            ]}
            onPress={() => navigation.navigate(item.name)}
          >
            <Ionicons
              name={isFocused ? item.activeIcon : item.icon}
              size={22}
              color={isFocused ? '#38BDF8' : '#94A3B8'}
            />
            <Text style={[styles.navText, isFocused && styles.activeText]}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#0F172A',
    borderTopWidth: 1,
    borderTopColor: '#1E293B',
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  navText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
  activeText: {
    color: '#38BDF8',
  },
});