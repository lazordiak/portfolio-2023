import WeatherShader from "@/shaders/WeatherShader";
import { shaderContainerStyle } from "@/styles/constants";
import Link from "next/link";

export const WeatherScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-snow text-4xl lg:text-9xl">
        <Link
          className="hover:underline flex flex-col justify-center items-center"
          href="/weather"
        >
          <div>Weather Band</div>
          <div className="text-xl mt-6">
            Turning weather data into musical performances.
          </div>
        </Link>
      </div>
      <div className={shaderContainerStyle}>
        <WeatherShader />
      </div>
    </div>
  );
};
