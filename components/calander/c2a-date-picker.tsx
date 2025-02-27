"use client";

import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui";
import { cn } from "@/lib";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./calander";
import { Control, FieldValues, Path } from "react-hook-form";

interface C2ASelectFormProps<TFormValues extends FieldValues> {
  label: string;
  name: Path<TFormValues>;
  control: Control<TFormValues> | undefined;
  className?: string;
  placeholder?: string;
}

export const C2ADatePicker = <TFormValues extends FieldValues>({
  label,
  name,
  control,
  className,
  placeholder,
}: C2ASelectFormProps<TFormValues>) => {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("w-full flex flex-col")}>
          <FormLabel className="text-black text-[16px]" htmlFor={name}>
            {label}
          </FormLabel>
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <FormControl className={cn("border", className)}>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal bg-kinput-bg ",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>{placeholder}</span>
                  )}
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent align="start" className=" w-auto p-0">
              <Calendar
                mode="single"
                captionLayout="dropdown-buttons"
                selected={field.value}
                onSelect={(e: any) => {
                  field.onChange(e);
                  setIsCalendarOpen(false);
                }}
                // disabled={(date) =>
                //   date > new Date() || date < new Date('1900-01-01')
                // }
                fromYear={1960}
                toYear={2030}
              />
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
};
