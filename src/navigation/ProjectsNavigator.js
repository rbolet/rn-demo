import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProjectList from "../screens/ProjectList";
import ProjectDetails from "../screens/ProjectDetails";

const Stack = createStackNavigator();

export default function ActiveJobsNavigator() {
  return (
    <Stack.Navigator initialRouteName="ProjectList">
      <Stack.Screen
        name="ProjectList"
        options={{ title: "Projects", headerShown: false }}
        component={ProjectList}
      />
      <Stack.Screen
        name="ProjectDetails"
        options={{ title: "Project Details", headerStatusBarHeight: 0 }}
        component={ProjectDetails}
      />
    </Stack.Navigator>
  );
}
