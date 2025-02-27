import { CheckoutDetailForm } from "@/components/checkout";

interface CheckoutPageProps {
  searchParams: {
    cartItems?: string;
    totalPrice?: string;
  };
}

const Page: React.FC<CheckoutPageProps> = async ({ searchParams }) => {
  // Extract and parse query parameters
  const cartItems = searchParams.cartItems
    ? JSON.parse(decodeURIComponent(searchParams.cartItems))
    : [];
  const totalPrice = searchParams.totalPrice
    ? parseFloat(decodeURIComponent(searchParams.totalPrice))
    : 0;

  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 my-10">
      <CheckoutDetailForm cartItems={cartItems} totalPrice={totalPrice} />
    </div>
  );
};

export default Page;
