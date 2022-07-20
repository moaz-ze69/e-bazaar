import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

export default function RewardTransactionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No transaction found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
});
