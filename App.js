import React, { useContext } from "react";
import { SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Paragraph, useTheme } from "react-native-paper";
import AppWrappers from "./src/components/AppWrappers";
import SignIn from "./src/screens/SignIn";
import { UserContext } from "./src/contexts/UserContext";
import DashboardNavigator from "./src/navigation/DashboardNavigator";

const Stack = createStackNavigator();

export default function App() {
  const { user } = useContext(UserContext);
  const { colors } = useTheme();

  return (
    <AppWrappers>
      <Stack.Navigator mode="modal">
        {/* <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} /> */}
        <Stack.Screen
          name="DashboardNavigator"
          component={DashboardNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </AppWrappers>
  );
}
