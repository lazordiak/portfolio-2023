import ThesisShader from "@/shaders/ThesisShader";
import { shaderContainerStyle } from "@/styles/constants";

export const ThesisScreen = () => {
  return (
    <div className={shaderContainerStyle}>
      <ThesisShader />
    </div>
  );
};
