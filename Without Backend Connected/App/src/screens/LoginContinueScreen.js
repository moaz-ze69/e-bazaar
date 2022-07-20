import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

import Button from "../components/Button";
import colors from "../config/colors";
import Separator from "../components/Separator";
import LoginIcons from "../components/LoginIcons";
import OptpItem from "../components/OptpItem";
import Icon from "../components/Icon";
import { authContext } from "../context/AuthProvider";

export default function LoginContinueScreen({ navigation }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  let { setIsUserLoggedIn } = useContext(authContext);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.textheading}>Welcome Back</Text>
        <Text style={styles.textName}>Moaz Ahmed</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Enter your Password to login</Text>
        <TextInput
          style={styles.inputText}
          selectionColor="#4AB448"
          placeholder="Password"
          underlineColor="transparent"
          secureTextEntry={isPasswordVisible}
          theme={{ colors: { primary: "transparent" } }}
          right={
            <TextInput.Icon
              name={isPasswordVisible ? "eye" : "eye-off"}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Login"
          color="goGreen"
          onPress={() => {
            setIsUserLoggedIn(true);
            navigation.navigate("Accounts");
          }}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View>
        <Separator text={" or login with "}></Separator>
      </View>
      <View style={styles.otpItem}>
        <OptpItem
          title={"Otp Verification"}
          IconComponent={
            <Icon
              name={"bell-outline"}
              backgroundColor={colors.white}
              iconColor={colors.goGreen}
            />
          }
        />
      </View>
      <View>
        <Separator text={" or continue with "}></Separator>
      </View>
      <View style={styles.IconStyle}>
        <LoginIcons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, paddingHorizontal: 10 },
  text: {
    fontSize: 14,
    paddingBottom: 8,
  },
  inputContainer: {
    marginTop: 20,
  },
  button: {
    marginTop: 15,
  },
  textheading: {
    fontSize: 17,
    paddingBottom: 8,
  },
  textName: {
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 8,
  },
  inputText: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
    height: 45,
    borderRadius: 3,
  },
  forgotText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    paddingBottom: 8,
    color: "#4AB448",
  },
  IconStyle: {
    marginTop: 15,
  },
  otpItem: {
    marginTop: 20,
    marginBottom: 10,
  },
});
