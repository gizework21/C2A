"use server";

import { z } from "zod";

import { CreateUserAddressDocument } from "@/graphql/account/address.generated";
import { CreateAddressSchema } from "@/lib/schemas";
import { getServerClient } from "@/lib/server-client";

export const CreateUserAddressAction = async (
  values: z.infer<typeof CreateAddressSchema>
) => {
  const client = await getServerClient();
  try {
    const { error } = await client.mutation(CreateUserAddressDocument, values);

    if (error) {
      return { error: error.message };
    }

    return { success: "Address create success" };
  } catch (error) {
    console.log({ error });

    return { error: "Something went wrong!" };
  }
};
