import { motion } from "framer-motion";

const LogoHeader = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center pt-6 pb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-64 h-20">
        {/* Diamond background */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <svg viewBox="0 0 200 100" className="w-full h-full">
            <polygon
              points="100,0 190,50 100,100 10,50"
              fill="none"
              stroke="#ffd700"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
        
        {/* Logo text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div 
            className="text-gold text-2xl font-bold tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            WORLD
          </motion.div>
          <motion.div 
            className="text-white text-sm font-semibold tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            TOURNAMENT
          </motion.div>
          <motion.div 
            className="text-gold text-3xl font-bold tracking-widest gold-shimmer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            SLOTS
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LogoHeader;
