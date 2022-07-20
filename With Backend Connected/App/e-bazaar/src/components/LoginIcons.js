import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function LoginIcons(props) {
  return (
    <View style={styles.separator}>
      <View style={styles.Icon1}>
        <TouchableOpacity style={styles.IconView}>
          <MaterialCommunityIcons name="facebook" size={35} color={"blue"} />
        </TouchableOpacity>
      </View>
      <View style={styles.Icon2}>
        <TouchableOpacity style={styles.IconView}>
          <MaterialCommunityIcons name="google" size={35} color={"red"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  Icon1: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 12.5,
  },
  Icon2: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 12.5,
  },
  IconView: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.grey,
    padding: 5,
  },
});
