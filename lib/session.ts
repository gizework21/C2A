import { auth } from "@/auth";
import { cache } from "react";

const session = cache(async () => {
  const session = await auth();
  return session;
});

export default session;
