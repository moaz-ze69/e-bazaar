import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "../components/Button";
import Input from "../components/Input";
import RadioButton from "../components/RadioButton";
import colors from "../config/colors";

const data = [{ value: "MALE" }, { value: "FEMALE" }];

export default function EditProfileScreen({ route }) {
  const [option, setOption] = useState(null);

  let items = route.params.data;

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <View style={styles.textComponents}>
          <Text style={styles.text}>Full Name</Text>
          <Input defaultValue={items[0].userData} />
        </View>
        <View style={styles.textComponents}>
          <Text style={styles.text}>Phone Number</Text>
          <Input
            placeholdertext={items[1].userData}
            keyboardType="number-pad"
            editable={false}
          />
        </View>
        <View style={styles.textComponents}>
          <Text style={styles.text}>Email ID</Text>
          <Input
            defaultValue={items[2].userData}
            keyboardType="email-address"
          />
          <Text style={[styles.verficationText, styles.text]}>
            On email change, verfication email would be sent
          </Text>
        </View>
        <View style={styles.textComponents}>
          <Text style={styles.text}>Date of Birth</Text>
          <Input placeholdertext={"DD/MM/YYYY"} keyboardType="number-pad" />
        </View>
        <View style={styles.textComponents}>
          <Text style={styles.text}>Gender</Text>
          <View style={styles.genderButton}>
            <RadioButton data={data} onSelect={(value) => setOption(value)} />
          </View>
        </View>
      </View>
      <View style={styles.Button}>
        <Button
          title="UPDATE PROFILE"
          color="goGreen"
          style={{ marginVertical: 0, borderRadius: 0 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  textComponents: {
    marginBottom: 20,
  },
  verficationText: {
    color: "#0070CB",
  },
  Button: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  genderButton: {
    paddingVertical: 10,
  },
  dataContainer: {
    margin: 15,
  },
});
