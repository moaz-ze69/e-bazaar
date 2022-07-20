import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions, Text } from "react-native";
import { Card } from "react-native-paper";

import colors from "../config/colors";

export default function CategoryCard({
  backgroundColor = colors.light,
  source,
  title,
  onPress,
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Card
        style={[styles.cardbackground, { backgroundColor: backgroundColor }]}
      >
        <Text style={styles.item_label} numberOfLines={1}>
          {title}
        </Text>
        <Card.Cover
          source={source}
          style={[styles.card_image, { backgroundColor: backgroundColor }]}
        />
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card_image: {
    resizeMode: "contain",
    height: 65,
    width: 65,
    marginTop: 5,
    marginBottom: 3,
    borderRadius: 4,
    alignSelf: "flex-end",
  },
  cardbackground: {
    paddingTop: 10,
    width: Dimensions.get("window").width / 2 - 50,
    borderColor: "#DFDFDF",
    borderWidth: 0.02,
    borderRadius: 10,
    shadowColor: "#D3D4D3",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2.63,

    elevation: 4,
  },
  item_label: {
    marginTop: 5,
    marginLeft: 18,
    fontSize: 14,
    fontWeight: "bold",
  },
});
