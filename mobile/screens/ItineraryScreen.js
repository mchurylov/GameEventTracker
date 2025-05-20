import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

// Sample event data - in a real app this would come from an API
const eventDays = [
  {
    day: 1,
    date: 'Oct 22, 2025',
    events: [
      {
        id: 1,
        title: 'Welcome Reception',
        time: '6:00 PM - 8:00 PM',
        location: 'Grand Ballroom',
        description: 'Join us for welcome drinks and appetizers as we kick off the World Tournament Slots event.'
      },
      {
        id: 2,
        title: 'Registration Opens',
        time: '4:00 PM - 9:00 PM',
        location: 'Main Tournament Hall',
        description: 'Check in and pick up your event credentials, schedules, and welcome package.'
      },
      {
        id: 3,
        title: 'VIP Dinner',
        time: '8:30 PM - 10:30 PM',
        location: 'Poseidon Restaurant',
        description: 'Exclusive dinner for VIP package holders with special guest appearances.'
      }
    ]
  },
  {
    day: 2,
    date: 'Oct 23, 2025',
    events: [
      {
        id: 4,
        title: 'Morning Tournaments',
        time: '10:00 AM - 2:00 PM',
        location: 'Main Tournament Hall',
        description: 'Multiple tournaments with varying buy-ins and prize pools.'
      },
      {
        id: 5,
        title: 'Strategy Workshop',
        time: '2:30 PM - 4:00 PM',
        location: 'Conference Room B',
        description: 'Learn advanced strategies from professional players and experts.'
      },
      {
        id: 6,
        title: 'Evening Tournaments',
        time: '5:00 PM - 9:00 PM',
        location: 'Main Tournament Hall',
        description: 'High stakes tournaments with guaranteed prize pools.'
      },
      {
        id: 7,
        title: 'Networking Mixer',
        time: '9:30 PM - 11:30 PM',
        location: 'Poolside Lounge',
        description: 'Meet and mingle with fellow players and industry professionals.'
      }
    ]
  },
  {
    day: 3,
    date: 'Oct 24, 2025',
    events: [
      {
        id: 8,
        title: 'Main Event Day 1',
        time: '12:00 PM - 8:00 PM',
        location: 'Main Tournament Hall',
        description: 'The first day of our signature tournament with a $1M guaranteed prize pool.'
      },
      {
        id: 9,
        title: 'Celebrity Challenge',
        time: '3:00 PM - 5:00 PM',
        location: 'VIP Lounge',
        description: 'Watch celebrities compete in a special exhibition tournament.'
      },
      {
        id: 10,
        title: 'After-Hours Party',
        time: '10:00 PM - 1:00 AM',
        location: 'AURA Nightclub',
        description: 'Exclusive party for tournament participants with live entertainment.'
      }
    ]
  },
  {
    day: 4,
    date: 'Oct 25, 2025',
    events: [
      {
        id: 11,
        title: 'Main Event Day 2',
        time: '12:00 PM - 8:00 PM',
        location: 'Main Tournament Hall',
        description: 'The second day of our signature tournament as we narrow down to the final table.'
      },
      {
        id: 12,
        title: 'Guest Speaker Series',
        time: '10:00 AM - 11:30 AM',
        location: 'Conference Room A',
        description: 'Industry leaders discuss the future of gaming and casino entertainment.'
      },
      {
        id: 13,
        title: 'Beach Volleyball Tournament',
        time: '2:00 PM - 4:00 PM',
        location: 'Paradise Beach',
        description: 'Fun recreational activity for players and guests.'
      }
    ]
  },
  {
    day: 5,
    date: 'Oct 26, 2025',
    events: [
      {
        id: 14,
        title: 'Final Table',
        time: '2:00 PM - 6:00 PM',
        location: 'Main Tournament Hall',
        description: 'The exciting conclusion of our main event with the final players competing for the championship.'
      },
      {
        id: 15,
        title: 'Awards Ceremony',
        time: '7:00 PM - 8:30 PM',
        location: 'Grand Ballroom',
        description: 'Celebration and awards presentation for tournament winners and special recognitions.'
      },
      {
        id: 16,
        title: 'Farewell Reception',
        time: '8:30 PM - 10:30 PM',
        location: 'Poolside Terrace',
        description: 'Join us for a final evening of networking and celebration as we conclude this year's event.'
      }
    ]
  }
];

const ItineraryScreen = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [expandedEvent, setExpandedEvent] = useState(null);
  
  const toggleEventExpansion = (eventId) => {
    if (expandedEvent === eventId) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(eventId);
    }
  };
  
  const renderEvent = ({ item }) => (
    <TouchableOpacity
      style={styles.eventCard}
      onPress={() => toggleEventExpansion(item.id)}
    >
      <View style={styles.eventHeader}>
        <View>
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text style={styles.eventTime}>{item.time}</Text>
          <Text style={styles.eventLocation}>
            <Ionicons name="location" size={14} color="#a0a0a0" /> {item.location}
          </Text>
        </View>
        <Ionicons
          name={expandedEvent === item.id ? "chevron-up" : "chevron-down"}
          size={24}
          color="#ffd700"
        />
      </View>
      
      {expandedEvent === item.id && (
        <View style={styles.eventDetails}>
          <View style={styles.divider} />
          <Text style={styles.eventDescription}>{item.description}</Text>
          <View style={styles.eventActions}>
            <TouchableOpacity style={styles.eventAction}>
              <Ionicons name="calendar" size={20} color="#ffd700" />
              <Text style={styles.eventActionText}>Add to Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eventAction}>
              <Ionicons name="notifications" size={20} color="#ffd700" />
              <Text style={styles.eventActionText}>Set Reminder</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#1a1a1a', '#2a2a2a', '#1a1a1a']}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Days Selector */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.daysScrollView}
          contentContainerStyle={styles.daysContainer}
        >
          {eventDays.map((dayData) => (
            <TouchableOpacity
              key={dayData.day}
              style={[
                styles.dayButton,
                selectedDay === dayData.day && styles.selectedDayButton
              ]}
              onPress={() => setSelectedDay(dayData.day)}
            >
              <Text
                style={[
                  styles.dayButtonText,
                  selectedDay === dayData.day && styles.selectedDayText
                ]}
              >
                DAY {dayData.day}
              </Text>
              <Text
                style={[
                  styles.dayDateText,
                  selectedDay === dayData.day && styles.selectedDayText
                ]}
              >
                {dayData.date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Events List */}
        <View style={styles.eventsContainer}>
          <View style={styles.dayHeader}>
            <Text style={styles.dayTitle}>DAY {selectedDay} SCHEDULE</Text>
            <Text style={styles.dayDate}>
              {eventDays.find(day => day.day === selectedDay)?.date}
            </Text>
          </View>
          
          <FlatList
            data={eventDays.find(day => day.day === selectedDay)?.events}
            renderItem={renderEvent}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.eventsList}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      
      {/* Quick Filter Bar */}
      <View style={styles.filterBar}>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="funnel" size={16} color="#ffd700" />
          <Text style={styles.filterButtonText}>All Events</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="trophy" size={16} color="#ffd700" />
          <Text style={styles.filterButtonText}>Tournaments</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="restaurant" size={16} color="#ffd700" />
          <Text style={styles.filterButtonText}>Social</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="star" size={16} color="#ffd700" />
          <Text style={styles.filterButtonText}>VIP</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  daysScrollView: {
    maxHeight: 80,
  },
  daysContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  dayButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
    marginHorizontal: 6,
    backgroundColor: '#2a2a2a',
    borderWidth: 1,
    borderColor: '#444',
    minWidth: 100,
    alignItems: 'center',
  },
  selectedDayButton: {
    backgroundColor: 'rgba(255, 215, 0, 0.15)',
    borderColor: '#ffd700',
  },
  dayButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  dayDateText: {
    color: '#a0a0a0',
    fontSize: 12,
    marginTop: 2,
  },
  selectedDayText: {
    color: '#ffd700',
  },
  eventsContainer: {
    flex: 1,
    marginTop: 20,
  },
  dayHeader: {
    marginBottom: 15,
  },
  dayTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffd700',
  },
  dayDate: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  eventsList: {
    paddingBottom: 80, // Extra padding to account for the filter bar
  },
  eventCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#444',
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  eventTime: {
    fontSize: 14,
    color: '#ffd700',
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 14,
    color: '#a0a0a0',
  },
  divider: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 12,
  },
  eventDetails: {
    marginTop: 8,
  },
  eventDescription: {
    fontSize: 14,
    color: 'white',
    lineHeight: 20,
  },
  eventActions: {
    flexDirection: 'row',
    marginTop: 15,
  },
  eventAction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  eventActionText: {
    color: '#ffd700',
    marginLeft: 6,
    fontSize: 14,
  },
  filterBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1a1a1a',
    borderTopWidth: 1,
    borderTopColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  filterButtonText: {
    color: 'white',
    marginLeft: 6,
    fontSize: 12,
  },
});

export default ItineraryScreen;