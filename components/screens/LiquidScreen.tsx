import LiquidShader from "@/shaders/LiquidShader";
import { shaderContainerStyle } from "@/styles/constants";

export const LiquidScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-white text-4xl lg:text-9xl">
        <span>Liquid Relationships</span>
      </div>
      <div className={shaderContainerStyle}>
        <LiquidShader />
      </div>
    </div>
  );
};
