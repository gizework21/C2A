import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const stockSchema = z.object({
  id: z.string(),
  product: z.string(),
  sold: z.string(),
  price: z.string(),
  alertQuantity: z.string(),
});

export type Stock = z.infer<typeof stockSchema>;
