"use client";
import { C2ADropdown, C2ADropdownContent } from "@/components/dropdown";
import { ProductCardReview } from "@/components/products";
import { ReviewsForVendorDocument } from "@/graphql/vendor/customer-reviews/customer-reviews.generated";
import { getImageUrl, Logo } from "@/lib";
import { useQuery } from "urql";

const CustomerReviews = () => {
  const categoryDropdownContent: C2ADropdownContent = {
    title: "Category",
    items: [{ name: "Electronics" }, { name: "Books" }, { name: "Clothing" }],
  };

  const subcategoryDropdownContent: C2ADropdownContent = {
    title: "Subcategory",
    items: [
      { name: "Smartphones" },
      { name: "Laptops" },
      { name: "Fiction" },
      { name: "Non-fiction" },
    ],
  };

  const sortByDropdownContent: C2ADropdownContent = {
    title: "Sort By",
    items: [
      { name: "Most Recent" },
      { name: "Highest Rated" },
      { name: "Lowest Rated" },
    ],
  };

  const [result] = useQuery({
    query: ReviewsForVendorDocument,
    variables: {
      page: 1,
      perPage: 10,
    },
  });

  const { data, fetching, error } = result;
  const reviews = data?.reviewsForVendor?.objects || [];

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-xl sm:text-2xl font-semibold">Customer Reviews</h1>
      </div>

      <div className="mb-4 pt-9">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kaccent mb-2 sm:mb-0 w-full sm:w-auto"
          />
          <div className="flex flex-col sm:flex-row sm:gap-2">
            <C2ADropdown
              buttonName="Category"
              content={categoryDropdownContent}
            />
            <C2ADropdown
              buttonName="Sub-category"
              content={subcategoryDropdownContent}
            />
            <C2ADropdown buttonName="Sort By" content={sortByDropdownContent} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {reviews.map((review) => (
          <ProductCardReview
            key={review?.product?.productId} // Assuming `review.id` is unique
            product={{
              id: parseInt(review?.product.productId || "0"),
              name: review?.product.productName || "",
              image:
                getImageUrl(
                  review?.product.images[review.product.images.length - 1]
                    ?.imageUrl ?? ""
                ) || Logo,
              price: review?.product.price || 0,
              discount: review?.product.discountPercent,
              rating: review?.product.rating || 0,
            }}
            className="custom-class"
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
