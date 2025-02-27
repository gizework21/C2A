import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import Provider from "./UrqlProvider";
import session from "@/lib/session";

const AuthProvider = async ({ children }: { children: ReactNode }) => {
  const sessionn = await session();

  return (
    <SessionProvider session={sessionn}>
      <Provider>{children}</Provider>
    </SessionProvider>
  );
};

export default AuthProvider;
