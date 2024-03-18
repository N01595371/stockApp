
// DrawerContent.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Component for drawer content
const DrawerContent = () => {
  const navigation = useNavigation();
  const handleLongPressWelcome = () => {
    Alert.alert("Welcome to StockApp");
  };

  return (
    <View style={styles.container}>
      {/* Button to navigate to Welcome screen */}
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("Welcome")}
        onLongPress={handleLongPressWelcome}
      >
        <Text>Welcome</Text>
      </TouchableOpacity>

      {/* Button to navigate to Home screen */}
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("Main")}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    padding: 16,
    backgroundColor: "aliceblue",
    color: "white",
  },
  drawerItem: {
    padding: 10,
    backgroundColor: "lightgray",
    marginBottom: 8,
    alignItems: "center",
    borderRadius: 5,
  },
});

export default DrawerContent;