import React from "react";
import { ScrollView, View } from "react-native";
import { Paragraph, Headline, useTheme } from "react-native-paper";
import { useProjects } from "../lib/mockAPI";
import ProjectCard from "../components/ProjectCard";
import Loading from "../components/Loading";

export default function ProjectList() {
  const { data, error, isLoading, isFetching } = useProjects("GET", false);
  const { spacing } = useTheme();

  return (
    <View style={{ flexGrow: 1 }}>
      {error || !data?.length || isFetching ? (
        <EmptyResult isLoading={isLoading || isFetching} />
      ) : (
        <>
          <Paragraph style={{ alignSelf: "center" }}>
            Select a card to view more details about the project
          </Paragraph>
          <ScrollView contentContainerStyle={{ padding: spacing(2) }}>
            {data.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </ScrollView>
        </>
      )}
    </View>
  );
}

function EmptyResult({ isLoading }) {
  return (
    <View style={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoading ? <Loading /> : <Headline style={{ color: "gray" }}>No Results Found</Headline>}
    </View>
  );
}
