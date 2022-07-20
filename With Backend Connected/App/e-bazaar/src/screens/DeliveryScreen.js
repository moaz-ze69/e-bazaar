import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import PaymentMethods from "../components/PaymentMethods";
import Prices from "../components/Prices";
import ButtonGreen from "../components/ButtonGreen";
import ScheduleInput from "../components/ScheduleInput";
import colors from "../config/colors";
import MyButton from "../components/Button";
import { cartContext } from "../context/CartProvider";

export default function DeliveryScreen({ route, navigation }) {
  let [checked, setChecked] = useState("first");

  let { cartItems, setCartItems, recentOrderedItems, setRecentOrderedItems } =
    useContext(cartContext);

  let totalPrice = route.params.totalPrice;
  let expressDelivery = totalPrice > 1500 ? 0 : totalPrice < 600 ? 69 : 19;

  return (
    <ScrollView overScrollMode="never">
      <View style={styles.mainContainer}>
        <Text style={styles.text}>Select Delivery Schedule</Text>
        <View style={styles.buttonView}>
          <Button style={styles.button} mode="outlined" color="#D5DFE7">
            Express Delivery
          </Button>
          <Button style={styles.button} mode="outlined" color="#D5DFE7">
            Schedule Delivery
          </Button>
        </View>
        <View>
          <Text style={styles.text}>Promocode</Text>
          <View style={styles.inputView}>
            <ScheduleInput style={styles.input} text="Enter Code" />
            <ButtonGreen
              text="Apply"
              onPress={() => alert("Promo is Invalid")}
            />
          </View>
        </View>
        <View>
          <Text style={styles.text}>Bill Summary</Text>
          <Prices text="Product Total" price={totalPrice} />
          <Prices text="Express Delivery" price={expressDelivery} />
          <Prices text="Airlift Wallet(0)" price="0" />
          <Prices
            text="Total Bill"
            price={totalPrice + expressDelivery}
            style={{ fontWeight: "bold", fontSize: 22 }}
            style1={{ fontWeight: "bold", fontSize: 22 }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text
              style={{ color: "#CD3D4F", fontSize: 20, fontWeight: "bold" }}
            >
              Airlift Rewards
            </Text>
            <View>
              <Text
                style={{
                  color: "#777777",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginLeft: 28,
                }}
              >
                you will earn
              </Text>
              <Text
                style={{ color: "#3B7DD6", fontSize: 24, fontWeight: "bold" }}
              >
                235 points
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.text}>Payment Information</Text>
            <View>
              <PaymentMethods
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                handler={() => setChecked("first")}
                text="cash on delivery"
              />
              <PaymentMethods
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                handler={() => setChecked("second")}
                text="credit/debit card"
              />
            </View>
          </View>
          <View>
            <Text style={styles.text}>Additional Information</Text>
            <ScheduleInput text="Delivery Instructions" />
            <MyButton
              color="goGreen"
              title="Place Order"
              onPress={() => {
                let today = new Date();
                setRecentOrderedItems(
                  recentOrderedItems.concat([
                    {
                      id: recentOrderedItems.length + 1,
                      date:
                        today.getDate().toString().padStart(2, "0") +
                        "-" +
                        (today.getMonth() + 1).toString().padStart(2, "0") +
                        "-" +
                        today.getFullYear() +
                        "  " +
                        today.getHours().toString().padStart(2, "0") +
                        ":" +
                        today.getMinutes().toString().padStart(2, "0") +
                        ":" +
                        today.getSeconds().toString().padStart(2, "0"),
                      orderedItems: cartItems,
                      total: totalPrice,
                      delivery: expressDelivery,
                    },
                  ])
                );
                navigation.replace("PlaceOrder");
                setCartItems([]);
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
    color: "#49B83F",
    fontWeight: "bold",
  },
  buttonView: {
    flexDirection: "row",
  },
  button: {
    borderRadius: 10,
    color: "#D5DFE7",
  },
  input: {
    backgroundColor: "white",
  },
  apply: {
    backgroundColor: "#49B83F",
    width: 100,
  },
  inputView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#F5F5F5",
    marginTop: 5,
    paddingRight: 10,
  },
});
