import { useAppDispatch } from "@/hooks/reduxHooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { Cinzel_Decorative, Poppins, Roboto, Spectral } from "next/font/google";
import { urbanist } from "../cards/GridCard";
import Image from "next/image";

type MainHeaderProps = {
  presStyle?: number;
  setPresStyle?: (x: number) => void;
  opacity?: number;
};

export const spectral = Spectral({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const cinzel = Cinzel_Decorative({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const poppins = Poppins({ weight: "400", style: "normal", subsets: ["latin"] });

const MainHeader: FC<MainHeaderProps> = ({
  presStyle,
  setPresStyle,
  opacity,
}) => {
  const dispatch = useAppDispatch();
  return (
    <motion.div
      initial={{ opacity: opacity || 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 3 }}
      className={`relative items-center p-6 text-lg lg:text-xl flex w-full lg:pt-12 lg:px-12 text-snow z-10 ${poppins.className}`}
    >
      <Link href={"/"} className="hidden flex-1 md:block">
        <p className={`text-3xl ${cinzel.className}`}>Schuyler deVos</p>
      </Link>
      <div
        className={`w-full ${spectral.className} flex-1 text-xl md:w-fit justify-start lg:justify-center items-center gap-8 flex flex-row`}
      >
        <div>
          <Link href="/">
            <p className="hover:underline text-2xl">Work</p>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <p className="hover:underline text-2xl">About</p>
          </Link>
        </div>
      </div>
      <div
        className={`w-full ${spectral.className} relative flex-1 gap-8 justify-end flex`}
      >
        <Link
          href={"https://www.linkedin.com/in/skydevos/"}
          className={`text-2xl max-w-24 font-bold hover:underline ${roboto.className}`}
        >
          in
        </Link>
        <Link
          className="flex items-center max-w-[24px] hover:underline justify-center"
          href="mailto:schuylerdevos@gmail.com"
        >
          <Image
            alt="An email symbol"
            width={24}
            height={24}
            src="/EmailSvg.svg"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default MainHeader;
