import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import DepartmentDetailScreen from "../screens/DepartmentDetailScreen";

let Stack = createNativeStackNavigator();

export default CategoriesNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Categories" component={CategoriesScreen} />
    <Stack.Screen
      name="DepartmentDetail"
      component={DepartmentDetailScreen}
      options={({ route }) => ({ title: route.params.headerTitle })}
    />
  </Stack.Navigator>
);
