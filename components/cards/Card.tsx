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
      <Link className="group" href={link}>
        <div className="text-lg group-hover:underline lg:text-2xl">{title}</div>
        <div>
          <Image
            className="mt-6 rounded"
            alt={altText}
            src={`/${photoPath}`}
            width={500}
            height={500}
          />
          <div className="mt-6 lg:pr-12">{caption}</div>
        </div>
      </Link>
    </div>
  );
};
