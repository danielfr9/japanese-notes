import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const genki_1_3rd_Collection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    video: z.string().optional(),
  }),
});

const genki_2_3rd_Collection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    video: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  "genki-1": genki_1_3rd_Collection,
  "genki-2": genki_2_3rd_Collection,
};
