import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const transactionHistorySchema = z.object({
  id: z.string(),
  action: z.string(),
  product: z.string(),
  date: z.string(),
  amount: z.string(),
  status: z.string(),
});

export type History = z.infer<typeof transactionHistorySchema>;
