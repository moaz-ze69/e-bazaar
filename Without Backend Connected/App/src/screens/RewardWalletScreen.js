import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import RewardItem from "../components/RewardItem";
import colors from "../config/colors";

let reward = [
  {
    id: 1,
    price: "50",
    detail: "5000 more points to go",
  },
  {
    id: 2,
    price: "120",
    detail: "8000 more points to go",
  },
  {
    id: 3,
    price: "250",
    detail: "15000 more points to go",
  },
  {
    id: 4,
    price: "400",
    detail: "20000 more points to go",
  },
];
export default function RewardWalletScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={reward}
        keyExtractor={(item) => item.id}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <RewardItem price={item.price} detail={item.detail} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
