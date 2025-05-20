import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Switch,
  Alert,
  ActivityIndicator
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const SignupScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [receiveUpdates, setReceiveUpdates] = useState(true);
  const [receivePromo, setReceivePromo] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePhoneNumber = (phone) => {
    // Basic validation - can be more complex based on requirements
    return phone.length >= 10;
  };
  
  const handleSubmit = () => {
    // Validate form
    if (!firstName.trim()) {
      Alert.alert('Error', 'First name is required');
      return;
    }
    
    if (!lastName.trim()) {
      Alert.alert('Error', 'Last name is required');
      return;
    }
    
    if (!email.trim() || !validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }
    
    if (phoneNumber && !validatePhoneNumber(phoneNumber)) {
      Alert.alert('Error', 'Please enter a valid phone number');
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert(
        'Thank You!',
        'You have successfully signed up for the World Tournament Slots event updates. We look forward to seeing you at the event!',
        [
          {
            text: 'OK',
            onPress: () => {
              // Clear form
              setFirstName('');
              setLastName('');
              setEmail('');
              setPhoneNumber('');
              setReceiveUpdates(true);
              setReceivePromo(true);
            }
          }
        ]
      );
    }, 1500);
  };

  return (
    <LinearGradient
      colors={['#1a1a1a', '#2a2a2a', '#1a1a1a']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.headerTitle}>SIGN UP</Text>
          <Text style={styles.headerSubtitle}>
            Register to receive event updates, exclusive offers, and early access to tournament registration.
          </Text>
        </View>
        
        {/* Form Section */}
        <View style={styles.formSection}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>First Name*</Text>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="John"
              placeholderTextColor="#777"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Last Name*</Text>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Doe"
              placeholderTextColor="#777"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address*</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="johndoe@example.com"
              placeholderTextColor="#777"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number (optional)</Text>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="(123) 456-7890"
              placeholderTextColor="#777"
              keyboardType="phone-pad"
            />
          </View>
          
          <View style={styles.switchGroup}>
            <View style={styles.switchItem}>
              <Text style={styles.switchLabel}>
                Receive event updates and announcements
              </Text>
              <Switch
                value={receiveUpdates}
                onValueChange={setReceiveUpdates}
                trackColor={{ false: '#444', true: 'rgba(255, 215, 0, 0.3)' }}
                thumbColor={receiveUpdates ? '#ffd700' : '#f4f3f4'}
              />
            </View>
            
            <View style={styles.switchItem}>
              <Text style={styles.switchLabel}>
                Receive promotional offers and discounts
              </Text>
              <Switch
                value={receivePromo}
                onValueChange={setReceivePromo}
                trackColor={{ false: '#444', true: 'rgba(255, 215, 0, 0.3)' }}
                thumbColor={receivePromo ? '#ffd700' : '#f4f3f4'}
              />
            </View>
          </View>
          
          <TouchableOpacity 
            style={styles.submitButton}
            onPress={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color="#1a1a1a" />
            ) : (
              <Text style={styles.submitButtonText}>SUBMIT</Text>
            )}
          </TouchableOpacity>
        </View>
        
        {/* Benefits Section */}
        <View style={styles.benefitsSection}>
          <Text style={styles.benefitsSectionTitle}>SIGNUP BENEFITS</Text>
          
          <View style={styles.benefitItem}>
            <View style={styles.benefitIconContainer}>
              <Ionicons name="calendar" size={24} color="#ffd700" />
            </View>
            <View style={styles.benefitContent}>
              <Text style={styles.benefitTitle}>Early Tournament Registration</Text>
              <Text style={styles.benefitDescription}>
                Be the first to secure your spot in our high-stakes tournaments.
              </Text>
            </View>
          </View>
          
          <View style={styles.benefitItem}>
            <View style={styles.benefitIconContainer}>
              <Ionicons name="gift" size={24} color="#ffd700" />
            </View>
            <View style={styles.benefitContent}>
              <Text style={styles.benefitTitle}>Exclusive Promotions</Text>
              <Text style={styles.benefitDescription}>
                Receive special offers and discounts on resort accommodations.
              </Text>
            </View>
          </View>
          
          <View style={styles.benefitItem}>
            <View style={styles.benefitIconContainer}>
              <Ionicons name="notifications" size={24} color="#ffd700" />
            </View>
            <View style={styles.benefitContent}>
              <Text style={styles.benefitTitle}>Event Updates</Text>
              <Text style={styles.benefitDescription}>
                Stay informed about schedule changes and important announcements.
              </Text>
            </View>
          </View>
        </View>
        
        {/* Privacy Notice */}
        <View style={styles.privacySection}>
          <Text style={styles.privacyText}>
            By submitting this form, you agree to our Privacy Policy and Terms of Service.
            We respect your privacy and will never share your information with third parties
            without your consent.
          </Text>
        </View>
        
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 World Tournament Slots</Text>
          <Text style={styles.footerText}>All Rights Reserved</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  headerSection: {
    marginBottom: 30,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
  },
  formSection: {
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 15,
    color: 'white',
    borderWidth: 1,
    borderColor: '#444',
  },
  switchGroup: {
    marginBottom: 25,
  },
  switchItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  switchLabel: {
    fontSize: 16,
    color: 'white',
    flex: 1,
    paddingRight: 10,
  },
  submitButton: {
    backgroundColor: '#ffd700',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  benefitsSection: {
    marginBottom: 30,
  },
  benefitsSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 20,
  },
  benefitItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#2a2a2a',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#444',
  },
  benefitIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  benefitContent: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffd700',
    marginBottom: 5,
  },
  benefitDescription: {
    fontSize: 16,
    color: 'white',
    lineHeight: 22,
  },
  privacySection: {
    backgroundColor: '#2a2a2a',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#444',
  },
  privacyText: {
    fontSize: 14,
    color: '#a0a0a0',
    lineHeight: 20,
  },
  footer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#a0a0a0',
    fontSize: 14,
    marginBottom: 5,
  },
});

export default SignupScreen;