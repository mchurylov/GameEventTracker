# How to Fix TurboModuleRegistry Error in Expo Go

## The Issue
When running the app on a physical device using Expo Go, you might encounter this error:
```
TurboModuleRegistry.getEnforcing(...): 'PlatformConstants' could not be found.
```

## Solution Steps

### 1. Run with Production Mode
When starting the Expo app, use the production mode flags:
```bash
npx expo start --no-dev --minify
```

### 2. Clear Metro Cache
If the error persists, try clearing the Metro bundler cache:
```bash
npx expo start --clear
```

### 3. Update Expo Go
Make sure your Expo Go app is updated to the latest version on your device.

### 4. Try the Error Boundary
We've added an ErrorBoundary component that should catch this error and display a more helpful message instead of crashing.

### 5. Check Compatibility
This error is often related to compatibility issues between React Native, Expo SDK, and native modules. Make sure all packages in package.json are compatible with each other.

## If Problems Continue
If you still encounter issues, consider using a bare workflow or managed workflow with compatible versions of all dependencies. The TurboModuleRegistry error is specifically related to React Native's New Architecture, which might not be fully supported in some Expo Go configurations.