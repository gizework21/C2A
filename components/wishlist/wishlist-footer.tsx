import Link from 'next/link';

export const WishListFooter = () => {
  return (
    <div className="flex items-center justify-between w-full  py-2">
      <Link
        href="/"
        className="px-4 py-2 flex items-center justify-center rounded-md border border-kaccent text-kaccent poppins"
      >
        Return to shop
      </Link>
      <Link
        href={'/cart'}
        className="px-4 py-2 flex items-center justify-center rounded-md border bg-kaccent text-white poppins"
      >
        Got to cart
      </Link>
    </div>
  );
};
