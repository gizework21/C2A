"use client";

import { useCart } from "../../hooks";
import Link from "next/link";
import { HeaderLinkBtnProps } from "@/types/header";
import { cn, HeaderNames } from "../../lib";

export const HeaderLinkButton = ({ navContent }: HeaderLinkBtnProps) => {
  const { href, icon, title } = navContent;
  const cart = useCart();
  return (
    <Link
      href={href}
      className={cn(
        "items-center gap-2 hover:bg-kaccent/10 h-10 px-4 py-2 rounded-md transition-colors  montserrat hidden lg:flex",
        title === HeaderNames.Cart && "flex"
      )}
    >
      <div className="relative">
        {icon}
        {title === HeaderNames.Cart && (
          <span className="absolute -top-2 -right-2 size-3 bg-kaccent rounded-full flex items-center justify-center text-white text-xs">
            {cart.items.length}
          </span>
        )}
      </div>
      <p>{title}</p>
    </Link>
  );
};
