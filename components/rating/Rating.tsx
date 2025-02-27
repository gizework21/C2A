import { ShowRatingStar } from "./RatingStart";

export const SingleRatingStar = () => {
  return (
    <>
      <div className="max-h-[174px] overflow-y-scroll gap-1">
        {[...Array(5)].map((_, index) => (
          <div key={index} className=" px-2 flex w-full justify-between ">
            <ShowRatingStar rating={index + 1} />
            <input type="checkbox" className="justify-end" />
          </div>
        ))}
      </div>
    </>
  );
};
