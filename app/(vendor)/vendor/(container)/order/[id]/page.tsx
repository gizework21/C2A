import { VendorDetailInfo, VendorOrderDetailTable } from "@/components/vendor";
import { GetOrderByIdDocument } from "@/graphql/vendor/order/getOrder-ByID.generated";
import { getServerClient } from "@/lib/server-client";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const client = await getServerClient();

  const { data } = await client.query(GetOrderByIdDocument, {
    orderId: id,
  });
  console.log(data?.GetOrderById?.[0]?.id);
  return (
    <div>
      <p className="font-bold text-[24px] py-4">Order Detail</p>
      <div className="flex gap-4">
        <p>Order number: {data?.GetOrderById?.[0]?.id} </p>
        <p>
          Status:{" "}
          <span className="text-kgreen-success font-semibold">
            {" "}
            {data?.GetOrderById?.[0]?.status}
          </span>
        </p>
      </div>
      <VendorDetailInfo data={data} />
      <VendorOrderDetailTable data={data} />
    </div>
  );
};

export default Page;
