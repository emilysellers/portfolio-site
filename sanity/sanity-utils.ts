import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  // use next-sanity package to create client that can read from our content link
  const client = createClient({
    projectId: "13glcfob",
    dataset: "production",
    apiVersion: "2023-07-26",
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: "13glcfob",
    dataset: "production",
    apiVersion: "2023-07-26",
  });

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`,
    { slug }
  );
}
