import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import LazyShader from "@/components/common/LazyShader";
import { setToLoaded } from "@/store/slice";
import { shaderContainerStyle } from "@/styles/constants";
import { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Spectral } from "next/font/google";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const spectral = Spectral({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

interface HomeScreenProps {}

/**
 * HomeScreen component that displays the main landing page with animated name reveal
 * and background shader effects. Manages loading state and triggers animations.
 */
export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [nameFaded, setNameFaded] = useState(false);
  const hasLoaded = useAppSelector((state) => state.hasLoaded);
  const dispatch = useAppDispatch();
  const prefersReducedMotion = useReducedMotion();

  const loadingSettings = useMemo(() => ({
    loadingTime: prefersReducedMotion ? 1000 : 9000,
    fadeTime: prefersReducedMotion ? 100 : 4500,
  }), [prefersReducedMotion]);

  const triggerLoaded = useCallback(() => {
    dispatch(setToLoaded());
  }, [dispatch]);

  const triggerNameFade = useCallback(() => {
    setNameFaded(true);
  }, []);

  useEffect(() => {
    if (!hasLoaded) {
      const timer = setTimeout(triggerLoaded, loadingSettings.loadingTime);
      return () => clearTimeout(timer);
    }
  }, [hasLoaded, loadingSettings.loadingTime, triggerLoaded]);

  useEffect(() => {
    if (!hasLoaded && !nameFaded) {
      const timer = setTimeout(triggerNameFade, loadingSettings.fadeTime);
      return () => clearTimeout(timer);
    } else {
      setNameFaded(true);
    }
  }, [hasLoaded, nameFaded, loadingSettings.fadeTime, triggerNameFade]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <main
        className={`relative px-6 lg:px-12 py-24 flex w-screen justify-center ${spectral.className}`}
      >
        <div className="text-snow cursor-default">
          {!hasLoaded ? (
            <div>
              <div
                className="text-6xl lg:text-9xl lg:text-left"
                style={{
                  textShadow:
                    "0 0 10px rgba(58, 168, 193, 0.6), 0 0 30px rgba(58, 168, 193, 0.4)",
                }}
              >
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
              <div
                className="mb-4 text-6xl lg:text-left lg:text-9xl"
                style={{
                  textShadow:
                    "0 0 10px rgba(58, 168, 193, 0.6), 0 0 30px rgba(58, 168, 193, 0.4)",
                }}
              >
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
              <div className="text-lg lg:max-w-[66.66%] mt-4 lg:text-3xl opacity-0 animate-fade-in [--fade-delay:3000ms]">
                is a web developer and creative technologist based in New York
                City. His work utilizes new and emerging technologies as tools
                for speculative worldbuilding, digitally and physically.
              </div>
            </div>
          ) : (
            <div>
              <div
                className="text-6xl lg:text-9xl"
                style={{
                  textShadow:
                    "0 0 10px rgba(58, 168, 193, 0.6), 0 0 30px rgba(58, 168, 193, 0.4)",
                }}
              >
                <span>S</span>
                <span>c</span>
                <span>h</span>
                <span>u</span>
                <span>y</span>
                <span>l</span>
                <span>e</span>
                <span>r</span>
              </div>
              <div
                className="mb-4 text-6xl lg:text-9xl"
                style={{
                  textShadow:
                    "0 0 10px rgba(58, 168, 193, 0.6), 0 0 30px rgba(58, 168, 193, 0.4)",
                }}
              >
                <span>d</span>
                <span>e</span>
                <span>V</span>
                <span>o</span>
                <span>s</span>
              </div>
              <div className="text-lg lg:max-w-[66.66%] mt-4 lg:text-3xl">
                is a web developer and creative technologist based in New York
                City. His work utilizes new and emerging technologies as tools
                for speculative worldbuilding, digitally and physically.
              </div>
            </div>
          )}
        </div>
      </main>

      <div className={shaderContainerStyle}>
        <ErrorBoundary
          fallback={
            <div className="w-full h-full bg-black opacity-50" />
          }
        >
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <LazyShader />
          </motion.div>
        </ErrorBoundary>
      </div>
    </motion.div>
  );
};
