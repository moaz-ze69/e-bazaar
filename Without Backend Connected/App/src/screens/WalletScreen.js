import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Prices from "../components/Prices";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";

let userWallet = {
  country: "Pakistan",
  price: 0,
  countryFlag: require("../assets/flag.png"),
  card: null,
  promotionalCredits: 0,
  appCredits: 0,
  transactions: 0,
};

export default function WalletScreen() {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <View style={styles.view1}>
          <Image style={styles.image} source={userWallet.countryFlag} />
          <Text>{userWallet.country}</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 20 }}>Rs {userWallet.price}</Text>
          <Prices
            text={"Promotional Credits"}
            price={userWallet.promotionalCredits}
          />
          <ListItemSeparator />
          <Prices text={"AirLift Credits"} price={userWallet.appCredits} />
        </View>
      </View>

      {!userWallet.card && (
        <View style={styles.container2}>
          <View style={styles.view1}>
            <Text style={styles.text}>Cards</Text>
          </View>
          <View style={styles.view1}>
            <MaterialCommunityIcons name="wallet-outline" size={30} />
            <Text style={[styles.text, { marginLeft: 10 }]}>
              Add a card to enjoy a seamleess payments experience
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.addCard}>Add Card </Text>
          </TouchableOpacity>
        </View>
      )}
      {userWallet.transactions == 0 && (
        <View style={styles.container3}>
          <View style={styles.view1}>
            <Text style={styles.text}>Transactions</Text>
          </View>
          <View
            style={{
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>You have no Transactions</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: colors.light,
  },
  container: {
    marginTop: 25,
    borderRadius: 3,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    flex: 0.3,
    backgroundColor: colors.white,
  },
  container2: {
    marginTop: 30,
    paddingTop: 5,
    borderRadius: 3,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    flex: 0.3,
    backgroundColor: colors.white,
  },
  container3: {
    marginTop: 10,
    borderRadius: 3,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    flex: 0.2,
    backgroundColor: "white",
  },
  image: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
  view1: {
    paddingTop: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "lightgrey",
    fontSize: 14,
  },
  addCard: {
    paddingVertical: 25,
    color: "green",
  },
});
