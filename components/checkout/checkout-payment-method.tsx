"use client";

import { arifPay, chapa, stripe } from "@/lib";
import Image from "next/image";
import React, { useState } from "react";
import { useMutation } from "urql";
import { CreatePaymentDocument } from "@/graphql/payment/payment.generated";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui";

const PaymentMethods = [
  { name: "chapa", icon: chapa },
  { name: "arifpay", icon: arifPay },
  { name: "stripe", icon: stripe },
];

interface PaymentMethodsProps {
  name: string;
  icon: string;
}

interface CheckoutPaymentMethodProps {
  orderId: string;
  phone: string;
}

export const CheckoutPaymentMethod: React.FC<CheckoutPaymentMethodProps> = ({
  orderId,
  phone,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [createPaymentResult, executeMutation] = useMutation(
    CreatePaymentDocument
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSelect = (methodName: string) => {
    setSelectedMethod(methodName);
  };

  const handleConfirm = async () => {
    if (selectedMethod) {
      setLoading(true);
      setError(null);
      const targetCurrency = selectedMethod === "stripe" ? "USD" : "ETB";
      const email = "";

      try {
        const response = await executeMutation({
          orderId,
          paymentMethod: selectedMethod,
          email,
          phone,
          targetCurrency,
        });

        if (response.error) {
          throw new Error(response.error.message);
        } else {
          const redirectUrl = response.data?.createPayment?.redirectUrl;
          if (redirectUrl) {
            toast({
              title:
                "🚀 You will be redirected to your preferred payment option.",
            });
            router.push(redirectUrl);
          }
        }
      } catch (err) {
        toast({
          title: "An error occurred while processing the payment.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center my-16 pt-12 pb-8 px-4 bg-[#f9f9f9] rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
        Select your preferred payment option
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {PaymentMethods.map((method, index) => (
          <CheckoutCard
            key={index}
            name={method.name}
            icon={method.icon}
            isSelected={selectedMethod === method.name}
            onSelect={() => handleSelect(method.name)}
          />
        ))}
      </div>
      <button
        className={`mt-12 px-10 py-4 rounded-md text-white font-bold transition-colors border border-transparent ${
          selectedMethod
            ? "bg-[#d7a022] hover:bg-[#000]"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!selectedMethod || loading}
        onClick={handleConfirm}
      >
        {loading ? "Processing..." : "Confirm your selection"}
      </button>
      {error && <p className="text-red-500 mt-4">An error occurred: {error}</p>}
    </div>
  );
};

interface CheckoutCardProps extends PaymentMethodsProps {
  isSelected: boolean;
  onSelect: () => void;
}

const CheckoutCard: React.FC<CheckoutCardProps> = ({
  name,
  icon,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center p-8 border-2 rounded-xl cursor-pointer transition-transform transform hover:scale-105 ${
        isSelected
          ? "border-transparent bg-[#d7a022] text-white"
          : "border-gray-300 bg-white"
      }`}
      style={{ backgroundColor: isSelected ? "#d7a022" : "#fff" }}
      onClick={onSelect}
    >
      <div
        className={`p-6 mb-4 rounded-full transition-transform transform ${
          isSelected ? "bg-white scale-110" : "bg-gray-100"
        }`}
      >
        <Image
          src={icon}
          alt={name}
          height={120}
          width={120}
          className={`w-24 h-24 object-contain ${
            isSelected ? "text-black" : ""
          }`}
        />
      </div>
      {isSelected && (
        <div className="absolute top-2 right-2 p-2 bg-black rounded-full animate-pulse">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};
