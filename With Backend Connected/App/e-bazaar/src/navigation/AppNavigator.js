import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import SearchScreen from "../screens/SearchScreen";
import colors from "../config/colors";
import AccountNavigator from "./AccountNavigator";
import CategoryNavigator from "./CategoryNavigator";
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";
import { cartContext } from "../context/CartProvider";

let Tab = createBottomTabNavigator();

export default function AppNavigator(props) {
  let { cartItems } = useContext(cartContext);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.goGreen,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarStyle: {
            paddingBottom: 10,
            height: 60,
          },
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-home"
                size={24}
                color={tabInfo.focused ? colors.goGreen : colors.medium}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryNavigator}
        options={{
          headerShown: false,
          tabBarStyle: {
            paddingBottom: 10,
            height: 60,
          },
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-newspaper-outline"
                size={24}
                color={tabInfo.focused ? colors.goGreen : colors.medium}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          headerShown: false,
          tabBarStyle: {
            paddingBottom: 10,
            height: 60,
          },
          tabBarBadge: cartItems.length > 0 ? cartItems.length : null,
          tabBarIcon: (tabInfo) => {
            return (
              <MaterialCommunityIcons
                name="cart-outline"
                size={24}
                color={tabInfo.focused ? colors.goGreen : colors.medium}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarStyle: {
            paddingBottom: 10,
            height: 60,
          },
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="search"
                size={24}
                color={tabInfo.focused ? colors.goGreen : colors.medium}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarStyle: {
            paddingBottom: 10,
            height: 60,
          },
          tabBarIcon: (tabInfo) => {
            return (
              <MaterialCommunityIcons
                name="account-outline"
                size={24}
                color={tabInfo.focused ? colors.goGreen : colors.medium}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
