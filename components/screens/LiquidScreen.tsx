import LiquidShader from "@/shaders/LiquidShader";
import { shaderContainerStyle } from "@/styles/constants";

export const LiquidScreen = () => {
  return (
    <div className={shaderContainerStyle}>
      <LiquidShader />
    </div>
  );
};
