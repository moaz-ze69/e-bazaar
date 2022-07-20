import React, { useContext } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import Button from "../components/Button";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import { cartContext } from "../context/CartProvider";

export default function OrdersScreen({ navigation }) {
  let { recentOrderedItems } = useContext(cartContext);

  return (
    <View
      style={[
        styles.container,
        { justifyContent: !recentOrderedItems.length ? "center" : null },
      ]}
    >
      {!recentOrderedItems.length ? (
        <View style={styles.noOrderContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.noOrderText}>No Orders Yet</Text>
          </View>

          <Button
            title="Shop Now"
            color="goGreen"
            onPress={() => {
              navigation.navigate("Homes");
            }}
          />
        </View>
      ) : (
        <View>
          <FlatList
            data={recentOrderedItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ListItem
                title={`Order ` + item.id}
                subTitle={item.date}
                style={{
                  backgroundColor: colors.white,
                }}
                IconComponent={
                  <Icon
                    name="checkbox-marked-circle-outline"
                    iconColor={colors.goGreen}
                  />
                }
                onPress={() =>
                  navigation.navigate("OrderDetails", {
                    headerTitle: `Order ` + item.id,
                    item,
                  })
                }
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
  noOrderContainer: {
    alignItems: "center",
    paddingHorizontal: 40,
  },
  noOrderText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
