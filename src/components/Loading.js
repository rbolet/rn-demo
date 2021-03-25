import React from "react";
import { View } from "react-native";
import { useTheme, ActivityIndicator } from "react-native-paper";

export default function Loading() {
  const { colors } = useTheme();

  return (
    <View style={{ flexGrow: 1 }}>
      <ActivityIndicator animating color={colors.primary} />
    </View>
  );
}
