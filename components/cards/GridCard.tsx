import { Cinzel, Fragment_Mono, Urbanist } from "next/font/google";
import { FC, useState, memo } from "react";
import { cinzel, spectral } from "../bars/MainHeader";
import Image from "next/image";
import Link from "next/link";
import LazyVideo from "@/components/media/LazyVideo";

type GridCardProps = {
  img: string;
  caption: string;
  type?: string;
  title: string;
  link: string;
  size?: number;
  font?: string;
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
  font,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex rounded flex-col mb-12">
      <Link href={link}>
        <div className="relative w-full" style={{ paddingBottom: "70.25%" }}>
          {/* Loading skeleton */}
          {!imageLoaded && !imageError && (
            <div className="absolute rounded-sm top-0 left-0 w-full h-full bg-gray-800 animate-pulse" />
          )}
          
          {img.includes("mp4") ? (
            <LazyVideo
              src={img}
              className="rounded-sm object-cover"
              fill
              autoPlay
              loop
              muted
              title={title}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          ) : (
            <Image
              fill
              alt={title}
              src={img}
              className="absolute rounded-sm top-0 left-0 w-full h-full object-cover"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          
          {/* Error state handled by LazyVideo component for videos */}
        </div>
      </Link>
      <div className="text-snow mt-4 flex flex-col gap-4">
        <Link href={link}>
          <p
            className={`font-bold ${
              size && size > 0 ? "text-5xl" : "text-3xl"
            } my-4 ${font ? font : cinzel.className}`}
          >
            {title}
          </p>
        </Link>
        {type && (
          <p
            className={`${spectral.className} opacity-70 ${
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

export default memo(GridCard);
