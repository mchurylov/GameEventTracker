import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { VENUE_LOCATIONS } from '../constants';

const { width, height } = Dimensions.get('window');

const VenueMapScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  const handleLocationPress = (location) => {
    setSelectedLocation(location);
  };
  
  const closeLocationInfo = () => {
    setSelectedLocation(null);
  };
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Venue Map</Text>
        
        <Text style={styles.subtitle}>
          Navigate the Atlantis Resort with our interactive venue map. Tap on locations to learn more.
        </Text>
        
        {/* Map Container */}
        <View style={styles.mapContainer}>
          {/* This would be a real map in a production app */}
          <View style={styles.mapBackground}>
            {/* Decorative map elements */}
            <View style={[styles.mapDecor, styles.mapDecor1]} />
            <View style={[styles.mapDecor, styles.mapDecor2]} />
            <View style={[styles.mapDecor, styles.mapDecor3]} />
            <View style={[styles.mapDecor, styles.mapDecor4]} />
            
            {/* Map Pins */}
            {VENUE_LOCATIONS.map((location) => (
              <TouchableOpacity
                key={location.id}
                style={[
                  styles.locationPin,
                  {
                    top: location.y,
                    left: location.x,
                  }
                ]}
                onPress={() => handleLocationPress(location)}
              >
                <MaterialIcons 
                  name="place" 
                  size={30} 
                  color="#ffd700" 
                  style={selectedLocation?.id === location.id ? styles.selectedPin : null}
                />
                <Text style={styles.pinLabel}>{location.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          {/* Map Legend */}
          <View style={styles.mapLegend}>
            <View style={styles.legendItem}>
              <MaterialIcons name="place" size={14} color="#ffd700" style={styles.legendIcon} />
              <Text style={styles.legendText}>Event Locations</Text>
            </View>
            <Text style={styles.legendNote}>Tap pins for details</Text>
          </View>
        </View>
        
        {/* Venue Directory */}
        <View style={styles.directoryContainer}>
          <Text style={styles.directoryTitle}>Venue Directory</Text>
          {VENUE_LOCATIONS.map((location) => (
            <TouchableOpacity 
              key={location.id} 
              style={styles.directoryItem}
              onPress={() => handleLocationPress(location)}
            >
              <MaterialIcons name="place" size={18} color="#ffd700" style={styles.directoryIcon} />
              <View style={styles.directoryTextContainer}>
                <Text style={styles.directoryItemName}>{location.name}</Text>
                <Text style={styles.directoryItemDesc}>{location.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      {/* Location Detail Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={selectedLocation !== null}
        onRequestClose={closeLocationInfo}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeLocationInfo}>
              <MaterialIcons name="close" size={24} color="#aaa" />
            </TouchableOpacity>
            
            {selectedLocation && (
              <>
                <Text style={styles.modalTitle}>{selectedLocation.name}</Text>
                <Text style={styles.modalDescription}>{selectedLocation.description}</Text>
                
                <TouchableOpacity 
                  style={styles.closeModalButton}
                  onPress={closeLocationInfo}
                >
                  <Text style={styles.closeModalButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
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
  mapContainer: {
    backgroundColor: '#222',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
  },
  mapBackground: {
    height: 400,
    width: '100%',
    position: 'relative',
    backgroundColor: '#122d4d',
  },
  mapDecor: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
  },
  mapDecor1: {
    top: '25%',
    left: '25%',
    width: '50%',
    height: '25%',
    backgroundColor: 'rgba(46, 92, 174, 0.3)',
  },
  mapDecor2: {
    bottom: '33%',
    right: '25%',
    width: '33%',
    height: '16%',
    backgroundColor: 'rgba(30, 82, 142, 0.2)',
  },
  mapDecor3: {
    top: '50%',
    left: '33%',
    width: '33%',
    height: '20%',
    backgroundColor: 'rgba(31, 91, 164, 0.2)',
  },
  mapDecor4: {
    bottom: '25%',
    left: '25%',
    width: '50%',
    height: '16%',
    backgroundColor: 'rgba(30, 70, 130, 0.3)',
  },
  locationPin: {
    position: 'absolute',
    alignItems: 'center',
    transform: [{ translateX: -15 }, { translateY: -30 }],
  },
  selectedPin: {
    transform: [{ scale: 1.2 }],
  },
  pinLabel: {
    color: 'white',
    fontSize: 10,
    marginTop: -5,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    width: 80,
    textAlign: 'center',
  },
  mapLegend: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 6,
    padding: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  legendIcon: {
    marginRight: 4,
  },
  legendText: {
    color: 'white',
    fontSize: 12,
  },
  legendNote: {
    color: '#aaa',
    fontSize: 10,
  },
  directoryContainer: {
    backgroundColor: '#222',
    borderRadius: 12,
    padding: 16,
  },
  directoryTitle: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  directoryItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  directoryIcon: {
    marginTop: 2,
    marginRight: 10,
  },
  directoryTextContainer: {
    flex: 1,
  },
  directoryItemName: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  directoryItemDesc: {
    color: '#aaa',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#222',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ffd700',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  modalTitle: {
    color: '#ffd700',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  closeModalButton: {
    borderWidth: 1,
    borderColor: '#ffd700',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-end',
  },
  closeModalButtonText: {
    color: '#ffd700',
    fontWeight: 'bold',
  },
});

export default VenueMapScreen;