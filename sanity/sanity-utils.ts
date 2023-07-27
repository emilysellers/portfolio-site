import { createClient } from "next-sanity";

export async function getProjects() {
  // use next-sanity package to create client that can read from our content link
  const client = createClient({
    projectId: "13glcfob",
    dataset: "production",
    apiVersion: "2023-07-26",
  });
}
