# World Tournament Slots Mobile App - Developer Guide

## Project Overview

This mobile app for the World Tournament Slots event provides comprehensive event information, user engagement features, and interactive functionalities. It's designed to serve two main phases:

### Phase 1: Marketing App (Pre-event)
- Event countdown timer
- Event information and details
- Resort amenities
- Sign-up form for updates
- Gaming app promotions

### Phase 2: Event App (14 days before event)
- Event schedule/itinerary
- Interactive venue map
- Extended event information
- Attendee engagement features

## Technical Architecture

The app is built with:
- React Native
- Expo framework
- React Navigation for screen navigation
- Expo Vector Icons for iconography
- LinearGradient for visual styling

## Project Structure

```
mobile/
├── assets/               # Images and static assets
├── components/           # Reusable components
│   ├── CountdownTimer.js # Event countdown component
│   └── EventCarousel.js  # Home screen carousel
├── screens/              # App screens
│   ├── LoadingScreen.js  # Initial loading screen
│   ├── HomeScreen.js     # Main dashboard
│   ├── EventDetailsScreen.js
│   ├── SignupScreen.js
│   ├── PromotionsScreen.js
│   ├── ItineraryScreen.js
│   └── VenueMapScreen.js
├── constants.js          # Global constants and data
├── App.js                # Main entry point with navigation
├── app.json              # Expo configuration
└── package.json          # Dependencies
```

## Key Features Implementation

### Automatic Phase Switching
The app automatically transitions from Phase 1 to Phase 2 when the event date is within 14 days. This logic is in App.js:

```javascript
// Determine if we're in Phase 1 (Marketing App) or Phase 2 (Event App)
const now = new Date();
const timeDiff = EVENT_START_DATE - now;
const daysToEvent = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

if (daysToEvent <= 14) {
  setCurrentPhase(2);
}
```

### Luxury Theme
The app consistently uses a luxury gold and black theme throughout:
- Primary: #ffd700 (Gold)
- Background: #1a1a1a (Dark)
- Secondary background: #2a2a2a (Dark Gray)
- Accent: rgba(255, 215, 0, 0.3) (Transparent Gold)

### Navigation Structure
The app uses bottom tab navigation with different tabs for each phase:
- Phase 1: Home, Event Details, Sign Up, Promotions
- Phase 2: Home, Event Details, Itinerary, Venue Map, Promotions

## Development Environment Setup

For best results, use the following environment:
- Node.js version: 16.x or 18.x
- Expo SDK: 48.0.x
- React Native: 0.71.x

## Future Enhancement Opportunities

1. **Backend Integration**
   - Replace static data with API calls
   - Implement user authentication
   - Enable real-time updates

2. **Notification System**
   - Implement push notifications for event updates
   - Add event reminders

3. **Offline Support**
   - Cache event data for offline access
   - Implement data synchronization

4. **Analytics Integration**
   - Track user engagement
   - Monitor feature usage

5. **Social Features**
   - Add social sharing functionality
   - Implement attendee networking features