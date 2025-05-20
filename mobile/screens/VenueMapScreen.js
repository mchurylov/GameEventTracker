import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { VENUE_LOCATIONS } from '../constants';

const { width } = Dimensions.get('window');
const MAP_WIDTH = width - 40;
const MAP_HEIGHT = MAP_WIDTH * 0.75; // Aspect ratio for the map

const VenueMapScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeTab, setActiveTab] = useState('map');

  const handleLocationPress = (location) => {
    setSelectedLocation(location);
  };

  const handleCloseLocationDetails = () => {
    setSelectedLocation(null);
  };

  return (
    <LinearGradient
      colors={['#1a1a1a', '#2a2a2a', '#1a1a1a']}
      style={styles.container}
    >
      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'map' && styles.activeTab]}
          onPress={() => setActiveTab('map')}
        >
          <Ionicons 
            name="map" 
            size={20} 
            color={activeTab === 'map' ? '#ffd700' : 'white'} 
          />
          <Text 
            style={[styles.tabText, activeTab === 'map' && styles.activeTabText]}
          >
            Map View
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'list' && styles.activeTab]}
          onPress={() => setActiveTab('list')}
        >
          <Ionicons 
            name="list" 
            size={20} 
            color={activeTab === 'list' ? '#ffd700' : 'white'} 
          />
          <Text 
            style={[styles.tabText, activeTab === 'list' && styles.activeTabText]}
          >
            List View
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'map' ? (
          <View style={styles.mapSection}>
            <Text style={styles.sectionTitle}>VENUE MAP</Text>
            <Text style={styles.sectionSubtitle}>
              Tap on locations to view details
            </Text>
            
            <View style={styles.mapContainer}>
              {/* This would be replaced with a real map image */}
              <View style={styles.mapPlaceholder}>
                <LinearGradient
                  colors={['#2a2a2a', '#333']}
                  style={styles.mapBackground}
                >
                  <Text style={styles.mapPlaceholderText}>Resort Map</Text>
                  
                  {/* Location Markers */}
                  {VENUE_LOCATIONS.map((location) => (
                    <TouchableOpacity
                      key={location.id}
                      style={[
                        styles.locationMarker,
                        {
                          left: location.x * (MAP_WIDTH / 300),
                          top: location.y * (MAP_HEIGHT / 300),
                        },
                        selectedLocation?.id === location.id && styles.selectedMarker
                      ]}
                      onPress={() => handleLocationPress(location)}
                    >
                      <View style={styles.markerDot} />
                    </TouchableOpacity>
                  ))}
                </LinearGradient>
              </View>
            </View>
            
            {/* Location Legend */}
            <View style={styles.legendContainer}>
              <Text style={styles.legendTitle}>LOCATIONS</Text>
              <View style={styles.legend}>
                {VENUE_LOCATIONS.map((location) => (
                  <TouchableOpacity
                    key={location.id}
                    style={[
                      styles.legendItem,
                      selectedLocation?.id === location.id && styles.selectedLegendItem
                    ]}
                    onPress={() => handleLocationPress(location)}
                  >
                    <View 
                      style={[
                        styles.legendDot,
                        selectedLocation?.id === location.id && styles.selectedLegendDot
                      ]} 
                    />
                    <Text 
                      style={[
                        styles.legendText,
                        selectedLocation?.id === location.id && styles.selectedLegendText
                      ]}
                    >
                      {location.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.listSection}>
            <Text style={styles.sectionTitle}>VENUE LOCATIONS</Text>
            <Text style={styles.sectionSubtitle}>
              Explore all event venues and facilities
            </Text>
            
            <View style={styles.locationsList}>
              {VENUE_LOCATIONS.map((location) => (
                <TouchableOpacity
                  key={location.id}
                  style={styles.locationCard}
                  onPress={() => handleLocationPress(location)}
                >
                  <View style={styles.locationCardHeader}>
                    <Text style={styles.locationCardTitle}>{location.name}</Text>
                    <Ionicons name="chevron-forward" size={20} color="#ffd700" />
                  </View>
                  <Text style={styles.locationCardDescription}>
                    {location.description}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
        
        {/* Amenities Section */}
        <View style={styles.amenitiesSection}>
          <Text style={styles.sectionTitle}>AMENITIES & SERVICES</Text>
          
          <View style={styles.amenitiesGrid}>
            <View style={styles.amenityItem}>
              <View style={styles.amenityIconContainer}>
                <Ionicons name="restaurant" size={20} color="#ffd700" />
              </View>
              <Text style={styles.amenityText}>Restaurants</Text>
            </View>
            
            <View style={styles.amenityItem}>
              <View style={styles.amenityIconContainer}>
                <Ionicons name="cafe" size={20} color="#ffd700" />
              </View>
              <Text style={styles.amenityText}>Coffee Shops</Text>
            </View>
            
            <View style={styles.amenityItem}>
              <View style={styles.amenityIconContainer}>
                <Ionicons name="medkit" size={20} color="#ffd700" />
              </View>
              <Text style={styles.amenityText}>First Aid</Text>
            </View>
            
            <View style={styles.amenityItem}>
              <View style={styles.amenityIconContainer}>
                <Ionicons name="wifi" size={20} color="#ffd700" />
              </View>
              <Text style={styles.amenityText}>Free WiFi</Text>
            </View>
            
            <View style={styles.amenityItem}>
              <View style={styles.amenityIconContainer}>
                <Ionicons name="cash" size={20} color="#ffd700" />
              </View>
              <Text style={styles.amenityText}>ATMs</Text>
            </View>
            
            <View style={styles.amenityItem}>
              <View style={styles.amenityIconContainer}>
                <Ionicons name="car" size={20} color="#ffd700" />
              </View>
              <Text style={styles.amenityText}>Parking</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      
      {/* Location Details Modal */}
      {selectedLocation && (
        <View style={styles.locationDetailContainer}>
          <LinearGradient
            colors={['#2a2a2a', '#333']}
            style={styles.locationDetailCard}
          >
            <View style={styles.locationDetailHeader}>
              <Text style={styles.locationDetailTitle}>{selectedLocation.name}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleCloseLocationDetails}
              >
                <Ionicons name="close" size={24} color="white" />
              </TouchableOpacity>
            </View>
            
            <Text style={styles.locationDetailDescription}>
              {selectedLocation.description}
            </Text>
            
            <View style={styles.locationActions}>
              <TouchableOpacity style={styles.locationAction}>
                <Ionicons name="navigate" size={20} color="#ffd700" />
                <Text style={styles.locationActionText}>Get Directions</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.locationAction}>
                <Ionicons name="information-circle" size={20} color="#ffd700" />
                <Text style={styles.locationActionText}>More Info</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    borderWidth: 1,
    borderColor: '#ffd700',
  },
  tabText: {
    color: 'white',
    marginLeft: 6,
    fontSize: 14,
  },
  activeTabText: {
    color: '#ffd700',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#a0a0a0',
    marginBottom: 20,
  },
  mapSection: {
    marginBottom: 30,
  },
  mapContainer: {
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  mapPlaceholder: {
    width: '100%',
    height: '100%',
  },
  mapBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  mapPlaceholderText: {
    color: '#666',
    fontSize: 16,
  },
  locationMarker: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 215, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: -10 }, { translateY: -10 }],
  },
  selectedMarker: {
    backgroundColor: 'rgba(255, 215, 0, 0.6)',
    width: 24,
    height: 24,
    transform: [{ translateX: -12 }, { translateY: -12 }],
  },
  markerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffd700',
  },
  legendContainer: {
    marginBottom: 20,
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  legend: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#444',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  selectedLegendItem: {
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ffd700',
    marginRight: 10,
  },
  selectedLegendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    color: 'white',
    fontSize: 14,
  },
  selectedLegendText: {
    color: '#ffd700',
    fontWeight: 'bold',
  },
  listSection: {
    marginBottom: 30,
  },
  locationsList: {
    marginBottom: 20,
  },
  locationCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#444',
  },
  locationCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffd700',
  },
  locationCardDescription: {
    fontSize: 14,
    color: 'white',
    lineHeight: 20,
  },
  amenitiesSection: {
    marginBottom: 30,
  },
  amenitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  amenityItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  amenityIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  amenityText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  locationDetailContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(26, 26, 26, 0.9)',
  },
  locationDetailCard: {
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ffd700',
  },
  locationDetailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationDetailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffd700',
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationDetailDescription: {
    fontSize: 14,
    color: 'white',
    lineHeight: 20,
    marginBottom: 15,
  },
  locationActions: {
    flexDirection: 'row',
  },
  locationAction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  locationActionText: {
    color: '#ffd700',
    marginLeft: 6,
    fontSize: 14,
  },
});

export default VenueMapScreen;