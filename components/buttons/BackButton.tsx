import Link from "next/link";

export const BackButton = () => {
  return (
    <Link className="text-snow hover:underline" href={"/"}>{`< Back`}</Link>
  );
};
