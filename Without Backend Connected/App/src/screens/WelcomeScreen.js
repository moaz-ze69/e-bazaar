import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button } from "react-native-paper";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <Image
        style={styles.logo}
        source={require("../assets/airlift-logo.png")}
      />
      <Button title="Login" style={{ height: 20, width: 100 }} />
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          color="goGreen"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
        <AppButton
          title="Register"
          color="goGreen"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.carrot,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    position: "absolute",
    top: 150,
    width: "75%",
    height: 130,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
