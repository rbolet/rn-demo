import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { UserProvider } from "../contexts/UserContext";
import theme from "../lib/theme";

export default function AppWrappers({ children }) {
  return (
    <UserProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>{children}</NavigationContainer>
      </PaperProvider>
    </UserProvider>
  );
}
