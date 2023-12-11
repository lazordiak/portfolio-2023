import Link from "next/link";
import { BackButton } from "../buttons/BackButton";

export const Header = () => {
  return (
    <div className="px-72 pt-12 flex flex-row justify-between lg:text-xl">
      <BackButton />
      <div>
        <Link className="text-snow" href="/about">
          About
        </Link>
        <Link className="text-snow ml-12" href={"/contact"}>
          Contact
        </Link>
      </div>
    </div>
  );
};
