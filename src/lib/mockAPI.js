import { useState, useEffect, useCallback } from "react";
import initialProjects from "../mockData/projects";

async function wait(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function useProjects(method, criteria) {
  const [projects, setProjects] = useState(initialProjects);
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const error = false;

  useEffect(() => {
    console.log("Method or criteria useEffect!");
    if (method === "GET") {
      fetch();
    } else if (method === "PATCH") {
      update();
    }
  }, []);

  useEffect(() => {
    console.log("projects/data useEffect!");
    setIsFetching(false);
    setIsLoading(false);
  }, []);

  const fetch = useCallback(async function fetch() {
    setIsFetching(true);
    await wait();

    if (!criteria) {
      setData(projects);
    } else {
      const [property, value] = Object.entries(criteria)[0];
      const project = projects.filter((job) => {
        return job[property] == value;
      })[0];
      setData(project);
    }
  }, []);

  const update = useCallback(function () {
    if (!criteria) return;

    const { id, property, value } = criteria;
    if (!id || !property || !value) return;
    const copy = projects;
    const i = copy.findIndex((job) => job[property] == value);
    copy[i] = { ...copy[i], [property]: value };
    setJobs(copy);
  }, []);

  return { isFetching, isLoading, error, data, refetch: fetch };
}
