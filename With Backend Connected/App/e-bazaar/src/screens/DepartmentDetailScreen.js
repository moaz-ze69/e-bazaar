import React, { useEffect, useContext } from "react";
import { StyleSheet, ScrollView } from "react-native";

import GeneralCategoryComponent from "../components/GeneralCategoryComponent";
import colors from "../config/colors";
import { dataContext } from "../context/DataProvider";
import LoadingAnimation from "../components/LoadingAnimation";

export default function GroceryScreen({ navigation, route }) {
  let department = route.params.item.attributes.name;

  let {
    subCategories,
    setSubCategories,
    fetchSubCategories,
    generalCategories,
    fetchGeneralCategories,
  } = useContext(dataContext);

  useEffect(() => {
    setSubCategories(null);
    fetchGeneralCategories(department);
    fetchSubCategories(department);
  }, []);

  if (subCategories == null || generalCategories == null)
    return <LoadingAnimation />;

  let data = [];

  for (
    let index = generalCategories[0].id;
    index <= generalCategories.length + generalCategories[0].id - 1;
    index++
  ) {
    data.push(
      <GeneralCategoryComponent
        key={index}
        data={subCategories}
        subCategoryClassifier={index}
        navigation={navigation}
      />
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      overScrollMode={"never"}
      style={styles.container}
    >
      {data}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 10,
  },
  loadingAnimationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
