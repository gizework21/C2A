"use server";

import { z } from "zod";
import { UpdateVendorDocument } from "@/graphql/vendor/store/vendorStore.generated";
import { VendorStoreSchema } from "@/lib/schemas";
import { getServerClient } from "@/lib/server-client";

export const UpdateVendorAction = async (
  values: z.infer<typeof VendorStoreSchema>
) => {
  try {
    const client = await getServerClient();

    const { data, error } = await client.mutation(UpdateVendorDocument, values);

    if (error) {
      return { message: error.message };
    }

    if (data?.updateVendor?.payload) {
      return {
        message: "Vendor updated successfully",
        vendor: data.updateVendor.payload,
      };
    }
  } catch (error) {
    console.log({ error });
    return { message: "An error occurred" };
  }
};
