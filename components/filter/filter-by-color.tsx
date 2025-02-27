import { cn } from "@/lib";
import { updateUrlParams } from "../../lib";
import { Title } from "../title";
import Link from "next/link";
import { C2ACheckbox } from "../checkbox";
import { ProductPageSearchParams } from "@/lib";

interface Color {
  readonly name: string;
  readonly id: string;
  readonly color: string;
}

const colors: Color[] = [
  {
    name: "Black",
    id: "Black",
    color: "bg-black",
  },
  {
    name: "Blue",
    id: "blue",
    color: "bg-filter-blue",
  },
  {
    name: "Gold",
    id: "gold",
    color: "bg-kaccent",
  },
  {
    name: "Silver",
    id: "silver",
    color: "bg-filter-gray",
  },
  {
    name: "Purple",
    id: "purple",
    color: "bg-kpurple-default",
  },
];

type FilterByColorProps = {
  href: ProductPageSearchParams;
};

export const FilterByColor = ({ href }: FilterByColorProps) => {
  let checked = false;

  return (
    <>
      <Title title={"Colors"} />
      <div className="max-h-[174px] overflow-y-scroll">
        {colors.map((item) => {
          checked =
            href.color === item.name.toLowerCase() ||
            (Array.isArray(href.color) &&
              href.color.includes(item.name.toLowerCase()));

          return (
            <div key={item.id} className="p-2 flex w-full justify-between px-4">
              <div className="flex justify-between w-20 items-center gap-2">
                <p className="line-clamp-1 text-sm text-kgray-text">
                  {item.name}
                </p>
                <div
                  className={cn(`h-[19px] w-[24px]  rounded-full`, item.color)}
                />
              </div>

              <Link
                replace={true}
                scroll={false}
                href={updateUrlParams({
                  title: "color",
                  value: item.name.toLowerCase(),
                  checked,
                  href,
                })}
              >
                <C2ACheckbox id={item.id} checked={checked} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
