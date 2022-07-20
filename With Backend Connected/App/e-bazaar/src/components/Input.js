import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input(props) {
  const [text, onChangeText] = useState("");
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholdertext}
      defaultValue={props.defaultValue}
      onChangeText={onChangeText}
      // value={text}
      keyboardType={props.keyboardType}
      editable={props.editable}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey",
  },
});
