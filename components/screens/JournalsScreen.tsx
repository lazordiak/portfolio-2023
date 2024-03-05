import JournalsShader from "@/shaders/JournalsShader";
import { shaderContainerStyle } from "@/styles/constants";
import Link from "next/link";

export const JournalsScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-snow text-4xl lg:text-9xl">
        <Link
          className="hover:underline flex flex-col justify-center items-center"
          href="/journals"
        >
          <div>Weather Journals</div>
          <div className="text-xl mt-6">
            Collaborative storytelling between you and the weather, mediated by
            ML algorithms.
          </div>
        </Link>
      </div>
      <div className={shaderContainerStyle}>
        <JournalsShader />
      </div>
    </div>
  );
};
