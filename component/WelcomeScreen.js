// WelcomeScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Welcome screen component
const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:"blue", fontSize: 28, fontWeight: 'bold' }} >Welcome to Stock App!</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"aliceblue",
   
  },
});

export default WelcomeScreen;
