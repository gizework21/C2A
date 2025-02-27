import { cn } from "@/lib";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "px-[.5rem] py-6 lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem]",
        className
      )}
    >
      {children}
    </div>
  );
};
