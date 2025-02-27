import { cn } from "@/lib";
import { CategoryDropdownHeader } from "./category-dropdown-header";
import { Input } from "../ui";
import Search from "./search";

interface HeaderSearchProps {
  className?: string;
}

export const HeaderSearch = ({ className }: HeaderSearchProps) => {
  return (
    <div className={cn("flex items-center w-full", className)}>
      <CategoryDropdownHeader className="hidden lg:flex" />
      <Search />
    </div>
  );
};
