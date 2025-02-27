import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";
import { cn } from "@/lib";
import { Control, FieldValues, Path } from "react-hook-form";
import { HTMLInputTypeAttribute } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

interface C2AInputFormFieldProps<TFormValues extends FieldValues> {
  label: string;
  placeholder: string;
  name: Path<TFormValues>;
  showIcon?: boolean;
  control: Control<TFormValues> | undefined;
  type?: HTMLInputTypeAttribute | undefined;
  showPassword?: boolean;
  setShowPassword?: () => void;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
  inputClassName?: string;
  bgColor?: boolean;
  inputWrapperClassName?: string;
}

export const C2AInputFormField = <TFormValues extends FieldValues>({
  label,
  placeholder,
  name,
  showIcon = true,
  control,
  type,
  showPassword = false,
  props,
  className,
  inputClassName,
  setShowPassword,
  inputWrapperClassName,
  bgColor = false,
}: C2AInputFormFieldProps<TFormValues>) => {
  const passwordOrConfirmPassword =
    name === "password" || name === "confirmPassword";
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
                "flex items-center rounded-lg",
                error && "border border-kred-default px-1",
                !bgColor && "bg-kinput-bg",
                inputWrapperClassName
              )}
            >
              {showIcon && (
                <div className={cn(showIcon && "px-3")}>
                  {showIcon && (
                    <ShowIcon name={name} error={error?.toString()} />
                  )}
                </div>
              )}

              <div
                className={cn(
                  "flex w-full rounded-lg border-none border ",
                  !bgColor && "bg-kinput-bg"
                )}
              >
                <Input
                  id={name}
                  type={
                    passwordOrConfirmPassword && showPassword ? "text" : type
                  }
                  placeholder={placeholder}
                  className={cn(
                    "outline-none rounded-r-md w-full py-3 pr-2 rounded-lg ring-0 focus-visible:ring-0 border-none  focus:outline-none focus:border-none focus-visible:ring-offset-0 placeholder:text-kgray-default",
                    !showIcon && "pl-3",
                    !bgColor && "bg-kinput-bg",
                    inputClassName
                  )}
                  {...field}
                  min={name === "password" ? 1 : undefined}
                  {...props}
                />
                {passwordOrConfirmPassword && (
                  <button
                    type="button"
                    onClick={setShowPassword}
                    className="flex items-center pr-2 bg-kinput-bg rounded-lg"
                  >
                    {showPassword ? (
                      <Eye color="black" />
                    ) : (
                      <EyeOff color="black" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const ShowIcon = <TFormValues extends FieldValues>({
  name,
  error,
}: {
  name: Path<TFormValues>;
  error?: string;
}) => {
  switch (name) {
    case "email":
      return <Mail size={24} color={error ? "red" : "black"} />;
    case "password":
      return <Lock size={24} color={error ? "red" : "black"} />;
    case "confirmPassword":
      return <Lock size={24} color={error ? "red" : "black"} />;
    default:
      return null;
  }
};
