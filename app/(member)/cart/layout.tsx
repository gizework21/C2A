import { Container } from "@/components/wrappers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
