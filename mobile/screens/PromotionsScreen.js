import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { GAMING_APPS } from '../constants';

const { width } = Dimensions.get('window');

const PromotionsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Our Gaming Apps</Text>
        
        <Text style={styles.subtitle}>
          Play our award-winning apps and practice your skills before the big tournament!
        </Text>
        
        {/* Featured App */}
        <LinearGradient
          colors={['#4a1a9e', '#2a3b8f']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.featuredApp}
        >
          <View style={styles.featuredHeader}>
            <View style={styles.appIconLarge}>
              <Text style={styles.appIconText}>🎰</Text>
            </View>
            <View style={styles.featuredHeaderText}>
              <Text style={styles.featuredTitle}>Slots Deluxe VIP</Text>
              <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <MaterialIcons key={star} name="star" size={14} color="#ffd700" />
                ))}
                <Text style={styles.ratingText}>5.0</Text>
              </View>
            </View>
          </View>
          
          <Text style={styles.featuredDescription}>
            Our premium slots experience with over 200 unique machines and the highest payouts. 
            Practice for the tournament with our exclusive Tournament Mode!
          </Text>
          
          <TouchableOpacity style={styles.downloadButton}>
            <MaterialIcons name="file-download" size={16} color="black" style={styles.buttonIcon} />
            <Text style={styles.downloadButtonText}>Download Now</Text>
          </TouchableOpacity>
        </LinearGradient>
        
        {/* App Grid */}
        <View style={styles.appGrid}>
          {GAMING_APPS.map((app) => (
            <View key={app.id} style={styles.appCard}>
              <View style={styles.appHeader}>
                <View style={styles.appIcon}>
                  <Text style={styles.iconText}>{app.icon}</Text>
                </View>
                <View style={styles.appInfo}>
                  <Text style={styles.appName}>{app.name}</Text>
                  <Text style={styles.appDesc}>{app.description}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.downloadIconButton}>
                <MaterialIcons name="file-download" size={18} color="#ffd700" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        
        {/* Tournament Practice Section */}
        <View style={styles.practiceSection}>
          <Text style={styles.sectionTitle}>Tournament Practice</Text>
          <Text style={styles.sectionText}>
            Get ready for the World Tournament Slots by practicing with our Tournament Simulator. 
            Face the same challenges you'll encounter at the live event!
          </Text>
          <TouchableOpacity style={styles.practiceModeButton}>
            <Text style={styles.practiceModeButtonText}>Try Tournament Mode</Text>
          </TouchableOpacity>
        </View>
        
        {/* Bonus Offer */}
        <View style={styles.bonusSection}>
          <Text style={styles.bonusTitle}>Special Offer</Text>
          <Text style={styles.bonusText}>
            Download any app and get a <Text style={styles.bonusHighlight}>1,000,000 FREE COINS</Text> bonus!
          </Text>
          <Text style={styles.bonusSmallText}>
            Limited time offer for World Tournament Slots participants
          </Text>
          <TouchableOpacity style={styles.claimButton}>
            <Text style={styles.claimButtonText}>CLAIM BONUS</Text>
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
    padding: 16,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffd700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  featuredApp: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  featuredHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  appIconLarge: {
    width: 60,
    height: 60,
    backgroundColor: '#6a35c2',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  appIconText: {
    fontSize: 30,
  },
  featuredHeaderText: {
    flex: 1,
  },
  featuredTitle: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 4,
  },
  featuredDescription: {
    color: 'white',
    marginBottom: 16,
    lineHeight: 20,
  },
  downloadButton: {
    backgroundColor: '#ffd700',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
  },
  buttonIcon: {
    marginRight: 8,
  },
  downloadButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  appGrid: {
    marginBottom: 24,
  },
  appCard: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appIcon: {
    width: 42,
    height: 42,
    backgroundColor: '#333',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 20,
  },
  appInfo: {
    flex: 1,
  },
  appName: {
    color: '#ffd700',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  appDesc: {
    color: 'white',
    fontSize: 12,
  },
  downloadIconButton: {
    width: 36,
    height: 36,
    backgroundColor: '#333',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  practiceSection: {
    backgroundColor: '#222',
    borderWidth: 1,
    borderColor: '#ffd700',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionText: {
    color: 'white',
    marginBottom: 16,
    lineHeight: 22,
  },
  practiceModeButton: {
    backgroundColor: '#ffd700',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  practiceModeButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bonusSection: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: '#ffd700',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  bonusTitle: {
    color: '#ffd700',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bonusText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 6,
  },
  bonusHighlight: {
    color: '#ffd700',
    fontWeight: 'bold',
  },
  bonusSmallText: {
    color: '#aaa',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
  },
  claimButton: {
    backgroundColor: '#ffd700',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  claimButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PromotionsScreen;