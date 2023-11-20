import ThesisShader from "@/shaders/ThesisShader";
import { shaderContainerStyle } from "@/styles/constants";

export const ThesisScreen = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center w-screen h-screen font-serif minion-3 text-white text-4xl lg:text-9xl">
        <span>Wherever You Go</span>
      </div>
      <div className={shaderContainerStyle}>
        <ThesisShader />
      </div>
    </div>
  );
};
