# Troubleshooting the World Tournament Slots Mobile App

## Common Issues and Solutions

### 1. TurboModuleRegistry Error in Expo Go

If you encounter this error:
```
TurboModuleRegistry.getEnforcing(...): 'PlatformConstants' could not be found.
```

Try these solutions:

#### Solution A: Use Expo CLI with Specific Flags
```
npx expo start --no-dev --minify
```

This will start the app in production mode, which often avoids TurboModule compatibility issues.

#### Solution B: Clear Cache and Restart
```
npx expo start -c
```

This clears the cache before starting the development server.

#### Solution C: Check Expo Go Version
Ensure your Expo Go app is updated to the latest version from the App Store or Google Play Store.

#### Solution D: Use Managed Workflow
For a more reliable experience, consider using the Expo managed workflow by creating a new project with:
```
npx create-expo-app@latest
```

Then copy the component files from this project to the new one.

### 2. Dependency Compatibility Issues

If you're experiencing dependency conflicts:

1. Clean your node_modules and lock files:
```
rm -rf node_modules package-lock.json
```

2. Install dependencies with legacy peer deps flag:
```
npm install --legacy-peer-deps
```

3. If specific modules are causing issues, try installing compatible versions:
```
npm install metro@0.76.0 metro-core@0.76.0 --legacy-peer-deps
```

### 3. Asset Loading Issues

If images or assets fail to load:

1. Make sure assets are in the correct directory structure
2. Use require() syntax consistently for all assets
3. Consider using remote URLs for images during development

### 4. Metro Bundler Issues

If the Metro bundler crashes or fails to start:

1. Kill any running Metro instances:
```
killall -9 node
```

2. Start with a clean Metro cache:
```
npx expo start --clear
```

### 5. Device-Specific Problems

If the app works on one platform but not another:

1. Check platform-specific code using Platform.OS
2. Ensure all used components are supported on both platforms
3. Consider using platform-specific files (e.g., Component.ios.js, Component.android.js)