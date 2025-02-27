import Image from 'next/image';

interface CheckoutProductViewCardProps {
  image: string;
  name: string;
  price: number;
}

export const CheckoutProductViewCard = ({
  image,
  name,
  price,
}: CheckoutProductViewCardProps) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center gap-1">
        <Image
          src={image}
          height={100}
          width={100}
          alt="image"
          className="aspect-[19/10] object-contain"
        />
        <p>{name}</p>
      </div>
      <p>${price}</p>
    </div>
  );
};
