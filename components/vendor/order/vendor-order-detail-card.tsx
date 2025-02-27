export interface IVendorOrderDetailCard {
  title: string;
  items: TVendorOrderDetailCardItems[];
}

export type TVendorOrderDetailCardItems = {
  key?: string;
  value: string;
};

export const VendorOrderDetailCard = ({
  title,
  items,
}: IVendorOrderDetailCard) => {
  return (
    <div className="space-y-2">
      <p className="font-bold">{title}</p>
      {items.map((item, index) => (
        <p key={index} className="text-[15px]">
          <strong>{item.key && item.key + ':'}</strong> {item.value}
        </p>
      ))}
    </div>
  );
};
