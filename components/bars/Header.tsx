import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackButton } from "../buttons/BackButton";

export const Header = () => {
  const pathName = usePathname();
  return (
    <div className="px-6 pt-6 flex flex-row justify-between text-lg text-snow lg:px-40 lg:pt-24 lg:text-xl">
      <BackButton />
      <div>
        <Link
          className={pathName === "/about" ? " underline" : " hover:underline"}
          href="/about"
        >
          About
        </Link>
        <Link
          className={
            "ml-12" +
            (pathName === "/contact" ? " underline" : " hover:underline")
          }
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
