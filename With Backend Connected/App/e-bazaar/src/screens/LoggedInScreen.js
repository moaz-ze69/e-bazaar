import React, { useContext } from "react";
import { View, StyleSheet, Text, SectionList } from "react-native";

import Button from "../components/Button";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeparator";
import { authContext } from "../context/AuthProvider";

let loginMenuItems = [
  {
    title: "section 1",
    data: [
      {
        icon: "wallet-giftcard",
        name: "Refer a friend, win Rs 150",
        targetScreen: "Refer",
        iconColor: "red",
        backgroundColor: "#F9E0A2",
        style: { backgroundColor: "#F9E0A2" },
      },
    ],
  },
  {
    title: "section 2",
    data: [
      {
        icon: "wallet-giftcard",
        name: "My Rewards",
        targetScreen: "Rewards",
      },
    ],
  },
  {
    title: "section 3",
    data: [
      {
        icon: "calendar",
        name: "Orders",
        targetScreen: "Orders",
      },
      {
        icon: "wallet-outline",
        name: "Wallet",
        targetScreen: "Wallet",
      },
      {
        icon: "pin-outline",
        name: "Address",
        targetScreen: "Address",
      },
    ],
  },
  {
    title: "section 4",
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
    title: "section 5",
    data: [
      {
        icon: "face-agent",
        name: "Help & Support",
        targetScreen: "Help",
      },
      {
        icon: "account-settings",
        name: "Settings",
        targetScreen: "Setting",
      },
    ],
  },
];

export default function LoggedInScreen({
  navigation,
  user,
  callCustomSupport,
}) {
  let { setIsUserLoggedIn } = useContext(authContext);
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText1}>Hello!</Text>
          <Text style={styles.headerText2}>{user}</Text>
        </View>

        <View style={styles.listItemContainer}>
          <SectionList
            sections={loginMenuItems}
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
                onPress={() => {
                  navigation.navigate(item.targetScreen);
                }}
              />
            )}
            ItemSeparatorComponent={() => <ListItemSeperator />}
            renderSectionFooter={() => <View style={{ height: 16 }} />}
            ListFooterComponent={() => (
              <View style={{ marginTop: -16, marginBottom: 50 }}>
                <ListItem
                  title="Sign Out"
                  rightIcon={false}
                  style={{ backgroundColor: null }}
                  IconComponent={
                    <Icon
                      name="power"
                      backgroundColor={colors.light}
                      iconColor="grey"
                    />
                  }
                  onPress={() => {
                    setIsUserLoggedIn(false);
                  }}
                />
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.contactButtonContainer}>
        <Button
          title="Call to Customer Support"
          color="goGreen"
          onPress={() => {
            callCustomSupport();
          }}
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
  header: {
    marginLeft: 20,
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
});
