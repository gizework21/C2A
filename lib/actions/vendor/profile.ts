"use server";

import { VendorProfileSchema } from "@/lib/schemas";
import { z } from "zod";
import { UpdateVendorProfileDocument } from "@/graphql/vendor/profile/profile.generated";
import { getServerClient } from "@/lib/server-client";

export const VendorProfileAction = async (
  values: z.infer<typeof VendorProfileSchema>
) => {
  const client = await getServerClient();

  const { email, firstname, lastname, phone } = values;

  try {
    const { error } = await client.mutation(UpdateVendorProfileDocument, {
      email,
      firstName: firstname,
      lastName: lastname,
      phone,
    });

    if (error) {
      console.log({ error });
      return { error: error.message };
    }

    return { success: "Profile updated" };
  } catch (error) {
    console.log({ error });
    return { error: "An error occurred" };
  }
};
