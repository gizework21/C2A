"use server";

import { WishlistSchema } from "@/lib/schemas";
import { z } from "zod";
import {
  AddToWishlistDocument,
  RemoveFromWishlistDocument,
} from "@/graphql/wishlist/wishlist.generated";
import { getServerClient } from "@/lib/server-client";

export const AddToWishListAction = async (
  values: z.infer<typeof WishlistSchema>
) => {
  const client = await getServerClient();
  try {
    const { error } = await client.mutation(AddToWishlistDocument, {
      productId: values.productId,
    });
    if (error) {
      return { error: error.message };
    }

    return { success: "Added to wishlist" };
  } catch (error) {
    console.log({ error });
    return { error: "An error occurred" };
  }
};

export const RemoveFromWishListAction = async (
  values: z.infer<typeof WishlistSchema>
) => {
  const client = await getServerClient();

  try {
    const { error } = await client.mutation(RemoveFromWishlistDocument, {
      productId: values.productId,
    });
    if (error) {
      return { error: error.message };
    }

    return { success: "Removed from wishlist" };
  } catch (error) {
    console.log({ error });
    return { error: "An error occurred" };
  }
};
