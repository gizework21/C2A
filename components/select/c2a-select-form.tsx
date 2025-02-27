"use client";

import { Control, FieldValues, Path } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { cn } from "@/lib";

type SelectOption = {
  label: string;
  value: string;
};

interface C2ASelectFormProps<TFormValues extends FieldValues> {
  label: string;
  placeholder: string;
  name: Path<TFormValues>;
  control: Control<TFormValues> | undefined;
  className?: string;
  items: SelectOption[];
  onChange?: (value: string) => void;
  value?: string;
}

export const C2ASelectForm = <TFormValues extends FieldValues>({
  label,
  placeholder,
  name,
  control,
  className,
  items,
  onChange,
  value,
}: C2ASelectFormProps<TFormValues>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          <FormLabel className="text-black text-[16px]" htmlFor={name}>
            {label}
          </FormLabel>
          <Select
            onValueChange={(value) => {
              field.onChange(value);
              onChange && onChange(value);
            }}
            defaultValue={field.value}
            value={value || field.value}
          >
            <FormControl className="border-none">
              <SelectTrigger className="focus:ring-0 focus:ring-offset-0 bg-kinput-bg text-kgray-default">
                <SelectValue placeholder={`Select ${placeholder}`} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items?.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
