import { LinkButton } from "@/components/buttons";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface IProducts {
  name: string;
  category: string;
  profit: string;
}

const products: IProducts[] = [
  {
    name: "Iphone 15 pro max",
    category: "Electronics",
    profit: "$1,750.00",
  },
  {
    name: "Airpod pro 3",
    category: "Electronics",
    profit: "$1,000.00",
  },
  {
    name: "Samsung galaxy S24 ultra",
    category: "Electronics",
    profit: "$740.00",
  },
  {
    name: "Macbook Pro 2022",
    category: "Electronics",
    profit: "$1,800.00",
  },
  {
    name: "Apple Watch 7",
    category: "Electronics",
    profit: "$1,200.00",
  },
  {
    name: "Ipad Pro 2022",
    category: "Electronics",
    profit: "$1,500.00",
  },
  {
    name: "Dell XPS 15",
    category: "Electronics",
    profit: "$1,200.00",
  },
];

export const TopSallingProductsTable = () => {
  return (
    <div>
      <h1 className="py-4 text-[20px] font-medium">Top Selling Products</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Products</TableHead>
            <TableHead>Categories</TableHead>
            <TableHead>Profit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((invoice) => (
            <TableRow key={invoice.name}>
              <TableCell className="font-medium">{invoice.name}</TableCell>
              <TableCell>{invoice.category}</TableCell>
              <TableCell>{invoice.profit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}></TableCell>
            <TableCell className="text-right">
              <LinkButton href="#" variant="ghost">
                {" "}
                View more
              </LinkButton>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};
