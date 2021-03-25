import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Caption, Subheading, Card, useTheme } from "react-native-paper";

export default function ProjectCard(props) {
  const { project } = props;
  const { id, contactName, phone, client, ...rest } = project;
  const navigation = useNavigation();

  function navigateToProject() {
    navigation.navigate("ProjectDetails", { projectId: id });
  }

  const { spacing, colors } = useTheme();
  return (
    <Card style={{ marginVertical: spacing() }} onPress={navigateToProject}>
      <Card.Title titleStyle={{ color: colors.accent }} title={client} />
      <Card.Content style={{ flex: 1 }}>
        {Object.entries(rest).map((entry) => (
          <ProjectInfoRow info={entry} />
        ))}
      </Card.Content>
    </Card>
  );
}

function ProjectInfoRow({ info }) {
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
