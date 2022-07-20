import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import CategoryCard from "./CategoryCard";
import SeperatorTag from "./SeperatorTag";
import colors from "../config/colors";

export default function GeneralCategoryComponent({
  data,
  subCategoryClassifier,
  navigation,
}) {
  let [items, setItems] = useState(
    data.filter(
      (element) =>
        element.attributes.general_category.data.id == subCategoryClassifier
    )
  );

  return (
    <View style={styles.subContainer}>
      <SeperatorTag
        title={items[0].attributes.general_category.data.attributes.name}
        paddingHorizontal={5}
      />
      <FlatList
        data={items}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        overScrollMode={"never"}
        renderItem={({ item }) => (
          <CategoryCard
            title={item.attributes.name}
            source={{ uri: item.attributes.image }}
            backgroundColor={colors.white}
            onPress={() => {
              navigation.navigate("Listings", {
                headerTitle:
                  item.attributes.general_category.data.attributes.name,
                item,
              });
            }}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    marginVertical: 10,
    marginBottom: 20,
  },
});
