import Image from "next/image";
import Link from "next/link";
import { FooterIconProps } from "./footer-costants";

export const FooterIcon = ({ href, icon, name }: FooterIconProps) => {
  return (
    <Link href={href} className="flex gap-1">
      <Image src={icon} alt={href} height={20} width={20} />
      <p className="text-kgray-text text-sm font-medium ">{name}</p>
    </Link>
  );
};
