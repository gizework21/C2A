import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { ProductDetailSpecifications } from "../specification";
import { ProductDetailComment } from "../comment";

interface ProductDetailTabProps {
  productId: number;
}

export const ProductDetailTab = ({ productId }: ProductDetailTabProps) => {
  return (
    <Tabs defaultValue="additionalInfo" className="w-full ">
      <TabsList className="grid max-w-max  grid-cols-3 bg-transparent">
        <TabsTrigger
          value="additionalInfo"
          className="data-[state=active]:border-b border-kaccent data-[state=active]:shadow-none"
        >
          Additional Info
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="data-[state=active]:border-b border-kaccent data-[state=active]:shadow-none"
        >
          Reviews
        </TabsTrigger>
      </TabsList>
      <TabsContent value="additionalInfo">
        <ProductDetailSpecifications />
      </TabsContent>

      <TabsContent value="reviews">
        <ProductDetailComment productId={productId} />
      </TabsContent>
    </Tabs>
  );
};
