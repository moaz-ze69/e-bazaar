import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Shadow } from "react-native-shadow-2";

import colors from "../config/colors";

export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);

  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "49%",
      }}
    >
      {data.map((item) => (
        <Shadow
          style={styles.selected}
          distance={2}
          startColor={"#e3e3e3"}
          sides="bottom"
          corners={["bottomLeft", "bottomRight"]}
        >
          <Pressable
            style={[
              styles.container,
              item.value === userOption ? styles.selected : null,
            ]}
            onPress={() => {
              selectHandler(item.value);
            }}
          >
            <Text
              style={[
                styles.option,
                item.value === userOption ? styles.selected : null,
              ]}
            >
              {" "}
              {item.value}
            </Text>
          </Pressable>
        </Shadow>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.light,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  option: {
    fontSize: 16,
    color: "black",
  },
  selected: {
    borderRadius: 5,
    color: colors.goGreen,
  },
});
