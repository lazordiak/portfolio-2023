import HackathonShader from "@/shaders/HackathonShader";
import { shaderContainerStyle } from "@/styles/constants";
import Link from "next/link";

export const HackathonScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-snow text-4xl lg:text-9xl">
        <Link href="/hackathons">
          <span>Hackathon Work</span>
        </Link>
      </div>
      <div className={shaderContainerStyle}>
        <HackathonShader />
      </div>
    </div>
  );
};
