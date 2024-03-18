// StockDetailsScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Stock details screen component
const StockDetailsScreen = ({ route }) => {
  const { stock } = route.params;
  return (
    <View style={styles.container}>
     
      <View style={styles.details}>
        <Text style={styles.label}>Symbol:</Text>
        <Text style={styles.value}>{stock.ticker}</Text>

        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{stock.name}</Text>

        <Text style={styles.label}>MIC Code:</Text>
        <Text style={styles.value}>{stock.mic_code}</Text>

        <Text style={styles.label}>Currency:</Text>
        <Text style={styles.value}>{stock.currency}</Text>

        <Text style={styles.label}>Price:</Text>
        <Text style={styles.value}>{stock.price}</Text>

        <Text style={styles.label}>Day High:</Text>
        <Text style={styles.value}>{stock.day_high}</Text>

        <Text style={styles.label}>Day Low: </Text>
        <Text style={styles.value}>{stock.day_low}</Text>

        <Text style={styles.label}>Day Open:</Text>
        <Text style={styles.value}>{stock.day_open}</Text>

        <Text style={styles.label}>Previous Close Price:</Text>
        <Text style={styles.value}>{stock.previous_close_price}</Text>
        <Text style={styles.label}>Previous Close Price Time: </Text>
        <Text style={styles.value}>{stock.previous_close_price_time}</Text>
  
    </View>
    </View>
  );
};

// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"blue",
  },

  details: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "#ccc",
    backgroundColor:"aliceblue",
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    marginBottom: 10,
  },
});

export default StockDetailsScreen;
