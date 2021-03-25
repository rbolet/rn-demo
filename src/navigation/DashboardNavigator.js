import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProjectsNavigator from "./ProjectsNavigator";
import AppBar from "../components/AppBar";

const Tab = createMaterialBottomTabNavigator();

export default function DashboardNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="">
      <Tab.Screen
        name="Projects"
        component={Projects}
        options={{
          tabBarIcon: Object.assign(({ color }) => (
            <MaterialCommunityIcons name="hammer" color={color} size={26} />
          )),
          headerShown: true,
          title: "My Projects",
        }}
      />
      {/* <Tab.Screen
        name="Messages"
        component={}
        options={{
          tabBarIcon: Object.assign(({ color }) => (
            <MaterialCommunityIcons name="message-text-outline" color={color} size={26} />
          )),
          tabBarBadge: 1,
        }}
      /> */}
    </Tab.Navigator>
  );
}

function Projects() {
  return (
    <>
      <AppBar />
      <ProjectsNavigator />
    </>
  );
}
