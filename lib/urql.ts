import { CombinedError, createClient, fetchExchange } from "@urql/core";
import { cacheExchange } from "@urql/exchange-graphcache";

import { registerUrql } from "@urql/next/rsc";

export const makeClient = (access_token?: string) => {
  return createClient({
    url: process.env.NEXT_PUBLIC_BASE_URL as string,
    exchanges: [
      cacheExchange({
        keys: {
          ProductsType: (data) => data.productId?.toString() || null,
          AllBannersPaginatedType: (data) => data.message?.toString() || null,
          CategoryType: (data) => data.id?.toString() || null,
          ProductsImageType: (data) => data.id?.toString() || null,
          PaginatedReviewType: (data) => data.message?.toString() || null,
          PaginatedProductType: (data) => data.productName?.toString() || null,
          VendorType: (data) => data.id?.toString() || null,
          GetMyOrdersPaginatedType: (data) => data.page?.toString() || null,
          ProductType: (data) => data.productId?.toString() || null,
          GetMyProductsPaginatedType: (data) => data.page?.toString() || null,
          DashboardSummeryType: (data) => data.products?.toString() || null,
        },
      }),
      fetchExchange,
    ],
    fetchOptions: () => {
      const headers: { [key: string]: string } = {};

      if (access_token) {
        headers["Authorization"] = access_token ? `Bearer ${access_token}` : "";
      }

      return { headers };
    },
  });
};

export type ExpectedErrorsHandlerType = {
  error?: CombinedError | undefined;
  expectedErrors?: { [key: string]: string };
  unexpectedErrorMessage?: string;
  networkErrorMessage?: string;
};

export function expectedErrorsHandler({
  error,
  expectedErrors = {},
  unexpectedErrorMessage = "An unexpected error occurred.",
  networkErrorMessage = "There was a problem with the network connection.",
}: ExpectedErrorsHandlerType): null | string {
  if (error === undefined) {
    return null;
  } else if (error.networkError) {
    return networkErrorMessage;
  }

  let foundExpectedError = false;

  for (const graphQLError of error.graphQLErrors) {
    for (const [errorKey, errorMessage] of Object.entries(expectedErrors)) {
      if (graphQLError.message.includes(errorKey)) {
        return errorMessage;
      }
    }
    foundExpectedError = true;
  }

  return foundExpectedError ? unexpectedErrorMessage : null;
}

export const createUrqlClient = (access_token?: string) =>
  registerUrql(() => makeClient(access_token)).getClient();

export const { getClient } = registerUrql(makeClient);
