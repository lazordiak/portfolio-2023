import JournalsShader from "@/shaders/JournalsShader";
import { shaderContainerStyle } from "@/styles/constants";
import Link from "next/link";

export const JournalsScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-snow text-4xl lg:text-9xl">
        <Link href="/journals">
          <span className="hover:underline">Weather Journals</span>
        </Link>
      </div>
      <div className={shaderContainerStyle}>
        <JournalsShader />
      </div>
    </div>
  );
};
