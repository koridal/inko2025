// schemaTypes.ts
import { defineField, defineType } from "sanity";

const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug of project article",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleImage",
      type: "image",
      title: "Image of Project",
    }),
    defineField({
      name: "smallDescription",
      type: "text",
      title: "Small Description",
    }),
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
  ],
});

// ✅ 반드시 배열로 export
export const schemaTypes = [project];
