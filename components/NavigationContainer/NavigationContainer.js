import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../HomePage/HomePage";
import WelcomeScreen from "../WelcomeScreens/WelcomeScreen";
import NextWelcomeScreen from "../WelcomeScreens/NextWelcomeScreen";
import React from "react";

function Navigation() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="NextWelcomeScreen" component={NextWelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
