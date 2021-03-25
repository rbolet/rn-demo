import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppWrappers from "./src/components/AppWrappers";
import { UserProvider } from "./src/contexts/UserContext";
import SignIn from "./src/screens/SignIn";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppWrappers>
      <UserProvider>
        <Stack.Navigator mode="modal">
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        </Stack.Navigator>
      </UserProvider>
    </AppWrappers>
  );
}
