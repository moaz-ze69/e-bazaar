import React from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";

import CategoryCard from "../components/CategoryCard";
import SeperatorTag from "../components/SeperatorTag";
import colors from "../config/colors";

let medicines = [
  {
    id: 1,
    title: "OTC Medicines & First Aid",
    source: require("../assets/PharmacyScreenData/otc-medicine.png"),
  },
  {
    id: 2,
    title: "Prescription Medicine",
    source: require("../assets/PharmacyScreenData/presc-medicine.png"),
  },
];

let lifestyleAndFitness = [
  {
    id: 1,
    title: "Vitamin & Suppliments",
    source: require("../assets/PharmacyScreenData/vitamins.png"),
  },
  {
    id: 2,
    title: "Sport Suppliments",
    source: require("../assets/PharmacyScreenData/sport-suppliments.png"),
  },
];

let healthcareDevices = [
  {
    id: 1,
    title: "Health Equipment",
    source: require("../assets/PharmacyScreenData/health-equip.png"),
  },
  {
    id: 2,
    title: "COVID-19",
    source: require("../assets/PharmacyScreenData/covid.png"),
  },
];

export default function PharmacyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode={"never"}>
        <View style={styles.subContainer}>
          <SeperatorTag title="Medicines" paddingHorizontal={5} />
          <FlatList
            data={medicines}
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
          <SeperatorTag title="Lifestyle & Fitness" paddingHorizontal={5} />
          <FlatList
            data={lifestyleAndFitness}
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
          <SeperatorTag title="Healthcare Devices" paddingHorizontal={5} />
          <FlatList
            data={healthcareDevices}
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
