import { AccountSidebar } from "@/components/account";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex bg-kwhite-background">
      <AccountSidebar />
      <div className="px-2 w-full">{children}</div>
    </div>
  );
};

export default layout;
