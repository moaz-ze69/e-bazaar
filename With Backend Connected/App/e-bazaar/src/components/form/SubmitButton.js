import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

export default function SubmitButton({ title }) {
  let { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
}
