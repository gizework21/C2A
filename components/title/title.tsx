import { cn } from "@/lib";

interface TitleProps {
  title: string;
  subtitle?: string;
}

export const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="montserrat">
      <h1
        className={cn(
          "text-[24px] font-bold text-kblack-default",
          !subtitle && "my-6"
        )}
      >
        {title}
      </h1>
      <p className="font-medium text-[16px] mb-6 -pb-4 text-kslate-default">
        {subtitle}
      </p>
    </div>
  );
};
