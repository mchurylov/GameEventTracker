import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Mock data for events
const eventsByDay = {
  "1": [
    {
      id: 1,
      title: "Opening Ceremony",
      description: "Welcome to the World Tournament Slots",
      startTime: new Date("2025-10-22T10:00:00"),
      endTime: new Date("2025-10-22T11:30:00"),
      location: "Grand Ballroom"
    },
    {
      id: 2,
      title: "Qualifying Round 1",
      description: "First round of qualifying tournaments",
      startTime: new Date("2025-10-22T13:00:00"),
      endTime: new Date("2025-10-22T17:00:00"),
      location: "Casino Floor"
    },
    {
      id: 3,
      title: "Welcome Dinner",
      description: "Networking dinner for all participants",
      startTime: new Date("2025-10-22T19:00:00"),
      endTime: new Date("2025-10-22T22:00:00"),
      location: "Poseidon Restaurant"
    }
  ],
  "2": [
    {
      id: 4,
      title: "Qualifying Round 2",
      description: "Second round of qualifying tournaments",
      startTime: new Date("2025-10-23T10:00:00"),
      endTime: new Date("2025-10-23T14:00:00"),
      location: "Casino Floor"
    }
  ],
  "3": [
    {
      id: 5,
      title: "Semi-Finals",
      description: "Semi-final tournaments",
      startTime: new Date("2025-10-24T10:00:00"),
      endTime: new Date("2025-10-24T16:00:00"),
      location: "VIP Lounge"
    }
  ],
  "4": [
    {
      id: 6,
      title: "Grand Finals",
      description: "Championship round with top players",
      startTime: new Date("2025-10-25T14:00:00"),
      endTime: new Date("2025-10-25T18:00:00"),
      location: "Royal Arena"
    },
    {
      id: 7,
      title: "Awards Ceremony",
      description: "Celebration and prize distribution",
      startTime: new Date("2025-10-25T20:00:00"),
      endTime: new Date("2025-10-25T22:00:00"),
      location: "Grand Ballroom"
    }
  ],
  "5": [
    {
      id: 8,
      title: "Farewell Brunch",
      description: "Final gathering before departure",
      startTime: new Date("2025-10-26T10:00:00"),
      endTime: new Date("2025-10-26T12:00:00"),
      location: "Azure Terrace"
    }
  ]
};

// Generate day labels
const dayLabels = {
  "1": "Day 1 (Oct 22)",
  "2": "Day 2 (Oct 23)",
  "3": "Day 3 (Oct 24)",
  "4": "Day 4 (Oct 25)",
  "5": "Day 5 (Oct 26)",
};

const ItineraryScreen = () => {
  const [activeDay, setActiveDay] = useState("1");
  
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    });
  };

  return (
    <View style={styles.container}>
      {/* Day tabs */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.tabsContainer}
        contentContainerStyle={styles.tabsContent}
      >
        {Object.keys(eventsByDay).map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.tab,
              activeDay === day ? styles.activeTab : null
            ]}
            onPress={() => setActiveDay(day)}
          >
            <Text 
              style={[
                styles.tabText,
                activeDay === day ? styles.activeTabText : null
              ]}
            >
              {dayLabels[day]}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Event list */}
      <ScrollView style={styles.eventListContainer}>
        <View style={styles.eventsList}>
          {eventsByDay[activeDay].map((event, index) => (
            <View key={event.id} style={styles.eventCard}>
              {/* Time indicator */}
              <View style={styles.timeContainer}>
                <MaterialIcons name="access-time" size={16} color="#ffd700" style={styles.timeIcon} />
                <Text style={styles.timeText}>
                  {formatTime(event.startTime)}
                  {event.endTime && ` - ${formatTime(event.endTime)}`}
                </Text>
              </View>
              
              {/* Event details */}
              <View style={styles.eventDetails}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                {event.description && (
                  <Text style={styles.eventDescription}>{event.description}</Text>
                )}
                {event.location && (
                  <View style={styles.locationContainer}>
                    <MaterialIcons name="location-on" size={14} color="#ffd700" style={styles.locationIcon} />
                    <Text style={styles.locationText}>{event.location}</Text>
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>
        
        {/* Legend */}
        <View style={styles.legend}>
          <Text style={styles.legendTitle}>Schedule Notes</Text>
          <View style={styles.legendItem}>
            <Text style={styles.legendBullet}>•</Text>
            <Text style={styles.legendText}>All times are in local Bahamas time (EDT)</Text>
          </View>
          <View style={styles.legendItem}>
            <Text style={styles.legendBullet}>•</Text>
            <Text style={styles.legendText}>Schedule may be subject to change</Text>
          </View>
          <View style={styles.legendItem}>
            <Text style={styles.legendBullet}>•</Text>
            <Text style={styles.legendText}>VIP badge required for certain events</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  tabsContainer: {
    maxHeight: 50,
    backgroundColor: '#222',
  },
  tabsContent: {
    paddingHorizontal: 10,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 4,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#ffd700',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
  },
  tabText: {
    color: 'white',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#ffd700',
    fontWeight: 'bold',
  },
  eventListContainer: {
    flex: 1,
  },
  eventsList: {
    padding: 16,
  },
  eventCard: {
    backgroundColor: '#222',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  timeIcon: {
    marginRight: 6,
  },
  timeText: {
    color: '#ffd700',
    fontWeight: '600',
  },
  eventDetails: {
    padding: 12,
  },
  eventTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  eventDescription: {
    color: '#bbb',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 4,
  },
  locationText: {
    color: '#ffd700',
    fontSize: 14,
  },
  legend: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 8,
    margin: 16,
    marginTop: 0,
  },
  legendTitle: {
    color: '#ffd700',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  legendBullet: {
    color: '#ffd700',
    marginRight: 8,
    fontSize: 16,
  },
  legendText: {
    color: 'white',
    fontSize: 14,
  },
});

export default ItineraryScreen;