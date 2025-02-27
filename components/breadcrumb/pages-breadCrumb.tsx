import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui";
import { cn } from "@/lib";

import { Container } from "../wrappers";
import Link from "next/link";
import { ChevronRight, Slash } from "lucide-react";

interface PagesBreadcrumbProps {
  title: string;
  links: BreadcrumbLinks[];
  gradient?: boolean;
  className?: string;
}

export interface BreadcrumbLinks {
  href: string;
  text: string;
}

export const PagesBreadcrumb = ({
  title,
  links,
  gradient = true,
  className,
}: PagesBreadcrumbProps) => {
  return (
    <div
      className={cn(
        gradient &&
          "h-[128px] bg-gradient-to-r from-kblack-review to-kprimary-950 my-4 flex items-center"
      )}
    >
      <Container>
        <h1 className="text-white font-extrabold text-[26px] montserrat">
          {title}
        </h1>
        <Breadcrumb className="flex items-center montserrat ">
          <BreadcrumbList>
            {links.map((link, index) => (
              <div
                key={index}
                className={cn("flex items-center gap-1", className)}
              >
                <BreadcrumbItem>
                  <Link
                    href={link.href}
                    className={`${
                      gradient
                        ? "text-white"
                        : "text-black hover:text-black/60 duration-150"
                    } ${
                      links[links.length - 1] === link ? "font-bold" : ""
                    } text-sm`}
                  >
                    {link.text}
                  </Link>
                </BreadcrumbItem>
                {links[links.length - 1] !== link && (
                  <BreadcrumbSeparator className="text-white">
                    {gradient ? (
                      <Slash color="#fffff" />
                    ) : (
                      <ChevronRight color="black" />
                    )}
                  </BreadcrumbSeparator>
                )}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </Container>
    </div>
  );
};
