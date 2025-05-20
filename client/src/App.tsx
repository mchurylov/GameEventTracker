import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import LoadingScreen from "@/pages/LoadingScreen";
import Home from "@/pages/Home";
import SignupForm from "@/pages/SignupForm";
import EventDetails from "@/pages/EventDetails";
import Promotions from "@/pages/Promotions";
import Itinerary from "@/pages/Itinerary";
import VenueMap from "@/pages/VenueMap";

function Router() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  
  // Show loading screen initially
  useEffect(() => {
    // Skip loading screen during development for faster testing
    // In production, this would be true
    const shouldShowLoadingScreen = true;
    
    if (!shouldShowLoadingScreen) {
      setShowLoadingScreen(false);
    }
    
    // Add meta viewport tag to ensure mobile-first display
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
    document.getElementsByTagName('head')[0].appendChild(meta);
    
    // Add title
    document.title = "World Tournament Slots | Oct 22-26, 2025";
  }, []);
  
  // If showing loading screen, only show that
  if (showLoadingScreen) {
    return <LoadingScreen />;
  }

  return (
    <Switch>
      {/* Phase 1 Routes */}
      <Route path="/" component={Home} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/event" component={EventDetails} />
      <Route path="/promotions" component={Promotions} />
      
      {/* Phase 2 Routes */}
      <Route path="/itinerary" component={Itinerary} />
      <Route path="/map" component={VenueMap} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
