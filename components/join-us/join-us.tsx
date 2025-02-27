import { UserCircle } from "lucide-react";
import { AuthTab } from "../auth";
import { C2AButton } from "../buttons";
import { C2ADialog } from "../dialog";

export const JoinUs = () => {
  return (
    <div className="opacity-80 p-6 bg-[url('https://images.unsplash.com/photo-1506111583091-becfd4bfa05d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover h-[300px] my-8">
      <div className="flex flex-col h-[300px] items-center justify-center">
        <div className="lg:max-w-[50%] text-kwhite-default flex flex-col items-center justify-center gap-4 text-center">
          <p className="font-bold text-[16px] lg:text-[24px]">
            Ready to Elevate Your Shopping Experience? Join Us Today!
          </p>
          <p className="text-[12px] lg:text-[14px] line-clamp-2">
            Unlock exclusive access to high-quality products and unbeatable
            deals. Sign up now to connect with the best of Chinese goods in the
            African market!
          </p>

          <C2ADialog
            title="Login"
            className="mx-2 px-3 bg-kaccent rounded-full text-white hover:bg-black/90 hover:text-white gap-2 font-semibold montserrat"
            icon={<UserCircle color="white" size={24} />}
            button={<C2AButton className="px-8 rounded-full">Login</C2AButton>}
          >
            <AuthTab modal={true} className="bg-white shadow-none w-full" />
          </C2ADialog>
        </div>
      </div>
    </div>
  );
};
