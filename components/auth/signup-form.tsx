"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui";

import { useState, useTransition } from "react";
import { z } from "zod";

import { C2AInputFormField } from "../input";
import { SignupSchema } from "@/lib";
import { C2ADatePicker } from "../calander";
import { SignupAction } from "@/lib/actions/auth/signup-action";
import { C2AButton } from "../buttons";
import { FormError, FormSuccess } from "../form-message";
import { C2ASelectForm } from "../select";
import { CircularLoading } from "../loading";
import Phone from "../input/phone";
import { useAuthTab } from "@/hooks";

export const SignupForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const [showPassword, setShowPassword] = useState(false);

  const authTab = useAuthTab();

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      username: "",
      dateOfBirth: new Date(),
      gender: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof SignupSchema>) {
    startTransition(() => {
      SignupAction(data).then((res) => {
        if (res?.message === "User created") {
          setSuccess("User created successfully");
        } else {
          setError("An error occurred");
        }
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <C2AInputFormField
            showIcon={false}
            label={"First Name"}
            placeholder={"Enter your name"}
            name={"firstName"}
            control={form.control}
          />
          <C2AInputFormField
            showIcon={false}
            label={"Last Name"}
            placeholder={"Enter your lastname"}
            name={"lastName"}
            control={form.control}
          />
          <C2AInputFormField
            showIcon={false}
            label={"Email"}
            placeholder={"example@mail.com"}
            name={"email"}
            control={form.control}
          />

          <Phone
            label={"Phone"}
            placeholder={"Enter your phone number"}
            name={"phone"}
            control={form.control}
          />
          <C2AInputFormField
            showIcon={false}
            label={"Username"}
            placeholder={"Johndoe"}
            name={"username"}
            control={form.control}
          />

          <C2ADatePicker
            label={"Date of birth"}
            name={"dateOfBirth"}
            control={form.control}
            placeholder="Date of birth"
          />

          <C2ASelectForm
            label={"Gender"}
            placeholder={"Gender"}
            name={"gender"}
            control={form.control}
            items={[
              {
                label: "Male",
                value: "M",
              },
              {
                label: "Femaile",
                value: "F",
              },
            ]}
          />

          <C2AInputFormField
            showIcon={false}
            label={"Password"}
            placeholder={"********"}
            name={"password"}
            type="password"
            showPassword={showPassword}
            setShowPassword={() => setShowPassword(!showPassword)}
            control={form.control}
          />

          <C2AInputFormField
            showIcon={false}
            label={"Confirm Password"}
            placeholder={"********"}
            name={"confirmPassword"}
            type="password"
            showPassword={showPassword}
            setShowPassword={() => setShowPassword(!showPassword)}
            control={form.control}
          />
        </div>

        <FormError message={error} />
        <FormSuccess message={success} />

        <div className="flex justify-center items-center gap-4">
          <p className="text-center font-semibold">Already have an account?</p>
          <C2AButton
            variant="ghost"
            className="font-semibold text-kaccent"
            type="button"
            onClick={() => authTab.setActiveTab("login")}
          >
            Signin
          </C2AButton>
        </div>

        <div className="flex items-center justify-center">
          <C2AButton className="w-full" type="submit" disabled={isPending}>
            {isPending ? <CircularLoading /> : "Signup"}
          </C2AButton>
        </div>
      </form>
    </Form>
  );
};
