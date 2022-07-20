import React from "react";
import { View, StyleSheet, Text, SectionList } from "react-native";

import Button from "../components/Button";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeparator";

let menuItems = [
  {
    title: "section 1",
    data: [
      {
        icon: "bell-outline",
        name: "Notifications",
        targetScreen: "Notifications",
      },
      {
        icon: "camera-switch-outline",
        name: "Suggest New Products",
        targetScreen: "SuggestProducts",
      },
    ],
  },
  {
    title: "section 2",
    data: [
      {
        icon: "face-agent",
        name: "Help & Support",
        targetScreen: "Help",
      },
    ],
  },
];

export default function LoginMessageScreen({ navigation, callCustomSupport }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>Welcome! Nice to meet you</Text>
          <Button
            title="Login/Signup"
            color="goGreen"
            onPress={() => navigation.navigate("Login")}
          />
        </View>

        <View style={styles.listItemContainer}>
          <SectionList
            sections={menuItems}
            keyExtractor={(item, index) => item + index}
            showsVerticalScrollIndicator={false}
            overScrollMode={"never"}
            renderItem={({ item }) => (
              <ListItem
                title={item.name}
                rightIcon={item.rightIcon}
                style={item.style}
                IconComponent={
                  <Icon
                    name={item.icon}
                    backgroundColor={item.backgroundColor}
                    iconColor={item.iconColor ? item.iconColor : colors.goGreen}
                  />
                }
                onPress={() => navigation.navigate(item.targetScreen)}
              />
            )}
            ItemSeparatorComponent={() => <ListItemSeperator />}
            renderSectionFooter={() => <View style={{ height: 16 }} />}
          />
        </View>
      </View>
      <View style={styles.contactButtonContainer}>
        <Button
          title="Call to Customer Support"
          color="goGreen"
          onPress={callCustomSupport}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 23,
    flex: 1,
    backgroundColor: colors.light,
  },
  headerText1: {
    fontSize: 17,
  },
  headerText2: {
    fontSize: 22,
    fontWeight: "bold",
  },
  listItemContainer: {
    marginVertical: 20,
    paddingBottom: 100,
  },
  loginButton: {
    marginVertical: 10,
    marginBottom: 20,
  },
  contactButtonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 3,
  },
  screen: {
    backgroundColor: colors.light,
  },
  headerText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
