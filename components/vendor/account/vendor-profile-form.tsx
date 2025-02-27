"use client";

import { C2AButton, LinkButton } from "@/components/buttons";
import { FormError, FormSuccess } from "@/components/form-message";
import { C2AInputFormField } from "@/components/input";
import { CircularLoading } from "@/components/loading";
import { Form } from "@/components/ui";
import { VendorProfileSchema } from "@/lib";
import { VendorProfileAction } from "@/lib/actions/vendor";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const VendorProfileForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const router = useRouter();

  const searchParam = useSearchParams();

  const fname = searchParam.get("firstName");
  const lname = searchParam.get("lastName");
  const phone = searchParam.get("phone");
  const profilePic = searchParam.get("profilePic");
  const email = searchParam.get("email");

  const form = useForm<z.infer<typeof VendorProfileSchema>>({
    resolver: zodResolver(VendorProfileSchema),
    defaultValues: {
      firstname: fname ?? "",
      lastname: lname ?? "",
      phone: phone ?? "",
      email: email ?? "",
    },
  });

  function onSubmit(data: z.infer<typeof VendorProfileSchema>) {
    setSuccess(undefined);
    setError(undefined);

    startTransition(() => {
      VendorProfileAction(data).then((res) => {
        if (res?.error) {
          setError(res.error);
        }
        if (res?.success) {
          setSuccess(res.success);
          router.push("/vendor/profile");
        }
      });
    });
  }
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full max-w-2xl bg-white p-4 rounded-lg shadow-md"
        >
          <div className="flex gap-4">
            <div className="w-full space-y-4">
              <h1 className="text-[24px] font-semibold">Edit your Profile</h1>
              <C2AInputFormField
                showIcon={false}
                label={"First name"}
                placeholder={"First name"}
                name={"firstname"}
                control={form.control}
              />
              <C2AInputFormField
                showIcon={false}
                label={"Last name"}
                placeholder={"Last name"}
                name={"lastname"}
                control={form.control}
              />
              <C2AInputFormField
                showIcon={false}
                label={"Phone number"}
                placeholder={"Phone number"}
                name={"phone"}
                control={form.control}
              />
              <C2AInputFormField
                showIcon={false}
                label={"Email"}
                placeholder={"Email"}
                name={"email"}
                control={form.control}
              />
            </div>

            <div className="space-y-2">
              <div className="size-[180px] bg-white flex flex-col items-center justify-center flex-shrink-0 border">
                <h1 className="font-semibold inter">Profile picture</h1>
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile"
                  width={500}
                  height={500}
                  className="size-[140px] rounded-full object-cover"
                />
              </div>
              <C2AButton variant="outline" className="w-full" size="sm">
                Upload
              </C2AButton>
              <C2AButton className="w-full" variant="destructive" size="sm">
                Remove
              </C2AButton>
            </div>
          </div>

          <FormError message={error} />
          <FormSuccess message={success} />

          <div className="flex gap-4">
            <C2AButton disabled={isPending}>
              {isPending ? <CircularLoading /> : "Save changes"}
            </C2AButton>
            <LinkButton href="/vendor/profile" variant="outline">
              Cancel
            </LinkButton>
          </div>
        </form>
      </Form>
    </div>
  );
};
