import { Cinzel, Fragment_Mono, Urbanist } from "next/font/google";
import { FC } from "react";
import { cinzel, spectral } from "../bars/MainHeader";
import Image from "next/image";
import Link from "next/link";

type GridCardProps = {
  img: string;
  caption: string;
  type?: string;
  title: string;
  link: string;
  size?: number;
};

export const urbanist = Urbanist({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

export const fragmentMono = Fragment_Mono({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const GridCard: FC<GridCardProps> = ({
  img,
  caption,
  title,
  type,
  link,
  size,
}) => {
  return (
    <div className="flex rounded flex-col mb-12">
      <Link href={link}>
        <div className="relative w-full" style={{ paddingBottom: "70.25%" }}>
          <Image
            fill
            alt={title}
            src={img}
            className="absolute rounded-sm top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="text-snow mt-4 flex flex-col gap-4">
        <Link href={link}>
          <p
            className={`font-bold ${
              size && size > 0 ? "text-4xl" : "text-3xl"
            } my-4 ${cinzel.className}`}
          >
            {title}
          </p>
        </Link>
        {type && (
          <p
            className={`${spectral.className} ${
              size && size > 0 ? "text-md" : "text-sm"
            }`}
          >
            {type}
          </p>
        )}
        <p
          className={`${fragmentMono.className} ${
            size && size > 0 ? "text-xl" : "text-md"
          }`}
        >
          {caption}
        </p>
      </div>
    </div>
  );
};

export default GridCard;