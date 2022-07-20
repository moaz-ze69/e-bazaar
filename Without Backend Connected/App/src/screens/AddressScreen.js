import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function AddressScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Address found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4AB448",
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
});
