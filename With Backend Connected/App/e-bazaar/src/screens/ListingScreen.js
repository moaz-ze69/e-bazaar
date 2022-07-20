import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Text,
} from "react-native";

import Brand from "../components/promotion/Brand";
import Product from "../components/promotion/Product";
import colors from "../config/colors";
import { dataContext } from "../context/DataProvider";
import LoadingAnimation from "../components/LoadingAnimation";
import ItemCard from "../components/ItemCard";
import ListFooterComponent from "../components/ListFooterComponent";

export default function ListingScreen({ navigation, route }) {
  let item = route.params.item;

  let [selectedSubCategory, setSelectedSubCategory] = useState();
  let [currentSubCategory, setCurrentSubCategory] = useState();
  let [isSubCategorySelected, setIsSubCategorySelected] = useState(false);
  let [selectedItemCategory, setSelectedItemCategory] = useState();
  let [isItemCategorySelected, setIsItemCategorySelected] = useState(false);
  let [isItemCategoryFetched, setIsItemCategoryFetched] = useState(false);
  let [isProductsFetched, setIsProductsFetched] = useState(false);

  let {
    subCategories,
    itemCategories,
    setItemCategories,
    fetchItemCategories,
    products,
    setProducts,
    fetchProducts,
  } = useContext(dataContext);

  useEffect(() => {
    if (itemCategories) {
      setSelectedItemCategory(itemCategories[0]);
      setProducts(null);
      setIsProductsFetched(false);
    }
  }, [itemCategories]);

  if (subCategories == null) return <LoadingAnimation />;

  let filteredSubCategories = subCategories.filter(
    (element) =>
      element.attributes.general_category.data.id ==
      item.attributes.general_category.data.id
  );

  if (!isSubCategorySelected) {
    setCurrentSubCategory(
      filteredSubCategories.filter((current) => current.id == item.id)
    );
    if (currentSubCategory == null) return <LoadingAnimation />;
    setSelectedSubCategory(currentSubCategory[0]);
    setIsSubCategorySelected(true);
  }

  if (selectedSubCategory == null) return <LoadingAnimation />;

  if (!isItemCategoryFetched) {
    fetchItemCategories(selectedSubCategory.attributes.name);
    setIsItemCategoryFetched(true);
  }

  if (itemCategories == null) return <LoadingAnimation />;

  if (!isItemCategorySelected) {
    setSelectedItemCategory(itemCategories[0]);
    setIsProductsFetched(false);
    setIsItemCategorySelected(true);
  }

  if (selectedItemCategory == null) return <LoadingAnimation />;

  if (!isProductsFetched) {
    fetchProducts(selectedItemCategory.attributes.name);
    setIsProductsFetched(true);
  }

  if (products == null) return <LoadingAnimation />;

  return (
    <View>
      <View style={styles.subCategoriesContainer}>
        <FlatList
          data={filteredSubCategories}
          initialScrollIndex={
            filteredSubCategories.findIndex(
              (item) => item == selectedSubCategory
            ) - 1
          }
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          overScrollMode={"never"}
          renderItem={({ item }) => (
            <Brand
              title={item.attributes.name}
              active={item === selectedSubCategory ? true : false}
              onPress={() => {
                setSelectedSubCategory(item);
                setItemCategories(null);
                setProducts(null);
                setIsProductsFetched(false);
                setIsItemCategoryFetched(false);
                setIsItemCategorySelected(false);
              }}
            />
          )}
        />
      </View>

      <View>
        <FlatList
          data={itemCategories}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          overScrollMode={"never"}
          renderItem={({ item }) => (
            <Product
              title={item.attributes.name}
              active={item == selectedItemCategory ? true : false}
              onPress={() => {
                setSelectedItemCategory(item);
                setProducts(null);
                setIsProductsFetched(false);
              }}
            />
          )}
        />
      </View>

      <View>
        {!products.length > 0 ? (
          <View style={styles.noItemAvailableContainer}>
            <Image source={require("../assets/empty-cart.png")} />
            <Text style={styles.noItemAvailableText}>
              These Products are currently unavailable.
            </Text>
          </View>
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            ListFooterComponent={<ListFooterComponent />}
            overScrollMode={"never"}
            renderItem={({ item }) => (
              <ItemCard
                item={item}
                color={colors.lightBlue}
                onPress={() => navigation.navigate("Item Details", item)}
                style={{
                  width: Dimensions.get("window").width / 2,
                  marginHorizontal: 0,
                  margin: 0,
                }}
              />
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    backgroundColor: "yellow",
    borderColor: colors.goGreen,
    alignItems: "center",
    justifyContent: "center",
  },
  subCategoriesContainer: {
    paddingHorizontal: 5,
  },
  noItemAvailableContainer: {
    alignItems: "center",
    paddingHorizontal: 60,
    marginTop: Dimensions.get("window").width / 2 - 50,
  },
  noItemAvailableText: {
    padding: 20,
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
  },
});
