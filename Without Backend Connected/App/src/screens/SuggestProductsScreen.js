import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Button from "../components/Button";
import Input from "../components/Input";
import colors from "../config/colors";

export default function SuggestProductsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Brand and product name</Text>
        <Input placeholdertext={"Colgate, Nestle"} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Size (optional)</Text>
        <Input placeholdertext={"500g, 1Kg can"} />
      </View>
      <View style={styles.button}>
        <Button title="Submit" color="goGreen" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 8,
  },
  inputContainer: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },
});
