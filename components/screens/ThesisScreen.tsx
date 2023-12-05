import ThesisShader from "@/shaders/ThesisShader";
import { shaderContainerStyle } from "@/styles/constants";
import Link from "next/link";

export const ThesisScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-snow text-4xl lg:text-9xl">
        <Link href="/thesis">
          <span>Wherever You Go</span>
        </Link>
      </div>
      <div className={shaderContainerStyle}>
        <ThesisShader />
      </div>
    </div>
  );
};
