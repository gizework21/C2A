import { PagesBreadcrumb } from "@/components/breadcrumb";
import { CheckoutProgressLayout } from "@/components/checkout";
import { Container } from "@/components/wrappers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PagesBreadcrumb
        gradient={false}
        links={[
          { href: "Checkout", text: "Checkout" },
          { href: "", text: "Complete" },
        ]}
        title={"Checkout"}
      />
      <Container>
        <h1 className="flex justify-center font-medium text-[26px] poppins my-4">
          Complete
        </h1>

        <CheckoutProgressLayout />
        {children}
      </Container>
    </>
  );
}
