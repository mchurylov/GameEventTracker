import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { CAROUSEL_SLIDES } from '../constants';

const { width } = Dimensions.get('window');

const EventCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);
  
  // Handle auto-scrolling
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeIndex < CAROUSEL_SLIDES.length - 1) {
        scrollViewRef.current.scrollTo({
          x: width * (activeIndex + 1),
          animated: true
        });
        setActiveIndex(activeIndex + 1);
      } else {
        scrollViewRef.current.scrollTo({
          x: 0,
          animated: true
        });
        setActiveIndex(0);
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [activeIndex]);
  
  // Handle scroll changes
  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };
  
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {CAROUSEL_SLIDES.map((slide, index) => (
          <View 
            key={slide.id} 
            style={[
              styles.slide, 
              { backgroundColor: slide.bgColor }
            ]}
          >
            <Text style={[styles.title, { color: slide.textColor }]}>
              {slide.title}
            </Text>
            <Text style={[styles.subtitle, { color: slide.textColor }]}>
              {slide.subtitle}
            </Text>
            <Text style={[styles.description, { color: slide.textColor }]}>
              {slide.description}
            </Text>
            
            {index === 0 && (
              <View style={styles.appStoreContainer}>
                <Text style={styles.exclusiveText}>EXCLUSIVELY ON</Text>
                <View style={styles.appIconsContainer}>
                  <View style={[styles.appIcon, { backgroundColor: '#4CAF50' }]} />
                  <View style={[styles.appIcon, { backgroundColor: '#9C27B0' }]} />
                  <View style={[styles.appIcon, { backgroundColor: '#E91E63' }]} />
                  <View style={[styles.appIcon, { backgroundColor: '#F44336' }]} />
                </View>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      
      {/* Pagination dots */}
      <View style={styles.pagination}>
        {CAROUSEL_SLIDES.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              scrollViewRef.current.scrollTo({
                x: width * index,
                animated: true
              });
              setActiveIndex(index);
            }}
          >
            <View 
              style={[
                styles.paginationDot, 
                index === activeIndex ? styles.paginationDotActive : null
              ]} 
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    marginBottom: 30,
  },
  slide: {
    width,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  appStoreContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  exclusiveText: {
    color: '#ffd700',
    fontSize: 16,
    marginBottom: 10,
  },
  appIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  appIcon: {
    width: 30,
    height: 30,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    width: 16,
    backgroundColor: '#ffd700',
  },
});

export default EventCarousel;