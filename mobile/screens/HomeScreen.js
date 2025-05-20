import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import CountdownTimer from '../components/CountdownTimer';
import EventCarousel from '../components/EventCarousel';
import { EVENT_NAME, EVENT_DATES, EVENT_LOCATION } from '../constants';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Logo Header */}
        <View style={styles.logoContainer}>
          <View style={styles.diamondBorder}>
            <Text style={styles.logoTextWorld}>WORLD</Text>
            <Text style={styles.logoTextTournament}>TOURNAMENT</Text>
            <Text style={styles.logoTextSlots}>SLOTS</Text>
          </View>
        </View>
      
        {/* Countdown timer section */}
        <CountdownTimer />
        
        {/* Main Carousel */}
        <EventCarousel />
        
        {/* Quick access buttons */}
        <View style={styles.buttonGrid}>
          <TouchableOpacity 
            style={styles.quickButton}
            onPress={() => navigation.navigate('Updates')}
          >
            <Text style={styles.buttonTitle}>Get Updates</Text>
            <Text style={styles.buttonText}>Stay informed about the event</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.quickButton}
            onPress={() => navigation.navigate('Event')}
          >
            <Text style={styles.buttonTitle}>Event Details</Text>
            <Text style={styles.buttonText}>Learn more about the tournament</Text>
          </TouchableOpacity>
        </View>
        
        {/* Event summary */}
        <View style={styles.eventSummary}>
          <Text style={styles.sectionTitle}>About the Event</Text>
          <Text style={styles.summaryText}>
            Join us at {EVENT_LOCATION} for the {EVENT_NAME}, {EVENT_DATES}. 
            Experience the world's most prestigious slots tournament with a 
            $5 million prize pool and luxury accommodations.
          </Text>
          <TouchableOpacity 
            style={styles.learnMoreButton}
            onPress={() => navigation.navigate('Event')}
          >
            <Text style={styles.learnMoreText}>Learn more</Text>
            <MaterialIcons name="arrow-forward" size={16} color="#ffd700" />
          </TouchableOpacity>
        </View>
        
        {/* Promotional banner */}
        <View style={styles.promotionalBanner}>
          <Text style={styles.promotionTitle}>
            Take a Spin & Win
          </Text>
          <Text style={styles.promotionText}>
            Practice your slots skills and get ready for the tournament with our award-winning apps
          </Text>
          <TouchableOpacity 
            style={styles.promotionButton}
            onPress={() => navigation.navigate('Games')}
          >
            <Text style={styles.promotionButtonText}>Explore Our Games</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  diamondBorder: {
    width: 200,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ffd700',
    borderRadius: 10,
    padding: 15,
  },
  logoTextWorld: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffd700',
  },
  logoTextTournament: {
    fontSize: 16,
    color: 'white',
    marginVertical: 2,
  },
  logoTextSlots: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffd700',
    letterSpacing: 3,
  },
  buttonGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  quickButton: {
    backgroundColor: '#222',
    borderColor: '#ffd700',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    width: '48%',
    alignItems: 'center',
  },
  buttonTitle: {
    color: '#ffd700',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  eventSummary: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 15,
    marginBottom: 25,
  },
  sectionTitle: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryText: {
    color: 'white',
    marginBottom: 15,
    lineHeight: 22,
  },
  learnMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  learnMoreText: {
    color: '#ffd700',
    marginRight: 5,
  },
  promotionalBanner: {
    backgroundColor: 'black',
    borderColor: '#ffd700',
    borderWidth: 1,
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  promotionTitle: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  promotionText: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 15,
  },
  promotionButton: {
    backgroundColor: '#ffd700',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  promotionButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default HomeScreen;