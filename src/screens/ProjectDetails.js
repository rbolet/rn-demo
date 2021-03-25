import React from "react";
import { View, ScrollView, Image } from "react-native";
import { Headline, Paragraph, Subheading, Surface, useTheme } from "react-native-paper";
import ProjectDataRow from "../components/ProjectDataRow";
import Loading from "../components/Loading";
import Line from "../components/Line";
import { useProjects } from "../lib/mockAPI";
import { round } from "react-native-reanimated";

export default function JobDetails({ route }) {
  const { projectId } = route.params;
  const { data, isLoading, isFetching } = useProjects("GET", { id: projectId });

  function formatJobNum(job) {
    if (job?.id) {
      const paddedJobNum = job.id.toString().padStart(5, "0");
      return `Project #${paddedJobNum}`;
    } else {
      return null;
    }
  }

  const { spacing, roundness, colors } = useTheme();

  if (!data || isLoading || isFetching) {
    return (
      <View
        style={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: spacing(3),
        }}
      >
        <Loading />
      </View>
    );
  } else {
    let { client, id, details, imageURI, ...rest } = data;

    return (
      <ScrollView>
        <Surface style={{ padding: spacing(2), margin: spacing(1), borderRadius: roundness }}>
          <Headline style={{ color: colors.accent }}>{client}</Headline>
          <Subheading>{formatJobNum(data)}</Subheading>
          <Line />
          {Object.entries(rest).map((entry) => (
            <ProjectDataRow info={entry} />
          ))}
          <Line />
          <Subheading>Details:</Subheading>
          <Paragraph style={{ marginLeft: spacing() }}>{details}</Paragraph>
          <Image
            style={{ width: "100%", height: 250, resizeMode: "contain" }}
            source={{ uri: imageURI }}
          />
        </Surface>
      </ScrollView>
    );
  }
}
