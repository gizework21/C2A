import { C2AButton } from "@/components/buttons";
import { TwoFAForm } from "@/components/vendor";
import { CircleAlert, Lock } from "lucide-react";

const Page = () => {
  return (
    <div>
      <h1 className="text-[24px] font-semibold">Two-Factor Authentication</h1>

      <div className="flex flex-col items-center justify-center bg-white py-8 my-10 border">
        <p className="text-[36px] font-semibold">
          Its time ti secure your account
        </p>

        <Lock size={80} />

        <p className="font-semibold text-[24px]">
          Setup two - Factor Authentication (2FA)
        </p>

        <div className="bg-kgray-bg p-6 my-6">
          <div className="flex items-center gap-2">
            <CircleAlert /> <p>Required</p>
          </div>

          <ul className="max-w-lg">
            <li>
              For added security, Two-Factor Authentication (2FA) introduces an
              additional layer of protection to your account. In addition to
              your primary email and password, you will be required to input a
              code sent via email or SMS.
            </li>

            <li>
              2FA is mandatory, and you must complete the 2FA setup to continue
              using Continuity Coach.{" "}
            </li>

            <li>
              You can configure SMS-based authentication at any time in the
              future by navigating to Settings - 2FA .
            </li>
          </ul>
        </div>

        <C2AButton className="px-8">Setup</C2AButton>

        <TwoFAForm />
      </div>
    </div>
  );
};

export default Page;
