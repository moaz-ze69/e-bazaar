import React from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";

import CategoryCard from "../components/CategoryCard";
import SeperatorTag from "../components/SeperatorTag";
import colors from "../config/colors";

let ramadanSpecial = [
  {
    id: 1,
    title: "Ramadan Bundles",
    source: require("../assets/GroceryScreenData/ramadan-bundle.jpg"),
  },
  {
    id: 2,
    title: "Ramadan Essentials",
    source: require("../assets/GroceryScreenData/ramadan-essentials.jpg"),
  },
];

let promotions = [
  {
    id: 1,
    title: "Unilever",
    source: require("../assets/GroceryScreenData/unilever-Logo.png"),
  },
  {
    id: 2,
    title: "Reckitt",
    source: require("../assets/GroceryScreenData/reckitt.png"),
  },
  {
    id: 3,
    title: "PepsiCo.",
    source: require("../assets/GroceryScreenData/pepsi.png"),
  },
  {
    id: 4,
    title: "Nestle",
    source: require("../assets/GroceryScreenData/nestle.png"),
  },
  {
    id: 5,
    title: "LU CBL",
    source: require("../assets/GroceryScreenData/lu.png"),
  },
];

let cosmetics = [
  {
    id: 1,
    title: "Eyes",
    source: require("../assets/GroceryScreenData/eyeliner.png"),
  },
  {
    id: 2,
    title: "Face",
    source: require("../assets/GroceryScreenData/makeup.png"),
  },
  {
    id: 3,
    title: "Lips",
    source: require("../assets/GroceryScreenData/lipstick.png"),
  },
];

let fruitsAndVegs = [
  {
    id: 1,
    title: "Fruits",
    source: require("../assets/GroceryScreenData/banana.png"),
  },
  {
    id: 2,
    title: "Vegetables",
    source: require("../assets/GroceryScreenData/tomato.png"),
  },
  {
    id: 3,
    title: "Airlift Fresh",
    source: require("../assets/GroceryScreenData/airlift-fresh.png"),
  },
];

let bavarages = [
  {
    id: 1,
    title: "Tea & Coffee",
    source: require("../assets/GroceryScreenData/tea-and-coffee.png"),
  },
  {
    id: 2,
    title: "Juices & Instant Drinks",
    source: require("../assets/GroceryScreenData/juice.png"),
  },
  {
    id: 3,
    title: "Soft Drinks",
    source: require("../assets/GroceryScreenData/soft-drinks.png"),
  },
  {
    id: 4,
    title: "Water",
    source: require("../assets/GroceryScreenData/water-bottle.png"),
  },
];

let meat = [
  {
    id: 1,
    title: "Frozen Meat",
    source: require("../assets/GroceryScreenData/frozen-meat.png"),
  },
  {
    id: 2,
    title: "Fresh Meat",
    source: require("../assets/GroceryScreenData/fresh-meat.png"),
  },
];

export default function GroceryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode={"never"}>
        <View style={styles.subContainer}>
          <SeperatorTag title="Ramadan Special" paddingHorizontal={5} />
          <FlatList
            data={ramadanSpecial}
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
        <View style={styles.subContainer}>
          <SeperatorTag title="Cosmetics" paddingHorizontal={5} />
          <FlatList
            data={cosmetics}
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
          <SeperatorTag title="Fruits and Vegetables" paddingHorizontal={5} />
          <FlatList
            data={fruitsAndVegs}
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
          <SeperatorTag title="Bavarages" paddingHorizontal={5} />
          <FlatList
            data={bavarages}
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
          <SeperatorTag title="Meat" paddingHorizontal={5} />
          <FlatList
            data={meat}
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
