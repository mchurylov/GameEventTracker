import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EVENT_START_DATE } from '@/lib/constants';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +EVENT_START_DATE - +new Date();
      let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
      }

      return timeLeft;
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update timer every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Pad numbers with leading zeros
  const padWithZero = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="w-full max-w-xs mx-auto mb-8">
      <h3 className="text-center text-white mb-3">Event Countdown</h3>
      <div className="flex justify-center space-x-2">
        {/* Days */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-black bg-opacity-50 border border-gold rounded p-2 w-16 h-16 flex items-center justify-center">
            <span className="text-gold text-2xl font-bold">{padWithZero(timeLeft.days)}</span>
          </div>
          <span className="text-white text-xs mt-1">DAYS</span>
        </motion.div>

        {/* Hours */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-black bg-opacity-50 border border-gold rounded p-2 w-16 h-16 flex items-center justify-center">
            <span className="text-gold text-2xl font-bold">{padWithZero(timeLeft.hours)}</span>
          </div>
          <span className="text-white text-xs mt-1">HOURS</span>
        </motion.div>

        {/* Minutes */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-black bg-opacity-50 border border-gold rounded p-2 w-16 h-16 flex items-center justify-center">
            <span className="text-gold text-2xl font-bold">{padWithZero(timeLeft.minutes)}</span>
          </div>
          <span className="text-white text-xs mt-1">MINS</span>
        </motion.div>

        {/* Seconds */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-black bg-opacity-50 border border-gold rounded p-2 w-16 h-16 flex items-center justify-center">
            <span className="text-gold text-2xl font-bold">{padWithZero(timeLeft.seconds)}</span>
          </div>
          <span className="text-white text-xs mt-1">SECS</span>
        </motion.div>
      </div>
    </div>
  );
};

export default CountdownTimer;
