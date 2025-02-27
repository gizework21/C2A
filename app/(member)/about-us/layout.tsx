import { PagesBreadcrumb } from "@/components/breadcrumb";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <PagesBreadcrumb
        links={[{ text: "About Us", href: "/about-us" }]}
        title={"About Us"}
      />
      {children}
    </div>
  );
}
