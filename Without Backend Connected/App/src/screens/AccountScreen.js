import React, { useContext } from "react";
import { Linking } from "react-native";

import { authContext } from "../context/AuthProvider";
import LoginMessageScreen from "./LoginMessageScreen";
import LoggedInScreen from "./LoggedInScreen";

let callCustomSupport = () => {
  Linking.openURL(
    Platform.OS === "ios" ? "telprompt:+923053323138" : "tel:+923053323138"
  );
};

export default function AccountScreen({ navigation, user = "Moaz Ahmed" }) {
  let { isUserLoggedIn } = useContext(authContext);

  return !isUserLoggedIn ? (
    <LoginMessageScreen
      callCustomSupport={callCustomSupport}
      navigation={navigation}
    />
  ) : (
    <LoggedInScreen
      user={user}
      navigation={navigation}
      callCustomSupport={callCustomSupport}
    />
  );
}
