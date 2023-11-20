import WeatherShader from "@/shaders/WeatherShader";
import { shaderContainerStyle } from "@/styles/constants";

export const WeatherScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-white text-4xl lg:text-9xl">
        <span>Weather Band</span>
      </div>
      <div className={shaderContainerStyle}>
        <WeatherShader />
      </div>
    </div>
  );
};
