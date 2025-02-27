import { Button } from "@/components/ui";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 ">
      <div className="border-2 border-kaccent p-4 flex flex-col gap-4 max-w-2xl">
        <p className="text-[24px] font-bold text-center">
          Your Order has been Completed
        </p>

        <div className="border">
          <div className="border px-2 md:px-4 flex items-center justify-between py-2">
            <div>
              <p className="text-[20px] inter text-kgray-text">Ordered By</p>
              <p className="text-[28px] inter font-bold">Suman Modi</p>
              <p className="inter text-kgray-text">
                1456 Veltri Drive, Anchorage, AK 99502
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-[20px] inter font-bold">Ecome Express</h1>

              <div className="w-[200px] h-[40px] bg-kaccent text-white flex items-center justify-center">
                ||||||||||||||||||||||||||||||
              </div>

              <p className="text-xs">34760347856234785</p>
            </div>
          </div>

          <h1 className="text-[20px] font-semibold inter px-2 md:px-4 pt-2">
            Order Details
          </h1>
          <div className="flex items-center justify-between px-2 md:px-4 my-2">
            <div className="text-kgray-text flex flex-col gap-2">
              <p>
                <span className="font-bold inter text-kblack-default">
                  Name:{" "}
                </span>
                Product name
              </p>
              <p>
                <span className="font-bold inter text-kblack-default">
                  {" "}
                  SKU:{" "}
                </span>
                #56452568
              </p>
              <p>
                <span className="font-bold inter text-kblack-default">
                  Color:{" "}
                </span>
                Vivid blue
              </p>
              <p>
                <span className="font-bold inter text-kblack-default">
                  Order Date:{" "}
                </span>
                24/12/2022
              </p>
            </div>

            <div className="text-kgray-text flex flex-col gap-2">
              <p>
                <span className="font-bold inter text-kblack-default">
                  Size:{" "}
                </span>
                Small
              </p>
              <p>
                <span className="font-bold inter text-kblack-default">
                  Order ID:{" "}
                </span>
                #56452568
              </p>
              <p>
                <span className="font-bold inter text-kblack-default">
                  Quantity:{" "}
                </span>
                2
              </p>
              <p>
                <span className="font-bold inter text-kblack-default">
                  Invoice Date:{" "}
                </span>
                26/12/2022
              </p>
            </div>
          </div>

          <table className="table  w-full">
            <thead className=" bg-kgray-tableBg">
              <tr>
                <th className="text-start inter font-medium p-2">
                  Description
                </th>
                <th className="text-start inter font-medium p-2">Price</th>
                <th className="text-start inter font-medium p-2">Qty</th>
                <th className="text-start inter font-medium p-2">Total</th>
              </tr>
            </thead>
            <tbody className="border-b-2">
              <tr className="text-[18px] text-kgray-text">
                <td className="p-2">Product name</td>
                <td className="p-2">$100.00</td>
                <td className="p-2">2</td>
                <td className="font-bold text-kblack-default">$200.00</td>
              </tr>

              <tr className="text-[18px] text-kgray-text">
                <td className="p-2">Other cost</td>
                <td className="p-2">$340.00</td>
                <td className="p-2">1</td>
                <td className="font-bold text-kblack-default">$340.00</td>
              </tr>
            </tbody>
          </table>

          <div className="flex items-center justify-between px-2 md:px-4">
            <h1 className="inter font-medium text-[18px]">Total</h1>
            <p className="text-[24px] font-bold inter">$1000</p>
          </div>

          <hr />

          <div className="flex justify-between px-2 md:px-4 my-2">
            <div>
              <p className="text-[20px] inter text-kgray-text">Sold By</p>
              <p className="font-medium text-[22px] inter">AJX Cloths</p>
              <p className="text-[20px] inter text-kgray-text">
                1456 Veltri Drive, Anchorage, AK 99502
              </p>
            </div>

            <div>
              <p className="text-[20px] inter text-kgray-text">Delivered To</p>
              <p className="font-medium text-[22px] inter">Suman Modi</p>
              <p className="text-[20px] inter text-kgray-text">
                1456 Veltri Drive, Anchorage, AK 99502
              </p>
            </div>
          </div>

          <hr />

          <div className="px-2 md:px-4 my-2">
            <h2 className="font-medium inter">Note</h2>
            <p className="inter text-kgray-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 my-6">
          <Button className="bg-kaccent btn-hover">Save photo</Button>
          <Button
            variant="outline"
            className="border border-kaccent text-kaccent"
          >
            View history
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
