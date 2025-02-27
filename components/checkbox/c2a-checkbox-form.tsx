import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Checkbox,
} from "@/components/ui";

interface C2ACheckboxFormProps<TFormValues extends FieldValues> {
  label: string;
  name: Path<TFormValues>;
  control: Control<TFormValues> | undefined;
}

export const C2ACheckboxForm = <TFormValues extends FieldValues>({
  label,
  name,
  control,
}: C2ACheckboxFormProps<TFormValues>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                id={name}
                checked={field.value}
                onCheckedChange={field.onChange}
                className="border-kaccent data-[state=checked]:bg-kaccent"
                {...field}
              />
            </FormControl>
            <FormLabel htmlFor={name} className="text-sm">
              {label}
            </FormLabel>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
