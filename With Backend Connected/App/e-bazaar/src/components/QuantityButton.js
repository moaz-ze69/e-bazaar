import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function QuantityButton({ color, icon, size, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.quantity, { borderColor: color }]}>
        <Text style={[styles.quantityText, { color }]} numberOfLines={1}>
          {size}
        </Text>
        {icon && <MaterialCommunityIcons name={icon} size={22} color={color} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  quantity: {
    height: 30,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    paddingHorizontal: 7,
    flexDirection: "row",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 12,
    flex: 1,
  },
});
