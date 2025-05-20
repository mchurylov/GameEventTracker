import { ReactNode } from 'react';
import LogoHeader from './LogoHeader';
import BottomNavigation from './BottomNavigation';
import { motion } from 'framer-motion';

interface MobileLayoutProps {
  children: ReactNode;
  showLogo?: boolean;
  showNav?: boolean;
  withPadding?: boolean;
}

const MobileLayout = ({ 
  children,
  showLogo = true,
  showNav = true,
  withPadding = true
}: MobileLayoutProps) => {
  return (
    <div className="mobile-container bg-[#1a1a1a]">
      {/* Background subtle pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Content container */}
      <motion.div 
        className={`relative z-10 min-h-screen ${withPadding ? 'px-4 pb-20' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {showLogo && <LogoHeader />}
        {children}
      </motion.div>
      
      {showNav && <BottomNavigation />}
    </div>
  );
};

export default MobileLayout;
