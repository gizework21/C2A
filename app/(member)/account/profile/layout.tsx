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
            href: "/account/profile",
            text: "Account",
          },
          {
            href: "/account/profile",
            text: "Profile",
          },
        ]}
      />
      {children}
    </div>
  );
};

export default layout;
