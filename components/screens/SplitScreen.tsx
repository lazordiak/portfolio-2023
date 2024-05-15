import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";

type SplitScreenContainerProps = {
  title: string;
  blurb: string;
  img: string;
  href: string;
  keywords?: string[];
};

const SplitScreenContainer: FC<SplitScreenContainerProps> = ({
  title,
  blurb,
  img,
  href,
  keywords,
}) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-screen p-40 h-screen flex flex-row text-snow"
    >
      <Link href={href} className="w-full flex h-full">
        <div className="flex flex-col pr-4 border-r border-1-snow flex-1">
          <div>
            <h1 className="text-6xl mb-12 font-semibold">{title}</h1>
            <p className="text-2xl lg:w-2/3 mb-12">{blurb}</p>
          </div>
          <div>
            <p className="text-4xl mb-6">Keywords:</p>
            <ul>
              {keywords?.map((word, i) => {
                return (
                  <li className="text-xl" key={i}>
                    {word}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-1 ml-4">
          <img
            className="object-cover rounded border border-1-snow flex-1 flex"
            src={img}
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default SplitScreenContainer;
