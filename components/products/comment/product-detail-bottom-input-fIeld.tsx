"use client";

import { C2ATextAreaFormField } from "@/components/input";
import { CircularLoading } from "@/components/loading";

import { C2ARatingForm } from "@/components/rating";
import { Button, Form, toast } from "@/components/ui";
import { ProductReviewSchema } from "@/lib";
import { CreateProductReviewAction } from "@/lib/actions";

import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizonal } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

interface ProductDetailBottomInputFIeldProps {
  name?: string;
}

export const ProductDetailBottomInputFIeld = ({
  name,
}: ProductDetailBottomInputFIeldProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const param = useParams();
  const { id } = param;

  const form = useForm<z.infer<typeof ProductReviewSchema>>({
    resolver: zodResolver(ProductReviewSchema),
    defaultValues: {
      content: "",
      productId: id as string,
      rating: 1,
      title: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof ProductReviewSchema>) =>
    startTransition(() => {
      CreateProductReviewAction(value).then((res) => {
        if (res?.success) {
          router.refresh();
        }

        if (res?.error) {
          toast({
            title: "Error",
            description: "Already reviewed this product",
            duration: 2000,
          });
        }
      });
    });

  return (
    <div className="bg-kwhite-default p-2 space-y-4">
      <div className="flex items-center gap-2">
        <Image
          src={
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwc3FldWFyZSUyMGltYWdlfGVufDB8fDB8fHww"
          }
          width={40}
          height={40}
          alt={"James"}
          className="rounded-full size-[40px] object-cover"
        />
        <p>{name}</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full p-0 space-y-6"
        >
          <C2ATextAreaFormField
            inputClassName="bg-kgold-light border border-kaccent bg-kaccent/10 border-opacity-45 w-full h-[172px] p-2 "
            label={""}
            placeholder={""}
            name={"content"}
            control={form.control}
          />
          <C2ARatingForm name={"rating"} control={form.control} />
          <div className="flex w-full items-center justify-end">
            <Button className="gap-2 rounded-full px-4 py-2 bg-kgold-light text-black hover:text-white border border-kaccent">
              {isPending ? (
                <CircularLoading />
              ) : (
                <>
                  Submit <SendHorizonal />
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
