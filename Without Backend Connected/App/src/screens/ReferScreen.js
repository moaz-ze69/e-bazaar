import React, { useContext } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import Button from "../components/Button";
import { cartContext } from "../context/CartProvider";

export default function ReferScreen({ navigation }) {
  let { recentOrderedItems } = useContext(cartContext);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/lock.png")} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {!recentOrderedItems.length > 0
            ? `Place an order to unlock your referral code`
            : `No referrals yet`}
        </Text>
      </View>

      <Button
        title={!recentOrderedItems.length > 0 ? `SHOP NOW` : `SHOP MORE`}
        color="goGreen"
        onPress={() => {
          navigation.navigate("Homes");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    flex: 1,
  },
  image: {
    height: 70,
    width: 70,
  },
  text: {
    paddingHorizontal: 20,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
