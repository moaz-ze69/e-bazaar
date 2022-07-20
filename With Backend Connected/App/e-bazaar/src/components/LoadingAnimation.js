import React from "react";
import { View, StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";

export default function LoadingAnimation(props) {
  return (
    <View style={styles.loadingAnimationContainer}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loading.json")}
        style={{ width: 60, height: 60 }}
      />
      <Text style={styles.text}>Fetching Data...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingAnimationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "serif",
  },
});
