import React from "react";
import { StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";

export default function SwipeableCard({ source, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={source} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    marginHorizontal: 5,
    width: Dimensions.get("window").width - 10,
    height: 150,
    resizeMode: "contain",
    borderRadius: 4,
    marginBottom: 20,
  },
});
