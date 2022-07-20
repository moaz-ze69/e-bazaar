import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import DetailItem from "../components/DetailItem";
import OrderItem from "../components/OrderItem";
import colors from "../config/colors";

export default function OrderDetailsScreen({ route }) {
  let data = route.params.item;

  return (
    <View style={styles.container}>
      <View style={styles.ordersContainer}>
        <FlatList
          data={data.orderedItems}
          keyExtractor={(item, index) => item.id.toString() + index.toString()}
          renderItem={({ item }) => <OrderItem item={item} />}
          overScrollMode="never"
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                width: "100%",
                backgroundColor: colors.light,
              }}
            />
          )}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.headerText}>Payment Details</Text>
        <DetailItem
          keyData="Payemnt Method"
          valueData="Cash On Delivery"
          style={{ borderBottomWidth: 1, borderColor: colors.light }}
        />
        <DetailItem
          keyData="Sub Total"
          valueData={`Rs ` + data.total}
          style={{ borderBottomWidth: 1, borderColor: colors.light }}
        />
        <DetailItem
          keyData="Delivery Charges"
          valueData={`Rs ` + data.delivery}
          style={{ borderBottomWidth: 1, borderColor: colors.light }}
        />
        <DetailItem
          keyData="Paid via Airlift Wallet"
          valueData="- Rs 0"
          style={{ borderBottomWidth: 1, borderColor: colors.light }}
        />
        <DetailItem
          keyData="Total Bill"
          valueData={`Rs ` + (data.total + data.delivery)}
          fontStyles={{ fontWeight: "bold" }}
          optionalText="(inc. of taxes)"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  ordersContainer: { flex: 1.3 },
  detailsContainer: {
    flex: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  headerText: {
    color: colors.mediumLight,
    fontSize: 12,
    fontWeight: "bold",
  },
});
