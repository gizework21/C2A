"use server";

import { SignupSchema } from "@/lib/schemas";
import { z } from "zod";
import { getClient } from "@/lib/urql";
import moment from "moment";
import { UserSignUpDocument } from "@/graphql/auth/signup.generated";

export const SignupAction = async (values: z.infer<typeof SignupSchema>) => {
  const { confirmPassword, dateOfBirth, ...otherFields } = values;

  const date = moment(dateOfBirth).format("YYYY-MM-DD");

  try {
    const { data, error } = await getClient().mutation(UserSignUpDocument, {
      ...otherFields,
      dateOfBirth: date,
    });

    if (error) {
      return { message: error.message };
    }

    if (data?.userSignup?.token) {
      return { message: "User created" };
    }
  } catch (error) {
    console.log({ error });
    return { message: "An error occurred" };
  }
};
