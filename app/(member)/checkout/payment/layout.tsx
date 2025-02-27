import { PagesBreadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/wrappers";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <PagesBreadcrumb
                gradient={false}
                links={[
                    { href: "/checkout/payment", text: "Payment" },
                    { href: "", text: "Detail" },
                ]}
                title={"Payment"}
            />
            <Container className="pt-12 pb-8"> {/* Add top and bottom padding */}
                <div className="flex flex-col items-center"> {/* Center content horizontally */}
                    {children}
                </div>
            </Container>
        </>
    );
}
