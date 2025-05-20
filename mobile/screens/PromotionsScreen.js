import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { GAMING_APPS } from '../constants';

const PromotionsScreen = () => {
  const handleAppDownload = (url) => {
    Linking.openURL(url).catch((err) => {
      console.error('Could not open URL:', err);
    });
  };

  return (
    <LinearGradient
      colors={['#1a1a1a', '#2a2a2a', '#1a1a1a']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.headerTitle}>PROMOTIONS</Text>
          <Text style={styles.headerSubtitle}>
            Discover our exclusive gaming apps and special offers for tournament participants.
          </Text>
        </View>
        
        {/* Featured Promotion */}
        <View style={styles.featuredSection}>
          <LinearGradient
            colors={['#333', '#222']}
            style={styles.featuredCard}
          >
            <View style={styles.featuredContent}>
              <Text style={styles.featuredLabel}>FEATURED OFFER</Text>
              <Text style={styles.featuredTitle}>$25 TOURNAMENT CREDIT</Text>
              <Text style={styles.featuredDescription}>
                Download any of our gaming apps and sign up with your event registration email 
                to receive a $25 credit towards any tournament buy-in.
              </Text>
              <TouchableOpacity style={styles.featuredButton}>
                <Text style={styles.featuredButtonText}>GET STARTED</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.featuredImageContainer}>
              {/* Placeholder for featured image */}
              <View style={styles.featuredImage} />
            </View>
          </LinearGradient>
        </View>
        
        {/* Gaming Apps Section */}
        <View style={styles.appsSection}>
          <Text style={styles.sectionTitle}>GAMING APPS</Text>
          <Text style={styles.sectionSubtitle}>
            Experience our casino games anywhere, anytime with our mobile gaming apps.
          </Text>
          
          <View style={styles.appsGrid}>
            {GAMING_APPS.map((app) => (
              <TouchableOpacity 
                key={app.id}
                style={styles.appCard}
                onPress={() => handleAppDownload(app.url)}
              >
                <View style={styles.appIconContainer}>
                  <Ionicons name={app.icon} size={40} color="#ffd700" />
                </View>
                <Text style={styles.appName}>{app.name}</Text>
                <Text style={styles.appDescription}>{app.description}</Text>
                <TouchableOpacity 
                  style={styles.downloadButton}
                  onPress={() => handleAppDownload(app.url)}
                >
                  <Text style={styles.downloadButtonText}>DOWNLOAD</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Special Offers Section */}
        <View style={styles.offersSection}>
          <Text style={styles.sectionTitle}>SPECIAL OFFERS</Text>
          
          <View style={styles.offersList}>
            <LinearGradient
              colors={['#2a2a2a', '#333']}
              style={styles.offerCard}
            >
              <View style={styles.offerBadge}>
                <Text style={styles.offerBadgeText}>LIMITED</Text>
              </View>
              <Text style={styles.offerTitle}>VIP TOURNAMENT PACKAGE</Text>
              <Text style={styles.offerPrice}>$999</Text>
              <Text style={styles.offerDescription}>
                Get exclusive access to all tournaments, a luxury resort suite, and VIP 
                amenities during the entire event.
              </Text>
              <TouchableOpacity style={styles.offerButton}>
                <Text style={styles.offerButtonText}>LEARN MORE</Text>
              </TouchableOpacity>
            </LinearGradient>
            
            <LinearGradient
              colors={['#2a2a2a', '#333']}
              style={styles.offerCard}
            >
              <View style={[styles.offerBadge, styles.goldBadge]}>
                <Text style={styles.offerBadgeText}>POPULAR</Text>
              </View>
              <Text style={styles.offerTitle}>DAILY TOURNAMENT PASS</Text>
              <Text style={styles.offerPrice}>$249</Text>
              <Text style={styles.offerDescription}>
                Access to all tournaments for a single day with complimentary food and beverages.
              </Text>
              <TouchableOpacity style={styles.offerButton}>
                <Text style={styles.offerButtonText}>LEARN MORE</Text>
              </TouchableOpacity>
            </LinearGradient>
            
            <LinearGradient
              colors={['#2a2a2a', '#333']}
              style={styles.offerCard}
            >
              <Text style={styles.offerTitle}>PRACTICE SESSION PASS</Text>
              <Text style={styles.offerPrice}>$99</Text>
              <Text style={styles.offerDescription}>
                Pre-event practice sessions with professional guidance and game strategy tips.
              </Text>
              <TouchableOpacity style={styles.offerButton}>
                <Text style={styles.offerButtonText}>LEARN MORE</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        
        {/* Exclusive Benefits */}
        <View style={styles.benefitsSection}>
          <Text style={styles.sectionTitle}>EXCLUSIVE BENEFITS</Text>
          
          <View style={styles.benefitsList}>
            <View style={styles.benefitItem}>
              <View style={styles.benefitIconContainer}>
                <Ionicons name="wallet" size={24} color="#ffd700" />
              </View>
              <View style={styles.benefitContent}>
                <Text style={styles.benefitTitle}>No Deposit Bonus</Text>
                <Text style={styles.benefitDescription}>
                  Get a $50 no-deposit bonus when you register for any tournament.
                </Text>
              </View>
            </View>
            
            <View style={styles.benefitItem}>
              <View style={styles.benefitIconContainer}>
                <Ionicons name="star" size={24} color="#ffd700" />
              </View>
              <View style={styles.benefitContent}>
                <Text style={styles.benefitTitle}>VIP Rewards</Text>
                <Text style={styles.benefitDescription}>
                  Earn double loyalty points during the tournament week.
                </Text>
              </View>
            </View>
            
            <View style={styles.benefitItem}>
              <View style={styles.benefitIconContainer}>
                <Ionicons name="people" size={24} color="#ffd700" />
              </View>
              <View style={styles.benefitContent}>
                <Text style={styles.benefitTitle}>Refer-a-Friend</Text>
                <Text style={styles.benefitDescription}>
                  Get a $100 credit for each friend you refer who registers for a tournament.
                </Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Promotional Code Section */}
        <View style={styles.promoCodeSection}>
          <Text style={styles.promoCodeTitle}>SPECIAL PROMO CODE</Text>
          <View style={styles.promoCodeContainer}>
            <Text style={styles.promoCode}>WTS2025</Text>
          </View>
          <Text style={styles.promoCodeDescription}>
            Use this code when registering for tournaments to receive a 10% discount.
          </Text>
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
  headerSection: {
    marginBottom: 30,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
  },
  featuredSection: {
    marginBottom: 30,
  },
  featuredCard: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ffd700',
  },
  featuredContent: {
    flex: 2,
    padding: 20,
  },
  featuredLabel: {
    fontSize: 12,
    color: '#ffd700',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  featuredTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 10,
  },
  featuredDescription: {
    fontSize: 14,
    color: 'white',
    lineHeight: 20,
    marginBottom: 15,
  },
  featuredButton: {
    backgroundColor: '#ffd700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  featuredButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  featuredImageContainer: {
    flex: 1,
    padding: 10,
  },
  featuredImage: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  appsSection: {
    marginBottom: 30,
  },
  appsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  appCard: {
    width: '48%',
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#444',
  },
  appIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  appName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 5,
  },
  appDescription: {
    fontSize: 14,
    color: 'white',
    marginBottom: 15,
    lineHeight: 20,
  },
  downloadButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffd700',
  },
  downloadButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffd700',
  },
  offersSection: {
    marginBottom: 30,
  },
  offersList: {
    marginTop: 10,
  },
  offerCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#444',
    position: 'relative',
  },
  offerBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#e74c3c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  goldBadge: {
    backgroundColor: '#f39c12',
  },
  offerBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 5,
  },
  offerPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  offerDescription: {
    fontSize: 14,
    color: 'white',
    lineHeight: 20,
    marginBottom: 15,
  },
  offerButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffd700',
    alignSelf: 'flex-start',
  },
  offerButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffd700',
  },
  benefitsSection: {
    marginBottom: 30,
  },
  benefitsList: {
    marginTop: 10,
  },
  benefitItem: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#2a2a2a',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#444',
  },
  benefitIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  benefitContent: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 5,
  },
  benefitDescription: {
    fontSize: 14,
    color: 'white',
    lineHeight: 20,
  },
  promoCodeSection: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffd700',
  },
  promoCodeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 15,
  },
  promoCodeContainer: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#444',
  },
  promoCode: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffd700',
    letterSpacing: 2,
  },
  promoCodeDescription: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
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

export default PromotionsScreen;