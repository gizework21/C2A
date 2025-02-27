import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { GetOrderByIdQuery } from "@/graphql/vendor/order/getOrder-ByID.generated";

interface GetOrderByIdProps {
  data: GetOrderByIdQuery | undefined;
}

export const VendorOrderDetailTable = ({data}:GetOrderByIdProps) => {

  
const datas = [
  {
    product: "iphone 15 pro max, Pacific blue , 512 GB storage",
    quantity: "2",
    amount: "1000 ETB",
  },
  {
    product: "iphone 15 pro max, Pacific blue , 512 GB storage...",
    quantity: "2",
    amount: "1000 ETB",
  },
  {
    product: "iphone 15 pro max, Pacific blue , 512 GB storage...",
    quantity: "2",
    amount: "1000 ETB",
  },
];

  return (
    <div>
      <Table>
        <TableHeader className="bg-[#f2f2f2] font-bold ">
          <TableRow>
            <TableHead className="text-[#292929] font-bold">Product_ID</TableHead>
            <TableHead className="text-[#292929] font-bold">Quantity</TableHead>
            <TableHead className="text-right text-[#292929] font-bold ">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.GetOrderById?.[0]?.items.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell>{invoice.id}</TableCell>
              <TableCell>{invoice.quantity}</TableCell>
              <TableCell className="text-right">{invoice.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex w-full justify-end">
        <div className="text-end space-y-1">
          <p>
            <strong>Subtotal:</strong> 1000 ETB
          </p>
          <p>
            <strong>Tax 15%:</strong> 50 ETB
          </p>
          <p>
            <strong>Total:</strong> 1050 ETB
          </p>
        </div>
      </div>
    </div>
  );
};
