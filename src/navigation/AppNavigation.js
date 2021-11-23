import "react-native-gesture-handler";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignupScreen from "../screens/auth/SignupScreen";
import LoginScreen from "../screens/auth/LoginScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppNavigation;
