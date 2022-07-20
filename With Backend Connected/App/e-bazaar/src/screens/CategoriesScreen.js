import React, { useContext } from "react";
import { FlatList, View, StyleSheet } from "react-native";

import CategoryDetailCard from "../components/CategoryDetailCard";
import colors from "../config/colors";
import { dataContext } from "../context/DataProvider";

export default function CategoriesScreen({ navigation }) {
  let { departments } = useContext(dataContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={departments}
        keyExtractor={(item) => item.id.toString()}
        overScrollMode={"never"}
        renderItem={({ item }) => (
          <CategoryDetailCard
            backgroundColor={item.attributes.background_color}
            icon="chevron-right"
            source={{
              uri: item.attributes.image,
            }}
            title={item.attributes.name}
            subTitle="View All"
            subTitleColor={item.attributes.subtitle_color}
            onPress={() =>
              navigation.navigate("DepartmentDetail", {
                headerTitle: item.attributes.name,
                item,
              })
            }
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
    paddingVertical: 10,
  },
});
