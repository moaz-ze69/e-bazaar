import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Prices(props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.text, props.style]}>{props.text}</Text>
        <Text style={[styles.text, props.style1]}>Rs {props.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    marginVertical: 10
  },
  text: {
    fontSize: 13,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
