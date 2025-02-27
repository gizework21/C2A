"use client";

import { LinkButton, C2AButton } from "@/components/buttons";
import { FormError, FormSuccess } from "@/components/form-message";
import { C2AInputFormField } from "@/components/input";
import { CircularLoading } from "@/components/loading";
import { Form } from "@/components/ui";
import { GetUserProfileQuery } from "@/graphql/account/profile.generated";
import { ProfileFormSchema } from "@/lib";
import { UpdateProfileAction } from "@/lib/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface ProfileFormProps {
  data: GetUserProfileQuery;
}

export const ProfileUpdateForm = ({ data }: ProfileFormProps) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const router = useRouter();

  const form = useForm<z.infer<typeof ProfileFormSchema>>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      email: data.getMe?.email || "",
      firstname: data.getMe?.firstName || "",
      lastname: data.getMe?.lastName || "",
      username: data.getMe?.username || "",
      phone: data.getMe?.phone || "",
      profilePic: data.getMe?.profilePic || "",
    },
  });

  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

  const onSubmit = async (values: z.infer<typeof ProfileFormSchema>) => {
    if (values.phone)
      startTransition(() => {
        UpdateProfileAction(values).then((res) => {
          if (res?.error) {
            setError(res.error);
          }
          if (res?.success) {
            router.push("/account/profile");
            setSuccess(res?.success);
          }
        });
      });
  };
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full max-w-2xl"
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

              <FormError message={error} />
              <FormSuccess message={success} />
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
              <div className="flex flex-col gap-2">
                <LinkButton href="#" size="sm">
                  Edit
                </LinkButton>

                <C2AButton variant="outline" className="text-red-500" size="sm">
                  Remove
                </C2AButton>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <C2AButton disabled={isPending}>
              {isPending ? <CircularLoading /> : "Save Changes"}
            </C2AButton>
            <LinkButton href="/account/profile">Cancel</LinkButton>
          </div>
        </form>
      </Form>
    </div>
  );
};
