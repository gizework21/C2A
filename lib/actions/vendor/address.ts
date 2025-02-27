"use server";

import { UpdateVendorAddressSchema } from "@/lib/schemas";
import { z } from "zod";
import { UpdateVendorAddressDocument } from "@/graphql/vendor/address/address.generated";
import { getServerClient } from "@/lib/server-client";

export const UpdateVendorAddressProfileAction = async (
  values: z.infer<typeof UpdateVendorAddressSchema>
) => {
  const client = await getServerClient();

  try {
    const { error } = await client.mutation(
      UpdateVendorAddressDocument,
      values
    );

    if (error) {
      console.log({ error });
      return { error: error.message };
    }

    return { success: "Address updated" };
  } catch (error) {
    console.log({ error });
    return { error: "An error occurred" };
  }
};
