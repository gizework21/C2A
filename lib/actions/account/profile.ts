"use server";

import { UpdateProfileDocument } from "@/graphql/account/profile.generated";

import { ProfileFormSchema } from "@/lib/schemas";
import { getServerClient } from "@/lib/server-client";
import { z } from "zod";

export const UpdateProfileAction = async (
  values: z.infer<typeof ProfileFormSchema>
) => {
  const client = await getServerClient();
  try {
    const { error } = await client.mutation(UpdateProfileDocument, {
      firstName: values.firstname,
      lastName: values.lastname,
      username: values.username,
      email: values.email,
      phone: values.phone,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: "Profile update success!" };
  } catch (error) {
    console.log({ error });

    return { error: "Something went wrong!" };
  }
};
