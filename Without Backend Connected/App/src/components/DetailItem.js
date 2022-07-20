import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

export default function DetailItem({
  keyData,
  valueData,
  fontStyles,
  optionalText,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.keyTextContainer}>
        <Text style={[fontStyles]}>{keyData}</Text>
      </View>
      <View style={styles.valueTextContainer}>
        <Text style={[fontStyles]}>{valueData}</Text>
        {optionalText && (
          <Text style={styles.optionalText}>{optionalText}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  keyTextContainer: {
    flex: 1,
  },
  optionalText: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.mediumLight,
  },
  valueTextContainer: {
    alignItems: "flex-end",
  },
});
