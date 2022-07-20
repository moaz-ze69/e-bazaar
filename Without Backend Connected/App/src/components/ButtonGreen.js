import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function ButtonGreen(props) {
  return (
    <Button
      mode="contained"
      style={[styles.apply, { ...props.style }]}
      onPress={props.onPress}
    >
      {props.text}
    </Button>
  );
}

const styles = StyleSheet.create({
  apply: {
    backgroundColor: "#49B83F",
    width: 100,
  },
});
