import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import EventCarousel from '../components/EventCarousel';
import CountdownTimer from '../components/CountdownTimer';
import { EVENT_NAME, EVENT_DATES, EVENT_LOCATION } from '../constants';

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#1a1a1a', '#2a2a2a', '#1a1a1a']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        {/* Header with Logo */}
        <View style={styles.header}>
          <Text style={styles.title}>{EVENT_NAME}</Text>
          <Text style={styles.subtitle}>{EVENT_DATES} • {EVENT_LOCATION}</Text>
        </View>
        
        {/* Countdown Section */}
        <View style={styles.countdownSection}>
          <Text style={styles.sectionTitle}>COUNTDOWN TO EVENT</Text>
          <CountdownTimer />
        </View>
        
        {/* Event Feature Carousel */}
        <View style={styles.carouselSection}>
          <Text style={styles.sectionTitle}>EVENT HIGHLIGHTS</Text>
          <EventCarousel />
        </View>
        
        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <Text style={styles.sectionTitle}>QUICK ACTIONS</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => navigation.navigate('Sign Up')}
            >
              <View style={styles.actionIconContainer}>
                <Ionicons name="person-add" size={24} color="#ffd700" />
              </View>
              <Text style={styles.actionText}>Sign Up</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => navigation.navigate('Event Details')}
            >
              <View style={styles.actionIconContainer}>
                <Ionicons name="information-circle" size={24} color="#ffd700" />
              </View>
              <Text style={styles.actionText}>Event Details</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => navigation.navigate('Promotions')}
            >
              <View style={styles.actionIconContainer}>
                <Ionicons name="gift" size={24} color="#ffd700" />
              </View>
              <Text style={styles.actionText}>Promotions</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => {/* Open external link */}}
            >
              <View style={styles.actionIconContainer}>
                <Ionicons name="share-social" size={24} color="#ffd700" />
              </View>
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Sponsor Section */}
        <View style={styles.sponsorSection}>
          <Text style={styles.sectionTitle}>OUR SPONSORS</Text>
          <View style={styles.sponsorLogos}>
            {/* Placeholder for sponsor logos */}
            <View style={styles.sponsorLogo} />
            <View style={styles.sponsorLogo} />
            <View style={styles.sponsorLogo} />
          </View>
        </View>
        
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 World Tournament Slots</Text>
          <Text style={styles.footerText}>All Rights Reserved</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffd700',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  countdownSection: {
    marginBottom: 30,
    alignItems: 'center',
  },
  carouselSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 15,
  },
  actionsSection: {
    marginBottom: 30,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '48%',
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  actionIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  sponsorSection: {
    marginBottom: 30,
  },
  sponsorLogos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sponsorLogo: {
    width: '30%',
    height: 60,
    backgroundColor: '#2a2a2a',
    borderRadius: 5,
  },
  footer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#a0a0a0',
    fontSize: 14,
    marginBottom: 5,
  },
});

export default HomeScreen;