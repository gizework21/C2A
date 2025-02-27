"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui";

import { useState, useTransition } from "react";
import { z } from "zod";

import { C2AInputFormField, C2ATextAreaFormField } from "../input";
import { C2ARadioButtonGroup } from "../radio";

import { C2AButton } from "../buttons";
import { ContactUsSchema } from "@/lib";

export const ContactUsForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof ContactUsSchema>>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof ContactUsSchema>) {
    console.log(data);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <C2AInputFormField
              showIcon={false}
              label={"First Name"}
              placeholder={"Enter your name"}
              name={"firstname"}
              control={form.control}
            />
            <C2AInputFormField
              showIcon={false}
              label={"Last Name"}
              placeholder={"Enter your lastname"}
              name={"lastname"}
              control={form.control}
            />
            <C2AInputFormField
              showIcon={false}
              label={"Email"}
              placeholder={"example@mail.com"}
              name={"email"}
              control={form.control}
            />
            <C2AInputFormField
              showIcon={false}
              label={"Phone"}
              placeholder={"Enter your phone number"}
              name={"phone"}
              control={form.control}
            />
          </div>

          <C2ARadioButtonGroup
            label={"Select Subject"}
            name={"subject"}
            control={form.control}
            items={[
              {
                value: "general",
                label: "General Inquiry",
              },
              {
                value: "general1",
                label: "General Inquiry",
              },
              {
                value: "general2",
                label: "General Inquiry",
              },
            ]}
          />

          <C2ATextAreaFormField
            label={"Message"}
            placeholder={"Message"}
            name={"message"}
            control={form.control}
          />

          <C2AButton>Send Message</C2AButton>
        </form>
      </Form>
    </>
  );
};
