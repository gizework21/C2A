"use server";

import { CreateReviewDocument } from "@/graphql/product/review.generated";
import { ProductReviewSchema } from "@/lib/schemas";
import { getServerClient } from "@/lib/server-client";
import { z } from "zod";

export const CreateProductReviewAction = async (
  values: z.infer<typeof ProductReviewSchema>
) => {
  const client = await getServerClient();

  const { content, productId, rating, title } = values;

  try {
    const { error } = await client.mutation(CreateReviewDocument, {
      content: content,
      productId: productId,
      rating: rating,
      title: "Title",
    });

    if (error) {
      return { error: error.message };
    }

    return { success: "review success!" };
  } catch (error) {
    console.log({ error });

    return { error: "Something went wrong!" };
  }
};
