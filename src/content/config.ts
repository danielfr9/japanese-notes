import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const genki_3rd_Edition_Collection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    video: z.string().optional(),
    book: z.string(),
    lessonNumber: z.number(),
    sections: z.array(z.string()),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  "genki-1": genki_3rd_Edition_Collection,
  "genki-2": genki_3rd_Edition_Collection,
};
