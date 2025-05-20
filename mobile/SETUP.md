# Setting Up the World Tournament Slots Mobile App

This document provides step-by-step instructions for setting up and running the World Tournament Slots mobile app using Expo.

## Prerequisites

- Node.js (preferably version 16.x or 18.x)
- npm or yarn package manager
- Expo CLI (`npm install -g expo-cli`)

## Installation Steps

1. Navigate to the mobile app directory:
```
cd mobile
```

2. Remove any existing node_modules and lock files if you encounter issues:
```
rm -rf node_modules package-lock.json
```

3. Install dependencies:
```
npm install
```

4. Install specific versions of metro packages if needed:
```
npm install metro@0.76.8 metro-core@0.76.8
```

## Running the App

1. Start the Expo development server:
```
npx expo start
```

2. You can run the app using:
   - iOS Simulator: Press 'i'
   - Android Emulator: Press 'a'
   - Web Browser: Press 'w'
   - Physical Device: Scan the QR code with the Expo Go app

## Troubleshooting

If you encounter the error "Cannot find module 'metro/src/ModuleGraph/worker/importLocationsPlugin'", try these steps:

1. Install specific metro packages:
```
npm install metro@0.73.7 metro-core@0.73.7
```

2. Create a more specific metro.config.js:
```js
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;
```

3. Clear cache and restart:
```
npx expo start -c
```

## App Structure

- **App.js**: Main entry point with navigation setup
- **components/**: Reusable UI components
- **screens/**: All app screens
- **assets/**: Images and other static assets
- **constants.js**: Configuration and data constants

The app automatically switches between Phase 1 (Marketing) and Phase 2 (Event) modes depending on the proximity to the event date (within 14 days).