import HackathonShader from "@/shaders/HackathonShader";
import { shaderContainerStyle } from "@/styles/constants";
import Link from "next/link";

export const HackathonScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-snow text-4xl lg:text-9xl">
        <Link
          className="hover:underline flex flex-col justify-center items-center"
          href="/hackathons"
        >
          <div>Hackathon Work</div>
          <div className="text-xl mt-6">
            Games, XR experiences and web projects from hackathons along the
            way.
          </div>
        </Link>
      </div>
      <div className={shaderContainerStyle}>
        <HackathonShader />
      </div>
    </div>
  );
};
