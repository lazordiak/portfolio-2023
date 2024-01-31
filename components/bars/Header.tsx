import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackButton } from "../buttons/BackButton";

export const Header = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="px-12 lg:px-72 pt-12 lg:pt-24 flex flex-row justify-between text-lg lg:text-xl text-snow">
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
