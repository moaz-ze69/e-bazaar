import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SettingItem(props) {
  return (
    <View style={styles.componentSize}>
      <View style={styles.leftFlex}>{props.IconComponent}</View>
      <View style={styles.rightFlex}>
        <View style={styles.rightbothFlex}>
          <Text style={styles.entries}>{props.userEntry}</Text>
        </View>
        <View style={styles.rightbothFlex}>
          <Text style={styles.userData}>{props.userData}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
  componentSize: {
    flexDirection: "row",
    height: 50,
  },
  leftFlex: {
    flex: 0.18,
    justifyContent: "center",
    alignItems: "center",
  },
  rightFlex: {
    flexDirection: "column",
    flex: 0.8,
  },
  rightbothFlex: {
    flex: 0.5,
    justifyContent: "center",
  },
  entries: {
    color: "silver",
  },
  userData: {
    color: "black",
  },
});
