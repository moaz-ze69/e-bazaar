import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { cartContext } from "../context/CartProvider";

export default function CartCounter({
  onPressDelete = () => {},
  customStyles,
  item,
}) {
  let [currentProductQuantity, setCurrentProductQuantity] = useState();
  let { cartItems, setCartItems } = useContext(cartContext);

  useEffect(() => {
    setCurrentProductQuantity(item.current);
  }, [item.current]);

  let updateCart = () => {
    setCartItems(
      cartItems.map((x) => {
        if (x.id === item.id && x.subID === item.subID) return item;

        return x;
      })
    );
  };

  let onPressAdd = () => {
    item.current = item.current + 1;
    setCurrentProductQuantity(item.current);
    updateCart();
  };

  let onPressMinus = () => {
    item.current = item.current - 1;
    setCurrentProductQuantity(item.current);
    updateCart();
  };

  let deleteFunction = () => {
    if (currentProductQuantity > 1) onPressMinus();
    else {
      onPressDelete();
      setCartItems(
        cartItems.filter(
          (current) => !(current.id == item.id && current.subID == item.subID)
        )
      );
    }
  };

  return (
    <View style={[styles.container, customStyles]}>
      <TouchableWithoutFeedback onPress={() => deleteFunction()}>
        <MaterialCommunityIcons
          name={currentProductQuantity > 1 ? "minus" : "delete-forever-outline"}
          size={25}
          color={colors.goGreen}
        />
      </TouchableWithoutFeedback>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.current}</Text>
      </View>
      <TouchableWithoutFeedback onPress={onPressAdd}>
        <MaterialCommunityIcons name="plus" size={18} color={colors.goGreen} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    marginHorizontal: 10,
    borderWidth: 1.5,
    borderRadius: 5,
    justifyContent: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.goGreen,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
});
