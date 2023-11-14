import WeatherShader from "@/shaders/WeatherShader";
import { shaderContainerStyle } from "@/styles/constants";

export const WeatherScreen = () => {
  return (
    <div className={shaderContainerStyle}>
      <WeatherShader />
    </div>
  );
};
