import Link from "next/link";

export const BackButton = () => {
  return <Link className="text-snow" href={"/"}>{`< Back`}</Link>;
};
