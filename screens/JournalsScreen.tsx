import JournalsShader from "@/shaders/JournalsShader";
import { shaderContainerStyle } from "@/styles/constants";

export const JournalsScreen = () => {
  return (
    <div className={shaderContainerStyle}>
      <JournalsShader />
    </div>
  );
};
