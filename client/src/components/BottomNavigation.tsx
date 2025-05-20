import { useLocation, Link } from 'wouter';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '@/lib/constants';
import { Home, Calendar, Mail, Gamepad, Clock, Map } from 'lucide-react';

const BottomNavigation = () => {
  const [location] = useLocation();

  // Map icon names to Lucide React components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home size={20} />;
      case 'calendar':
        return <Calendar size={20} />;
      case 'mail':
        return <Mail size={20} />;
      case 'gamepad':
        return <Gamepad size={20} />;
      case 'clock':
        return <Clock size={20} />;
      case 'map':
        return <Map size={20} />;
      default:
        return <Home size={20} />;
    }
  };

  return (
    <motion.nav 
      className="bottom-nav"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 500, damping: 30 }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = location === item.path;
        
        return (
          <Link key={item.path} href={item.path}>
            <a className="flex flex-col items-center justify-center w-full h-full">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center justify-center ${
                  isActive ? 'text-gold' : 'text-white'
                }`}
              >
                {getIcon(item.icon)}
                <span className="text-xs mt-1">{item.name}</span>
                
                {isActive && (
                  <motion.div
                    className="absolute top-0 w-6 h-1 bg-gold rounded-full"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            </a>
          </Link>
        );
      })}
    </motion.nav>
  );
};

export default BottomNavigation;
