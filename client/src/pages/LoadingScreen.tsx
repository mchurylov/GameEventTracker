import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import CountdownTimer from '@/components/CountdownTimer';
import { EVENT_NAME, EVENT_DATES, EVENT_LOCATION } from '@/lib/constants';

const LoadingScreen = () => {
  const [_, setLocation] = useLocation();

  // Automatically navigate to home after a delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLocation('/');
    }, 4000);
    
    return () => clearTimeout(timeout);
  }, [setLocation]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#1a1a1a] p-6">
      {/* Background shimmer effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-full h-full opacity-10"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.2), transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 0%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
      
      {/* Logo Animation */}
      <motion.div
        className="mb-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <svg viewBox="0 0 300 200" width="300" height="200">
            <g>
              <motion.polygon
                points="150,10 280,100 150,190 20,100"
                fill="none"
                stroke="#ffd700"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </g>
            <motion.text
              x="150"
              y="80"
              textAnchor="middle"
              fill="#ffd700"
              fontWeight="bold"
              fontSize="36"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              WORLD
            </motion.text>
            <motion.text
              x="150"
              y="120"
              textAnchor="middle"
              fill="#ffffff"
              fontWeight="bold"
              fontSize="24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              TOURNAMENT
            </motion.text>
            <motion.text
              x="150"
              y="170"
              textAnchor="middle"
              fill="#ffd700"
              fontWeight="bold"
              fontSize="48"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="gold-shimmer"
            >
              SLOTS
            </motion.text>
          </svg>
        </div>
      </motion.div>
      
      {/* Event details */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <h2 className="text-white text-lg mb-2">{EVENT_DATES}</h2>
        <h3 className="text-gold">{EVENT_LOCATION}</h3>
      </motion.div>
      
      {/* Countdown timer */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <CountdownTimer />
      </motion.div>
      
      {/* Loading indicator */}
      <motion.div
        className="mt-8 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <div className="relative w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </div>
        <p className="text-white text-sm mt-2">Loading experience...</p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
