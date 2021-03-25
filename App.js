import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppWrappers from "./src/components/AppWrappers";
import SignIn from "./src/screens/SignIn";
import { UserContext } from "./src/contexts/UserContext";
import DashboardNavigator from "./src/navigation/DashboardNavigator";

const Stack = createStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AppWrappers>
      <Stack.Navigator mode="modal">
        {loggedIn ? (
          <Stack.Screen
            name="DashboardNavigator"
            component={DashboardNavigator}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
            initialParams={{
              loginCallback: () => {
                setLoggedIn(true);
              },
            }}
          />
        )}
      </Stack.Navigator>
    </AppWrappers>
  );
}
