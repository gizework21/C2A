import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const UserOrder = z.object({
  id: z.string(),
  status: z.string(),
  date: z.string(),
  total: z.string(),
});

export type UserOrderSchema = z.infer<typeof UserOrder>;
