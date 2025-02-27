import { CheckoutPaymentMethod } from "@/components/checkout";

interface PaymentPageProps {
    searchParams: {
        orderId?: string;
        phone?: string;
    };
}

const PaymentPage: React.FC<PaymentPageProps> = ({ searchParams }) => {
    const orderId = searchParams.orderId
        ? decodeURIComponent(searchParams.orderId)
        : "";
    const phone = searchParams.phone
        ? decodeURIComponent(searchParams.phone)
        : "";

    return (
        <div className="flex flex-col items-center justify-center w-full gap-6 my-10">
            <CheckoutPaymentMethod orderId={orderId} phone={phone} />
        </div>
    );
};

export default PaymentPage;
