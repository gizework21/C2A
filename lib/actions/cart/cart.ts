"use server";

import { z } from "zod";

import session from "@/lib/session";
import { CartSchema, getClient } from "@/lib";
import { AddToCartDocument } from "@/graphql/cart/cart.generated";
import { getServerClient } from "@/lib/server-client";

export const AddToCartListAction = async (
  values: z.infer<typeof CartSchema>
) => {
  const client = await getServerClient();

  try {
    const { data, error } = await client.mutation(AddToCartDocument, {
      productId: Number(values.productId),
      quantity: Number(values.quantity),
    });

    if (error) {
      return { error: error.message };
    }

    return { success: "Added to cart" };
  } catch (error) {
    console.log({ error });
    return { error: "An error occurred" };
  }
};
