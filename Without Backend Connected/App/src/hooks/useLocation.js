import { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import * as Location from "expo-location";

export default function useLocation(props) {
  let [location, setLocation] = useState({});

  let getLocation = async () => {
    let { granted } = await Location.requestBackgroundPermissionsAsync();
    if (!granted) return;
    let {
      coords: { latitude, longitude },
    } = await Location.getLastKnownPositionAsync();

    setLocation({ latitude, longitude });
  };

  useEffect(() => {
    getLocation();
  }, []);

  if (latitu == null || long == null)
    return <LottieView source={require("../assets/animations/loading.json")} />;

  return location;
}
