import { Dispatch, SetStateAction, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { setToLoaded } from "@/store/slice";
import { ThunkDispatch } from "@reduxjs/toolkit";

export const useShaderUpdater = (
  shaderIndex: number,
  setShaderIndex: Dispatch<SetStateAction<number>>
): void => {
  useEffect(() => {
    const onKeyDown = (event) => {
      const GoingUp = event.key === "ArrowRight";
      const GoingDown = event.key === "ArrowLeft";
      if (GoingUp) {
        event.preventDefault();
        shaderIndex < 5 ? setShaderIndex(shaderIndex + 1) : null;
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
