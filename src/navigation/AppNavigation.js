import "react-native-gesture-handler";
import React from "react";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import AuthScreen from "../screens/auth/AuthScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/main/HomeScreen";
import DoneScreen from "../screens/main/DoneScreen";
import ProfileScreen from "../screens/main/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const token = useSelector((state) => state.auth.user.sessionToken);

  const tabOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      let iconSize;

      if (route.name === "Home") {
        iconName = focused ? "home" : "hexagon";
        iconSize = focused ? size : 18;
      } else if (route.name === "Done") {
        iconName = focused ? "award" : "hexagon";
        iconSize = focused ? size : 18;
      } else {
        iconName = focused ? "user" : "hexagon";
        iconSize = focused ? size : 18;
      }

      // You can return any component that you like here!
      return <Feather name={iconName} size={iconSize} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  });

  return (
    <>
      {!token ? (
        <Stack.Navigator>
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Group>
        </Stack.Navigator>
      ) : (
        <Tab.Navigator initialRouteName="Home" screenOptions={tabOptions}>
          <Tab.Screen name="Done" component={DoneScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      )}
    </>
  );
};

export default AppNavigation;
