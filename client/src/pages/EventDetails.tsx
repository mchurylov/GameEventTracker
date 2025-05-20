import { motion } from 'framer-motion';
import MobileLayout from '@/components/MobileLayout';
import { EVENT_NAME, EVENT_DATES, EVENT_LOCATION, RESORT_AMENITIES } from '@/lib/constants';
import { Calendar, MapPin, Trophy, DollarSign, Star, Utensils, Waves, Users } from 'lucide-react';

const EventDetails = () => {
  // Animation variants for staggered animations
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
        {/* Hero Section */}
        <motion.div 
          className="relative w-full h-60 rounded-lg overflow-hidden mb-6"
          variants={itemVariants}
        >
          {/* Placeholder for resort image - using gradient background */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h1 className="text-gold text-2xl font-bold mb-2">{EVENT_NAME}</h1>
              <div className="flex items-center text-white mb-1">
                <Calendar size={16} className="mr-2" />
                <span>{EVENT_DATES}</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin size={16} className="mr-2" />
                <span>{EVENT_LOCATION}</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Event Description */}
        <motion.section 
          className="bg-[#222] rounded-lg p-6 mb-6"
          variants={itemVariants}
        >
          <h2 className="text-gold text-xl font-bold mb-4">Event Overview</h2>
          <p className="text-white mb-4">
            Join us for the world's most prestigious slots tournament, featuring top players from around the globe 
            competing for glory and a share of the massive $5 million prize pool.
          </p>
          <p className="text-white">
            The World Tournament Slots is an invitation-only event hosted at the luxurious Atlantis resort 
            in the Bahamas, offering a perfect blend of high-stakes competition and paradise relaxation.
          </p>
        </motion.section>
        
        {/* Event Highlights */}
        <motion.section 
          className="mb-6"
          variants={itemVariants}
        >
          <h2 className="text-gold text-xl font-bold mb-4">Event Highlights</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#222] rounded-lg p-4">
              <Trophy className="text-gold mb-2" size={24} />
              <h3 className="text-white font-bold mb-1">World-Class Competition</h3>
              <p className="text-gray-300 text-sm">Compete against the best players</p>
            </div>
            
            <div className="bg-[#222] rounded-lg p-4">
              <DollarSign className="text-gold mb-2" size={24} />
              <h3 className="text-white font-bold mb-1">$5M Prize Pool</h3>
              <p className="text-gray-300 text-sm">Largest prize in tournament history</p>
            </div>
            
            <div className="bg-[#222] rounded-lg p-4">
              <Star className="text-gold mb-2" size={24} />
              <h3 className="text-white font-bold mb-1">VIP Experience</h3>
              <p className="text-gray-300 text-sm">Exclusive access and amenities</p>
            </div>
            
            <div className="bg-[#222] rounded-lg p-4">
              <Utensils className="text-gold mb-2" size={24} />
              <h3 className="text-white font-bold mb-1">Gourmet Dining</h3>
              <p className="text-gray-300 text-sm">World-class culinary offerings</p>
            </div>
          </div>
        </motion.section>
        
        {/* Resort Information */}
        <motion.section 
          className="bg-[#222] rounded-lg p-6 mb-6"
          variants={itemVariants}
        >
          <h2 className="text-gold text-xl font-bold mb-4">About Atlantis Resort</h2>
          
          {/* Resort description */}
          <div className="mb-6">
            <p className="text-white mb-4">
              Atlantis Paradise Island is a world-renowned luxury resort located on Paradise Island in the Bahamas. 
              It features a variety of accommodations, from the iconic Royal Towers to The Cove and The Reef.
            </p>
            <p className="text-white">
              With its stunning beaches, marine habitats, and Aquaventure water park, Atlantis offers the perfect 
              backdrop for our prestigious tournament.
            </p>
          </div>
          
          {/* Resort amenities */}
          <h3 className="text-gold text-lg font-bold mb-3">Resort Amenities</h3>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
            {RESORT_AMENITIES.map((amenity, index) => (
              <li key={index} className="flex items-center text-white">
                <span className="mr-2 text-gold">•</span>
                {amenity}
              </li>
            ))}
          </ul>
        </motion.section>
        
        {/* Registration Info */}
        <motion.section 
          className="bg-gold text-black rounded-lg p-6 mb-10"
          variants={itemVariants}
        >
          <h2 className="text-xl font-bold mb-4">How to Participate</h2>
          <p className="mb-4">
            The World Tournament Slots is an invitation-only event. Qualify through our regional tournaments
            or through our partner casinos.
          </p>
          <button className="bg-black text-gold font-bold py-3 px-6 rounded w-full">
            Learn About Qualification
          </button>
        </motion.section>
      </motion.div>
    </MobileLayout>
  );
};

export default EventDetails;
