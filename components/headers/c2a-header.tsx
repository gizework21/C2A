import { Logo } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { HeaderSearch } from "./header-search";
import { HeaderNavigationContent } from ".";
import { Container } from "../wrappers";
import { SideBarDrawer } from "../drawer";
import { Suspense } from "react";

export const Header = () => {
  return (
    <header>
      <Container className="p-0 border-b">
        <div className=" flex items-center justify-between md:gap-2 lg:gap-4 h-[80px]">
          <Link href="/">
            <Image
              src={Logo}
              alt="kegeberew logo"
              height={60}
              width={120}
              className="object-contain h-[60px] w-[120px] pl-2"
            />
          </Link>
          <div className="flex w-full justify-end">
            <HeaderSearch className="hidden md:flex" />

            <HeaderNavigationContent />

            <Suspense>
              <SideBarDrawer />
            </Suspense>
          </div>
        </div>

        <HeaderSearch className="px-2 md:hidden pb-2" />
      </Container>
    </header>
  );
};
