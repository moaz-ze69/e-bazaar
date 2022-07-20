import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function RewardItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.price}>Rs {props.price}</Text>
        <Text numberOfLines={2} style={styles.detailReward}>
          {props.detail}
        </Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="lock" size={18} color="grey" />
          <Text style={styles.button_text}>Locked</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    flex: 0.16,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 5,
  },
  button: {
    borderWidth: 1,
    height: 35,
    flexDirection: "row",
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 5,
  },
  button_text: {
    color: "grey",
  },
  leftContainer: {
    flex: 0.5,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  line: {
    backgroundColor: "#C89E31",
    height: 3,

    borderRadius: 10,
  },
  rightContainer: {
    flex: 0.5,
    justifyContent: "flex-end",
    marginVertical: 17,
  },
  price: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: "bold",
  },
  detailReward: {
    color: "grey",
    fontSize: 14,
    marginBottom: 10,
  },
});
