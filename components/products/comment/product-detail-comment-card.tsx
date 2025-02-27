import { ShowRatingStar } from "../../rating";
import Image from "next/image";

interface Icomment {
  name: string;
  rating: number;
  comment: string;
  image: string;
  subComment?: Icomment;
  time?: string;
}

interface CommentCardProps {
  data: Icomment;
}

export const ProductDetailCommentCard = ({ data }: CommentCardProps) => {
  const { name, rating, comment, image, subComment } = data;
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          src={image}
          width={500}
          height={500}
          alt={name}
          className="rounded-full size-[72px] flex-shrink-0 object-cover"
        />
        <div className="space-y-4 inter">
          <h1 className="font-semibold text-[20px] text-kblack-review">
            {name}
          </h1>
          <ShowRatingStar rating={rating} dark />
          <p className="line-clamp-2 text-[16px] text-kgray-default text-justify">
            {comment}
          </p>
          <div className="flex gap-4">
            <p className="text-[12px] text-kgray-default">
              {data.time ? data.time : "about 1 hour ago"}
            </p>
            {/* <button className="font-semibold text-[12px]">Like</button>
            <button className="font-semibold text-[12px]">Replay</button> */}
          </div>
        </div>
      </div>
      <div className="scale-75 lg:scale-75">
        {subComment && <ProductDetailCommentCard data={subComment} />}
      </div>
      <hr className="my-4" />
    </div>
  );
};
