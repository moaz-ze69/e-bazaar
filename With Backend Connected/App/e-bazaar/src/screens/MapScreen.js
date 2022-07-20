import React, { useState, useContext } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Searchbar } from "react-native-paper";

import Button from "../components/Button";
import colors from "../config/colors";
import { locationContext } from "../context/LocationProvider";

let { width, height } = Dimensions.get("window");
let ASPECT_RATIO = width / height;

export default function MapScreen({ navigation, LATITUDE_DELTA = 0.0922 }) {
  let [searchBarSelection, setSearchBarSelection] = useState({
    selection: { start: 0 },
  });

  let {
    userCurrentAddress,
    latitude,
    longitude,
    setUserEnteredAddress,
    getCoordinates,
  } = useContext(locationContext);

  let onChangeText = (query) => setUserEnteredAddress(query);

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Searchbar
          onChangeText={onChangeText}
          style={styles.searchbar}
          defaultValue={userCurrentAddress}
          selectTextOnFocus={true}
          selectionColor={colors.grey}
          onSubmitEditing={() => getCoordinates()}
          onFocus={() => {
            setSearchBarSelection({ selection: null });
          }}
          onBlur={() => {
            setSearchBarSelection({ selection: { start: 0 } });
          }}
          selection={searchBarSelection.selection}
        />
      </View>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
          }}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
          }}
        >
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
          />
        </MapView>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Continue"
          color="goGreen"
          onPress={() => navigation.navigate("Homes")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: width,
    height: height,
  },
  mapContainer: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: colors.white,
    width: "100%",
    paddingBottom: 5,
    paddingHorizontal: 15,
    paddingTop: 16,
    borderTopEndRadius: 17,
    borderTopStartRadius: 17,
  },
  button: {
    margin: 10,
  },
  searchBarContainer: {
    position: "absolute",
    top: 30,
    zIndex: 1,
    width: "85%",
  },
  searchbar: {
    borderRadius: 50,
    height: 40,
  },
});
