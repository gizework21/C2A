import { cn } from "@/lib";

interface FormSuccessProps {
  message: string | undefined;
  className?: string;
}

export const FormSuccess = ({ message, className }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div
      className={cn(
        "bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500",
        className
      )}
    >
      <span>{message}</span>
    </div>
  );
};
