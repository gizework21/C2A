import { AuthTab } from "@/components/auth";
import Image from "next/image";

const Page = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-10">
      <div className="hidden lg:block">
        <Image
          src={
            "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Login"
          width={500}
          height={500}
          className="h-[772px] w-[694px] object-cover rounded-r-[40px]"
        />
      </div>

      <AuthTab />
    </div>
  );
};

export default Page;
