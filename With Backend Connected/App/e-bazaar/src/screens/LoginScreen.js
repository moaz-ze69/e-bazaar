import React, { useState, useRef } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import PhoneInput from "react-native-phone-number-input";

import Button from "../components/Button";
import LoginIcons from "../components/LoginIcons";
import Separator from "../components/Separator";
import colors from "../config/colors";

export default function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneInput = useRef(null);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="postion" keyboardVerticalOffset={10}>
        <View style={styles.phoneNumberContainer}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="PK"
            flagButtonStyle={styles.flag}
            containerStyle={styles.phoneNumberView}
            textContainerStyle={styles.phoneInput}
            onChangeFormattedText={(text) => {
              setPhoneNumber(text);
            }}
          />
        </View>

        <View style={styles.buttonStyle}>
          <Button
            title="Continue"
            color="goGreen"
            onPress={() => navigation.navigate("LoginContinue")}
          />
        </View>
        <View style={styles.separatorStyle}>
          <Separator text={" or continue with "}></Separator>
        </View>
        <View style={styles.IconStyle}>
          <LoginIcons></LoginIcons>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  phoneNumberView: {
    width: "100%",
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  phoneNumberContainer: {
    margin: 20,
  },
  phoneInput: {
    paddingVertical: 0,
    backgroundColor: "white",
    borderWidth: 0.2,
    borderColor: "silver",
    borderRadius: 3,
  },
  flag: {
    borderWidth: 0.2,
    borderColor: "silver",
    borderRadius: 3,
    marginRight: 15,
  },
  buttonStyle: {
    marginTop: -15,
    marginHorizontal: 20,
  },
  separatorStyle: {
    marginTop: 5,
  },
  IconStyle: {
    marginTop: 15,
  },
});

// import React from "react";
// import { StyleSheet, Image, View } from "react-native";

// import * as Yup from "yup";

// import Screen from "../components/Screen";
// import { AppFormField, SubmitButton, AppForm } from "../components/form";

// let validationSchema = Yup.object().shape({
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().required().min(4).label("Password"),
// });

// export default function LoginScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Image style={styles.logo} />
//       <AppForm
//         initialValues={{ email: "", password: "" }}
//         onSubmit={() => navigation.navigate("App")}
//         validationSchema={validationSchema}
//       >
//         <AppFormField
//           autoCapitalize="none"
//           autoCorrect={false}
//           keyboardType="email-address"
//           icon="email"
//           name="email"
//           label="Email"
//           textConentType="emailAddress" // only for iOS
//           mode="outlined"
//         />
//         <AppFormField
//           autoCapitalize="none"
//           autoCorrect={false}
//           icon="lock"
//           name="password"
//           label="Password"
//           secureTextEntry
//           textConentType="password" // only for iOS
//           mode="outlined"
//         />
//         <SubmitButton title="Login" />
//       </AppForm>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },

//   logo: {
//     width: 80,
//     height: 80,
//     alignSelf: "center",
//     marginTop: 50,
//     marginBottom: 20,
//   },
// });
