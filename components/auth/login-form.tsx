"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui";

import { useState, useTransition } from "react";
import { C2AInputFormField } from "../input";
import { IconApple, IconFacebook, IconGoogle, LoginSchema } from "@/lib";
import { C2AButton } from "../buttons";

import { LoginAction } from "@/lib/actions/auth/login-action";
import { FormError, FormSuccess } from "../form-message";
import { CircularLoading } from "../loading";
import Image from "next/image";
import { useAuthTab } from "@/hooks";

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const [showPassword, setShowPassword] = useState(false);

  const authTab = useAuthTab();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      LoginAction(values).then((res) => {
        if (res?.error) {
          setError(res.error);
        }
        if (res?.success) {
          setSuccess(res.success);
        }
      });
    });
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <C2AInputFormField
            label={"Email"}
            placeholder={"example@mail.com"}
            name={"email"}
            control={form.control}
          />
          <C2AInputFormField
            label={"Password"}
            placeholder={"********"}
            name={"password"}
            type="password"
            showPassword={showPassword}
            setShowPassword={() => setShowPassword(!showPassword)}
            control={form.control}
          />

          <FormSuccess message={success} />
          <FormError message={error} />

          <Link href={""} className="flex justify-end">
            Forget password
          </Link>
          <div className="flex items-center justify-center">
            <C2AButton className="w-full" disabled={isPending}>
              {isPending ? <CircularLoading /> : "Login"}
            </C2AButton>
          </div>
        </form>
      </Form>

      <div className="flex items-center justify-center gap-2 my-4">
        <div className="h-[1px] w-full bg-kblack-default" />
        <p>OR</p>
        <div className="h-[1px] w-full bg-kblack-default" />
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <C2AButton
          variant="ghost"
          className="font-semibold text-kaccent"
          onClick={() => authTab.setActiveTab("register")}
        >
          Signup
        </C2AButton>

        <p className="text-center text-[14px]">or continue with </p>

        <div className="flex gap-6 justify-center">
          {social.map((Icon, i) => (
            <Image
              key={i}
              src={Icon}
              alt="social"
              width={28}
              height={28}
              className="cursor-pointer object-cover"
            />
          ))}
        </div>
      </div>
    </>
  );
};

const social = [IconFacebook, IconApple, IconGoogle];
