"use client";
import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui";
import { cn } from "@/lib";

interface RadioGroupFormProps<TFormValues extends FieldValues> {
  label: string;
  name: Path<TFormValues>;
  control: Control<TFormValues> | undefined;
  className?: string;
  items: Items[];
}

interface Items {
  value: string;
  label: string;
}

export const C2ARadioButtonGroup = <TFormValues extends FieldValues>({
  label,
  name,
  control,
  className,
  items,
}: RadioGroupFormProps<TFormValues>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("space-y-3", className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex gap-4"
            >
              {items.map((item) => (
                <FormItem
                  key={item.value}
                  className="flex items-center space-x-3 space-y-0"
                >
                  <FormControl>
                    <RadioGroupItem
                      value={item.value}
                      className="text-kaccent border-2 border-kaccent"
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{item.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
