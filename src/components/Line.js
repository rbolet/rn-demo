import React from "react";
import { View, StyleSheet } from "react-native";

export default function Line() {
  const styles = StyleSheet.create({
    line: {
      width: "80%",
      alignSelf: "center",
      backgroundColor: "lime",
      borderStyle: "solid",
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: "grey",
      marginVertical: 8,
    },
  });

  return <View style={styles.line} />;
}
