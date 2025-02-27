"use client";

import { ProductColumns } from "./product-columns";
import { useDataTableCustom } from "@/hooks/use-data-table";
import { DataTable } from "@/components/data-table";
import { ProductTaskDataTableToolbar } from "./product-data-table-toolbar";
import { IVendorProductTable } from "@/lib";
import { GetVendorProductsDocument } from "@/graphql/vendor/product/product.generated";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@urql/next";

export const ProductTable = () => {
  const searchParam = useSearchParams();
  const page = searchParam.get("page");
  const per_page = searchParam.get("per_page");

  const [{ data }] = useQuery({
    query: GetVendorProductsDocument,
    variables: {
      page: parseInt(page as string),
      perPage: parseInt(per_page as string),
    },
  });

  const dataTable: IVendorProductTable[] =
    data?.getMyProducts?.products?.map((product) => {
      return {
        id: product?.productId ?? "",
        name: product?.productName ?? "",
        price: product?.price.toString() ?? "0",
        publishedOn: product?.dateCreated ?? "",
      };
    }) ?? [];

  const { table } = useDataTableCustom({
    rowCount: data?.getMyProducts?.totalCounts ?? 0,
    data: dataTable,
    columns: ProductColumns,
    pageCount: data?.getMyProducts?.pages ?? 1,
    initialState: {
      sorting: [
        {
          id: "name",
          desc: false,
        },
      ],
      columnPinning: { right: ["actions"] },
    },
  });

  return (
    <div className="bg-white p-4 my-6">
      <DataTable
        columns={ProductColumns}
        dataTableToolBar={<ProductTaskDataTableToolbar table={table} />}
        table={table}
      />
    </div>
  );
};
