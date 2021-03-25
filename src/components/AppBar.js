import React /*, { useContext }*/ from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function MainAppBar() {
  const navigator = useNavigation();

  return (
    <Appbar.Header>
      <Appbar.Action icon="lightbulb" size={40} />
      <Appbar.Content title="EMC App" titleStyle={{ fontSize: 25, fontWeight: "bold" }} />
    </Appbar.Header>
  );
}
