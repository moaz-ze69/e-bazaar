import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";

import SettingItem from "../components/SettingItem";
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";

let data = [
  {
    id: 1,
    icon: "account-outline",
    userEntry: "Full Name",
    userData: "Moaz Ahmed",
  },
  {
    id: 2,
    icon: "cellphone",
    userEntry: "Mobile Number",
    userData: "+923053323138",
  },
  {
    id: 3,
    icon: "email-outline",
    userEntry: "Email",
    userData: "i.moaz.ze69@gmail.com",
  },
  {
    id: 4,
    icon: "calendar-outline",
    userEntry: "Date of Birth",
    userData: "01/01/2005",
  },
  {
    id: 5,
    icon: "account-multiple-outline",
    userEntry: "Gender",
    userData: "Male",
  },
];

export default function SettingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.Editbuttons}>
        <Text style={{ color: colors.black }}>Profile</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("EditProfile", { data });
          }}
        >
          <Text style={{ color: "#0070CB" }}>EDIT</Text>
        </TouchableWithoutFeedback>
      </View>

      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.distance}>
              <SettingItem
                IconComponent={
                  <Icon
                    name={item.icon}
                    backgroundColor={colors.white}
                    iconColor={"silver"}
                  />
                }
                userEntry={item.userEntry}
                userData={item.userData}
              />
            </View>
          )}
        />
      </View>
      <ListItemSeparator />
      <View style={styles.changePassword}>
        <SettingItem
          IconComponent={
            <Icon
              name={"lock-outline"}
              backgroundColor={colors.white}
              iconColor={"silver"}
            />
          }
          userEntry={"Password"}
          userData={"Change Password"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  distance: {
    paddingBottom: 25,
  },
  changePassword: {
    paddingBottom: 25,
    paddingTop: 25,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: colors.white,
  },
  Editbuttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingBottom: 20,
  },
});
