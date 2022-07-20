import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/context/AuthProvider";

import CartProvider from "./src/context/CartProvider";
import LocationProvider from "./src/context/LocationProvider";
import AppNavigator from "./src/navigation/AppNavigator";
import LoginMessageScreen from "./src/screens/LoginMessageScreen";

export default function App() {
  return (
    // <LoginMessageScreen />
    <NavigationContainer>
      <AuthProvider>
        <LocationProvider>
          <CartProvider>
            <AppNavigator />
          </CartProvider>
        </LocationProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
