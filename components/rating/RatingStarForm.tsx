"use client";

import { Control, FieldValues, Path } from "react-hook-form";
import { FormField } from "../ui";
import { StarIcon } from "lucide-react";

interface C2ARatingFormProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
  control: Control<TFormValues> | undefined;
}

export const C2ARatingForm = <TFormValues extends FieldValues>({
  name,
  control,
}: C2ARatingFormProps<TFormValues>) => {
  return (
    <div className="flex">
      <FormField
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <StarIcon
                    key={value}
                    className={`cursor-pointer ${
                      value <= field.value ? "text-[#d7a024]" : "text-[#CBCBCB]"
                    }`}
                    fill={value <= field.value ? "#d7a024" : "#CBCBCB"}
                    onClick={() => {
                      field.onChange(value);
                    }}
                  />
                ))}
                <RatingLevel rating={field.value} />
              </div>
              <input type="hidden" {...field} />
            </div>
          );
        }}
      />
    </div>
  );
};

const RatingLevel = ({ rating }: { rating: number }) => {
  switch (rating) {
    case 1:
      return <div>Bad</div>;
    case 2:
      return <div>Not Bad</div>;
    case 3:
      return <div>Good</div>;
    case 4:
      return <div>Very Good</div>;
    case 5:
      return <div>Excellent</div>;
    default:
      return <div>Rating</div>;
  }
};
