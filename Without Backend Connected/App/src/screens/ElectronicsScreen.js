import React from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";

import CategoryCard from "../components/CategoryCard";
import SeperatorTag from "../components/SeperatorTag";
import colors from "../config/colors";

let mobilePhones = [
  {
    id: 1,
    title: "Earphones",
    source: require("../assets/ElectronicsScreenData/earphones.png"),
  },
  {
    id: 2,
    title: "Smart Watches",
    source: require("../assets/ElectronicsScreenData/smart-watches.png"),
  },
  {
    id: 3,
    title: "Mobile Phone",
    source: require("../assets/ElectronicsScreenData/mobile.png"),
  },
];

let laptopsAndTabs = [
  {
    id: 1,
    title: "Laptops",
    source: require("../assets/ElectronicsScreenData/laptop.png"),
  },
  {
    id: 2,
    title: "Tablets",
    source: require("../assets/ElectronicsScreenData/tablet.png"),
  },
  {
    id: 3,
    title: "Gaming",
    source: require("../assets/ElectronicsScreenData/gaming.png"),
  },
];

let promotions = [
  {
    id: 1,
    title: "Electronics",
    source: require("../assets/ElectronicsScreenData/electronics.png"),
  },
];

export default function ElectronicsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode={"never"}>
        <View style={styles.subContainer}>
          <SeperatorTag title="Mobile Phones" paddingHorizontal={5} />
          <FlatList
            data={mobilePhones}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            overScrollMode={"never"}
            renderItem={({ item }) => (
              <CategoryCard
                title={item.title}
                source={item.source}
                backgroundColor={colors.white}
                onPress={() => {
                  navigation.navigate("Promotions");
                }}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          />
        </View>
        <View style={styles.subContainer}>
          <SeperatorTag title="Laptops & Tablets" paddingHorizontal={5} />
          <FlatList
            data={laptopsAndTabs}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            overScrollMode={"never"}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CategoryCard
                title={item.title}
                source={item.source}
                backgroundColor={colors.white}
                onPress={() => {
                  navigation.navigate("Promotions");
                }}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          />
        </View>
        <View style={styles.subContainer}>
          <SeperatorTag title="Promotions" paddingHorizontal={5} />
          <FlatList
            data={promotions}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            overScrollMode={"never"}
            renderItem={({ item }) => (
              <CategoryCard
                title={item.title}
                source={item.source}
                backgroundColor={colors.white}
                onPress={() => {
                  navigation.navigate("Promotions");
                }}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 10,
  },
  subContainer: {
    marginVertical: 10,
    marginBottom: 20,
  },
});
