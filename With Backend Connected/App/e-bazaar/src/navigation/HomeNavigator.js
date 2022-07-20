import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import DepartmentDetailScreen from "../screens/DepartmentDetailScreen";
import ItemDetailScreen from "../screens/ItemDetailScreen";
import ListingScreen from "../screens/ListingScreen";
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
    <Stack.Screen
      name="Listings"
      component={ListingScreen}
      options={({ route }) => ({ title: route.params.headerTitle })}
    />
    <Stack.Screen
      name="DepartmentDetail"
      component={DepartmentDetailScreen}
      options={({ route }) => ({ title: route.params.headerTitle })}
    />
    <Stack.Screen name="Item Details" component={ItemDetailScreen} />
  </Stack.Navigator>
);
