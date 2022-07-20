import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../../config/colors";

export default function Brand({ title, active = false, onPress }) {
  let isActive = active;
  
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { borderBottomWidth: isActive ? 2 : 0 }]}>
        <Text style={{ color: !isActive ? colors.mediumLight : colors.black }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    borderColor: colors.goGreen,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    marginHorizontal: 10,
  },
});
