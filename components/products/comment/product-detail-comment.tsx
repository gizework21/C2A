import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Button,
} from "@/components/ui";

import { ProductDetailCommentArea } from "./product-detail-comment-area";
import { ProductDetailCommentCard } from "./product-detail-comment-card";
import { ShowRatingStar } from "../../rating";
import session from "@/lib/session";
import { ProductReviewsDocument } from "@/graphql/product/products.generated";
import moment from "moment";
import { getServerClient } from "@/lib/server-client";
import { getImageUrl } from "@/lib";

interface ProductDetailCommentProps {
  productId: number;
}

export const ProductDetailComment = async ({
  productId,
}: ProductDetailCommentProps) => {
  const client = await getServerClient();
  const auth = await session();
  const { data } = await client.query(ProductReviewsDocument, {
    productId: productId,
  });

  return (
    <>
      <div className="my-10 space-y-4">
        <h1 className="poppins text-[28px] font-medium">Customer Reviews</h1>
        <div className="flex items-center gap-2">
          <ShowRatingStar rating={4} dark />
          <p className="text-kblack-review"> 11 Reviews</p>
        </div>
        {data?.productReviews?.objects?.length === 0 && (
          <p className="text-kgray-default">Be the first to review</p>
        )}

        <ProductDetailCommentArea
          name={auth?.user.firstName + " " + auth?.user.lastName}
        />
      </div>

      <div className="flex justify-between my-4">
        <h1 className="font-medium poppins text-[28px] ">11 Reviews</h1>
        <SortReview />
      </div>

      {data?.productReviews?.objects?.map((comment, index) => (
        <ProductDetailCommentCard
          key={index}
          data={{
            name: comment?.user?.firstName + " " + comment?.user?.lastName,
            rating: comment?.rating ?? 0,
            comment: comment?.content ?? "",
            image: comment?.user?.profilePic
              ? getImageUrl(comment?.user?.profilePic ?? "")
              : "https://images.unsplash.com/photo-1440589473619-3cde28941638?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwc3FldWFyZSUyMGltYWdlfGVufDB8fDB8fHww",
            time: moment(comment?.createdAt).fromNow(),
          }}
        />
      ))}

      {data?.productReviews?.hasNext && (
        <div className="flex justify-center">
          <Button
            className="rounded-full text-[16px] inter font-medium"
            variant="outline"
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
};

export const comments = [
  {
    name: "Sofia Harvetz",
    rating: 4,
    comment:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
    image:
      "https://images.unsplash.com/photo-1440589473619-3cde28941638?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwc3FldWFyZSUyMGltYWdlfGVufDB8fDB8fHww",
    subComment: {
      name: "Sofia Harvetz",
      rating: 4,
      comment:
        "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwc3FldWFyZSUyMGltYWdlfGVufDB8fDB8fHww",
    },
  },
  {
    name: "Nicolas Jensen",
    rating: 4,
    comment:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwc3FldWFyZSUyMGltYWdlfGVufDB8fDB8fHww",
  },
  {
    name: "John Doe",
    rating: 4,
    comment:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwc3FldWFyZSUyMGltYWdlfGVufDB8fDB8fHww",
  },
  {
    name: "Micheal Jackson",
    rating: 4,
    comment:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwc3FldWFyZSUyMGltYWdlfGVufDB8fDB8fHww",
  },
  {
    name: "Libron James",
    rating: 4,
    comment:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
    image:
      "https://images.unsplash.com/photo-1440589473619-3cde28941638?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwc3FldWFyZSUyMGltYWdlfGVufDB8fDB8fHww",
  },
];

const SortReview = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] ">
        <SelectValue placeholder="Newest" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort</SelectLabel>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="old">Old</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
