import React from "react";
import { View, StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default function OrderPlacedScreen({ navigation }) {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          nav.reset({
            index: 0,
            routes: [{ name: "Carts" }],
          });
          navigation.navigate("Home");
        }}
        source={require("../assets/animations/done.json")}
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animation: {
    flex: 1,
  },
});
