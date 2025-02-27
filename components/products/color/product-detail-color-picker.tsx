import { ProductDetailSearchParams } from "@/types/product";
import { cn } from "@/lib";
import Link from "next/link";

interface IColor {
  color: string;
}

interface ColorButtonProps {
  color: string;
  href: ProductDetailSearchParams;
}

const colors: IColor[] = [
  { color: "121069" },
  { color: "EA0000" },
  { color: "6F6C90" },
  { color: "000000" },
  { color: "6AAE1E" },
];

interface ProductDetailColorPickerProps {
  href: ProductDetailSearchParams;
}

export const ProductDetailColorPicker = ({
  href,
}: ProductDetailColorPickerProps) => {
  return (
    <>
      <p className="inter text-[16px] font-semibold">Select Color</p>
      <div className="flex">
        {colors.map((color) => (
          <ColorButton key={color.color} color={color.color} href={href} />
        ))}
      </div>
    </>
  );
};

const ColorButton = ({ color, href }: ColorButtonProps) => {
  return (
    <div
      className={cn(
        "hover:border-2 border-kaccent h-[40px] w-[40px] rounded-full flex items-center justify-center transition-all duration-150",
        href.color === color && "border-2"
      )}
    >
      <Link
        replace={true}
        scroll={false}
        href={"?" + new URLSearchParams({ ...href, color }).toString()}
        className="h-[30px] w-[30px] rounded-full"
        style={{ backgroundColor: "#" + color }}
      />
    </div>
  );
};
