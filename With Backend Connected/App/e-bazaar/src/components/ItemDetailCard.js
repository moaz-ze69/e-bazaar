import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";
import CartButton from "./CartButton";
import PriceTag from "./PriceTag";

export default function ItemDetailCard({ item }) {
  return (
    <View style={styles.container}>
      <PriceTag
        customStyle={{
          position: "absolute",
          alignSelf: "flex-end",
          top: 15,
          right: 10,
        }}
        price={item.attributes.price}
        backgroundColor={colors.clay}
        borderColor={colors.camel}
      />
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.attributes.image }} style={styles.image} />
        <View style={styles.imageTagContainer}>
          <Image
            source={{ uri: item.attributes.image }}
            style={styles.imageTag}
          />
        </View>
      </View>
      <View style={styles.title}>
        <Text numberOfLines={1} style={styles.titleText}>
          {item.attributes.title}
        </Text>
      </View>
      <View style={styles.priceContainer}>
        <Text numberOfLines={1} style={styles.unitText}>
          Rs{" "}
        </Text>
        <Text numberOfLines={1} style={styles.priceText}>
          {item.attributes.price}
        </Text>
        <CartButton
          isItemAvailable={item.attributes.stock > 0 ? true : false}
          item={item}
          customStyles={{ width: 130 }}
        />
      </View>
      <View>
        <Text numberOfLines={2} style={styles.description}>
          {item.attributes.description
            ? item.attributes.description
            : `No Description Available`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 500,
    backgroundColor: colors.white,
    flex: 1
  },
  imageContainer: {
    height: 350,
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 250,
  },
  imageTag: {
    width: 50,
    height: 50,
  },
  imageTagContainer: {
    top: 20,
    borderWidth: 2,
    borderColor: colors.goGreen,
    padding: 8,
    borderRadius: 5,
  },
  title: {
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 19,
    fontWeight: "bold",
  },
  priceContainer: {
    height: 40,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  unitText: {
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "serif",
    top: 3,
  },
  priceText: {
    fontSize: 19,
    fontWeight: "bold",
    fontFamily: "serif",
    flex: 1,
  },
  cartButton: {
    backgroundColor: colors.goGreen,
  },
  description: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
