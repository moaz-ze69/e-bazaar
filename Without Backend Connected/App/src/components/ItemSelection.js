import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import PriceTag from "./PriceTag";
import SoldItemImage from "../components/SoldItemImage";
import CartButton from "./CartButton";

export default function ItemSelection({ item, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {item.available ? (
            <Image style={styles.image} source={item.source} />
          ) : (
            <SoldItemImage style={styles.image} source={item.source} />
          )}
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.quantity}>
            {item.quantity} {item.unit}
          </Text>
          <Text style={styles.price}>Rs {item.price}</Text>
          <PriceTag
            price={item.price}
            backgroundColor={colors.clay}
            borderColor={colors.camel}
          />
        </View>
        <CartButton
          isItemAvailable={item.available}
          customStyles={{ width: 110 }}
          item={item}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: null,
    resizeMode: "contain",
    height: 100,
  },
  imageContainer: {
    flex: 1,
    margin: 5,
  },
  dataContainer: {
    justifyContent: "center",
    paddingLeft: 5,
    flex: 1,
  },
  quantity: {
    color: colors.medium,
    fontSize: 15,
  },
  price: {
    marginVertical: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
});
