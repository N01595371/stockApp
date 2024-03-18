
// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./component/HomeScreen";
import DrawerContent from "./component/DrawerContent";
import StockDetailsScreen from "./component/StockDetailsScreen";
import NewsDetailsScreen from "./component/NewsDetailsScreen";
import WelcomeScreen from "./component/WelcomeScreen";

// Create drawer navigator
const Drawer = createDrawerNavigator();

// Create stack navigator for the main screens
const Stack = createStackNavigator();

// Screen stack for main screens
const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="StockDetails" component={StockDetailsScreen} />
    <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} />
  </Stack.Navigator>
);

// Main App component
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main"
        drawerContent={() => <DrawerContent />}
        drawerStyle={{ width: 300 }}
      >
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Main" component={MainStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;