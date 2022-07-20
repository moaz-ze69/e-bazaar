import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import GroceryScreen from "../screens/GroceryScreen";
import PharmacyScreen from "../screens/PharmacyScreen";
import ElectronicsScreen from "../screens/ElectronicsScreen";
import ItemDetailScreen from "../screens/ItemDetailScreen";
import PromotionScreen from "../screens/PromotionScreen";
import MapScreen from "../screens/MapScreen";

let Stack = createNativeStackNavigator();

export default HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Homes"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="GoogleMap"
      component={MapScreen}
      options={{ headerTitle: "Select Delivery Location" }}
    />
    <Stack.Screen name="Promotions" component={PromotionScreen} />
    <Stack.Screen name="Grocery" component={GroceryScreen} />
    <Stack.Screen name="Pharmacy" component={PharmacyScreen} />
    <Stack.Screen name="Electronics" component={ElectronicsScreen} />
    <Stack.Screen name="Item Details" component={ItemDetailScreen} />
  </Stack.Navigator>
);
