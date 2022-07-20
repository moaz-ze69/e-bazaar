import React, { useContext, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import colors from "../config/colors";
import { locationContext } from "../context/LocationProvider";

export default function LocationHeader({ onPress }) {
  let { userCurrentAddress } = useContext(locationContext);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.loaction_icon}>
        <Icon name="enviromento" size={25} color={colors.goGreen} />
      </View>
      <View style={styles.location_detailView}>
        <Text style={{ fontWeight: "bold" }}>Deliver to</Text>
        <View style={{ flexDirection: "row" }}>
          <Text numberOfLines={1} style={{ color: colors.goGreen }}>
            {userCurrentAddress}
          </Text>
        </View>
      </View>
      <View style={styles.loaction_icon}>
        <Icon name="down" size={15} color={colors.goGreen} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.09,
    flexDirection: "row",
    backgroundColor: colors.white,
    borderBottomWidth: 1.5,
    borderColor: colors.light,
  },
  loaction_icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  location_detailView: {
    flex: 9,
    justifyContent: "center",
    paddingHorizontal: 3,
  },
});
