import { TVendorOrderDetailCardItems, VendorOrderDetailCard } from '../order';

const BillingAddress: TVendorOrderDetailCardItems[] = [
  { key: 'Name', value: 'John Doe' },
  { key: 'Address', value: '2392 Main Avenue Penasauka, New Jersey' },
  { key: 'Email', value: 'purpose@example.com' },
  { key: 'Phone', value: '+251911000000' },
];

const ShippingAddress: TVendorOrderDetailCardItems[] = [
  { key: 'Name', value: 'John Doe' },
  {
    key: 'Address',
    value: ' 2392 Main Avenue Penasauka, New Jersey 2392 Main Avenue',
  },
  {
    key: '',
    value: 'Free shipping',
  },
];

const PaymentInformation: TVendorOrderDetailCardItems[] = [
  { key: 'Name', value: 'John Antony' },
  { key: 'Bank', value: 'CBE' },
  { key: 'Account number', value: '10000000000000' },
  { key: 'VAt number:', value: 'No vat Number' },
];

export const TransactionDetailInfo = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 my-12">
      <VendorOrderDetailCard title="Billing Address" items={BillingAddress} />
      <VendorOrderDetailCard title="Shipping Address" items={ShippingAddress} />
      <VendorOrderDetailCard
        title="Payment Information"
        items={PaymentInformation}
      />
    </div>
  );
};
