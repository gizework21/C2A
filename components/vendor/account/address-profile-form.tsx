"use client";

import { C2AButton } from "@/components/buttons";
import { FormError, FormSuccess } from "@/components/form-message";
import { C2AInputFormField } from "@/components/input";
import { CircularLoading } from "@/components/loading";
import { Form } from "@/components/ui";
import { UpdateVendorAddressSchema } from "@/lib";
import { UpdateVendorAddressProfileAction } from "@/lib/actions/vendor";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const AddressProfileForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);

  const router = useRouter();

  const searchParam = useSearchParams();

  const country = searchParam.get("country");
  const subCity = searchParam.get("subCity");
  const location = searchParam.get("location");
  const woreda = searchParam.get("woreda");

  const form = useForm<z.infer<typeof UpdateVendorAddressSchema>>({
    resolver: zodResolver(UpdateVendorAddressSchema),
    defaultValues: {
      addressId: "",
      country: "",
      city: "",
      // region: "",
      street1: "",
      street2: "",
      state: "",
      zipcode: "",
      phone: "",
      // additionalInfo: "",
      isDefault: false,
    },
  });

  function onSubmit(data: z.infer<typeof UpdateVendorAddressSchema>) {
    startTransition(() => {
      setError(undefined);
      setSuccess(undefined);
      UpdateVendorAddressProfileAction(data).then((res) => {
        if (res.error) {
          setError(res.error);
        }
        if (res.success) {
          setSuccess(res.success);
          router.push("/vendor/profile");
        }
      });
    });
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex w-full max-w-2xl p-4 items-start bg-white">
        <div className="w-full flex flex-col items-center gap-4">
          <h1 className="font-semibold inter text-[20px] max-w-2xl">
            Edit address
          </h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-xl space-y-4"
            >
              <C2AInputFormField
                showIcon={false}
                label="Country"
                name="country"
                control={form.control}
                placeholder={"Enter your country"}
              />
              <C2AInputFormField
                showIcon={false}
                label="Street 1"
                name="street1"
                control={form.control}
                placeholder={"Ener your street 1"}
              />

              <C2AInputFormField
                showIcon={false}
                label="Street 2"
                name="street2"
                control={form.control}
                placeholder={"Ener your street 2"}
              />
              <C2AInputFormField
                showIcon={false}
                label="State"
                name="state"
                control={form.control}
                placeholder={"state"}
              />
              <C2AInputFormField
                showIcon={false}
                label="Zip code"
                name="zipcode"
                control={form.control}
                placeholder={"Enter your zip code"}
              />

              <C2AInputFormField
                showIcon={false}
                label="Phone"
                name="phone"
                control={form.control}
                placeholder={"Enter your phone"}
              />

              <FormError message={error} />
              <FormSuccess message={success} />

              <div className="flex gap-2">
                <C2AButton disabled={isPending}>
                  {isPending ? <CircularLoading /> : "Save"}
                </C2AButton>
                <C2AButton disabled={isPending} variant={"outline"}>
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
