import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const venderOrdersSchema = z.object({
  id: z.string(),
  customer: z.string(),
  product: z.string(),
  date: z.string(),
  price: z.string(),
  status: z.string(),
});

export type venderOrders = z.infer<typeof venderOrdersSchema>;
