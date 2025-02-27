"use client";

import { DiscountProductColumns } from "./discount-product-columns";
import { useDataTableCustom } from "@/hooks/use-data-table";
import { DataTable } from "@/components/data-table";
import { DiscountProductTaskDataTableToolbar } from "./discount-product-data-table-toolbar";
import { IVendorProductTable } from "@/lib";
import { useQuery } from "@urql/next";
import { GetVendorProductsDocument } from "@/graphql/vendor/product/product.generated";
import { CircularLoading } from "@/components/loading";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export const DiscountProductTable = () => {
  const searchParam = useSearchParams();
  const page = searchParam.get("page");
  const per_page = searchParam.get("per_page");

  const [shouldFetch, setShouldFetch] = useState(true);
  const [{ fetching, data }] = useQuery({
    query: GetVendorProductsDocument,
    variables: {
      page: parseInt(page as string),
      perPage: parseInt(per_page as string),
    },
    pause: !shouldFetch,
  });

  const dataTable: IVendorProductTable[] =
    data?.getMyProducts?.products?.map((product) => {
      return {
        id: product?.productId ?? "",
        name: product?.productName ?? "",
        price: product?.price.toString() ?? "0",
        publishedOn: product?.dateCreated ?? "",
        imageUrl: product?.images[product?.images.length - 1].imageUrl ?? "",
      };
    }) ?? [];

  if (fetching) return <CircularLoading />;

  const { table } = useDataTableCustom({
    data: dataTable,
    columns: DiscountProductColumns,
    pageCount: 1,
  });

  if (data?.getMyProducts?.totalCounts === 0) {
    return (
      <div>
        <h1 className="text-center text-2xl font-bold">
          you don't have any products yet!
        </h1>
      </div>
    );
  }
  return (
    <div className="bg-white p-4 my-6">
      <DataTable
        columns={DiscountProductColumns}
        dataTableToolBar={<DiscountProductTaskDataTableToolbar table={table} />}
        table={table}
      />
    </div>
  );
};
