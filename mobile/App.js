import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import EventDetailsScreen from './screens/EventDetailsScreen';
import SignupScreen from './screens/SignupScreen';
import PromotionsScreen from './screens/PromotionsScreen';
import ItineraryScreen from './screens/ItineraryScreen';
import VenueMapScreen from './screens/VenueMapScreen';

// Constants
import { EVENT_START_DATE } from './constants';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Show loading screen for a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Event') {
                iconName = focused ? 'calendar' : 'calendar-outline';
              } else if (route.name === 'Updates') {
                iconName = focused ? 'mail' : 'mail-outline';
              } else if (route.name === 'Games') {
                iconName = focused ? 'game-controller' : 'game-controller-outline';
              } else if (route.name === 'Schedule') {
                iconName = focused ? 'time' : 'time-outline';
              } else if (route.name === 'Map') {
                iconName = focused ? 'map' : 'map-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#ffd700',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: '#1a1a1a',
              borderTopColor: '#333',
            },
            headerStyle: {
              backgroundColor: '#1a1a1a',
              borderBottomColor: '#333',
              borderBottomWidth: 1,
            },
            headerTintColor: '#ffd700',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Event" component={EventDetailsScreen} />
          <Tab.Screen name="Updates" component={SignupScreen} />
          <Tab.Screen name="Games" component={PromotionsScreen} />
          {/* Phase 2 navigation items */}
          <Tab.Screen name="Schedule" component={ItineraryScreen} />
          <Tab.Screen name="Map" component={VenueMapScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}