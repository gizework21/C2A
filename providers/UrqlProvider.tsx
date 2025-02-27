"use client";

import {
  UrqlProvider,
  createClient,
  fetchExchange,
  ssrExchange,
} from "@urql/next";
import { devtoolsExchange } from "@urql/devtools";

import { cacheExchange } from "@urql/exchange-graphcache";
import { useMemo } from "react";
import { useSession } from "next-auth/react";

export default function Provider({ children }: React.PropsWithChildren) {
  const session = useSession();
  const token = session?.data?.user.token;

  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== "undefined",
    });

    const client = createClient({
      url: process.env.NEXT_PUBLIC_BASE_URL as string,
      exchanges: [devtoolsExchange, cacheExchange(), ssr, fetchExchange],
      fetchOptions: {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      },
      suspense: true,
    });

    return [client, ssr];
  }, []);

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
}
