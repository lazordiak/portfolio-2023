import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { updateShaderIndex } from "@/store/slice";

export const useShaderUpdater = (): void => {
  const shaderIndex = useAppSelector((state) => state.shaderIndex);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const onKeyDown = (event) => {
      const GoingUp = event.key === "ArrowRight";
      const GoingDown = event.key === "ArrowLeft";
      if (GoingUp) {
        event.preventDefault();
        shaderIndex < 5 ? dispatch(updateShaderIndex(shaderIndex + 1)) : null;
      } else if (GoingDown) {
        event.preventDefault();
        shaderIndex > 0 ? dispatch(updateShaderIndex(shaderIndex - 1)) : null;
      } else {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [shaderIndex, dispatch]);
};
