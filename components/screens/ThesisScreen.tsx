import ThesisShader from "@/shaders/ThesisShader";
import { shaderContainerStyle } from "@/styles/constants";
import Link from "next/link";

export const ThesisScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-snow text-4xl lg:text-9xl">
        <Link
          className="hover:underline flex flex-col justify-center items-center"
          href="/thesis"
        >
          <div>Wherever You Go</div>
          <div className="text-xl mt-6">
            A short VR experience where participants are invited to discover a
            place unique to them.
          </div>
        </Link>
      </div>
      <div className={shaderContainerStyle}>
        <ThesisShader />
      </div>
    </div>
  );
};
