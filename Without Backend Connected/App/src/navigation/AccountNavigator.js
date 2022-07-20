import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "../screens/AccountScreen";
import NotificationScreen from "../screens/NotificationScreen";
import LoginScreen from "../screens/LoginScreen";
import LoginContinueScreen from "../screens/LoginContinueScreen";
import SuggestProductsScreen from "../screens/SuggestProductsScreen";
import AddressScreen from "../screens/AddressScreen";
import OrdersScreen from "../screens/OrdersScreen";
import HelpScreen from "../screens/HelpScreen";
import WalletScreen from "../screens/WalletScreen";
import ReferScreen from "../screens/ReferScreen";
import SettingScreen from "../screens/SettingScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";
import RewardNavigator from "./RewardNavigator";
import EditProfileScreen from "../screens/EditProfileScreen";

let Stack = createNativeStackNavigator();

export default AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Accounts"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerTitle: "Enter your phone number" }}
    />
    <Stack.Screen
      name="Refer"
      component={ReferScreen}
      options={{ headerTitle: "Refer a Friend" }}
    />
    <Stack.Screen
      name="LoginContinue"
      component={LoginContinueScreen}
      options={{ headerTitle: "Log In" }}
    />

    <Stack.Screen
      name="Orders"
      component={OrdersScreen}
      options={{ headerTitle: "My Orders" }}
    />
    <Stack.Screen
      name="Wallet"
      component={WalletScreen}
      options={{ headerTitle: "Wallet" }}
    />
    <Stack.Screen
      name="Address"
      component={AddressScreen}
      options={{ headerTitle: "My Addresses" }}
    />
    <Stack.Screen name="Notifications" component={NotificationScreen} />
    <Stack.Screen
      name="SuggestProducts"
      component={SuggestProductsScreen}
      options={{ headerTitle: "Suggest New Products" }}
    />
    <Stack.Screen
      name="Help"
      component={HelpScreen}
      options={{ headerTitle: "Help & Support" }}
    />
    <Stack.Screen
      name="Setting"
      component={SettingScreen}
      options={{ headerTitle: "Settings" }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{ headerTitle: "Edit Profile" }}
    />
    <Stack.Screen
      name="Rewards"
      component={RewardNavigator}
      options={{ headerTitle: "My Rewards" }}
    />
    <Stack.Screen
      name="OrderDetails"
      component={OrderDetailsScreen}
      options={({ route }) => ({ title: route.params.headerTitle })}
    />
  </Stack.Navigator>
);
