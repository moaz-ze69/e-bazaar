import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function PriceTag({
  price,
  borderColor,
  backgroundColor,
  customStyle,
}) {
  return (
    <View
      style={[
        styles.container,
        { borderColor: borderColor, backgroundColor: backgroundColor },
        customStyle,
      ]}
    >
      <Image
        source={require("../assets/price-tag-logo.png")}
        style={styles.tagLogo}
      />
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 22,
    backgroundColor: "red",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1.5,
    flexDirection: "row",
    paddingRight: 5,
  },
  tagLogo: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  price: {
    fontSize: 12,
  },
});
