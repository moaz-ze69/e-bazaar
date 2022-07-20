import * as React from "react";
import { Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";

export default function Header(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{props.heading}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    borderBottomWidth: 0.1,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    elevation: 2,
  },
  text: {
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "600",
  },
});
