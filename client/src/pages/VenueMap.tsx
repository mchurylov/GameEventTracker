import { useState } from 'react';
import { motion } from 'framer-motion';
import MobileLayout from '@/components/MobileLayout';
import { VENUE_LOCATIONS } from '@/lib/constants';
import { MapPin, X } from 'lucide-react';

interface LocationProps {
  id: number;
  name: string;
  x: number;
  y: number;
  description: string;
}

const VenueMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationProps | null>(null);
  
  const handleLocationClick = (location: LocationProps) => {
    setSelectedLocation(location);
  };
  
  const closeLocationInfo = () => {
    setSelectedLocation(null);
  };
  
  return (
    <MobileLayout>
      <motion.div 
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-gold text-center text-2xl font-bold mb-6">
          Venue Map
        </h1>
        
        <p className="text-white text-center mb-6">
          Navigate the Atlantis Resort with our interactive venue map. Tap on locations to learn more.
        </p>
        
        {/* Map container */}
        <div className="relative bg-[#222] rounded-lg overflow-hidden mb-6" style={{ height: '400px' }}>
          {/* This would be a real map in a production app - using a placeholder with pins */}
          <div className="relative w-full h-full">
            {/* Gradient background as placeholder for the resort map */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at center, #234876 0%, #122d4d 100%)',
                opacity: 0.8
              }}
            >
              {/* Decorative map elements */}
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/4 rounded-full bg-blue-900 opacity-30"></div>
              <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/6 rounded-lg bg-blue-800 opacity-20"></div>
              <div className="absolute top-1/2 left-1/3 w-1/3 h-1/5 rounded-lg bg-blue-700 opacity-20"></div>
              <div className="absolute bottom-1/4 left-1/4 w-1/2 h-1/6 bg-blue-900 opacity-30"></div>
            </div>
            
            {/* Location pins */}
            {VENUE_LOCATIONS.map((location) => (
              <motion.button
                key={location.id}
                className="absolute"
                style={{ 
                  top: `${location.y}px`, 
                  left: `${location.x}px`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => handleLocationClick(location)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="flex flex-col items-center">
                  <MapPin size={24} className="text-gold" fill={selectedLocation?.id === location.id ? '#ffd700' : 'transparent'} />
                  <span className="text-white text-xs mt-1 whitespace-nowrap">{location.name}</span>
                </div>
              </motion.button>
            ))}
          </div>
          
          {/* Map legend */}
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 p-2 rounded text-xs text-white">
            <div className="flex items-center mb-1">
              <MapPin size={12} className="text-gold mr-1" />
              <span>Event Locations</span>
            </div>
            <div className="text-gray-300">Tap pins for details</div>
          </div>
        </div>
        
        {/* Location information modal */}
        {selectedLocation && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-[#222] border border-gold rounded-lg w-full max-w-xs p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button 
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                onClick={closeLocationInfo}
              >
                <X size={20} />
              </button>
              
              <h3 className="text-gold text-xl font-bold mb-2">{selectedLocation.name}</h3>
              <p className="text-white mb-4">{selectedLocation.description}</p>
              
              <div className="flex justify-end">
                <button 
                  className="text-gold border border-gold px-4 py-2 rounded hover:bg-gold hover:text-black transition-colors"
                  onClick={closeLocationInfo}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {/* Venue directory */}
        <div className="bg-[#222] rounded-lg p-4">
          <h3 className="text-gold font-bold mb-3">Venue Directory</h3>
          <ul className="text-white space-y-3">
            {VENUE_LOCATIONS.map((location) => (
              <li key={location.id} className="flex items-start">
                <MapPin size={16} className="text-gold mr-2 mt-1 shrink-0" />
                <div>
                  <span className="font-semibold">{location.name}</span>
                  <p className="text-sm text-gray-300">{location.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </MobileLayout>
  );
};

export default VenueMap;
