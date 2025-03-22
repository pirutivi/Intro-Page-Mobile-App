import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Image
        source={require('../assets/background.jpg')} // Replace with your background image path
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo_law.jpeg')} // Replace with your logo path
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.heading}>Law Way</Text>
        <Text style={styles.subheading}>Justice at your fingertips</Text>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Added quote */}
        <Text style={styles.quote}>
          Justice isn’t out of reach; it’s in your hands with Law Way.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adds a translucent overlay
    zIndex: -1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logoContainer: {
    marginBottom: 20,
    marginTop: -40, // Adjusts the logo's position higher
  },
  logo: {
    width: 160, // Increased size
    height: 160,
    borderRadius: 40,
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
    marginTop: 8,
  },
  subheading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#dcdcdc',
    marginBottom: 50,
    marginTop: 25,
  },
  loginButton: {
    backgroundColor: '#87CEEB',
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 80,
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 20,
  },
  signupButton: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 80,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 30,
    paddingHorizontal: 40, // Adjust padding for better alignment
  },
});

