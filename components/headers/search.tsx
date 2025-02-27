"use client";

import { Input } from "../ui";
import { Search as Tearch } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  const handleFocus = () => {
    replace("/search");
  };

  return (
    <div
      className={
        "border w-full rounded-[10px] lg:rounded-r-full flex items-center gap-1 border-kaccent py-[0.9px]  lg:rounded-l-none"
      }
    >
      <Input
        className="outline-none rounded-[10px] ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0  lg:rounded-l-none  border-none px-2"
        placeholder="Search for products..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        onFocus={handleFocus}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <div className="px-2 flex items-center justify-center">
        <Tearch
          className="bg-kaccent rounded-full  text-white flex items-center justify-center p-1"
          size={28}
        />
      </div>
    </div>
  );
};

export default Search;
