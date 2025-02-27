"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DiscountSchema } from "../../../lib";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui";
import { C2AButton } from "@/components/buttons";
import { C2ADatePicker } from "@/components/calander";
import { C2AInputFormField } from "@/components/input";
import { DiscountFormProduct } from "./discount-form-product";
import { CircularLoading } from "@/components/loading";
import { FormError, FormSuccess } from "@/components/form-message";
import { CreateDealsDocument } from "@/graphql/discount/discount.generated";
import { useMutation } from "@urql/next";
import { useDiscount } from "@/hooks/use-discount";
import moment from "moment";
import { useRouter } from "next/navigation";

export const DiscountForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const [, executeMutation] = useMutation(CreateDealsDocument);
  const router = useRouter();

  const disount = useDiscount();

  const productIds = disount.products.map((item) => {
    return item.id + "";
  });

  const form = useForm<z.infer<typeof DiscountSchema>>({
    resolver: zodResolver(DiscountSchema),
    defaultValues: {
      productIds: [],
      discountPercent: 0,
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  const onSubmit = (data: z.infer<typeof DiscountSchema>) => {
    startTransition(async () => {
      setError(undefined);
      setSuccess(undefined);

      const { startDate, endDate, productIds: pid, ...rest } = data;

      const res = await executeMutation({
        startDate: moment(startDate).format("YYYY-MM-DD"),
        endDate: moment(endDate).format("YYYY-MM-DD"),
        productIds: productIds,
        ...rest,
      });

      if (res.error) {
        setError(res.error.message);
      }

      if (res.data?.createDeal?.isSuccess) {
        setSuccess("Discount create success");
        router.push("/vendor/discount");
      }
    });
  };

  return (
    <div className="bg-white p-6 max-w-2xl my-4 rounded-[8px]">
      <DiscountFormProduct />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 my-4">
          <C2AInputFormField
            showIcon={false}
            inputWrapperClassName="border"
            label={"Discount Percent"}
            placeholder={"Discount Percent"}
            name={"discountPercent"}
            control={form.control}
          />
          <C2ADatePicker
            label={"Start Date"}
            name={"startDate"}
            control={form.control}
            className="border"
          />
          <C2ADatePicker
            label={"End Date"}
            name={"endDate"}
            control={form.control}
          />

          <FormError message={error} />
          <FormSuccess message={success} />

          <C2AButton disabled={isPending}>
            {isPending ? <CircularLoading /> : "Add"}
          </C2AButton>
        </form>
      </Form>
    </div>
  );
};
