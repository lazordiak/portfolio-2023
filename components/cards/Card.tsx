import Link from "next/link";
import Image from "next/image";

interface CardProps {
  altText: string;
  caption: string;
  link: string;
  photoPath: string;
  title: string;
}

export const Card: React.FC<CardProps> = ({
  altText,
  caption,
  link,
  photoPath,
  title,
}) => {
  return (
    <div className="mt-6">
      <Link href={link}>
        <div className="text-lg lg:text-2xl">{title}</div>
        <div>
          <Image
            className="mt-6 rounded"
            alt={altText}
            src={`/${photoPath}`}
            width={600}
            height={600}
          />
          <div className="mt-6">{caption}</div>
        </div>
      </Link>
    </div>
  );
};
