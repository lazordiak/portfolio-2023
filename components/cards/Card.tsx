import Link from "next/link";
import Image from "next/image";

interface CardProps {
  altText: string;
  caption: string;
  link: string;
  photoPath: string;
  title: string;
  font?: string;
}

export const Card: React.FC<CardProps> = ({
  altText,
  caption,
  link,
  photoPath,
  title,
  font,
}) => {
  return (
    <div className="mt-6">
      <Link className="group" href={link}>
        <div className={`text-lg group-hover:underline lg:text-2xl ${font}`}>
          {title}
        </div>
        <div>
          <img
            className="mt-6 rounded border-solid border-2 object-contain"
            alt={altText}
            src={`/${photoPath}`}
          />
          <div className="mt-6">{caption}</div>
        </div>
      </Link>
    </div>
  );
};
