import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schemas";

const config = defineConfig({
  projectId: "13glcfob",
  dataset: "production",
  title: "My Portfolio Site",
  apiVersion: "2023-07-26",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [project] },
});

export default config;
