import Link from "next/link";
import { FooterTextProps } from "./footer-costants";

export const FooterText = ({ href, name }: FooterTextProps) => {
  return (
    <Link
      href={href}
      className="text-kwhite-default text-[14px] font-medium  hover:underline  duration-150"
    >
      {name}
    </Link>
  );
};
