import { LinkButton } from "@/components/buttons";
import { CircularLoading } from "@/components/loading";
import { VendorProductDiscountProducts } from "@/components/vendor";
import { GetAllDealsDocument } from "@/graphql/deals/deals.generated";
import { getServerClient } from "@/lib/server-client";

const Page = async () => {
  const client = await getServerClient();
  const { data, error } = await client.query(GetAllDealsDocument, {});

  if (error) return <p>{error.message}</p>;

  if (!data) return <CircularLoading />;

  return (
    <div>
      <div className="flex items-center justify-between my-4">
        <p>My Discount</p>

        <div className="flex items-center justify-end">
          <LinkButton href="/vendor/discount/add">Add discount</LinkButton>
        </div>
      </div>

      <VendorProductDiscountProducts data={data} />
    </div>
  );
};

export default Page;
