import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { updateShaderIndex } from "@/store/slice";

export const useShaderUpdater = (): void => {
  const shaderIndex = useAppSelector((state) => state.shaderIndex);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let touchstartX = 0;
    let touchendX = 0;

    const onKeyDown = (event) => {
      const goingUp = event.key === "ArrowRight";
      const goingDown = event.key === "ArrowLeft";
      if (goingUp) {
        event.preventDefault();
        shaderIndex < 6 ? dispatch(updateShaderIndex(shaderIndex + 1)) : null;
      } else if (goingDown) {
        event.preventDefault();
        shaderIndex > 0 ? dispatch(updateShaderIndex(shaderIndex - 1)) : null;
      } else {
        event.preventDefault();
      }
    };

    const onFingerSwipe = (event): void => {
      touchstartX = event.changedTouches[0].screenX;
    };

    const onTouchEnd = (event): void => {
      touchendX = event.changedTouches[0].screenX;

      checkDirection();

      function checkDirection() {
        if (touchendX < touchstartX) {
          event.preventDefault();
          shaderIndex < 6 ? dispatch(updateShaderIndex(shaderIndex + 1)) : null;
        }
        if (touchendX > touchstartX) {
          event.preventDefault();
          shaderIndex > 0 ? dispatch(updateShaderIndex(shaderIndex - 1)) : null;
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("touchstart", onFingerSwipe);
    document.addEventListener("touchend", onTouchEnd);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("touchstart", onFingerSwipe);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [shaderIndex, dispatch]);
};
