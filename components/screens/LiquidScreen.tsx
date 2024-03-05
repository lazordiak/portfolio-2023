import LiquidShader from "@/shaders/LiquidShader";
import { shaderContainerStyle } from "@/styles/constants";
import Link from "next/link";

export const LiquidScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-snow text-4xl lg:text-9xl">
        <Link
          className="hover:underline flex flex-col justify-center items-center"
          href="/liquid"
        >
          <div>Liquid Relationships</div>
          <div className="text-xl mt-6">
            A touch-and-water-based interactive installation about forming
            connections.
          </div>
        </Link>
      </div>
      <div className={shaderContainerStyle}>
        <LiquidShader />
      </div>
    </div>
  );
};
