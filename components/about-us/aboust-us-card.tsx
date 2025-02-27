import Image from "next/image";

interface AboutUsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

export const AboutUsCard: React.FC<AboutUsCardProps> = ({
  title,
  description,
  imageUrl,
  altText,
}) => {
  return (
    <div className="w-full rounded-lg shadow-md overflow-hidden bg-white p-3">
      <div className="overflow-hidden rounded-md">
        <Image
          src={imageUrl}
          alt={altText}
          width={500}
          height={500}
          className="h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-150 ease-in-out"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-kgray-text">{description}</p>
      </div>
    </div>
  );
};
