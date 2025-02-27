import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const productTableSchema = z.object({
  id: z.string(),
  name: z.string(),
  publishedOn: z.string(),
  price: z.string(),
  imageUrl: z.string().optional().nullable(),
});

export type IVendorProductTable = z.infer<typeof productTableSchema>;
