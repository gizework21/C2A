import { PagesBreadcrumb } from "@/components/breadcrumb";
import {
  TableDesktopView,
  TableMobileView,
  WishListFooter,
} from "@/components/wishlist";
import { Container } from "@/components/wrappers";
const Page = () => {
  return (
    <>
      <PagesBreadcrumb
        gradient={false}
        title={""}
        links={[
          {
            href: "/account",
            text: "Account",
          },
          {
            href: "/account/wishlist",
            text: "Wishlist",
          },
        ]}
      />
      <Container>
        <div className="flex flex-col items-center justify-center w-full gap-6 my-10">
          <TableDesktopView
            data={{
              __typename: undefined,
              getWishlist: undefined,
            }}
          />

          <TableMobileView
            data={{
              __typename: undefined,
              getWishlist: undefined,
            }}
          />

          <WishListFooter />
        </div>
      </Container>
    </>
  );
};

export default Page;
