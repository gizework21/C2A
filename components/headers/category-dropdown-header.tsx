import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui";
import { encodeUrlFormat } from "@/lib";
import { cn } from "@/lib";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { CircularLoading } from "../loading";

import session from "@/lib/session";
import { Session } from "next-auth";
import { print } from "graphql";
import { CategoryType } from "@/graphql/types.generated";
import {
  GetCategoryByParentDocument,
  GetCategoryByParentQuery,
} from "@/graphql/categories/categories.generated";

interface CategoryDropdownHeaderProps {
  className?: string;
}

export const CategoryDropdownHeader = async ({
  className,
}: CategoryDropdownHeaderProps) => {
  const auth = await session();

  const data = (await fetchData(auth)) as GetCategoryByParentQuery;

  if (!data) return <CircularLoading />;

  const renderCategories = (categories: Category[]) => {
    return categories.map((category) => {
      const title = category?.title;
      const formattedTitle = encodeUrlFormat(title as string);

      if (category?.children && category.children.length > 0) {
        return (
          <MenubarSub key={category?.id}>
            <MenubarSubTrigger>{category?.title}</MenubarSubTrigger>
            <MenubarSubContent>
              {renderCategories(category.children)}
            </MenubarSubContent>
          </MenubarSub>
        );
      } else {
        return (
          <MenubarItem key={category?.id} asChild>
            <Link href={`/category/${formattedTitle}`}>{category?.title}</Link>
          </MenubarItem>
        );
      }
    });
  };

  return (
    <Menubar
      className={cn(
        `border-none bg-kgold-default rounded-l-full w-[226px] h-full ${className}`
      )}
    >
      <MenubarMenu>
        <MenubarTrigger className="data-[state=open]:bg-transparent [&[data-state=open]>svg]:rotate-180 focus:text-white data-[state=open]:text-white focus:bg-transparent text-white text-[16px] w-full flex justify-between hover:cursor-pointer">
          <p className="truncate montserrat">All Categories</p>
          <ChevronDown size={24} />
        </MenubarTrigger>
        <MenubarContent className="max-h-96 overflow-y-scroll scrollbar-hide">
          {renderCategories(data?.getCategoryByParent as Category[])}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

const fetchData = async (auth: Session | null) => {
  const query = print(GetCategoryByParentDocument);
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (auth?.user?.token) {
      headers.Authorization = `Bearer ${auth.user.token}`;
    }

    const response = await fetch(process.env.BASE_URL as string, {
      cache: "force-cache",
      method: "POST",
      headers,
      body: JSON.stringify({
        query: query,
      }),
    });

    const result = await response.json();

    return result.data;
  } catch (error) {
    console.log(error);
  }
};
interface Category {
  __typename?: CategoryType | undefined;
  title: string;
  id: string;
  children?: Category[];
}
