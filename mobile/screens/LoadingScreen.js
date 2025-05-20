import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CountdownTimer from '../components/CountdownTimer';
import { EVENT_DATES, EVENT_LOCATION } from '../constants';

const LoadingScreen = () => {
  const [logoOpacity] = useState(new Animated.Value(0));
  const [detailsOpacity] = useState(new Animated.Value(0));
  const [progressWidth] = useState(new Animated.Value(0));
  
  useEffect(() => {
    // Animate logo
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    
    // Animate event details
    Animated.timing(detailsOpacity, {
      toValue: 1,
      duration: 1000,
      delay: 1000,
      useNativeDriver: true,
    }).start();
    
    // Animate progress bar
    Animated.timing(progressWidth, {
      toValue: 1,
      duration: 3000,
      delay: 1500,
      useNativeDriver: false,
    }).start();
  }, []);
  
  return (
    <View style={styles.container}>
      {/* Background shimmer effect */}
      <LinearGradient
        colors={['rgba(26, 26, 26, 1)', 'rgba(40, 40, 40, 1)', 'rgba(26, 26, 26, 1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      />
      
      {/* Logo Animation */}
      <Animated.View style={[styles.logoContainer, { opacity: logoOpacity }]}>
        <View style={styles.diamondContainer}>
          <View style={styles.diamond} />
          <Text style={styles.worldText}>WORLD</Text>
          <Text style={styles.tournamentText}>TOURNAMENT</Text>
          <Text style={styles.slotsText}>SLOTS</Text>
        </View>
      </Animated.View>
      
      {/* Event details */}
      <Animated.View style={[styles.detailsContainer, { opacity: detailsOpacity }]}>
        <Text style={styles.dateText}>{EVENT_DATES}</Text>
        <Text style={styles.locationText}>{EVENT_LOCATION}</Text>
        
        {/* Countdown timer */}
        <View style={styles.countdownContainer}>
          <CountdownTimer />
        </View>
      </Animated.View>
      
      {/* Loading indicator */}
      <View style={styles.progressContainer}>
        <Animated.View 
          style={[
            styles.progressBar, 
            { width: progressWidth.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%']
            }) }
          ]} 
        />
        <Text style={styles.loadingText}>Loading experience...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.1,
  },
  logoContainer: {
    marginBottom: 50,
    alignItems: 'center',
  },
  diamondContainer: {
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diamond: {
    position: 'absolute',
    width: 220,
    height: 220,
    transform: [{ rotate: '45deg' }],
    borderWidth: 3,
    borderColor: '#ffd700',
    backgroundColor: 'transparent',
  },
  worldText: {
    marginTop: -30,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffd700',
  },
  tournamentText: {
    marginTop: 5,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  slotsText: {
    marginTop: 5,
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffd700',
    letterSpacing: 5,
  },
  detailsContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  dateText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  locationText: {
    fontSize: 18,
    color: '#ffd700',
    marginBottom: 20,
  },
  countdownContainer: {
    width: '100%',
    marginTop: 10,
  },
  progressContainer: {
    width: '80%',
    alignItems: 'center',
  },
  progressBarBackground: {
    width: '100%',
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#ffd700',
    borderRadius: 2,
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    color: 'white',
  },
});

export default LoadingScreen;