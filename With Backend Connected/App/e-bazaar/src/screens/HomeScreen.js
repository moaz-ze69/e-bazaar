import React, { useEffect, useContext } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

import SwipeableCard from "../components/SwipeableCard";
import CategoryCard from "../components/CategoryCard";
import SeperatorTag from "../components/SeperatorTag";
import ItemCard from "../components/ItemCard";
import colors from "../config/colors";
import LocationHeader from "../components/LocationHeader";
import Screen from "../components/Screen";
import { locationContext } from "../context/LocationProvider";
import { dataContext } from "../context/DataProvider";
import LoadingAnimation from "../components/LoadingAnimation";

let swipers = [
  { id: 1, source: require("../assets/swiperimage1.jpg") },
  { id: 2, source: require("../assets/swiperimage2.jpg") },
  { id: 3, source: require("../assets/swiperimage3.jpg") },
  { id: 4, source: require("../assets/swiperimage4.jpg") },
  { id: 5, source: require("../assets/swiperimage5.jpg") },
  { id: 6, source: require("../assets/swiperimage5.jpg") },
];

export default function HomeScreen({ navigation }) {
  let { getUserDeviceCoordinates } = useContext(locationContext);
  let {
    departments,
    fetchDepartments,
    fetchSubCategories,
    popularItems,
    fetchPopularItems,
  } = useContext(dataContext);

  useEffect(() => {
    fetchDepartments();
    fetchPopularItems();
    getUserDeviceCoordinates();
  }, []);

  if (departments == null || popularItems == null) return <LoadingAnimation />;

  return (
    <Screen>
      <LocationHeader onPress={() => navigation.navigate("GoogleMap")} />
      <ScrollView
        overScrollMode={"never"}
        style={{ flex: 1, backgroundColor: colors.white }}
      >
        <View style={styles.swiper}>
          <SwiperFlatList
            autoplay
            autoplayLoop
            autoplayDelay={2}
            data={swipers}
            overScrollMode={"never"}
            renderItem={({ item }) => (
              <SwipeableCard
                source={item.source}
                onPress={() => {
                  alert("Promotions are currently unavailable");
                  //   fetchSubCategories("Grocery");
                  //   navigation.navigate("Listings", {
                  //     headerTitle: "Promotions",
                  //   });
                }}
              />
            )}
          />
        </View>

        <View style={styles.category}>
          <FlatList
            data={departments}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            overScrollMode={"never"}
            renderItem={({ item }) => (
              <CategoryCard
                backgroundColor={item.attributes.background_color}
                title={item.attributes.name}
                source={{
                  uri: item.attributes.image,
                }}
                onPress={() =>
                  navigation.navigate("DepartmentDetail", {
                    headerTitle: item.attributes.name,
                    item,
                  })
                }
              />
            )}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            ListHeaderComponent={() => <View style={{ width: 10 }} />}
            ListFooterComponent={() => <View style={{ width: 10 }} />}
          />
        </View>

        <SeperatorTag
          title="Popular items"
          style={{ marginVertical: 10, marginTop: 20 }}
        />
        <FlatList
          data={popularItems}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.id.toString() + index.toString()}
          overScrollMode={"never"}
          renderItem={({ item }) => (
            <ItemCard
              item={item.attributes.products.data[0]}
              color={colors.lightBlue}
              bottomData={item.attributes.products.data}
              onPress={() =>
                navigation.navigate(
                  "Item Details",
                  item.attributes.products.data[0]
                )
              }
            />
          )}
          ListHeaderComponent={() => <View style={{ width: 5 }} />}
          ListFooterComponent={() => <View style={{ width: 5 }} />}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  category: {
    marginVertical: 5,
  },
  loadingAnimationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
