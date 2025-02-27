import { C2AButton } from "@/components/buttons";
import {
  TransactionDetailInfo,
  VendorTransactionDetailTable,
} from "@/components/vendor/transactions";

const Page = () => {
  return (
    <div>
      <p className="font-bold text-[24px] py-4">Transaction Detail</p>
      <div className="flex gap-4">
        <p>Transaction number: #111</p>
        <p>
          Status:{" "}
          <span className="text-kgreen-success font-semibold">Delivered</span>
        </p>
      </div>

      <TransactionDetailInfo />
      <VendorTransactionDetailTable />

      <div className="flex gap-4">
        <C2AButton>Approve</C2AButton>
        <C2AButton variant="outline">Decline</C2AButton>
      </div>
    </div>
  );
};

export default Page;
