import {
  BarComponentFirst,
  BarComponentSecond,
  InventoryOrderTable,
  MostRecordered,
} from "@/components/vendor";

interface Item {
  name: string;
  present: string;
}
const data: Item[] = [
  {
    name: "Jeans",
    present: "70",
  },
  {
    name: "Shirts",
    present: "40",
  },
  {
    name: "Belts",
    present: "60",
  },
  {
    name: "Caps",
    present: "80",
  },
  {
    name: "Others",
    present: "20",
  },
];
const Inventory = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="px-5 py-3 rounded-lg bg-white shadow-md w-full h-[55vh]">
        <h5>Stock Level</h5>
        <BarComponentFirst />
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8 bg-white p-2 rounded-md shadow-md w-full h-[40vh]">
          <h5>Inventory Report</h5>
          <BarComponentSecond />
        </div>
        <div className="col-span-4 bg-white px-4 py-4 rounded-md shadow-md w-full h-[40vh] flex flex-col gap-3">
          <h5>Most Reordered Items </h5>
          <div className="flex flex-col gap-4">
            {data.map((item, index) => (
              <MostRecordered key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h5>Inventory Report</h5>
        <InventoryOrderTable />
        <button className="bg-[#D7A022] text-white px-7 py-3 rounded-md">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Inventory;
