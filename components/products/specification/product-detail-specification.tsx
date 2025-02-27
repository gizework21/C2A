const data: ISpecView[] = [
  { name: "Condition:", value: "Not set" },
  { name: "RAM:", value: "Not set" },
  { name: "Main Camera:", value: "Not set" },
  { name: "Battery Life:", value: "Not set" },
  { name: "Hard Drive:", value: "Not set" },
  { name: "Selfie Camera:", value: "Not set" },
];

export const ProductDetailSpecification = () => {
  return (
    <div className="space-y-[9px] grid grid-cols-3 w-full">
      {data.map((spec) => (
        <SpecView key={spec.name} data={spec} />
      ))}
    </div>
  );
};

interface ISpecView {
  name: string;
  value: string;
}

interface SpecViewProps {
  data: ISpecView;
}
const SpecView = ({ data }: SpecViewProps) => {
  const { name, value } = data;

  return (
    <div className="flex items-center gap-2">
      <p className="text-kgray-default text-[14px]">{name}</p>
      <p className="text-kblack text-[14px]">{value}</p>
    </div>
  );
};
