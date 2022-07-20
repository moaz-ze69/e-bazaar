import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import GroceryScreen from "../screens/GroceryScreen";
import PharmacyScreen from "../screens/PharmacyScreen";
import ElectronicsScreen from "../screens/ElectronicsScreen";

let Stack = createNativeStackNavigator();

export default CategoriesNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Categories" component={CategoriesScreen} />
    <Stack.Screen name="Grocery" component={GroceryScreen} />
    <Stack.Screen name="Pharmacy" component={PharmacyScreen} />
    <Stack.Screen name="Electronics" component={ElectronicsScreen} />
  </Stack.Navigator>
);
