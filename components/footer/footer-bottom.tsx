import Link from 'next/link';

export const FooterBottom = () => {
  return (
    <div className="text-kwhite-default flex-col lg:flex items-center justify-center gap-4 mt-4">
      <p className="font-medium text-[14px]">
        ©2024 Kegeberew E-commerce All Rights Reserved
      </p>
      <div className="flex gap-2">
        <Link href={''} className="underline font-semibold text-[14px]">
          Privacy Center
        </Link>
        <span>|</span>
        <Link href={''} className="underline font-semibold text-[14px]">
          Privacy & Cookie Policy
        </Link>
        <span>|</span>
        <Link href={''} className="underline font-semibold text-[14px]">
          Manage Cookies
        </Link>
        <span>|</span>
        <Link href={''} className="underline font-semibold text-[14px]">
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
};
