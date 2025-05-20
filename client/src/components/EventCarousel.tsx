import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAROUSEL_SLIDES } from '@/lib/constants';

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoplayTimerRef = useRef<number | null>(null);

  // Handle autoplay
  useEffect(() => {
    const startAutoplay = () => {
      autoplayTimerRef.current = window.setTimeout(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_SLIDES.length);
      }, 5000);
    };

    startAutoplay();

    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current);
      }
    };
  }, [currentIndex]);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    
    // Clear the autoplay timer on user interaction
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;
    
    // Minimum swipe distance
    if (Math.abs(touchDiff) > 50) {
      if (touchDiff > 0) {
        // Swipe left
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_SLIDES.length);
      } else {
        // Swipe right
        setDirection(-1);
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? CAROUSEL_SLIDES.length - 1 : prevIndex - 1
        );
      }
    }

    // Reset the autoplay timer after user interaction
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }
    autoplayTimerRef.current = window.setTimeout(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_SLIDES.length);
    }, 5000);
  };

  // Variants for the slide animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div 
      className="relative overflow-hidden w-full h-[70vh] mb-8 mt-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center"
          style={{ 
            backgroundColor: CAROUSEL_SLIDES[currentIndex].bgColor,
            color: CAROUSEL_SLIDES[currentIndex].textColor
          }}
        >
          <h1 className={`mb-4 text-4xl font-extrabold ${CAROUSEL_SLIDES[currentIndex].textColor === '#ffd700' ? 'gold-shimmer' : ''}`}>
            {CAROUSEL_SLIDES[currentIndex].title}
          </h1>
          <h2 className="mb-6 text-xl font-semibold">
            {CAROUSEL_SLIDES[currentIndex].subtitle}
          </h2>
          <p className="mb-8 text-lg max-w-xs">
            {CAROUSEL_SLIDES[currentIndex].description}
          </p>
          
          {currentIndex === 0 && (
            <div className="mt-4 text-lg">
              <span className="block text-gold">EXCLUSIVELY ON</span>
              <div className="flex mt-2 space-x-2 justify-center">
                {/* App store icons - represented as colored squares */}
                <div className="w-8 h-8 bg-green-600 rounded"></div>
                <div className="w-8 h-8 bg-purple-500 rounded"></div>
                <div className="w-8 h-8 bg-pink-500 rounded"></div>
                <div className="w-8 h-8 bg-red-500 rounded"></div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {CAROUSEL_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
              if (autoplayTimerRef.current) {
                clearTimeout(autoplayTimerRef.current);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-gold w-4' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
