"use client";

import { z } from "zod";

export const ProductReviewSchema = z.object({
  content: z.string().min(1, {
    message: "Content is required",
  }),
  productId: z.string().min(1, {
    message: "Content is required",
  }),
  rating: z.coerce.number(),
  title: z.string().optional(),
});
