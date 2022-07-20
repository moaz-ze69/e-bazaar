import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

import Button from "../components/Button";
import Screen from "../components/Screen";
import CartItem from "../components/CartItem";
import colors from "../config/colors";
import CartProceed from "../components/CartProceed";
import { cartContext } from "../context/CartProvider";
import { authContext } from "../context/AuthProvider";

export default function CartScreen({ navigation }) {
  let [totalPrice, setTotalPrice] = useState(0);
  let { cartItems } = useContext(cartContext);
  let { isUserLoggedIn } = useContext(authContext);

  useEffect(() => {
    let price = 0;
    cartItems.forEach((x) => {
      price += x.current * x.price;
    });
    setTotalPrice(price);
  }, [cartItems]);

  return (
    <Screen>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Cart</Text>
        {cartItems.length > 0 && <Text>{cartItems.length} items</Text>}
      </View>
      {cartItems.length === 0 ? (
        <View style={styles.container}>
          <Image source={require("../assets/empty-cart.png")} />
          <Text style={{ padding: 20, fontSize: 16 }}>
            No item in your cart
          </Text>

          <Button
            title="Start Shoping"
            color="goGreen"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <FlatList
              data={cartItems}
              keyExtractor={(item) =>
                item.id.toString() + item.subID.toString()
              }
              overScrollMode={"never"}
              renderItem={({ item }) => <CartItem item={item} />}
            />
          </View>
          <CartProceed
            items={cartItems.length}
            total={totalPrice}
            title={isUserLoggedIn ? "Proceed to checkout" : "Login to Proceed"}
            onPress={() =>
              isUserLoggedIn
                ? navigation.navigate("Delivery", {
                    totalPrice,
                  })
                : navigation.navigate("Account", { screen: "Login" })
            }
          />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 60,
    flex: 1,
  },
  header: {
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    borderColor: colors.light,
  },
  headerText: {
    fontSize: 22,
    flex: 1,
  },
});
