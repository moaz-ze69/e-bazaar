import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";
import Button from "./Button";

export default function CartProceed({ items, total, onPress, title }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingVertical: 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "baseline",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Total</Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "bold",
              color: colors.mediumLight,
            }}
          >
            {" "}
            ({items} items)
          </Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Rs {total}</Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "bold",
              color: colors.mediumLight,
            }}
          >
            (inc. of taxes)
          </Text>
        </View>
      </View>
      <View>
        {total < 1500 ? (
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 15,
                color: colors.lightBlue,
                marginVertical: 3,
              }}
            >
              Add Products worth Rs{" "}
              {total < 600
                ? 600 - total + ", reduce delivery fee by Rs 50"
                : 1500 - total + " to get "}
            </Text>
            {total >= 600 && (
              <Text
                style={{
                  fontSize: 15,
                  color: colors.lightBlue,
                  marginVertical: 3,
                  fontWeight: "bold",
                }}
              >
                FREE delivery
              </Text>
            )}
          </View>
        ) : (
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 15,
                color: colors.lightBlue,
                marginVertical: 3,
                color: colors.danger,
              }}
            >
              Hurray!! You got{" "}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: colors.lightBlue,
                marginVertical: 3,
                color: colors.danger,
                fontWeight: "bold",
              }}
            >
              FREE delivery
            </Text>
          </View>
        )}
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <Button
          title={title}
          style={{ padding: 10, marginVertical: 5, borderRadius: 5 }}
          color="goGreen"
          onPress={onPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: colors.light,
    paddingVertical: 10,
  },
});
