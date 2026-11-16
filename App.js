import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TopBar from './components/TopBar';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import ProfilePage from './pages/ProfilePage';
import Account from './pages/Account';
import LatestPage from './pages/LatestPage';
import TopRatedPage from './pages/TopRatedPage';
import PopularPage from './pages/PopularPage';
import RecommendedPage from './pages/RecommendedPage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <TopBar />
        <NavigationContainer>
          <Tab.Navigator
            tabBar={(props) => <Navbar {...props} />}
            screenOptions={{
              headerShown: false,
            }}
          >
            {/* Main Bottom Navbar Screens */}
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Movies" component={MoviesPage} />
            <Tab.Screen name="Profile" component={ProfilePage} />

            {/* Hidden Screens (Accessible via navigation.navigate) */}
            <Tab.Screen name="Account" component={Account} />
            <Tab.Screen name="LatestPage" component={LatestPage} />
            <Tab.Screen name="TopRatedPage" component={TopRatedPage} />
            <Tab.Screen name="PopularPage" component={PopularPage} />
            <Tab.Screen name="RecommendedPage" component={RecommendedPage} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
});