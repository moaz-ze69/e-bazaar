import React, { useContext } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../config/colors";
import CartCounter from "./CartCounter";
import { cartContext } from "../context/CartProvider";

export default function CartItem({ item }) {
  let { cartItems, setCartItems } = useContext(cartContext);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.source} />
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.row1}>
          <Text style={styles.row1Text}>{item.title}</Text>
          <TouchableOpacity
            onPress={() => {
              setCartItems(
                cartItems.filter(
                  (current) =>
                    !(current.id == item.id && current.subID == item.subID)
                )
              );
              item.current = 1;
            }}
          >
            <Entypo name="cross" size={22} color={colors.medium} />
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <Text style={styles.row2Text}>
            Rs {item.price} x {item.current}
          </Text>
        </View>
        <View style={styles.row3}>
          <Text style={styles.row3Text}>Rs {item.price * item.current}</Text>
          <CartCounter
            customStyles={{ width: 100, height: 28, paddingHorizontal: 5 }}
            item={item}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 105,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.light,
    marginHorizontal: 2,
    borderRadius: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    margin: 10,
  },
  imageContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.light,
  },
  dataContainer: {
    flex: 4,
  },
  row1: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  row1Text: {
    fontSize: 14,
    flex: 1,
    fontWeight: "bold",
  },
  row2: {
    flex: 1,
    justifyContent: "center",
  },
  row2Text: {
    fontSize: 14,
    fontWeight: "bold",
  },
  row3: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  row3Text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
