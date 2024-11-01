import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
	type: "content",
	schema: z.object({
    layout: z.string().optional(),
		title: z.string(),
		description: z.string(),
		dateFormatted: z.string(),
    lang: z.string().optional(),
	}),
});

export const collections = {
  project: projectCollection,
};
