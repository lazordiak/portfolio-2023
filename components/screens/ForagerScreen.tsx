import ForagerShader from "@/shaders/ForagerShader";
import { shaderContainerStyle } from "@/styles/constants";
import Link from "next/link";

export const ForagerScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-snow text-4xl lg:text-9xl">
        <Link
          className="hover:underline flex flex-col justify-center items-center"
          href="/forager"
        >
          <div>Forager</div>
          <div className="text-xl mt-6">
            A VR film where you experience the life cycle of a mushroom.
          </div>
        </Link>
      </div>
      <div className={shaderContainerStyle}>
        <ForagerShader />
      </div>
    </div>
  );
};
