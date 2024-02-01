import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackButton } from "../buttons/BackButton";

export const Header = () => {
  const pathName = usePathname();
  return (
    <div className="px-12 pt-12 flex flex-row justify-between text-lg text-snow lg:px-72 lg:pt-24 lg:text-xl">
      <BackButton />
      <div>
        <Link
          className={pathName === "/about" ? " underline" : ""}
          href="/about"
        >
          About
        </Link>
        <Link
          className={"ml-12" + (pathName === "/contact" ? " underline" : "")}
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
