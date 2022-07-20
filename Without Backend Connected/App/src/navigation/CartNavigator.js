import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartScreen from "../screens/CartScreen";
import DeliveryScreen from "../screens/DeliveryScreen";
import OrderPlacedScreen from "../screens/OrderPlacedScreen";

let Stack = createNativeStackNavigator();

export default CartNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Carts"
      component={CartScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Delivery" component={DeliveryScreen} />
    <Stack.Screen
      name="PlaceOrder"
      component={OrderPlacedScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
