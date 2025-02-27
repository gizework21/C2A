import { C2AButton } from "@/components/buttons";
import { C2AInput } from "@/components/input";
import { Label, RadioGroup, RadioGroupItem } from "@/components/ui";
import { Mail } from "lucide-react";

export const TwoFAForm = () => {
  return (
    <div className="space-y-4 my-6">
      <RadioGroup defaultValue="comfortable" className="space-y-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="default"
            id="r1"
            className="border-kaccent text-kaccent"
          />
          <Label htmlFor="r1">
            <strong>EMAIL:</strong> I will get the verification code through my
            email account
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="comfortable"
            id="r2"
            className="border-kaccent text-kaccent"
          />
          <Label htmlFor="r2">
            <strong>SMS:</strong> I will get the verification code as SMS text
            message
          </Label>
        </div>
      </RadioGroup>

      <div className="flex items-center gap-2">
        <Mail size={44} />
        <C2AInput placeholder="Enter your Email address" className="border" />
      </div>

      <C2AButton>Send code</C2AButton>
    </div>
  );
};
