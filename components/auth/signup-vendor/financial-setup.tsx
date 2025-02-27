"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui";
import { C2AInputFormField } from "@/components/input";
import { C2AButton } from "@/components/buttons";
import { C2ASelectForm } from "@/components/select";
import { FinacialInfoSchema } from "@/lib";

interface FinancialSetupProps {
  formData: z.infer<typeof FinacialInfoSchema>;
  onNext: (data: z.infer<typeof FinacialInfoSchema>) => void;
}

export const FinancialSetup = ({ formData, onNext }: FinancialSetupProps) => {
  const form = useForm<z.infer<typeof FinacialInfoSchema>>({
    resolver: zodResolver(FinacialInfoSchema),
    defaultValues: formData,
  });

  const onSubmit = (values: z.infer<typeof FinacialInfoSchema>) => {
    onNext(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 md:px-6 w-full"
      >
        <div className="w-full flex flex-col gap-2 items-center ">
          <h4 className="font-semibold">Financial Setup</h4>
          <div className="w-full space-y-6">
            <C2ASelectForm
              label={"Country :"}
              placeholder={"Country"}
              name={"country"}
              control={form.control}
              items={[
                { label: "Ethiopia", value: "Ethiopia" },
                { label: "Kenya", value: "Kenya" },
              ]}
            />
            <C2AInputFormField
              label={"Account Holder Name:"}
              placeholder={"Enter your account holder name"}
              name={"accountHolderName"}
              control={form.control}
            />
            <C2ASelectForm
              label={"Bank Name :"}
              placeholder={"Bank Name"}
              name={"bankName"}
              control={form.control}
              items={[
                { label: "CBE", value: "CBE" },
                { label: "BOA", value: "BOA" },
              ]}
            />
            <C2AInputFormField
              label={"Account Number :"}
              placeholder={""}
              name={"accountNumber"}
              control={form.control}
            />
            <C2AInputFormField
              label={"Account Type :"}
              placeholder={""}
              name={"accountType"}
              control={form.control}
            />
            <C2AInputFormField
              label={"Bank Branch :"}
              placeholder={""}
              name={"bankBranch"}
              control={form.control}
            />
            {/* <C2ARadioButtonGroup
              label={"Schedule Payout"}
              name={"schedule_Payout"}
              control={form.control}
              items={[
                { value: "daily", label: "Daily" },
                { value: "biweekly", label: "Biweekly" },
                { value: "weekly", label: "Weekly" },
                { value: "monthly", label: "Monthly" },
              ]}
            /> */}
            {/* <C2ACheckboxForm
              label={"Set as default Payment"}
              name={"defaultPayment"}
              control={form.control}
            /> */}
            <C2AButton className="w-full" type="submit">
              Next
            </C2AButton>
          </div>
        </div>
      </form>
    </Form>
  );
};
