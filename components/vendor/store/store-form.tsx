"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DialogClose, Form } from "@/components/ui";

import { useState, useTransition } from "react";
import { z } from "zod";

import { VendorStoreSchema } from "../../../lib";
import { C2AInputFormField } from "@/components/input";
import { C2AButton } from "@/components/buttons";
import { SupplierQuery } from "@/graphql/vendor/store/vendorStore.generated";
import { UpdateVendorAction } from "@/lib/actions/vendor/store";
import { CircularLoading } from "@/components/loading";

interface StoreFormProps {
  vendorId: string;
  data: SupplierQuery | undefined;
}

export const StoreForm = ({ vendorId, data }: StoreFormProps) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);

  const form = useForm<z.infer<typeof VendorStoreSchema>>({
    resolver: zodResolver(VendorStoreSchema),
    defaultValues: {
      storeName: data?.supplier?.storeName ?? "",
      country: data?.supplier?.country ?? "",
      region: data?.supplier?.region ?? "",
      subCity: data?.supplier?.subCity ?? "",
      location: data?.supplier?.location ?? "",
      description: data?.supplier?.description ?? "",
      referenceCode: data?.supplier?.referenceCode ?? "",
      // categories: [],
      tinNumber: data?.supplier?.tinNumber ?? "",
      email: data?.supplier?.email ?? "",
      phone: data?.supplier?.phone ?? "",
      supportPhone: data?.supplier?.supportPhone ?? "",
      tradeName: data?.supplier?.tradeName ?? "",
    },
  });

  function onSubmit(data: z.infer<typeof VendorStoreSchema>) {
    startTransition(() => {
      UpdateVendorAction(data).then((res) => {
        if (res?.message === "store updated") {
          setSuccess("store updated successfully");
        } else {
          setError("An error occured");
        }
      });
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-4 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <C2AInputFormField
                inputWrapperClassName="border"
                showIcon={false}
                label={"Store Name"}
                placeholder={"Enter store name"}
                name={"storeName"}
                control={form.control}
              />
              <C2AInputFormField
                inputWrapperClassName="border"
                showIcon={false}
                label={"country"}
                placeholder={"Enter country"}
                name={"country"}
                control={form.control}
              />
              <C2AInputFormField
                inputWrapperClassName="border"
                showIcon={false}
                label={"region"}
                placeholder={"Enter region"}
                name={"region"}
                control={form.control}
              />
              <C2AInputFormField
                inputWrapperClassName="border"
                showIcon={false}
                label={"subCity"}
                placeholder={"Enter subCity"}
                name={"subCity"}
                control={form.control}
              />
              <C2AInputFormField
                inputWrapperClassName="border"
                showIcon={false}
                label={"location"}
                placeholder={"Enter location"}
                name={"location"}
                control={form.control}
              />
              <C2AInputFormField
                inputWrapperClassName="border"
                showIcon={false}
                label={"description"}
                placeholder={"description"}
                name={"description"}
                control={form.control}
              />
            </div>

            <div className="space-y-2">
              <C2AInputFormField
                inputWrapperClassName="border"
                showIcon={false}
                label={"referenceCode"}
                placeholder={"Enter referenceCode"}
                name={"referenceCode"}
                control={form.control}
              />
              <C2AInputFormField
                inputWrapperClassName="border"
                showIcon={false}
                label={"TIN Number"}
                placeholder={"Enter TIN number"}
                name={"tinNumber"}
                control={form.control}
              />
              <C2AInputFormField
                inputWrapperClassName="border"
                showIcon={false}
                label={"Email"}
                placeholder={"Enter email"}
                name={"email"}
                control={form.control}
              />
              <C2AInputFormField
                inputWrapperClassName="border"
                showIcon={false}
                label={"Phone Number"}
                placeholder={"Enter phone number"}
                name={"phone"}
                control={form.control}
              />
              <C2AInputFormField
                inputWrapperClassName="border"
                showIcon={false}
                label={"Support Phone Number"}
                placeholder={"Enter support phone number"}
                name={"supportPhone"}
                control={form.control}
              />
              <C2AInputFormField
                inputWrapperClassName="border"
                showIcon={false}
                label={"tradeName"}
                placeholder={"Enter tradeName"}
                name={"tradeName"}
                control={form.control}
              />
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <C2AButton className="contained" disabled={isPending}>
              {isPending ? <CircularLoading /> : "Save changes"}
            </C2AButton>
            <DialogClose>
              <C2AButton variant="outline">Cancel</C2AButton>
            </DialogClose>
          </div>
        </form>
      </Form>
    </>
  );
};
