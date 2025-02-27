import { Footer } from "@/components/footer";
import { Header, TopHeader } from "@/components/headers";
// import session from "@/lib/session";
// import { redirect } from "next/navigation";

const Layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // const auth = await session();

  // if (!auth) {
  //   return redirect("/auth");
  // }
  return (
    <>
      <TopHeader />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
