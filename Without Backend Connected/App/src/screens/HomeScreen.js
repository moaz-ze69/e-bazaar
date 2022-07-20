import React, { useEffect, useContext } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import LottieView from "lottie-react-native";

import SwipeableCard from "../components/SwipeableCard";
import CategoryCard from "../components/CategoryCard";
import SeperatorTag from "../components/SeperatorTag";
import ItemCard from "../components/ItemCard";
import colors from "../config/colors";
import LocationHeader from "../components/LocationHeader";
import Screen from "../components/Screen";
import { locationContext } from "../context/LocationProvider";

let swipers = [
  { id: 1, source: require("../assets/swiperimage1.jpg") },
  { id: 2, source: require("../assets/swiperimage2.jpg") },
  { id: 3, source: require("../assets/swiperimage3.jpg") },
  { id: 4, source: require("../assets/swiperimage4.jpg") },
  { id: 5, source: require("../assets/swiperimage5.jpg") },
  { id: 6, source: require("../assets/swiperimage5.jpg") },
];

let categories = [
  {
    id: 1,
    backgroundColor: "#EDF7ED",
    title: "Grocery",
    source: require("../assets/grocery.png"),
    targetScreen: "Grocery",
  },
  {
    id: 2,
    backgroundColor: "#FFF3E3",
    title: "Pharmacy",
    source: require("../assets/pharmacy.png"),
    targetScreen: "Pharmacy",
  },
  {
    id: 3,
    backgroundColor: "#EBF3FC",
    title: "Electronics",
    source: require("../assets/electronics.png"),
    targetScreen: "Electronics",
  },
];

let popularItems = [
  {
    available: 5,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 1,
    price: 1270,
    quantity: 3,
    source: require("../assets/season-fruit.png"),
    subID: 1,
    title: "Season Fruit Cocktail",
    unit: "kg",
  },
  {
    available: 0,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 1,
    price: 165,
    quantity: 234,
    source: require("../assets/season-fruit-836.png"),
    subID: 2,
    title: "Season Fruit Cocktail",
    unit: "gm",
  },
  {
    available: 0,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 1,
    price: 380,
    quantity: 836,
    source: require("../assets/season-fruit-234.png"),
    subID: 3,
    title: "Season Fruit Cocktail",
    unit: "gm",
  },
  {
    available: 0,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    id: 2,
    price: 240,
    quantity: 1,
    source: require("../assets/banana.png"),
    subID: 1,
    title: "Banana - کیلا",
    unit: "Dozen",
  },
  {
    available: 10,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 3,
    price: 179,
    quantity: 500,
    source: require("../assets/surf-excel.png"),
    subID: 1,
    title: "Surf Excel",
    unit: "gm",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 3,
    price: 931,
    quantity: 3,
    source: require("../assets/surf-excel-3.png"),
    subID: 2,
    title: "Surf Excel",
    unit: "kg",
  },
  {
    available: 3,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 3,
    price: 1420,
    quantity: 4.5,
    source: require("../assets/surf-excel-4.5.png"),
    subID: 3,
    title: "Surf Excel",
    unit: "kg",
  },
  {
    available: 0,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 3,
    price: 363,
    quantity: 1,
    source: require("../assets/surf-excel-1.png"),
    subID: 4,
    title: "Surf Excel",
    unit: "kg",
  },
  {
    available: 7,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 4,
    price: 235,
    quantity: 1.5,
    source: require("../assets/olpers.png"),
    subID: 1,
    title: "Olpers Milk",
    unit: "L",
  },
  {
    available: 8,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 4,
    price: 42,
    quantity: "Pouch 250",
    source: require("../assets/olpers-250-pouch.png"),
    subID: 2,
    title: "Olpers Milk",
    unit: "ml",
  },
  {
    available: 9,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 4,
    price: 45,
    quantity: 250,
    source: require("../assets/olpers-250.png"),
    subID: 3,
    title: "Olpers Milk",
    unit: "ml",
  },
  {
    available: 2,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 4,
    price: 160,
    quantity: 1,
    source: require("../assets/olpers-1.png"),
    subID: 4,
    title: "Olpers Milk",
    unit: "L",
  },
  {
    available: 12,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 5,
    price: 489,
    quantity: 1,
    source: require("../assets/dalda.png"),
    subID: 1,
    title: "Dalda Cooking oil",
    unit: "L",
  },
  {
    available: 4,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 5,
    price: 1530,
    quantity: 3,
    source: require("../assets/dalda-3.png"),
    subID: 2,
    title: "Dalda Cooking oil",
    unit: "L",
  },
  {
    available: 3,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 5,
    price: 2300,
    quantity: 4.5,
    source: require("../assets/dalda-4.5.png"),
    subID: 3,
    title: "Dalda Cooking oil",
    unit: "L",
  },
  {
    available: 9,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 5,
    price: 1265,
    quantity: 2.5,
    source: require("../assets/dalda-2.5.png"),
    subID: 4,
    title: "Dalda Cooking oil",
    unit: "L",
  },
  {
    available: 6,
    current: 1,
    description: "fjkeirfrefirhfireufherifreirvetr",
    icon: "chevron-down",
    id: 5,
    price: 2485,
    quantity: 5,
    source: require("../assets/dalda-5.png"),
    subID: 5,
    title: "Dalda Cooking oil",
    unit: "L",
  },
];

let displayedItems = popularItems.filter((item) => item.subID === 1);

export default function HomeScreen({ navigation }) {
  let { latitude, longitude, getUserDeviceCoordinates } =
    useContext(locationContext);

  useEffect(() => {
    getUserDeviceCoordinates();
  }, []);

  if (latitude == null || longitude == null)
    return (
      <View style={styles.loadingAnimationContainer}>
        <LottieView
          autoPlay
          loop
          source={require("../assets/animations/loading.json")}
          style={{ width: 50, height: 50 }}
        />
      </View>
    );

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
                  navigation.navigate("Promotions");
                }}
              />
            )}
          />
        </View>
        <View style={styles.category}>
          <FlatList
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            overScrollMode={"never"}
            renderItem={({ item }) => (
              <CategoryCard
                backgroundColor={item.backgroundColor}
                title={item.title}
                source={item.source}
                onPress={() => navigation.navigate(item.targetScreen)}
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
          data={displayedItems}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          overScrollMode={"never"}
          renderItem={({ item }) => (
            <ItemCard
              item={item}
              color={colors.lightBlue}
              bottomData={popularItems.filter(
                (product) => product.id === item.id
              )}
              onPress={() => navigation.navigate("Item Details", item)}
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
