import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import HomeShader from "@/shaders/HomeShader";
import { setToLoaded } from "@/store/slice";
import styles from "@/styles/Home.module.css";
import { shaderContainerStyle } from "@/styles/constants";
import { useEffect, useState } from "react";

export const HomeScreen = () => {
  const [nameFaded, setNameFaded] = useState(false);
  const [infoFaded, setInfoFaded] = useState(false);
  const hasLoaded = useAppSelector((state) => state.hasLoaded);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!hasLoaded) {
      setTimeout(() => dispatch(setToLoaded()), 9000);
    }
  });

  useEffect(() => {
    if (!hasLoaded) {
      if (!nameFaded) {
        setTimeout(() => setNameFaded(true), 6000);
      } else if (!infoFaded) {
        setTimeout(() => setInfoFaded(true), 3000);
      }
    } else {
      setNameFaded(true);
    }
  }, [hasLoaded, nameFaded, infoFaded, dispatch]);

  return (
    <>
      <main className="absolute p-24 flex w-screen h-screen justify-center lg:justify-normal lg:items-center">
        <div className="font-serif minion-3 text-white text-4xl lg:text-9xl">
          {!hasLoaded ? (
            <>
              <div className="text-center">
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
              <div className="text-center">
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
            </>
          ) : (
            <>
              <div className="text-center">
                <span>S</span>
                <span>c</span>
                <span>h</span>
                <span>u</span>
                <span>y</span>
                <span>l</span>
                <span>e</span>
                <span>r</span>
              </div>
              <div className="text-center">
                <span>d</span>
                <span>e</span>
                <span>V</span>
                <span>o</span>
                <span>s</span>
              </div>
            </>
          )}
        </div>
      </main>

      <div className={shaderContainerStyle}>{nameFaded && <HomeShader />}</div>
    </>
  );
};
