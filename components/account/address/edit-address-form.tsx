"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui";
import { C2AComboBox } from "@/components/command";
import { C2AButton } from "@/components/buttons";
import { C2ACheckboxForm } from "@/components/checkbox";
import { C2AInputFormField, C2ATextAreaFormField } from "@/components/input";

const AddressSchema = z.object({
  country: z.string(),
  city: z.string().trim().min(1),
  region: z.string().trim().optional(),
  streetAddress: z.string().trim().min(1),
  zipCode: z.string().trim().optional(),
  vatNumber: z.string().trim().optional(),
  additionalInfo: z.string().trim().optional(),
  differentAddress: z.boolean().optional(),
});

export const EditAddressForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof AddressSchema>>({
    resolver: zodResolver(AddressSchema),
    defaultValues: {},
  });

  function onSubmit(data: z.infer<typeof AddressSchema>) {
    console.log(data);
  }
  return (
    <div className="flex">
      <div className="w-full flex flex-col items-center gap-4">
        <h1 className="font-semibold inter text-[20px] max-w-2xl">
          Edit address
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-xl space-y-4"
          >
            <div className="flex gap-4 w-full items-center justify-center">
              <C2AComboBox
                label="Country"
                name="country"
                control={form.control}
                options={[
                  {
                    label: "Ethiopia",
                    value: "ethiopia",
                  },
                  {
                    label: "Kenya",
                    value: "kenya",
                  },
                ]}
              />

              <C2AInputFormField
                showIcon={false}
                label="City"
                name="city"
                control={form.control}
                placeholder={"City"}
              />
            </div>
            <div className="flex gap-4 w-full items-center justify-center">
              <C2AInputFormField
                showIcon={false}
                label="Region"
                name="region"
                control={form.control}
                placeholder={"Region"}
              />
              <C2AInputFormField
                showIcon={false}
                label="Street address"
                name="streetAddress"
                control={form.control}
                placeholder={"Street address"}
              />
            </div>

            <div className="flex gap-4 w-full items-center justify-center">
              <C2AInputFormField
                showIcon={false}
                label="Zip code"
                name="zipCode"
                control={form.control}
                placeholder={"Zip code"}
              />
              <C2AInputFormField
                showIcon={false}
                label="VAT number"
                name="vatNumber"
                control={form.control}
                placeholder={"VAT number"}
              />
            </div>

            <C2ATextAreaFormField
              label="Additional info"
              name="additionalInfo"
              control={form.control}
              placeholder={"Additional info"}
            />

            <C2ACheckboxForm
              label={"Use Different Address for Shipping"}
              name={"differentAddress"}
              control={form.control}
            />

            <div className="flex gap-2">
              <C2AButton disabled={isPending}>Save Changes</C2AButton>
              <C2AButton variant="outline" disabled={isPending}>
                Cancel
              </C2AButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
