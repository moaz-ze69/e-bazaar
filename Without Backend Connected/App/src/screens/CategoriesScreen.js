import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import CategoryDetailCard from "../components/CategoryDetailCard";
import colors from "../config/colors";

let categories = [
  {
    id: 1,
    title: "Grocery",
    backgroundColor: "#EDF7ED",
    subTitleColor: "#7EBF7D",
    source: require("../assets/grocery.png"),
    targetScreen: "Grocery",
  },
  {
    id: 2,
    title: "Pharmacy",
    backgroundColor: "#FFF3E3",
    subTitleColor: "#EB9B49",
    source: require("../assets/pharmacy.png"),
    targetScreen: "Pharmacy",
  },
  {
    id: 3,
    title: "Electronics",
    backgroundColor: "#EBF3FC",
    subTitleColor: "#7EBF7D",
    source: require("../assets/electronics.png"),
    targetScreen: "Electronics",
  },
];

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        overScrollMode={"never"}
        renderItem={({ item }) => (
          <CategoryDetailCard
            backgroundColor={item.backgroundColor}
            icon="chevron-right"
            source={item.source}
            title={item.title}
            subTitle="View All"
            subTitleColor={item.subTitleColor}
            onPress={() => navigation.navigate(item.targetScreen)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: colors.white, 
    flex: 1,
    paddingVertical:10},
});
