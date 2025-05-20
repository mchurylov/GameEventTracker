import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { EVENT_NAME, EVENT_DATES, EVENT_LOCATION, RESORT_AMENITIES } from '../constants';

const { width } = Dimensions.get('window');

const EventDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Hero Section */}
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
          style={styles.heroImage}
          imageStyle={styles.heroImageStyle}
        >
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>{EVENT_NAME}</Text>
            <View style={styles.heroDetail}>
              <MaterialIcons name="event" size={16} color="white" style={styles.icon} />
              <Text style={styles.heroText}>{EVENT_DATES}</Text>
            </View>
            <View style={styles.heroDetail}>
              <MaterialIcons name="location-on" size={16} color="white" style={styles.icon} />
              <Text style={styles.heroText}>{EVENT_LOCATION}</Text>
            </View>
          </View>
        </ImageBackground>
        
        {/* Event Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Event Overview</Text>
          <Text style={styles.paragraphText}>
            Join us for the world's most prestigious slots tournament, featuring top players from around the globe 
            competing for glory and a share of the massive $5 million prize pool.
          </Text>
          <Text style={styles.paragraphText}>
            The World Tournament Slots is an invitation-only event hosted at the luxurious Atlantis resort 
            in the Bahamas, offering a perfect blend of high-stakes competition and paradise relaxation.
          </Text>
        </View>
        
        {/* Event Highlights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Event Highlights</Text>
          <View style={styles.highlightsGrid}>
            <View style={styles.highlightItem}>
              <MaterialIcons name="emoji-events" size={24} color="#ffd700" style={styles.highlightIcon} />
              <Text style={styles.highlightTitle}>World-Class Competition</Text>
              <Text style={styles.highlightDesc}>Compete against the best players</Text>
            </View>
            
            <View style={styles.highlightItem}>
              <MaterialIcons name="attach-money" size={24} color="#ffd700" style={styles.highlightIcon} />
              <Text style={styles.highlightTitle}>$5M Prize Pool</Text>
              <Text style={styles.highlightDesc}>Largest prize in tournament history</Text>
            </View>
            
            <View style={styles.highlightItem}>
              <MaterialIcons name="star" size={24} color="#ffd700" style={styles.highlightIcon} />
              <Text style={styles.highlightTitle}>VIP Experience</Text>
              <Text style={styles.highlightDesc}>Exclusive access and amenities</Text>
            </View>
            
            <View style={styles.highlightItem}>
              <MaterialIcons name="restaurant" size={24} color="#ffd700" style={styles.highlightIcon} />
              <Text style={styles.highlightTitle}>Gourmet Dining</Text>
              <Text style={styles.highlightDesc}>World-class culinary offerings</Text>
            </View>
          </View>
        </View>
        
        {/* Resort Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Atlantis Resort</Text>
          <Text style={styles.paragraphText}>
            Atlantis Paradise Island is a world-renowned luxury resort located on Paradise Island in the Bahamas. 
            It features a variety of accommodations, from the iconic Royal Towers to The Cove and The Reef.
          </Text>
          <Text style={styles.paragraphText}>
            With its stunning beaches, marine habitats, and Aquaventure water park, Atlantis offers the perfect 
            backdrop for our prestigious tournament.
          </Text>
          
          {/* Resort amenities */}
          <Text style={styles.subsectionTitle}>Resort Amenities</Text>
          <View style={styles.amenitiesContainer}>
            {RESORT_AMENITIES.map((amenity, index) => (
              <View key={index} style={styles.amenityItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.amenityText}>{amenity}</Text>
              </View>
            ))}
          </View>
        </View>
        
        {/* Registration Info */}
        <View style={styles.callToAction}>
          <Text style={styles.ctaTitle}>How to Participate</Text>
          <Text style={styles.ctaText}>
            The World Tournament Slots is an invitation-only event. Qualify through our regional tournaments
            or through our partner casinos.
          </Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Learn About Qualification</Text>
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
    padding: 0,
    paddingBottom: 30,
  },
  heroImage: {
    height: 220,
    width: width,
    justifyContent: 'flex-end',
  },
  heroImageStyle: {
    opacity: 0.7,
  },
  heroOverlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 10,
  },
  heroDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    marginRight: 8,
  },
  heroText: {
    color: 'white',
    fontSize: 16,
  },
  section: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#ffd700',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  paragraphText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  highlightsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  highlightItem: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    width: '48%',
  },
  highlightIcon: {
    marginBottom: 8,
  },
  highlightTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  highlightDesc: {
    color: '#aaa',
    fontSize: 12,
  },
  subsectionTitle: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 10,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 8,
  },
  bulletPoint: {
    color: '#ffd700',
    fontSize: 18,
    marginRight: 8,
  },
  amenityText: {
    color: 'white',
    fontSize: 14,
  },
  callToAction: {
    backgroundColor: '#ffd700',
    borderRadius: 8,
    padding: 20,
    margin: 16,
    marginTop: 8,
    alignItems: 'center',
  },
  ctaTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ctaText: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 16,
  },
  ctaButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  ctaButtonText: {
    color: '#ffd700',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default EventDetailsScreen;