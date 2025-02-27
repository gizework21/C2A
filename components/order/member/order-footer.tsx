interface OrderFooterProps {
  title: string;
  name: string;
  address: string;
  phone: string;
  email: string;
}

export const OrderFooter = ({
  title,
  name,
  address,
  phone,
  email,
}: OrderFooterProps) => {
  return (
    <div className="space-y-2 px-6 py-2">
      <p className="font-medium text-[18px]">{title}</p>
      <p className="font-medium text-[14px]">{name}</p>
      <p className="text-[#5F6C72] text-[14px] ">{address}</p>
      <p className="text-[#5F6C72] text-[14px]">
        <strong> Phone:</strong> {phone}
      </p>
      <p className="text-[#5F6C72] text-[14px]">
        <strong>Email :</strong> {email}
      </p>
    </div>
  );
};
