"use client";

import { useQuery } from "@urql/next";
import { CircularLoading } from "../loading";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { useCategoryRoute } from "@/hooks";
import { GetCategoryByParentDocument } from "@/graphql/categories/categories.generated";
import { useRouter } from "next/navigation";
import { encodeUrlFormat } from "@/lib";
import { useState } from "react";

interface IChildren {
  title?: string;
  id?: string;
  children?: IChildren[];
}

export const CategoryDropdownHeaderMobile = () => {
  const categoryRoute = useCategoryRoute();
  const children = categoryRoute.children;
  const history = categoryRoute.history;
  const router = useRouter();
  const [currentCategories, setCurrentCategories] = useState<string[]>([]);

  const [{ data, fetching }] = useQuery({
    query: GetCategoryByParentDocument,
  });

  if (fetching) return <CircularLoading />;

  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-2">
        {history.length > 0 && (
          <button
            onClick={() => {
              categoryRoute.goBack();
              currentCategories.pop();
            }}
            className="flex items-center"
          >
            <ChevronLeft />
          </button>
        )}
        <p className="font-bold truncate">
          {currentCategories.length === 0
            ? "Categories"
            : currentCategories[currentCategories.length - 1]}
        </p>
      </div>

      {children?.map((child) => {
        return (
          <button
            key={child?.id} // Use `id` for unique keys instead of `title`
            className="w-full flex justify-between"
            onClick={() => {
              const url = encodeUrlFormat(child?.title ?? "");
              if (child?.children?.length) {
                currentCategories.push(child.title);
                categoryRoute.addChildren(child.children as Children[]);
              } else {
                router.push(`/category/${url}`);
              }
            }}
          >
            <p className="truncate">{child?.title}</p>
            {child?.children?.length ? <ChevronRight /> : null}
          </button>
        );
      })}

      {children.length === 0 &&
        data?.getCategoryByParent?.map((category) => {
          return (
            <button
              key={category?.id}
              className="w-full flex justify-between"
              onClick={() => {
                if (category?.children?.length) {
                  currentCategories.push(category.title);
                  categoryRoute.addChildren(category.children as Children[]);
                }
              }}
            >
              <p className="truncate">{category?.title}</p>
              {category?.children?.length ? <ChevronRight /> : null}
            </button>
          );
        })}
    </div>
  );
};

interface Children {
  __typename?: string | undefined;
  title: string;
  id: string;
  children?: Children[];
}
