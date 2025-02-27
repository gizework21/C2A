"use client";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { C2AButton } from "../buttons";
import { useRouter } from "next/navigation";
import { CircularLoading } from "../loading";
import { LogoutAction } from "@/lib/actions/auth";

export const LogoutButton = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm();

  const onSubmit = async () =>
    startTransition(() => {
      LogoutAction().then(() => {
        router.refresh();
        router.push("/");
      });
    });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-0">
        <C2AButton className="w-full" disabled={isPending}>
          {isPending ? <CircularLoading /> : "Logout"}
        </C2AButton>
      </form>
    </Form>
  );
};
