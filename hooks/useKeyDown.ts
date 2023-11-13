import { useEffect } from "react";

export const useShaderUpdater = (shaderIndex: number, setShaderIndex): void => {
  useEffect(() => {
    const onKeyDown = (event) => {
      console.log("index is ", shaderIndex);
      const GoingUp = event.key === "ArrowRight";
      const GoingDown = event.key === "ArrowLeft";
      if (GoingUp) {
        event.preventDefault();
        shaderIndex < 4 ? setShaderIndex(shaderIndex + 1) : null;
      } else if (GoingDown) {
        event.preventDefault();
        shaderIndex > 0 ? setShaderIndex(shaderIndex - 1) : null;
      } else {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [shaderIndex, setShaderIndex]);
};
