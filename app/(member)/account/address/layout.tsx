import { PagesBreadcrumb } from "@/components/breadcrumb";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-4">
      <PagesBreadcrumb
        gradient={false}
        title={""}
        links={[
          {
            href: "/account",
            text: "Account",
          },
          {
            href: "/account/Address",
            text: "Address",
          },
        ]}
      />
      {children}
    </div>
  );
};

export default layout;
