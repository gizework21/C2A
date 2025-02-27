import * as z from "zod";

export const DiscountSchema = z.object({
  discountPercent: z.coerce.number().positive().lte(100),
  endDate: z.date(),
  startDate: z.date(),
  productIds: z.array(z.string()),
});
