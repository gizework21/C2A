import { GetProductDocument } from "@/graphql/product/products.generated";
import { getServerClient } from "@/lib/server-client";

const Page = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params;

  const client = await getServerClient();
  const { data, error } = await client.query(GetProductDocument, {
    productId,
  });

  return <div>Page</div>;
};

export default Page;
