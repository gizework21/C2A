import { ReactNode } from "react";

interface ContactContentUsProps {
  icon: ReactNode;
  content: string;
}

export const ContactContentUs = ({ icon, content }: ContactContentUsProps) => {
  return (
    <div className="flex gap-4">
      <>{icon}</>
      <p className="text-kwhite-default text-[16px] poppins">{content}</p>
    </div>
  );
};
