import { z } from "zod";

export const WishlistSchema = z.object({
  productId: z.string(),
});
