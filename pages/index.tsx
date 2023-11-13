import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Surface } from "gl-react-dom";
import { HelloBlue, TestShader } from "@/shaders/TestShader";
import HomeShader from "@/shaders/HomeShader";
import { useShaderUpdater } from "@/hooks/useKeyDown";
import { useState } from "react";
import LiquidShader from "@/shaders/LiquidShader";
import JournalsShader from "@/shaders/JournalsShader";
import WeatherShader from "@/shaders/WeatherShader";
import ThesisShader from "@/shaders/ThesisShader";

const shaderContainerStyle = "absolute w-screen h-screen -z-50";

export default function Home() {
  const [shaderIndex, setShaderIndex] = useState(0);
  useShaderUpdater(shaderIndex, setShaderIndex);

  return (
    <>
      <Head>
        <title>Schuyler deVos</title>
        <meta name="description" content="Portfolio of Schuyler deVos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/pke4uus.css" />
      </Head>
      {shaderIndex === 0 && (
        <>
          <main className={styles.main}>
            <div className="font-serif minion-3 text-white justify-center items-center">
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
            </div>
          </main>

          <div className={shaderContainerStyle}>
            <HomeShader />
          </div>
        </>
      )}
      {shaderIndex === 1 && (
        <div className={shaderContainerStyle}>
          <LiquidShader />
        </div>
      )}
      {shaderIndex === 2 && (
        <div className={shaderContainerStyle}>
          <JournalsShader />
        </div>
      )}
      {shaderIndex === 3 && (
        <div className={shaderContainerStyle}>
          <WeatherShader />
        </div>
      )}
      {shaderIndex === 4 && (
        <div className={shaderContainerStyle}>
          <ThesisShader />
        </div>
      )}
      {/*<Surface width={1800} height={1200}>
        <TestShader />
  </Surface>*/}
    </>
  );
}
