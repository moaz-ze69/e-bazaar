import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function CategoryDetailCard({
  backgroundColor = colors.light,
  title,
  subTitle,
  source,
  subTitleColor = colors.dark,
  icon,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor }]}>
        <View style={styles.textContainer}>
          <Card.Content>
            <Title style={styles.title}>{title}</Title>
          </Card.Content>
          <Card.Content style={styles.subTitleContainer}>
            <Paragraph style={[styles.subTitle, { color: subTitleColor }]}>
              {subTitle}
            </Paragraph>
            {icon && (
              <MaterialCommunityIcons
                name={icon}
                color={subTitleColor}
                style={styles.icon}
              />
            )}
          </Card.Content>
        </View>
        <Card.Cover
          style={[styles.cover, { backgroundColor }]}
          source={source}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: "#D3D4D3",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 2.63,

    elevation: 2,
  },
  cover: {
    width: 80,
    height: 90,
    alignSelf: "flex-end",
    bottom: 5,
    marginHorizontal: 15,
  },
  title: {
    marginVertical: 5,
  },
  subTitle: {
    fontFamily: "serif",
    fontSize: 11,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 8,
  },
  subTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
  },
  icon: {
    top: 1,
  },
});
