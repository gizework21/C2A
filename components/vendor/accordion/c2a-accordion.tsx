import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";

interface C2AAccordionProps {
  title: string;
  nestedAccordion: NestedAccordion[];
}

export const C2AAccordion = ({ title, nestedAccordion }: C2AAccordionProps) => {
  return (
    <Accordion type="multiple" className="w-full ">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger>
          <p className="pl-2">{title}</p>
        </AccordionTrigger>
        <AccordionContent>
          {nestedAccordion.map((accordion, index) => (
            <AccordionItem
              key={index}
              value={accordion.title}
              className="border-none pl-4"
            >
              <AccordionTrigger>{accordion.title}</AccordionTrigger>
              <AccordionContent>{accordion.children}</AccordionContent>
            </AccordionItem>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

interface NestedAccordion {
  title: string;
  children: React.ReactNode;
}
