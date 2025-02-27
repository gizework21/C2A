import Link from "next/link";

export const NewsSubscription = () => {
  return (
    <div className="space-y-2 mt-4">
      <h2 className="text-kwhite-default font-medium text-[14px]">
        SIGN UP FOR KEGEBEREW E-COMMERCE NEWS
      </h2>
      <div className="flex gap-2 ">
        <input className="w-full outline-none px-2" />
        <button className="bg-kwhite-default py-2 px-4 font-semibold text-[14px]">
          SUBSCRIBE
        </button>
      </div>
      <div className="text-kwhite-default font-medium text-[12px]">
        By clicking the SUBSCRIBE button, you are agreeing to our
        <span className="underline">
          <Link href={""}> Privacy & Cookie Policy</Link>
        </span>
      </div>
    </div>
  );
};
