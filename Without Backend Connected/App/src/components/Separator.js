import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

export default function Separator(props) {
  return (
    <View style={styles.separator}>
      <View style={styles.Line} />
      <View>
        <Text style={{ textAlign: "center" }}>{props.text}</Text>
      </View>
      <View style={styles.Line} />
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  Line: {
    flex: 1,
    height: 2,
    backgroundColor: colors.grey,
    alignItems: "center",
  },
});
