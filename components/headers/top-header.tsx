import Link from "next/link";
import { MailIcon, Phone } from "lucide-react";
import {
  IconFacebookFooter,
  IconInstagramFooter,
  IconTwitterFooter,
  IconYoutubeFooter,
} from "@/lib";
import Image from "next/image";

interface TopHeaderSocialIcons {
  icon: string;
  href: string;
  alt: string;
}

const topHeaderSocialIcons: TopHeaderSocialIcons[] = [
  {
    icon: IconFacebookFooter,
    href: "#",
    alt: "facebook icon",
  },
  {
    icon: IconInstagramFooter,
    href: "#",
    alt: "instagram icon",
  },
  {
    icon: IconYoutubeFooter,
    href: "#",
    alt: "youtube icon",
  },
  {
    icon: IconTwitterFooter,
    href: "#",
    alt: "x icon",
  },
];

export const TopHeader = () => {
  return (
    <div className="flex items-center justify-center h-[30px] bg-kgray-dark text-[14px] montserrat">
      <div className="kcontainer flex justify-between items-center text-kwhite-default  text-[14px] font-bold">
        <p className="hidden md:flex gap-2">
          <MailIcon size={20} />
          Kegeberew.com@example.com
        </p>
        <div className="flex gap-1">
          <p>Call us on: </p>

          <Link href={"tel:9858"} className="flex items-center gap-2">
            <span>
              <Phone />
            </span>
            9858
          </Link>
        </div>
        <div className="flex h-full items-center justify-center gap-2">
          {topHeaderSocialIcons.map((icon, index) => (
            <Link href={icon.href} key={index}>
              <Image
                src={icon.icon}
                alt={icon.alt}
                height={20}
                width={20}
                className="object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
