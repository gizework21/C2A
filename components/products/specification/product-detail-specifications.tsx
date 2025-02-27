export const ProductDetailSpecifications = () => {
  return (
    <div className="my-8 space-y-10">
      <p className="text-[28px] poppins font-medium text-kblack-text">
        Product Description
      </p>
      <ul className="pl-10 text-[16px] flex flex-col gap-2">
        <li>
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis cum aliquid delectus maiores facilis expedita assumenda ipsum
          exercitationem officia magni, iusto culpa quibusdam dolorem, unde
          maxime laborum tenetur, incidunt corporis!&quot;
        </li>
        <li>
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis cum aliquid delectus maiores facilis expedita assumenda ipsum
          exercitationem officia magni, iusto culpa quibusdam dolorem, unde
          maxime laborum tenetur, incidunt corporis!&quot;
        </li>
        <li>
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis cum aliquid delectus maiores facilis expedita assumenda ipsum
          exercitationem officia magni, iusto culpa quibusdam dolorem, unde
          maxime laborum tenetur, incidunt corporis!&quot;
        </li>
        <li>
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis cum aliquid delectus maiores facilis expedita assumenda ipsum
          exercitationem officia magni, iusto culpa quibusdam dolorem, unde
          maxime laborum tenetur, incidunt corporis!&quot;
        </li>
        <li>
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis cum aliquid delectus maiores facilis expedita assumenda ipsum
          exercitationem officia magni, iusto culpa quibusdam dolorem, unde
          maxime laborum tenetur, incidunt corporis!&quot;
        </li>
        <li>
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis cum aliquid delectus maiores facilis expedita assumenda ipsum
          exercitationem officia magni, iusto culpa quibusdam dolorem, unde
          maxime laborum tenetur, incidunt corporis!&quot;
        </li>
      </ul>
      <p className="text-[28px] poppins font-medium text-kblack-text">
        Specifications
      </p>
      <table className="table-auto w-full">
        <tbody>
          {tableContent.map((content, index) => (
            <tr
              key={index}
              className={`border ${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              }`}
            >
              <td className="border border-kblack-default px-4 py-2 poppins">
                {content.name}
              </td>
              <td className="border border-kblack-default px-4 py-2">
                {content.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface ITableContent {
  name: string;
  value: string;
}

const tableContent: ITableContent[] = [
  {
    name: "Lorem ipsum",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
  },
  {
    name: "Lorem ipsum",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
  },
  {
    name: "Lorem ipsum",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
  },
  {
    name: "Lorem ipsum",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
  },
  {
    name: "Lorem ipsum",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
  },
  {
    name: "Lorem ipsum",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
  },
  {
    name: "Lorem ipsum",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
  },
  {
    name: "Lorem ipsum",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn",
  },
];
