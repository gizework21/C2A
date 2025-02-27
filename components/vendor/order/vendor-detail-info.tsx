import { GetOrderByIdQuery } from "@/graphql/vendor/order/getOrder-ByID.generated";
import { TVendorOrderDetailCardItems, VendorOrderDetailCard } from ".";

interface GetOrderByIdProps {
  data: GetOrderByIdQuery | undefined;
}
export const VendorDetailInfo = ({ data }: GetOrderByIdProps) => {
  const BillingAddress: TVendorOrderDetailCardItems[] = [
    { key: "phone", value: data?.GetOrderById?.[0]?.phone || "" },
    { key: "Address", value: data?.GetOrderById?.[0]?.address1 || "" },
    { key: "createdAt", value: data?.GetOrderById?.[0]?.createdAt || ""  },
    { key: "updatedAt", value: data?.GetOrderById?.[0]?.updatedAt || "" },
  ];

  const ShippingAddress: TVendorOrderDetailCardItems[] = [
    { key: "postCode", value: data?.GetOrderById?.[0]?.postCode || ""  },
    {
      key: "totalAmount",
      value: data?.GetOrderById?.[0]?.totalAmount || "" ,
    },
    {
      key: "",
      value: data?.GetOrderById?.[0]?.address1 || "" ,
    },
  ];

  const PaymentInformation: TVendorOrderDetailCardItems[] = [
    { key: "currency", value: data?.GetOrderById?.[0]?.payments[0]?.currency || ""  },
    { key: "phone", value: data?.GetOrderById?.[0]?.payments[0]?.phone || "" },
    { key: "Ammount", value: data?.GetOrderById?.[0]?.payments[0]?.amount || ""  },
    { key: "status:", value: data?.GetOrderById?.[0]?.payments[0]?.status || ""  },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 my-12">
      <VendorOrderDetailCard title="Billing Address" items={BillingAddress} />
      <VendorOrderDetailCard title="Shipping Address" items={ShippingAddress} />
      <VendorOrderDetailCard
        title="Payment Information"
        items={PaymentInformation}
      />
    </div>
  );
};
