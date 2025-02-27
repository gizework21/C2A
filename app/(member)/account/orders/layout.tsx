import { PagesBreadcrumb } from "@/components/breadcrumb";
import { ReactNode } from "react";
import ChildrenWrapper from "./children-wrapper";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-4">
      <PagesBreadcrumb
        className="py-4"
        gradient={false}
        title={""}
        links={[
          {
            href: "/account",
            text: "Account",
          },
          {
            href: "/account/orders",
            text: "Orders",
          },
        ]}
      />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </div>
  );
};

export default layout;
