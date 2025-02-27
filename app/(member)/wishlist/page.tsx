import { PagesBreadcrumb } from "@/components/breadcrumb";
import { CircularLoading } from "@/components/loading";
import {
  TableDesktopView,
  TableMobileView,
  WishListFooter,
} from "@/components/wishlist";
import { Container } from "@/components/wrappers";
import { GetWishListDocument } from "@/graphql/wishlist/wishlist.generated";
import { getServerClient } from "@/lib/server-client";
import { Heart } from "lucide-react";

const Page = async () => {
  const client = await getServerClient();

  const { data } = await client.query(GetWishListDocument, {});

  if (!data) return <CircularLoading />;

  if (data.getWishlist?.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className=" text-2xl">Wishlist is empty</p>
      </div>
    );
  }
  return (
    <Container>
      <PagesBreadcrumb
        title="Wishlist"
        links={[{ href: "/wishlist", text: "Wishlist" }]}
      />
      <div className="flex flex-col items-center justify-center w-full gap-6 my-10">
        <div className="flex items-center justify-center gap-4">
          <h1 className="font-semibold text-[26px]">Wishlist</h1>
          <Heart size={24} />
        </div>
        <TableDesktopView data={data} />
        <TableMobileView data={data} />
        <WishListFooter />
      </div>
    </Container>
  );
};

export default Page;
