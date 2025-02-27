"use client";

import { C2AButton } from "@/components/buttons";
import { C2ADatePicker } from "@/components/calander";
import { FormError, FormSuccess } from "@/components/form-message";
import { C2AInputFormField } from "@/components/input";
import { Form } from "@/components/ui";
import { CreateCouponDocument } from "@/graphql/vendor/coupons/coupon.generated";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@urql/next";
import moment from "moment";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CouponsSchema = z.object({
  code: z.string(),
  discountPercent: z.coerce.number(),
  endDate: z.date(),
  startDate: z.date(),
});

const Page = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);

  const form = useForm<z.infer<typeof CouponsSchema>>({
    resolver: zodResolver(CouponsSchema),
    defaultValues: {
      code: "",
      discountPercent: 0,
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  const [{ fetching }, excuteMutation] = useMutation(CreateCouponDocument);

  async function onSubmit(data: z.infer<typeof CouponsSchema>) {
    const { startDate, endDate, ...rest } = data;
    const sDate = moment(startDate).format("YYYY-MM-DD");
    const eDate = moment(endDate).format("YYYY-MM-DD");
    const res = await excuteMutation({
      startDate: sDate,
      endDate: eDate,
      ...rest,
    });

    if (res.error) {
      setError(res.error.message);
    }

    if (res.data) {
      setSuccess("Coupon created successfully");
    }
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex w-full max-w-2xl p-4 items-start bg-white">
        <div className="w-full flex flex-col items-center gap-4">
          <h1 className="font-semibold inter text-[20px] max-w-2xl">
            Add coupons
          </h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-xl space-y-4"
            >
              <C2AInputFormField
                showIcon={false}
                label="Discount percent"
                name="discountPercent"
                control={form.control}
                placeholder={"Discount percent"}
                type="number"
              />

              <C2AInputFormField
                showIcon={false}
                label="Code"
                name="code"
                control={form.control}
                placeholder={"Code"}
              />

              <C2ADatePicker
                label="Start Date"
                name="startDate"
                control={form.control}
                placeholder={"Start Date"}
              />

              <C2ADatePicker
                label="End Date"
                name="endDate"
                control={form.control}
                placeholder={"End Date"}
              />

              <FormError message={error} />
              <FormSuccess message={success} />

              <div className="flex gap-2">
                <C2AButton disabled={fetching}>Add</C2AButton>
                <C2AButton
                  disabled={fetching}
                  variant={"outline"}
                  type="button"
                >
                  Cancel
                </C2AButton>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
