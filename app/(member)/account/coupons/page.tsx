import { PagesBreadcrumb } from "@/components/breadcrumb";
import { CouponsCard } from "@/components/coupons";
import { Container } from "@/components/wrappers";

const Page = () => {
  return (
    <Container>
      <PagesBreadcrumb
        gradient={false}
        title={""}
        links={[
          {
            href: "/account",
            text: "Account",
          },
          {
            href: "/account/coupons",
            text: "Coupons",
          },
        ]}
      />

      <h1 className="font-semibold text-[24px] my-6">My Coupons</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
        {[...Array(5)].map((_, i) => (
          <CouponsCard key={i} />
        ))}
      </div>
    </Container>
  );
};

export default Page;
