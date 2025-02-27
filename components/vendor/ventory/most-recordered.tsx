interface Item {
  name: string;
  present: string;
}

export const MostRecordered: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span>{item.name}</span>
        <span>{item.present} %</span>
      </div>
      <span className="w-full h-2 rounded-full bg-[#F6F6F6] relative">
        <span
          className={`w-[${item.present}%] h-2 rounded-full bg-[#D7A022] absolute top-0 left-0`}
        ></span>
      </span>
    </div>
  );
};
