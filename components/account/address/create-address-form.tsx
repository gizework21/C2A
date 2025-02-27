"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui";
import { C2AComboBox } from "@/components/command";
import { C2AButton, LinkButton } from "@/components/buttons";
import { C2ACheckboxForm } from "@/components/checkbox";
import { C2AInputFormField } from "@/components/input";
import { CreateAddressSchema } from "@/lib";
import { CreateUserAddressAction } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { FormError, FormSuccess } from "@/components/form-message";
import { CircularLoading } from "@/components/loading";
import Phone from "@/components/input/phone";

export const CreateAddressForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const router = useRouter();

  const form = useForm<z.infer<typeof CreateAddressSchema>>({
    resolver: zodResolver(CreateAddressSchema),
    defaultValues: {
      country: "",
      city: "",
      phone: "",
      state: "",
      street1: "",
      zipcode: "",
      street2: "",
      isDefault: false,
    },
  });

  function onSubmit(data: z.infer<typeof CreateAddressSchema>) {
    setError(undefined);
    setSuccess(undefined);

    startTransition(() => {
      CreateUserAddressAction(data).then((res) => {
        if (res.error) {
          setError(res.error);
        }
        if (res.success) {
          setSuccess("Address created successfully");
          form.reset();
          router.push("/account/address");
        }
      });
    });
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
                label="State"
                name="state"
                control={form.control}
                placeholder={"Enter your state"}
              />
              <C2AInputFormField
                showIcon={false}
                label="Street1"
                name="street1"
                control={form.control}
                placeholder={"Enter your street1"}
              />
            </div>

            <Phone
              name={"phone"}
              control={form.control}
              label={"Phone Number"}
              placeholder={"Phone number"}
            />

            <div className="flex gap-4 w-full items-center justify-center">
              <C2AInputFormField
                showIcon={false}
                label="Zip code"
                name="zipcode"
                control={form.control}
                placeholder={"Zip code"}
              />
              <C2AInputFormField
                showIcon={false}
                label="Street2 (optional)"
                name="street2"
                control={form.control}
                placeholder={"Enter your street2"}
              />
            </div>

            <C2ACheckboxForm
              label={"Default"}
              name={"isDefault"}
              control={form.control}
            />

            <FormError message={error} />
            <FormSuccess message={success} />

            <div className="flex gap-2">
              <C2AButton disabled={isPending}>
                {isPending ? <CircularLoading /> : "Save Changes"}
              </C2AButton>
              <LinkButton href="/account" variant="outline">
                Cancel
              </LinkButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
