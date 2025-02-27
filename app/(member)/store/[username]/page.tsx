import { ProductCard } from "@/components/products";
import { Container } from "@/components/wrappers";
import { GetProductByVendorDocument } from "@/graphql/store/store.generated";
import { getImageUrl, Logo } from "@/lib";
import { getServerClient } from "@/lib/server-client";
import Image from "next/image";

const Page = async ({ params }: { params: { username: string } }) => {
  const client = await getServerClient();

  const { data, error } = await client.query(GetProductByVendorDocument, {
    username: params.username,
  });

  if (error) {
    return <div className="text-center font-light">{error.message}</div>;
  }

  return (
    <div>
      <div className="h-[300px] w-full relative">
        <Image
          src="https://plus.unsplash.com/premium_photo-1677846526184-86a9d87b5394?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5ub3VuY2V8ZW58MHx8MHx8fDA%3D"
          alt="store image"
          width={500}
          height={500}
          className="object-cover w-full h-[300px]"
        />
        <Image
          src="https://images.unsplash.com/photo-1690719189466-660b50ab5519?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1hY2RvbmFsZHN8ZW58MHx8MHx8fDA%3D"
          alt="store image"
          width={500}
          height={500}
          className="object-cover size-[200px] absolute -bottom-[32%] left-10 border shadow-md"
        />
        <div className="hidden md:block text-[24px] montserrat font-bold md:ml-[32%] lg:ml-[36%]  xl:ml-[20%]  mt-4">
          Store name
        </div>
      </div>

      <div className="md:hidden text-[24px] montserrat font-bold mt-32 px-4">
        Store name
      </div>

      <Container className="mt-36">
        <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-2 lg:gap-4 px-2 md:px-4 size-full">
          {data?.getProductByVendor?.objects?.map((product) => (
            <ProductCard
              key={product?.productId}
              product={{
                id: parseInt(product?.productId ?? ""),
                name: product?.productName ?? "",
                price: product?.price ?? 0,
                image: getImageUrl(
                  product?.images && product.images.length > 0
                    ? (product?.images && product?.images?.length > 2
                        ? product?.images[product?.images.length - 1].imageUrl
                        : product?.images?.[0].imageUrl) ?? ""
                    : Logo
                ),
                rating: product?.rating ?? 0,
              }}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Page;
