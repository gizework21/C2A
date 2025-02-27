"use client";

import { C2AButton } from "@/components/buttons";
import { FileUpload } from "@/components/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui";
import { useState, useTransition } from "react";
import { CombinedFormDataVendorSignupSchema, IdentityInfoSchema } from "@/lib";
import { useMutation } from "@urql/next";
import { CreateVendorDocument } from "@/graphql/vendor/signup/signup.generated";
import { useSession } from "next-auth/react";
import { FormError, FormSuccess } from "@/components/form-message";
import { CircularLoading } from "@/components/loading";

interface IdentityAndVerificationProps {
  formData: z.infer<typeof IdentityInfoSchema>;
  setFormData: React.Dispatch<
    React.SetStateAction<z.infer<typeof IdentityInfoSchema>>
  >;
  combinedFormData: z.infer<typeof CombinedFormDataVendorSignupSchema>;
  onNext: (data: z.infer<typeof IdentityInfoSchema>) => void;
  onFinish: () => void;
}

export const IdentityAndVerification = ({
  formData,
  setFormData,
  combinedFormData,
  onNext,
  onFinish,
}: IdentityAndVerificationProps) => {
  const session = useSession();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);

  const form = useForm<z.infer<typeof IdentityInfoSchema>>({
    resolver: zodResolver(IdentityInfoSchema),
    defaultValues: formData,
  });

  const [, executeMutation] = useMutation(CreateVendorDocument);

  const onSubmit = (values: z.infer<typeof IdentityInfoSchema>) => {
    const updatedCombinedFormData = {
      ...combinedFormData,
      ...values,
    };

    const { image, storeLocations, ...rest } = updatedCombinedFormData;

    console.log("all data", updatedCombinedFormData);

    startTransition(async () => {
      const res = await executeMutation({
        // image: image,
        user: session.data?.user.id,
        storeLocations: storeLocations.map((storeL) => storeL.name),
        ...rest,
      });

      if (res.error) {
        setError(res.error.message);
      }

      if (res.data?.createVendor) {
        setSuccess("Vendor created success");
        onFinish();
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div className="w-full space-y-6">
          <FormField
            control={form.control}
            name={"image"}
            render={({ field }) => (
              <FileUpload
                onChange={(e) => {
                  if (!e) return;
                  field.onChange(e);
                }}
              />
            )}
          />

          <FormError message={error} />
          <FormSuccess message={success} />

          <C2AButton className="w-full" disabled={isPending}>
            {isPending ? <CircularLoading /> : "Save and Finish"}
          </C2AButton>
        </div>
      </form>
    </Form>
  );
};
