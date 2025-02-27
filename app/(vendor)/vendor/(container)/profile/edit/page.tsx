import { VendorProfileForm } from "@/components/vendor";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <Suspense>
      <VendorProfileForm />;
    </Suspense>
  );
};

export default Page;
