import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./lib";
import { UserLoginDocument } from "./graphql/auth/login.generated";
import { getClient } from "./lib/urql";

export default {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) {
          throw new Error("No credentials provided");
        }

        const { email, password } = validatedFields.data;

        const { data, error } = await getClient().mutation(UserLoginDocument, {
          email,
          password,
        });

        if (data?.loginWithPassword?.isSuccess) {
          const user = data?.loginWithPassword;

          if (!user) return null;

          return { ...user.payload, token: user.token };
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
