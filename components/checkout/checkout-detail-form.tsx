"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, Form, toast } from "@/components/ui";
import { C2AInputFormField } from "../input";
import { useMutation } from "urql";
import { CheckoutSchema } from "../../lib";
import { CreateOrderDocument } from "@/graphql/order/order.generated";
import { useSession } from "next-auth/react";
import { CircularLoading } from "../loading";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type CheckoutFormValues = z.infer<typeof CheckoutSchema>;

interface CreateOrderResponse {
  createOrder: {
    payload: {
      id: string;
      address1: string;
      phone: string;
      status: string;
    };
  };
}

interface CheckoutDetailFormProps {
  cartItems?: { id: string; name: string; price: number; quantity: number; total: number; image: string }[];
  totalPrice: number;
}

export const CheckoutDetailForm: React.FC<CheckoutDetailFormProps> = ({
  cartItems = [],
  totalPrice,
}) => {
  const session = useSession();
  const [{ fetching, data }, executeMutation] = useMutation<CreateOrderResponse>(CreateOrderDocument);
  const router = useRouter();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(CheckoutSchema),
    defaultValues: {
      address1: "",
      address2: "",
      postCode: "",
      phone: "",
      productIds: cartItems.map((item) => item.id),
    },
  });

  const onSubmit = async (formData: CheckoutFormValues) => {
    try {
      const response = await executeMutation(formData);

      if (response.error) {
        toast({
          title: response.error.message,
          variant: "destructive",
        });
      } else {
        const { id, phone } = response.data?.createOrder?.payload || {};
        if (id && phone) {
          const encodedId = encodeURIComponent(id);
          const encodedPhone = encodeURIComponent(phone);
          router.push(`/checkout/payment?orderId=${encodedId}&phone=${encodedPhone}`);
        }

        toast({
          title: "🚀 Your order has been successfully created! You will be redirected to your preferred payment option.",
        });
      }
    } catch (error) {
      toast({
        title: "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  };

  const handleProceedPayment = () => {
    form.handleSubmit(onSubmit)();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Billing Section */}
          <div className="space-y-4 w-full">
            <h2 className="text-2xl font-semibold">Billing Information</h2>
            <C2AInputFormField
              showIcon={false}
              label={"Address 1"}
              placeholder={"Enter your first address"}
              name={"address1"}
              control={form.control}
            />
            <C2AInputFormField
              showIcon={false}
              label={"Address 2"}
              placeholder={"Enter your second address"}
              name={"address2"}
              control={form.control}
            />
            <C2AInputFormField
              showIcon={false}
              label={"Postcode"}
              placeholder={"Enter your postcode"}
              name={"postCode"}
              control={form.control}
            />
            <C2AInputFormField
              showIcon={false}
              label={"Phone number"}
              placeholder={"Enter your phone number"}
              name={"phone"}
              control={form.control}
            />
            <div className="flex items-center">
              <p className="text-sm ml-4">
                Save this information for faster check-out next time
              </p>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Order Summary</h2>

            {/* Product Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 p-4 border rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={process.env.NEXT_PUBLIC_IMAGE_URL + item.image}
                      width={70}
                      height={65}
                      alt={item.name}
                      className="aspect-[16/12] object-cover rounded-sm"
                    />
                    <Link href={`/product/${item.id}`} className="text-lg font-semibold text-black hover:underline">
                      {item.name}
                    </Link>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      Price: ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                    <p className="text-sm font-semibold">
                      Total: ${item.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtotal, Shipping, Total */}
            <div className="space-y-3 border-t pt-4">
              <div className="flex justify-between">
                <p className="text-lg">Subtotal:</p>
                <p className="text-lg">${totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg">Shipping:</p>
                <p className="text-lg">Free</p>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <p>Total:</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
            </div>

            {/* Payment and Submit */}
            <div className="space-y-8">
              <p className="text-lg font-bold">
                If you have a coupon code, apply it here to receive your discount.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter coupon here"
                  className="border px-4 py-2 rounded-md w-full"
                />
                <Button variant="outline" className="px-4 py-2">
                  Apply coupon
                </Button>
              </div>
              {/* < CheckoutPaymentMethod /> */}
              <Button
                disabled={fetching}
                type="button"
                className="w-full bg-kaccent text-white py-2 rounded-md"
                onClick={handleProceedPayment}
              >
                {fetching ? <CircularLoading /> : "Place Order"}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

