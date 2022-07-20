import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/context/AuthProvider";

import CartProvider from "./src/context/CartProvider";
import DataProvider from "./src/context/DataProvider";
import LocationProvider from "./src/context/LocationProvider";
import AppNavigator from "./src/navigation/AppNavigator";
import PromotionScreen from "./src/screens/ListingScreen";
import Screen from "./src/components/Screen";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <LocationProvider>
          <DataProvider>
            <CartProvider>
              <AppNavigator />
              {/* <Screen>
                <PromotionScreen />
              </Screen> */}
            </CartProvider>
          </DataProvider>
        </LocationProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
