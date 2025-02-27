import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui";
import { cn } from "@/lib";
import { Control, FieldValues, Path } from "react-hook-form";
interface C2ATextAreaFormFieldProps<TFormValues extends FieldValues> {
  label: string;
  placeholder: string;
  name: Path<TFormValues>;
  control: Control<TFormValues> | undefined;
  className?: string;
  inputClassName?: string;
  bgColor?: boolean;
}

export const C2ATextAreaFormField = <TFormValues extends FieldValues>({
  label,
  placeholder,
  name,
  control,
  className,
  inputClassName,
  bgColor = false,
}: C2ATextAreaFormFieldProps<TFormValues>) => {
  const error = control?._formState.errors[name]?.message;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("w-full", className)}>
          <FormLabel className="text-black text-[16px]" htmlFor={name}>
            {label}
          </FormLabel>
          <FormControl>
            <div
              className={cn(
                "flex placeholder:text-black items-center rounded-lg",
                error && "border border-kred-default px-1",
                !bgColor && "bg-kinput-bg"
              )}
            >
              <div
                className={cn(
                  "flex w-full rounded-lg border-none",
                  !bgColor && "bg-kinput-bg"
                )}
              >
                <textarea
                  id={name}
                  placeholder={placeholder}
                  className={cn(
                    "outline-none rounded-r-md w-full py-3 pr-2 rounded-lg ring-0 focus-visible:ring-0 border-none  focus:outline-none focus:border-none focus-visible:ring-offset-0 px-3",
                    !bgColor && "bg-kinput-bg",
                    inputClassName
                  )}
                  {...field}
                />
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
