import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, LogBox } from 'react-native';
import ErrorBoundary from './components/ErrorBoundary';

// Suppress the specific TurboModule warning
LogBox.ignoreLogs(['TurboModuleRegistry']);

// Import screens
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import EventDetailsScreen from './screens/EventDetailsScreen';
import SignupScreen from './screens/SignupScreen';
import PromotionsScreen from './screens/PromotionsScreen';
import ItineraryScreen from './screens/ItineraryScreen';
import VenueMapScreen from './screens/VenueMapScreen';
import { EVENT_START_DATE } from './constants';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPhase, setCurrentPhase] = useState(1); // Phase 1 is Marketing App, Phase 2 is Event App

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Determine if we're in Phase 1 (Marketing App) or Phase 2 (Event App)
    // Phase 2 is active when we're within 14 days of the event
    const now = new Date();
    const timeDiff = EVENT_START_DATE - now;
    const daysToEvent = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    
    if (daysToEvent <= 14) {
      setCurrentPhase(2);
    }

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      {currentPhase === 1 ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Event Details') {
                iconName = focused ? 'information-circle' : 'information-circle-outline';
              } else if (route.name === 'Sign Up') {
                iconName = focused ? 'person-add' : 'person-add-outline';
              } else if (route.name === 'Promotions') {
                iconName = focused ? 'gift' : 'gift-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#ffd700',
            tabBarInactiveTintColor: '#a0a0a0',
            tabBarStyle: {
              backgroundColor: '#1a1a1a',
              borderTopColor: '#333',
              height: 60,
              paddingBottom: 5,
            },
            headerStyle: {
              backgroundColor: '#1a1a1a',
              borderBottomColor: '#333',
              height: 90,
            },
            headerTitleStyle: {
              color: '#ffd700',
              fontWeight: 'bold',
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Event Details" component={EventDetailsScreen} />
          <Tab.Screen name="Sign Up" component={SignupScreen} />
          <Tab.Screen name="Promotions" component={PromotionsScreen} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Event Details') {
                iconName = focused ? 'information-circle' : 'information-circle-outline';
              } else if (route.name === 'Itinerary') {
                iconName = focused ? 'calendar' : 'calendar-outline';
              } else if (route.name === 'Venue Map') {
                iconName = focused ? 'map' : 'map-outline';
              } else if (route.name === 'Promotions') {
                iconName = focused ? 'gift' : 'gift-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#ffd700',
            tabBarInactiveTintColor: '#a0a0a0',
            tabBarStyle: {
              backgroundColor: '#1a1a1a',
              borderTopColor: '#333',
              height: 60,
              paddingBottom: 5,
            },
            headerStyle: {
              backgroundColor: '#1a1a1a',
              borderBottomColor: '#333',
              height: 90,
            },
            headerTitleStyle: {
              color: '#ffd700',
              fontWeight: 'bold',
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Event Details" component={EventDetailsScreen} />
          <Tab.Screen name="Itinerary" component={ItineraryScreen} />
          <Tab.Screen name="Venue Map" component={VenueMapScreen} />
          <Tab.Screen name="Promotions" component={PromotionsScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
});