import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CAROUSEL_SLIDES } from '../constants';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width - 40;
const DOT_SIZE = 8;

const EventCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / ITEM_WIDTH);
    setActiveIndex(index);
  };

  const scrollToIndex = (index) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * ITEM_WIDTH,
        animated: true
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={scrollViewRef}
        style={styles.scrollView}
      >
        {CAROUSEL_SLIDES.map((slide, index) => (
          <View key={slide.id} style={styles.slide}>
            <LinearGradient
              colors={['rgba(26, 26, 26, 0.7)', 'rgba(26, 26, 26, 0.9)']}
              style={styles.imageOverlay}
            />
            <View style={styles.iconContainer}>
              <Ionicons name={slide.icon} size={40} color="#ffd700" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.subtitle}>{slide.subtitle}</Text>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.description}>{slide.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.pagination}>
        {CAROUSEL_SLIDES.map((_, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.paginationDot, 
              index === activeIndex && styles.paginationDotActive
            ]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  scrollView: {
    width: ITEM_WIDTH,
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  slide: {
    width: ITEM_WIDTH,
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#2a2a2a',
    justifyContent: 'flex-end',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(26, 26, 26, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.3)',
  },
  textContainer: {
    padding: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#a0a0a0',
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  paginationDot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: '#a0a0a0',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#ffd700',
    width: DOT_SIZE * 2,
  },
});

export default EventCarousel;