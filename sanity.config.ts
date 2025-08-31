import { schemaTypes } from "./src/sanity/schemaTypes";
import { defineConfig } from "sanity";


export default defineConfig({
  name: "default", // workspace 이름
  title: "My Sanity Studio",
  projectId: "your-project-id", // ← Sanity 프로젝트 ID
  dataset: "production",        // ← Dataset (예: production)

  schema: {
    types: schemaTypes, // ✅ 배열로 전달
  },
});


