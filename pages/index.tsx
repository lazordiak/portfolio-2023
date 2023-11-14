import Head from "next/head";

import { useShaderUpdater } from "@/hooks/useKeyDown";
import { useState } from "react";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { LiquidScreen } from "@/components/screens/LiquidScreen";
import { JournalsScreen } from "@/components/screens/JournalsScreen";
import { WeatherScreen } from "@/components/screens/WeatherScreen";
import { ThesisScreen } from "@/components/screens/ThesisScreen";

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
      {shaderIndex === 0 && <HomeScreen />}
      {shaderIndex === 1 && <LiquidScreen />}
      {shaderIndex === 2 && <JournalsScreen />}
      {shaderIndex === 3 && <WeatherScreen />}
      {shaderIndex === 4 && <ThesisScreen />}
    </>
  );
}
