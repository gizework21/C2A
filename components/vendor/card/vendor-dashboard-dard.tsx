interface VendorDashboardCardProps {
  title: string;
  price: string;
  subTitle: string;
}

export const VendorDashboardCard = ({
  title,
  price,
  subTitle,
}: VendorDashboardCardProps) => {
  return (
    <div className="montserrat border w-full p-4 shadow-md rounded-[5px] space-y-[8px] bg-white min-w-[50%] md:min-w-[30%]">
      <h2 className="font-bold text-[14px] text-vendor-card-title">{title}</h2>
      <h1 className="font-bold text-[24px] text-vendor-card-price">{price}</h1>
      <p className="text-[14px] font-medium text-vendor-card-subTitle">
        {subTitle}
      </p>
    </div>
  );
};
