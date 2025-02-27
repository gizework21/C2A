"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui";

import { useState, useTransition } from "react";
import { z } from "zod";
import { VendorPaymentSchema } from "@/lib";
import { C2AButton } from "@/components/buttons";
import { C2ACheckboxForm } from "@/components/checkbox";
import { C2AInputFormField } from "@/components/input";

export const VendorPaymentForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof VendorPaymentSchema>>({
    resolver: zodResolver(VendorPaymentSchema),
    defaultValues: {
      bank: "",
      country: "",
      bankName: "",
      schedulePayout: "daily",
      defaultPayment: false,
    },
  });

  function onSubmit(data: z.infer<typeof VendorPaymentSchema>) {
    console.log(data);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-2xl"
        >
          <C2AInputFormField
            showIcon={false}
            inputWrapperClassName="border"
            label={"Select bank"}
            placeholder={"Select bank"}
            name={"bank"}
            control={form.control}
          />

          <C2AInputFormField
            showIcon={false}
            inputWrapperClassName="border"
            label={"Country"}
            placeholder={"Country"}
            name={"country"}
            control={form.control}
          />

          <C2AInputFormField
            showIcon={false}
            inputWrapperClassName="border"
            label={"Bank Name"}
            placeholder={"Bank Name"}
            name={"bankName"}
            control={form.control}
          />

          <C2AInputFormField
            showIcon={false}
            inputWrapperClassName="border"
            label={"Schedule Payout"}
            placeholder={"Schedule Payout"}
            name={"schedulePayout"}
            control={form.control}
          />

          <C2ACheckboxForm
            name="defaultPayment"
            label="Set as default payment"
            control={form.control}
          />

          <C2AButton>Save</C2AButton>
        </form>
      </Form>
    </>
  );
};
