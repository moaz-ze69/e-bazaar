import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";

export default function OrderItem({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.source} />
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.row1}>
          <Text style={styles.row1Text}>{item.title}</Text>
        </View>
        <View style={styles.row2}>
          <Text style={styles.row2Text1}>Rs {item.price}</Text>
          <Text style={styles.row2Text2}> x {item.current}</Text>
          <Text style={styles.row2Text3}>Rs {item.price * item.current}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.light,
    marginHorizontal: 2,
    borderRadius: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    margin: 10,
  },
  imageContainer: {
    marginVertical: 5,
    flex: 1,
    margin: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.light,
  },
  dataContainer: {
    flex: 4,
  },
  row1: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  row1Text: {
    fontSize: 14,
    flex: 1,
    fontWeight: "bold",
  },
  row2: {
    flex: 1,
    flexDirection: "row",
  },
  row2Text1: {
    fontSize: 14,
  },
  row2Text2: {
    fontSize: 14,
    flex: 1,
    color: colors.mediumLight,
  },
  row2Text3: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 5,
  },
});
