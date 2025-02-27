"use client";

import { useSearchParams } from "next/navigation";
import { Fragment } from "react";

export default function ChildrenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  console.log(searchParams.get("page"));
  return <Fragment key={searchParams.get("page")}>{children}</Fragment>;
}
