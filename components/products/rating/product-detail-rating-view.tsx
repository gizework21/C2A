import { ShowRatingStar } from "../../rating";

export const ProductDetailRatingView = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-2 items-center font-medium">
      <ShowRatingStar rating={rating} />
      <p>{rating}</p>
    </div>
  );
};
