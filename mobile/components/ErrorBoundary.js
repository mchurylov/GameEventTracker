import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.log('Error caught by ErrorBoundary:', error, errorInfo);
  }

  handleReload = () => {
    // Reset the error state and attempt to reload the app
    this.setState({ hasError: false, error: null });
  }

  render() {
    if (this.state.hasError) {
      const isPlatformConstantsError = 
        this.state.error?.message?.includes('PlatformConstants') ||
        this.state.error?.message?.includes('TurboModuleRegistry');

      return (
        <View style={styles.container}>
          <Text style={styles.title}>World Tournament Slots</Text>
          <Text style={styles.subtitle}>Something went wrong</Text>
          
          {isPlatformConstantsError ? (
            <>
              <Text style={styles.errorMessage}>
                This appears to be a compatibility issue with Expo Go.
              </Text>
              <Text style={styles.instructions}>
                Try running the app with the following command:{'\n'}
                npx expo start --no-dev --minify
              </Text>
            </>
          ) : (
            <Text style={styles.errorMessage}>
              {this.state.error?.toString() || 'An unknown error occurred'}
            </Text>
          )}
          
          <TouchableOpacity style={styles.button} onPress={this.handleReload}>
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D4AF37', // Gold color
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  instructions: {
    fontSize: 14,
    color: '#D4AF37',
    marginBottom: 30,
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#D4AF37',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ErrorBoundary;