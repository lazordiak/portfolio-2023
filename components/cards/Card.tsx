import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

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
          <Image
            className="mt-6 rounded border-solid border-2 object-contain"
            alt={altText}
            src={`/${photoPath}`}
            width={600}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="mt-6">{caption}</div>
        </div>
      </Link>
    </div>
  );
};

export const MemoizedCard = memo(Card);
