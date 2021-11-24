import "react-native-gesture-handler";
import React from "react";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignupScreen from "../screens/auth/SignupScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/main/HomeScreen";
import DoneScreen from "../screens/main/DoneScreen";
import ProfileScreen from "../screens/main/ProfileScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Stack.Navigator>
      {!user ? (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Done" component={DoneScreen} />
          <Stack.Screen name="profile" component={ProfileScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigation;
