import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import MobileLayout from '@/components/MobileLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Event } from '@shared/schema';
import { Clock, MapPin } from 'lucide-react';

const Itinerary = () => {
  const [activeDay, setActiveDay] = useState("1");
  
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });
  
  // Group events by day
  const eventsByDay = events?.reduce((acc, event) => {
    const day = event.day.toString();
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(event);
    return acc;
  }, {} as Record<string, Event[]>) || {};
  
  // Sort events by start time
  Object.keys(eventsByDay).forEach(day => {
    eventsByDay[day].sort((a, b) => 
      new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
    );
  });
  
  // Generate day labels
  const dayLabels = {
    "1": "Day 1 (Oct 22)",
    "2": "Day 2 (Oct 23)",
    "3": "Day 3 (Oct 24)",
    "4": "Day 4 (Oct 25)",
    "5": "Day 5 (Oct 26)",
  };
  
  const formatTime = (date: Date) => {
    return format(new Date(date), 'h:mm a');
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
          Event Schedule
        </h1>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
          </div>
        ) : (
          <Tabs defaultValue="1" value={activeDay} onValueChange={setActiveDay}>
            <TabsList className="bg-[#222] w-full overflow-x-auto flex flex-nowrap mb-6">
              {Object.keys(eventsByDay).map(day => (
                <TabsTrigger 
                  key={day} 
                  value={day} 
                  className="data-[state=active]:text-black data-[state=active]:bg-gold"
                >
                  {dayLabels[day as keyof typeof dayLabels] || `Day ${day}`}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.keys(eventsByDay).map(day => (
              <TabsContent key={day} value={day} className="mt-0">
                <div className="space-y-4">
                  {eventsByDay[day].map((event, index) => (
                    <motion.div
                      key={event.id}
                      className="bg-[#222] rounded-lg overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      {/* Time indicator */}
                      <div className="bg-[#333] px-4 py-2 text-gold font-semibold flex items-center">
                        <Clock size={16} className="mr-2" />
                        {formatTime(event.startTime)}
                        {event.endTime && ` - ${formatTime(event.endTime)}`}
                      </div>
                      
                      {/* Event details */}
                      <div className="p-4">
                        <h3 className="text-white font-bold text-lg mb-1">{event.title}</h3>
                        {event.description && (
                          <p className="text-gray-300 mb-3">{event.description}</p>
                        )}
                        {event.location && (
                          <div className="flex items-center text-gold text-sm">
                            <MapPin size={14} className="mr-1" />
                            {event.location}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
        
        {/* Legend */}
        <div className="mt-8 bg-[#222] rounded-lg p-4">
          <h3 className="text-gold font-bold mb-2">Schedule Notes</h3>
          <ul className="text-white text-sm space-y-2">
            <li>• All times are in local Bahamas time (EDT)</li>
            <li>• Schedule may be subject to change</li>
            <li>• VIP badge required for certain events</li>
          </ul>
        </div>
      </motion.div>
    </MobileLayout>
  );
};

export default Itinerary;
