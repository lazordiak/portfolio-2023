import LiquidShader from "@/shaders/LiquidShader";
import { shaderContainerStyle } from "@/styles/constants";
import Link from "next/link";
import { FC } from "react";
import SplitScreenContainer from "./SplitScreen";
import { motion } from "framer-motion";

type ShaderScreenProps = {
  pageRef: string;
  title: string;
  blurb: string;
  shaderComp: JSX.Element;
  presStyle: number;
  img: string;
  keywords?: string[];
};

export const ShaderScreen: FC<ShaderScreenProps> = ({
  pageRef,
  title,
  blurb,
  shaderComp,
  presStyle,
  img,
  keywords,
}) => {
  if (presStyle === 1)
    return (
      <SplitScreenContainer
        title={title}
        blurb={blurb}
        img={img}
        href={pageRef}
        keywords={keywords}
      />
    );
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-snow text-4xl lg:text-9xl">
        <Link
          className="hover:underline flex flex-col justify-center items-center"
          href={pageRef}
        >
          <div>{title}</div>
          <div className="text-xl mt-6">{blurb}</div>
        </Link>
      </div>
      <div className={shaderContainerStyle}>{shaderComp}</div>
    </motion.div>
  );
};
