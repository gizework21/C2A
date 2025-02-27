import { C2ADropdown } from "../dropdown";

import { AuthTab } from "../auth";
import {
  CurrencyDropdownContent,
  HeaderNames,
  LanguageDropdownContent,
  navigationContents,
} from "../../lib/constants/header";
import { C2ADialog } from "../dialog";
import session from "@/lib/session";
import { ProfileDropdown } from "./profile-dropdown";
import { UserCircle } from "lucide-react";
import { HeaderLinkButton } from "../buttons/header-link-button";

export const HeaderNavigationContent = async () => {
  const auth = await session();
  return (
    <div className="flex items-center gap-1">
      {navigationContents.map((navContent, index) => {
        switch (navContent.title) {
          case HeaderNames.USD:
            return (
              <C2ADropdown
                key={index}
                buttonName={"USD"}
                content={CurrencyDropdownContent}
                className="hidden md:flex border-none"
              />
            );
          case HeaderNames.EN:
            return (
              <C2ADropdown
                key={index}
                buttonName={"En"}
                content={LanguageDropdownContent}
                className="hidden lg:flex border-none"
              />
            );
          case HeaderNames.Login:
            return auth ? (
              <ProfileDropdown key={index} />
            ) : (
              <C2ADialog
                title="Login"
                className="mx-2 px-3 bg-kaccent rounded-full text-white hover:bg-black/90 hover:text-white gap-2 font-semibold montserrat"
                key={index}
                icon={<UserCircle color="white" size={24} />}
              >
                <AuthTab modal={true} className="bg-white shadow-none w-full" />
              </C2ADialog>
            );
          default:
            return <HeaderLinkButton navContent={navContent} key={index} />;
        }
      })}
    </div>
  );
};
