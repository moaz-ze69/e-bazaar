import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import CartCounter from "./CartCounter";
import { dataContext } from "../context/DataProvider";
import { cartContext } from "../context/CartProvider";

export default function CartButton({ isItemAvailable, customStyles, item }) {
  let [isAddedToCart, setIsAddedToCart] = useState(false);
  // let { cartItems, setCartItems, setCart } = useContext(dataContext);
  let { cartItems, setCartItems } = useContext(cartContext);

  useEffect(() => {
    setIsAddedToCart(
      cartItems.find((current) => current === item) ? true : false
    );
  }, [cartItems]);

  return (
    <View>
      {!isItemAvailable ? (
        <TouchableOpacity
          style={[
            styles.cartButton,
            { backgroundColor: colors.lightBlue },
            customStyles,
          ]}
          onPress={() => alert("You will be notified")}
        >
          <Text style={styles.text}>Notify Me</Text>
        </TouchableOpacity>
      ) : !isAddedToCart ? (
        <TouchableOpacity
          style={[
            styles.cartButton,
            { backgroundColor: colors.goGreen },
            customStyles,
          ]}
          onPress={() => {
            // setCart(item);
            setIsAddedToCart(true);
            setCartItems(cartItems.concat([item]));
          }}
        >
          <Text style={styles.text}>Add to Cart</Text>
        </TouchableOpacity>
      ) : (
        <CartCounter
          onPressDelete={() => {
            setIsAddedToCart(false);
          }}
          customStyles={customStyles}
          item={item}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cartButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    height: 30,
  },

  text: {
    fontSize: 13,
    color: colors.white,
  },
});
