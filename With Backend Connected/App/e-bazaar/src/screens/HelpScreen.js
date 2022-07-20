import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItemSeperator from "../components/ListItemSeparator";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";

let menuItems = [
  {
    title: "Repot Technical Complaints",
    name: "account-settings",
  },
  {
    title: "My Tickets",
    name: "ticket",
  },
  {
    title: "FaQ's",
    name: "dots-horizontal",
  },
  {
    title: "Terms & Conditions",
    name: "clipboard-text-multiple-outline",
  },
  {
    title: "Privacy Policy",
    name: "clipboard-text-multiple-outline",
  },
  {
    title: "Return and Cancellation Policy",
    name: "clipboard-text-multiple-outline",
  },
];
export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <ListItemSeparator />
      <FlatList
        data={menuItems}
        keyExtractor={(menuItem) => menuItem.title}
        ItemSeparatorComponent={ListItemSeperator}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            IconComponent={
              <Icon
                name={item.name}
                backgroundColor={colors.white}
                iconColor={colors.goGreen}
              />
            }
            onPress={() => {}}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: colors.light,
  },
});
