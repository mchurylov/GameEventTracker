import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CountdownTimer from '../components/CountdownTimer';
import { EVENT_NAME, EVENT_DATES, EVENT_LOCATION } from '../constants';

const LoadingScreen = () => {
  return (
    <LinearGradient
      colors={['#1a1a1a', '#2a2a2a', '#1a1a1a']}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.title}>{EVENT_NAME}</Text>
        <Image 
          source={require('../assets/icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.dates}>{EVENT_DATES}</Text>
        <Text style={styles.location}>{EVENT_LOCATION}</Text>
      </View>
      
      <View style={styles.countdownContainer}>
        <Text style={styles.countdownLabel}>COUNTDOWN TO EVENT</Text>
        <CountdownTimer />
      </View>
      
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffd700" />
        <Text style={styles.loadingText}>Loading experience...</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffd700',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  dates: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  location: {
    fontSize: 24,
    color: '#ffd700',
    fontWeight: '600',
  },
  countdownContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  countdownLabel: {
    fontSize: 18,
    color: 'white',
    marginBottom: 15,
    textTransform: 'uppercase',
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    color: '#a0a0a0',
    fontSize: 16,
    marginTop: 10,
  },
});

export default LoadingScreen;