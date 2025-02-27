import { MouseEventHandler, ReactNode } from "react";

export const HomeBannerIndicator = (
  clickHandler: MouseEventHandler<HTMLButtonElement>,
  isSelected: boolean,
  index: number
): ReactNode => {
  const indicatorStyle = isSelected
    ? "flex-shrink-0 w-[1.6875rem] h-2.5 rounded-[0.3125rem] bg-accent mx-1 transition-all duration-300"
    : "flex-shrink-0 w-[0.9375rem] h-2.5 rounded-[0.3125rem] bg-kblack-default transition-all duration-300";

  return (
    <button key={index} className={indicatorStyle} onClick={clickHandler} />
  );
};
