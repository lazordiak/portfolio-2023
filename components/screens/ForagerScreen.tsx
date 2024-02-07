import ForagerShader from "@/shaders/ForagerShader";
import { shaderContainerStyle } from "@/styles/constants";
import Link from "next/link";

export const ForagerScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-snow text-4xl lg:text-9xl">
        <Link href="/forager">
          <span className="hover:underline">Forager</span>
        </Link>
      </div>
      <div className={shaderContainerStyle}>
        <ForagerShader />
      </div>
    </div>
  );
};
