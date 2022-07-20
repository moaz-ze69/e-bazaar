import React, { createContext, useState } from "react";
import * as Location from "expo-location";

export let locationContext = createContext({});

export default function LocationProvider({ children }) {
  let [latitude, setLatitude] = useState();
  let [longitude, setLongitude] = useState();
  let [userCurrentAddress, setUserCurrentAddress] = useState();
  let [userEnteredAddress, setUserEnteredAddress] = useState();

  let getGeoLocation = async (latitude, longitude) => {
    try {
      let geoLocationAddress = await Location.reverseGeocodeAsync({
        latitude: latitude,
        longitude: longitude,
      });
      setUserCurrentAddress(
        geoLocationAddress[0].name +
          ", " +
          geoLocationAddress[0].district +
          ", " +
          geoLocationAddress[0].city +
          ", " +
          geoLocationAddress[0].region +
          ", " +
          geoLocationAddress[0].country
      );
    } catch (error) {
      console.log(error);
    }
  };

  let getUserDeviceCoordinates = async () => {
    try {
      let { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        return;
      }
      let lastKnownPosition = await Location.getLastKnownPositionAsync();
      if (!lastKnownPosition) {
        return;
      }
      let { latitude, longitude } = lastKnownPosition.coords;
      setLatitude(latitude);
      setLongitude(longitude);
      getGeoLocation(latitude, longitude);
    } catch (error) {
      console.log(error);
    }
  };

  let getCoordinates = async () => {
    try {
      let coordinates = await Location.geocodeAsync(userEnteredAddress);
      setLatitude(coordinates[0].latitude);
      setLongitude(coordinates[0].longitude);
      getGeoLocation(coordinates[0].latitude, coordinates[0].longitude);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <locationContext.Provider
      value={{
        latitude,
        setLatitude,
        longitude,
        setLongitude,
        userCurrentAddress,
        setUserCurrentAddress,
        userEnteredAddress,
        setUserEnteredAddress,
        getUserDeviceCoordinates,
        getGeoLocation,
        getCoordinates,
      }}
    >
      {children}
    </locationContext.Provider>
  );
}
