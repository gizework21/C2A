"use server";

import { signOut } from "@/auth";

export const LogoutAction = async () => {
  try {
    await signOut();

    return { success: "logout success" };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
