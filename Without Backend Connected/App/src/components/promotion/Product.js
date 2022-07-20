import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../../config/colors";

export default function Product({ onPress, title, active = false }) {
  let isActive = active;

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isActive ? colors.fadeBlue : colors.grey,
            borderWidth: isActive ? 1 : 0,
          },
        ]}
      >
        <Text style={{ color: isActive ? colors.lightBlue : colors.medium }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    borderColor: colors.lightBlue,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
});
