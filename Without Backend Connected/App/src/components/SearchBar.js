import React from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

export default function SearchBar({ onChangeText, value }) {
  return (
    <Searchbar
      onChangeText={onChangeText}
      placeholder="What are you looking for?"
      style={styles.searchbar}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  searchbar: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50,
    margin: 5,
  },
});
