import Image from "next/image";

interface MainCardProps {
  altText: string;
  caption?: string;
  photoPath: string;
}

export const MainContentCard: React.FC<MainCardProps> = ({
  altText,
  caption,
  photoPath,
}) => {
  return (
    <div className={"flex flex-col relative"}>
      <img
        className="rounded border-solid object-contain"
        alt={altText}
        src={`/${photoPath}`}
      />
      {caption && <div className={"mt-6 italic"}>{caption}</div>}
    </div>
  );
};
