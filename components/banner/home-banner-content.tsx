import { LinkButton } from '../buttons';

interface BannerDispalayContentProps {
  title: string;
  description: string;
}

export const BannerDisplayContent = ({
  title,
  description,
}: BannerDispalayContentProps) => {
  return (
    <div className="absolute top-[30%] md:top-[40%] left-6 md:left-14 lg:left-20 text-kTextWhite w-1/2 montserrat">
      <div className="flex-col flex-shrink-0 items-start space-y-2 md:gap-10 max-w-xl">
        <div className="text-start text-[12px] md:text-[18px] lg:text-[24px]  font-bold line-clamp-2">
          {title}
        </div>
        <div className="flex flex-col items-start justify-start gap-1 md:gap-2 lg:gap-5">
          <p className="text-start line-clamp-1 md:block text-[12px] lg:text-[16px]  md:line-clamp-2 lg:line-clamp-3">
            {description}
          </p>
          <LinkButton
            href="/category/1"
            className="rounded-full py-2 px-4 lg:px-10 text-xs md:text-base md:font-bold"
          >
            Explore
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
