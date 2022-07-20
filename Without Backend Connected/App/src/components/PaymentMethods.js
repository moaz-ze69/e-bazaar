import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

export default function PaymentMethods(props) {
  return (
    <View style={styles.container}>
      <RadioButton
        value={props.value}
        status={props.status}
        onPress={props.handler}
        color={"green"}
      />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    marginTop: 4,
    fontWeight: "bold",
    color: "#A7AEB6",
  },
});
