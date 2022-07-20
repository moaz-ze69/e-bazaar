import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function SeperatorTag({ title, paddingHorizontal = 18, style }) {
  return (
    <View style={[styles.container, { paddingHorizontal }, style]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
