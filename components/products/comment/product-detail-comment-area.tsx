"use client";
import { useState } from "react";

import { Button } from "@/components/ui";
import { ProductDetailBottomInputFIeld } from "./product-detail-bottom-input-fIeld";

interface ProductDetailCommentAreaProps {
  name?: string;
}
export const ProductDetailCommentArea = ({
  name,
}: ProductDetailCommentAreaProps) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        className="rounded-full bg-white border border-kaccent text-black inter font-medium text-[18px] hover:bg-black/90 hover:text-white"
        onClick={() => {
          setShow((show) => {
            return (show = !show);
          });
        }}
      >
        Write Review
      </Button>

      {show && <ProductDetailBottomInputFIeld name={name} />}
    </>
  );
};
