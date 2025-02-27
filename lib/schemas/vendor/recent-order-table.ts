import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const recentOrderSchema = z.object({
  id: z.string(),
  customer: z.string(),
  date: z.string(),
  paymentStatus: z.string(),
  price: z.string(),
  status: z.string(),
});

export type Recent = z.infer<typeof recentOrderSchema>;
