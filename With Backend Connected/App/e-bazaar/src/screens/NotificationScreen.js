import React, { useState } from "react";
import { FlatList, View, StyleSheet, Alert } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Icon from "../components/Icon";
import colors from "../config/colors";

const initialData = [
  {
    id: 1,
    title: "T1",
    discription: "D1",
  },
  {
    id: 2,
    title: "T2",
    discription: "D2",
  },
  {
    id: 3,
    title: "T3",
    discription: "D3",
  },
  {
    id: 4,
    title: "T4",
    discription: "D4",
  },
];

export default function NotificationScreen(props) {
  let [notifications, setNotifications] = useState(initialData);
  let [refreshing, setRefreshing] = useState(false);

  let handleDelete = (data) => {
    setNotifications(notifications.filter((d) => d.id !== data.id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(message) => message.id.toString()}
        overScrollMode={"never"}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.discription}
            IconComponent={
              <Icon name="bell-outline" backgroundColor={colors.goGreen} />
            }
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            onPress={() =>
              Alert.alert("Notification", "Message Recieved", [
                { title: "Ok", onPress: () => {} },
              ])
            }
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setNotifications(initialData);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 5,
  },
});
