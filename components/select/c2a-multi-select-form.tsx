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
  Badge,
} from "@/components/ui";
import { cn } from "@/lib";

type SelectOption = {
  label: string;
  value: string;
};

interface C2AMultiSelectFormProps<TFormValues extends FieldValues> {
  label: string;
  placeholder: string;
  name: Path<TFormValues>;
  control: Control<TFormValues> | undefined;
  className?: string;
  items: SelectOption[];
}

export const C2AMultiSelectForm = <TFormValues extends FieldValues>({
  label,
  placeholder,
  name,
  control,
  className,
  items,
}: C2AMultiSelectFormProps<TFormValues>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const selectedItems: string[] = field.value || [];

        const handleSelect = (value: string) => {
          if (!selectedItems.includes(value)) {
            field.onChange([...selectedItems, value]);
          }
        };

        const handleRemove = (value: string) => {
          field.onChange(
            selectedItems.filter((item: string) => item !== value)
          );
        };

        return (
          <FormItem className={cn(className)}>
            <FormLabel className="text-black text-[16px]" htmlFor={name}>
              {label}
            </FormLabel>
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedItems.map((item: string) => (
                <Badge
                  key={item}
                  onClick={() => handleRemove(item)}
                  className="cursor-pointer"
                >
                  {items.find((option) => option.value === item)?.label}
                </Badge>
              ))}
            </div>
            <Select onValueChange={handleSelect}>
              <FormControl className="border-none">
                <SelectTrigger className="focus:ring-0 focus:ring-offset-0 bg-kinput-bg text-kgray-default">
                  <SelectValue placeholder={`Select ${placeholder}`} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
