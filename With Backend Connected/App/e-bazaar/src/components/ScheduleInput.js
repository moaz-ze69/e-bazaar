import React from "react";
import { TextInput } from "react-native-paper";

import colors from "../config/colors";

export default function ScheduleInput(props) {
  return (
    <TextInput
      style={{
        backgroundColor: colors.white,
        borderColor: colors.light,
        borderWidth: 1,
      }}
      underlineColor="transparent"
      placeholder={props.text}
      selectionColor="#4AB448"
      activeUnderlineColor="transparent"
    ></TextInput>
  );
}
