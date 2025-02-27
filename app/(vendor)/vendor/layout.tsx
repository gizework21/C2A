import { Sidebar } from "@/components/vendor";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sidebar>
      <div className="w-full bg-kbackground-card">{children}</div>
    </Sidebar>
  );
};

export default layout;
