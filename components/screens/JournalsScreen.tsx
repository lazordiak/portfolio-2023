import JournalsShader from "@/shaders/JournalsShader";
import { shaderContainerStyle } from "@/styles/constants";

export const JournalsScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-white text-4xl lg:text-9xl">
        <span>Weather Journals</span>
      </div>
      <div className={shaderContainerStyle}>
        <JournalsShader />
      </div>
    </div>
  );
};
