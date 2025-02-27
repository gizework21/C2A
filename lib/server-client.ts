"use server";

import session from "./session";
import { createUrqlClient } from "./urql";

export async function getServerClient() {
  const auth = await session();
  const access_token = auth?.user.token;

  return createUrqlClient(access_token);
}
