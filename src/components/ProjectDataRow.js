import React from "react";
import { View } from "react-native";
import { Subheading, useTheme } from "react-native-paper";

export default function ProjectInfoRow({ info }) {
  let [label, value] = info;

  if (label === "phone") {
    value = value.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }

  function styleLabel(text) {
    return (
      text.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
        return str.toUpperCase();
      }) + ":"
    );
  }

  const { spacing, colors } = useTheme();
  return (
    <View
      style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: spacing(1) }}
    >
      <Subheading style={{ fontWeight: "bold" }}>{styleLabel(label)}</Subheading>
      <Subheading style={{ textAlign: "right" }}>{value}</Subheading>
    </View>
  );
}
