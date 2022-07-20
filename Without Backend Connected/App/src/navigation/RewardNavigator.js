import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import RewardWalletScreen from "../screens/RewardWalletScreen";
import RewardTransactionScreen from "../screens/RewardTransactionScreen";
import colors from "../config/colors";

let Tab = createMaterialTopTabNavigator();

export default function RewardNavigator(props) {
  return (
    <>
      <View style={styles.pointBoard}>
        <View style={styles.BoardView}>
          <Image style={styles.img} source={require("../assets/flag.png")} />
          <Text> Your Balance</Text>
        </View>
        <View style={styles.BoardView}>
          <MaterialCommunityIcons name="trophy-award" size={35} color="red" />
          <Text style={styles.pointsText}>0 Points</Text>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
          tabBarIndicatorStyle: { backgroundColor: colors.danger },
        }}
      >
        <Tab.Screen name="RewardWallet" component={RewardWalletScreen} />
        <Tab.Screen
          name="RewardTransactions"
          component={RewardTransactionScreen}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  pointBoard: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  BoardView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 40,
    width: 40,
  },
  pointsText: {
    fontSize: 30,
  },
});
