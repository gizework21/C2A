import { StarIcon } from "lucide-react";

interface RatingStarProps {
  readonly rating: number;
  className?: string;
  dark?: boolean;
}

export const ShowRatingStar = ({
  rating,
  className,
  dark,
}: RatingStarProps) => {
  return (
    <div className={`flex ${className}`}>
      {[...Array(5)].map((_, index) => {
        if (index + 1 <= rating) {
          return (
            <StarIcon
              key={index}
              color={dark ? "#141718" : "#FFC403"}
              fill={dark ? "#141718" : "#FFC403"}
            />
          );
        } else {
          return dark ? (
            <StarIcon key={index} color="#6C7275" />
          ) : (
            <StarIcon key={index} color="#CBCBCB" />
          );
        }
      })}
    </div>
  );
};
