import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import HomeShader from "@/shaders/HomeShader";
import { setToLoaded } from "@/store/slice";
import { shaderContainerStyle } from "@/styles/constants";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const HomeScreen = () => {
  const [nameFaded, setNameFaded] = useState(false);
  const hasLoaded = useAppSelector((state) => state.hasLoaded);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!hasLoaded) {
      setTimeout(() => dispatch(setToLoaded()), 9000);
    }
  }, [dispatch, hasLoaded]);

  useEffect(() => {
    if (!hasLoaded && !nameFaded) {
      setTimeout(() => setNameFaded(true), 4500);
    } else {
      setNameFaded(true);
    }
  }, [hasLoaded, nameFaded, dispatch]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <main className="absolute lg:py-24 lg:px-40 flex w-screen h-screen justify-center lg:justify-normal items-center">
        <div className="font-serif minion-3 text-snow">
          {!hasLoaded ? (
            <>
              <div className="text-center text-6xl lg:text-left lg:text-9xl">
                <span className="opacity-0 animate-fade-in [--fade-delay:1000ms]">
                  S
                </span>
                <span className="opacity-0 animate-fade-in [--fade-delay:1500ms]">
                  c
                </span>
                <span className="opacity-0 animate-fade-in [--fade-delay:700ms]">
                  h
                </span>
                <span className="opacity-0 animate-fade-in [--fade-delay:2000ms]">
                  u
                </span>
                <span className="opacity-0 animate-fade-in [--fade-delay:500ms]">
                  y
                </span>
                <span className="opacity-0 animate-fade-in [--fade-delay:2500ms]">
                  l
                </span>
                <span className="opacity-0 animate-fade-in [--fade-delay:3000ms]">
                  e
                </span>
                <span className="opacity-0 animate-fade-in [--fade-delay:650ms]">
                  r
                </span>
              </div>
              <div className="text-center mb-4 lg:text-left text-6xl lg:text-9xl">
                <span className="opacity-0 animate-fade-in [--fade-delay:300ms]">
                  d
                </span>
                <span className="opacity-0 animate-fade-in [--fade-delay:1500ms]">
                  e
                </span>
                <span className="opacity-0 animate-fade-in [--fade-delay:1000ms]">
                  V
                </span>
                <span className="opacity-0 animate-fade-in [--fade-delay:2700ms]">
                  o
                </span>
                <span className="opacity-0 animate-fade-in [--fade-delay:1700ms]">
                  s
                </span>
              </div>
              <div className="text-center mb-4 lg:text-left text-xl lg:text-xl opacity-0 animate-fade-in [--fade-delay:4500ms]">
                Web developer, creative technologist.
              </div>
              <div className="text-center lg:text-left lg:text-xl opacity-0 animate-fade-in [--fade-delay:4500ms]">
                : )
              </div>
            </>
          ) : (
            <>
              <div className="text-center lg:text-left text-6xl lg:text-9xl">
                <span>S</span>
                <span>c</span>
                <span>h</span>
                <span>u</span>
                <span>y</span>
                <span>l</span>
                <span>e</span>
                <span>r</span>
              </div>
              <div className="text-center mb-4 lg:text-left text-6xl lg:text-9xl">
                <span>d</span>
                <span>e</span>
                <span>V</span>
                <span>o</span>
                <span>s</span>
              </div>
              <div className="text-center text-lg mt-4 lg:text-left lg:text-xl">
                Web developer, creative technologist.
              </div>
              <div className="text-center mt-4 lg:text-left lg:text-xl">
                : )
              </div>
            </>
          )}
        </div>
      </main>

      <div className={shaderContainerStyle}>{nameFaded && <HomeShader />}</div>
    </motion.div>
  );
};
