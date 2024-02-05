import WeatherShader from "@/shaders/WeatherShader";
import { shaderContainerStyle } from "@/styles/constants";
import Link from "next/link";

export const WeatherScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-snow text-4xl lg:text-9xl">
        <Link href="/weather">
          <span className="hover:underline">Weather Band</span>
        </Link>
      </div>
      <div className={shaderContainerStyle}>
        <WeatherShader />
      </div>
    </div>
  );
};
