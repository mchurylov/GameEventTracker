import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { EVENT_NAME, EVENT_DATES, EVENT_LOCATION, RESORT_AMENITIES } from '../constants';

const EventDetailsScreen = () => {
  return (
    <LinearGradient
      colors={['#1a1a1a', '#2a2a2a', '#1a1a1a']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        {/* Event Overview Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EVENT OVERVIEW</Text>
          <LinearGradient
            colors={['#2a2a2a', '#333']}
            style={styles.card}
          >
            <Text style={styles.eventName}>{EVENT_NAME}</Text>
            <Text style={styles.eventDetails}>{EVENT_DATES}</Text>
            <Text style={styles.eventDetails}>{EVENT_LOCATION}</Text>
            
            <View style={styles.divider} />
            
            <Text style={styles.description}>
              Join us for the world's premier slot gaming event featuring five days of high-stakes 
              tournaments, exclusive gaming experiences, and luxury entertainment.
            </Text>
            
            <View style={styles.highlights}>
              <View style={styles.highlightItem}>
                <Ionicons name="trophy" size={24} color="#ffd700" />
                <Text style={styles.highlightText}>$5M Prize Pool</Text>
              </View>
              
              <View style={styles.highlightItem}>
                <Ionicons name="people" size={24} color="#ffd700" />
                <Text style={styles.highlightText}>1,000+ Players</Text>
              </View>
              
              <View style={styles.highlightItem}>
                <Ionicons name="game-controller" size={24} color="#ffd700" />
                <Text style={styles.highlightText}>100+ Games</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        
        {/* Resort Amenities Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>RESORT AMENITIES</Text>
          <View style={styles.amenitiesContainer}>
            {RESORT_AMENITIES.map(amenity => (
              <LinearGradient
                key={amenity.id}
                colors={['#2a2a2a', '#333']}
                style={styles.amenityCard}
              >
                <View style={styles.amenityIconContainer}>
                  <Ionicons name={amenity.icon} size={30} color="#ffd700" />
                </View>
                <Text style={styles.amenityName}>{amenity.name}</Text>
                <Text style={styles.amenityDescription}>{amenity.description}</Text>
              </LinearGradient>
            ))}
          </View>
        </View>
        
        {/* Tournament Schedule Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TOURNAMENT SCHEDULE</Text>
          <LinearGradient
            colors={['#2a2a2a', '#333']}
            style={styles.card}
          >
            <Text style={styles.scheduleNote}>
              Our event features multiple tournaments each day with varying buy-ins and prize pools.
              Full schedule and registration will be available 14 days before the event.
            </Text>
            
            <View style={styles.scheduleHighlights}>
              <View style={styles.dayItem}>
                <Text style={styles.dayHeader}>DAY 1</Text>
                <Text style={styles.dayText}>Welcome Reception</Text>
                <Text style={styles.dayText}>Opening Tournaments</Text>
              </View>
              
              <View style={styles.dayItem}>
                <Text style={styles.dayHeader}>DAY 3</Text>
                <Text style={styles.dayText}>Main Event Begins</Text>
                <Text style={styles.dayText}>Celebrity Challenge</Text>
              </View>
              
              <View style={styles.dayItem}>
                <Text style={styles.dayHeader}>DAY 5</Text>
                <Text style={styles.dayText}>Final Tables</Text>
                <Text style={styles.dayText}>Awards Ceremony</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        
        {/* Travel & Accommodation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TRAVEL & ACCOMMODATION</Text>
          <LinearGradient
            colors={['#2a2a2a', '#333']}
            style={styles.card}
          >
            <Text style={styles.description}>
              Exclusive room rates are available for tournament participants. Book through our 
              dedicated reservation link to receive special pricing and added amenities.
            </Text>
            
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>BOOK ACCOMMODATION</Text>
            </TouchableOpacity>
            
            <View style={styles.divider} />
            
            <Text style={styles.description}>
              Transportation options from the airport to Atlantis Resort:
            </Text>
            
            <View style={styles.transportOptions}>
              <View style={styles.transportItem}>
                <Ionicons name="car" size={20} color="#ffd700" />
                <Text style={styles.transportText}>Airport Shuttle</Text>
              </View>
              
              <View style={styles.transportItem}>
                <Ionicons name="car-sport" size={20} color="#ffd700" />
                <Text style={styles.transportText}>Private Taxi</Text>
              </View>
              
              <View style={styles.transportItem}>
                <Ionicons name="boat" size={20} color="#ffd700" />
                <Text style={styles.transportText}>Water Taxi</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        
        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CONTACT INFORMATION</Text>
          <LinearGradient
            colors={['#2a2a2a', '#333']}
            style={styles.card}
          >
            <View style={styles.contactItem}>
              <Ionicons name="mail" size={20} color="#ffd700" />
              <Text style={styles.contactText}>info@worldtournamentslots.com</Text>
            </View>
            
            <View style={styles.contactItem}>
              <Ionicons name="call" size={20} color="#ffd700" />
              <Text style={styles.contactText}>+1 (800) 555-1234</Text>
            </View>
            
            <View style={styles.contactItem}>
              <Ionicons name="logo-twitter" size={20} color="#ffd700" />
              <Text style={styles.contactText}>@WorldTournamentSlots</Text>
            </View>
            
            <View style={styles.contactItem}>
              <Ionicons name="logo-instagram" size={20} color="#ffd700" />
              <Text style={styles.contactText}>@WorldTournamentSlots</Text>
            </View>
          </LinearGradient>
        </View>
        
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 World Tournament Slots</Text>
          <Text style={styles.footerText}>Terms & Conditions Apply</Text>
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
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 15,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#444',
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 5,
  },
  eventDetails: {
    fontSize: 16,
    color: 'white',
    marginBottom: 3,
  },
  divider: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 15,
  },
  description: {
    fontSize: 16,
    color: '#e0e0e0',
    lineHeight: 24,
    marginBottom: 15,
  },
  highlights: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  highlightItem: {
    alignItems: 'center',
  },
  highlightText: {
    color: 'white',
    marginTop: 5,
    fontWeight: '500',
  },
  amenitiesContainer: {
    marginBottom: 10,
  },
  amenityCard: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#444',
  },
  amenityIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  amenityName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffd700',
    marginBottom: 10,
  },
  amenityDescription: {
    fontSize: 16,
    color: '#e0e0e0',
    lineHeight: 24,
  },
  scheduleNote: {
    fontSize: 16,
    color: '#e0e0e0',
    lineHeight: 24,
    marginBottom: 20,
  },
  scheduleHighlights: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 15,
  },
  dayItem: {
    marginBottom: 15,
  },
  dayHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 5,
  },
  dayText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 2,
  },
  button: {
    backgroundColor: '#ffd700',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 15,
  },
  buttonText: {
    color: '#1a1a1a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  transportOptions: {
    marginTop: 10,
  },
  transportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  transportText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
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

export default EventDetailsScreen;