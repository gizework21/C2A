interface FooterTitleProps {
  title: string;
}

export const FooterTitle = ({ title }: FooterTitleProps) => {
  return (
    <h4 className=" text-kwhite-default font-semibold uppercase text-[14px] ">
      {title}
    </h4>
  );
};
