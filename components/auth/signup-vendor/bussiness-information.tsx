"use client";

import { z } from "zod";
import { C2AButton } from "@/components/buttons";
import { C2AInputFormField } from "@/components/input";
import { Form } from "@/components/ui";
import { BusinessSignupSchema } from "@/lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { CircleMinus, CirclePlus } from "lucide-react";

interface BussinessInformationProps {
  formData: z.infer<typeof BusinessSignupSchema>;
  onNext: (data: z.infer<typeof BusinessSignupSchema>) => void;
}

export const BussinessInformation = ({
  formData,
  onNext,
}: BussinessInformationProps) => {
  const form = useForm<z.infer<typeof BusinessSignupSchema>>({
    resolver: zodResolver(BusinessSignupSchema),
    defaultValues: {
      ...formData,
      storeLocations: formData.storeLocations.length
        ? formData.storeLocations
        : [{ id: "", name: "" }],
    },
  });

  const { control, handleSubmit } = form;
  const { fields, append, remove } = useFieldArray({
    name: "storeLocations",
    control,
  });

  if (fields.length === 0) {
    append({ id: "", name: "" });
  }

  const onSubmit = (values: z.infer<typeof BusinessSignupSchema>) => {
    onNext(values);
  };

  const addStoreAddress = () => {
    append({ id: "", name: "" });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:px-6 w-full"
      >
        <div className="space-y-4 flex flex-col justify-center items-center">
          <h4 className="font-semibold">Business Information</h4>
          <div className="w-full flex flex-col gap-3">
            <C2AInputFormField
              label={"Store Name:"}
              placeholder={"Enter your name"}
              name={"storeName"}
              control={control}
            />
            <C2AInputFormField
              label={"Mobile No:"}
              placeholder={"+251900112233"}
              name={"phone"}
              control={control}
            />
            {/* Store Addresses */}
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="relative w-full flex items-center gap-2"
              >
                <C2AInputFormField
                  label={`Store Address ${index + 1}:`}
                  placeholder={"Enter address"}
                  name={`storeLocations.${index}.name`}
                  control={control}
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => remove(index)} // Remove the specific field
                    className="text-red-500 hover:text-red-700"
                  >
                    <CircleMinus className="h-5 w-5" />
                  </button>
                )}
              </div>
            ))}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={addStoreAddress}
                className="flex items-center gap-1 text-blue-500 hover:text-blue-700"
              >
                <CirclePlus className="h-5 w-5" />
                <span>Add Store Address</span>
              </button>
            </div>
            <C2AInputFormField
              label={"Region :"}
              placeholder={"****************"}
              name={"region"}
              control={form.control}
            />
            <C2AInputFormField
              label={"Woreda :"}
              placeholder={"****************"}
              name={"woreda"}
              control={form.control}
            />
            <C2AInputFormField
              label={"Tin Number:"}
              placeholder={"100000000"}
              name={"tinNumber"}
              control={control}
            />
            {/* Add other fields as necessary */}
            <C2AButton className="w-full" type="submit">
              Next
            </C2AButton>
          </div>
        </div>
      </form>
    </Form>
  );
};
