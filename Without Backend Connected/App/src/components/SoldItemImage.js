import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";

export default function SoldItemImage({ source, style }) {
  return (
    <View>
      <Image style={[styles.image, style]} source={source} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Sold Out</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    opacity: 0.2,
  },
  text: {
    fontWeight: "bold",
    color: colors.white,
  },
  textContainer: {
    backgroundColor: colors.medium,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    position: "absolute",
    top: 45,
    left: 5,
  },
});
