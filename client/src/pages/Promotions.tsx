import { motion } from 'framer-motion';
import MobileLayout from '@/components/MobileLayout';
import { GAMING_APPS } from '@/lib/constants';
import { Download, Star } from 'lucide-react';

const Promotions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <MobileLayout>
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1 
          className="text-gold text-center text-2xl font-bold mb-6"
          variants={itemVariants}
        >
          Our Gaming Apps
        </motion.h1>
        
        <motion.p 
          className="text-white text-center mb-8"
          variants={itemVariants}
        >
          Play our award-winning apps and practice your skills before the big tournament!
        </motion.p>
        
        {/* Featured App */}
        <motion.div
          className="relative bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg overflow-hidden mb-8"
          variants={itemVariants}
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center text-3xl mr-4">
                🎰
              </div>
              <div>
                <h2 className="text-gold text-xl font-bold">Slots Deluxe VIP</h2>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} className="text-gold" fill="#ffd700" />
                  ))}
                  <span className="text-white text-xs ml-1">5.0</span>
                </div>
              </div>
            </div>
            
            <p className="text-white mb-4">
              Our premium slots experience with over 200 unique machines and the highest payouts. 
              Practice for the tournament with our exclusive Tournament Mode!
            </p>
            
            <button className="w-full bg-gold text-black font-bold py-3 rounded-lg flex items-center justify-center">
              <Download size={16} className="mr-2" />
              Download Now
            </button>
          </div>
        </motion.div>
        
        {/* App Grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 mb-10"
          variants={containerVariants}
        >
          {GAMING_APPS.map((app) => (
            <motion.div
              key={app.id}
              className="bg-[#222] rounded-lg p-4 flex items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#333] flex items-center justify-center text-2xl mr-4">
                {app.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-gold font-bold">{app.name}</h3>
                <p className="text-white text-sm">{app.description}</p>
              </div>
              
              <button className="ml-2 bg-[#333] text-gold h-10 w-10 rounded-full flex items-center justify-center">
                <Download size={18} />
              </button>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Tournament Practice Section */}
        <motion.div
          className="bg-[#222] border border-gold rounded-lg p-6 mb-8"
          variants={itemVariants}
        >
          <h2 className="text-gold text-xl font-bold mb-4">Tournament Practice</h2>
          <p className="text-white mb-4">
            Get ready for the World Tournament Slots by practicing with our Tournament Simulator. 
            Face the same challenges you'll encounter at the live event!
          </p>
          <button className="w-full bg-gold text-black font-bold py-3 rounded-lg">
            Try Tournament Mode
          </button>
        </motion.div>
        
        {/* Bonus Offer */}
        <motion.div
          className="bg-black border border-gold rounded-lg p-6"
          variants={itemVariants}
        >
          <h2 className="text-gold text-xl font-bold mb-2 text-center">Special Offer</h2>
          <p className="text-white text-center mb-4">
            Download any app and get a <span className="text-gold font-bold">1,000,000 FREE COINS</span> bonus!
          </p>
          <p className="text-white text-center text-xs mb-4">
            Limited time offer for World Tournament Slots participants
          </p>
          <div className="bg-gold text-black font-bold py-3 text-center rounded-lg">
            CLAIM BONUS
          </div>
        </motion.div>
      </motion.div>
    </MobileLayout>
  );
};

export default Promotions;
