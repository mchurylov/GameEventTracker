import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import MobileLayout from '@/components/MobileLayout';
import EventCarousel from '@/components/EventCarousel';
import CountdownTimer from '@/components/CountdownTimer';
import { EVENT_NAME, EVENT_DATES, EVENT_LOCATION } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <MobileLayout>
      {/* Countdown timer section */}
      <CountdownTimer />
      
      {/* Main Carousel */}
      <EventCarousel />
      
      {/* Quick access buttons */}
      <motion.div 
        className="grid grid-cols-2 gap-4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="bg-[#222] border border-gold rounded-lg p-4 text-center hover:bg-[#333] transition-colors duration-300">
          <Link href="/signup">
            <div className="cursor-pointer">
              <h3 className="text-gold text-lg mb-2">Get Updates</h3>
              <p className="text-white text-sm">Stay informed about the event</p>
            </div>
          </Link>
        </div>
        
        <div className="bg-[#222] border border-gold rounded-lg p-4 text-center hover:bg-[#333] transition-colors duration-300">
          <Link href="/event">
            <div className="cursor-pointer">
              <h3 className="text-gold text-lg mb-2">Event Details</h3>
              <p className="text-white text-sm">Learn more about the tournament</p>
            </div>
          </Link>
        </div>
      </motion.div>
      
      {/* Event summary */}
      <motion.div 
        className="bg-[#222] rounded-lg p-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-gold text-xl font-bold mb-3">About the Event</h2>
        <p className="text-white mb-4">
          Join us at {EVENT_LOCATION} for the {EVENT_NAME}, {EVENT_DATES}. 
          Experience the world's most prestigious slots tournament with a 
          $5 million prize pool and luxury accommodations.
        </p>
        <div className="flex items-center text-gold hover:underline cursor-pointer">
          <Link href="/event">
            <div className="flex items-center">
              <span>Learn more</span>
              <ArrowRight size={16} className="ml-1" />
            </div>
          </Link>
        </div>
      </motion.div>
      
      {/* Promotional banner */}
      <motion.div 
        className="bg-black bg-opacity-50 border border-gold rounded-lg p-6 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-center text-gold text-xl font-bold mb-3">
          Take a Spin & Win
        </h2>
        <p className="text-center text-white mb-4">
          Practice your slots skills and get ready for the tournament with our award-winning apps
        </p>
        <div className="block w-full text-center bg-gold text-black font-bold py-3 rounded-lg hover:bg-[#ffec8b] transition-colors cursor-pointer">
          <Link href="/promotions">
            <div>Explore Our Games</div>
          </Link>
        </div>
      </motion.div>
    </MobileLayout>
  );
};

export default Home;
