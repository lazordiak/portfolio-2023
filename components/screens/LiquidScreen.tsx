import LiquidShader from "@/shaders/LiquidShader";
import { shaderContainerStyle } from "@/styles/constants";
import Link from "next/link";

export const LiquidScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-snow text-4xl lg:text-9xl">
        <Link href="/liquid">
          <span>Liquid Relationships</span>
        </Link>
      </div>
      <div className={shaderContainerStyle}>
        <LiquidShader />
      </div>
    </div>
  );
};
