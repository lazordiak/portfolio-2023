import Head from "next/head";
import { useShaderUpdater } from "@/hooks/useKeyDown";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { PageTracker } from "@/components/buttons/PageTracker";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { motion } from "framer-motion";
import { useState } from "react";
import { ShaderScreen } from "@/components/screens/ShaderScreen";
import LiquidShader from "@/shaders/LiquidShader";
import ThesisShader from "@/shaders/ThesisShader";
import WeatherShader from "@/shaders/WeatherShader";
import JournalsShader from "@/shaders/JournalsShader";
import ForagerShader from "@/shaders/ForagerShader";
import HackathonShader from "@/shaders/HackathonShader";
import MainHeader from "@/components/bars/MainHeader";

export default function Home() {
  const shaderIndex = useAppSelector((state) => state.shaderIndex);
  useShaderUpdater();

  const [presStyle, setPresStyle] = useState<number>(0);

  return (
    <>
      <Head>
        <title>Schuyler deVos</title>
        <meta name="description" content="Portfolio of Schuyler deVos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/pke4uus.css" />
      </Head>
      <MainHeader presStyle={presStyle} setPresStyle={setPresStyle} />
      {shaderIndex === 0 && <HomeScreen />}
      {shaderIndex === 3 && (
        <ShaderScreen
          title="Liquid Relationships"
          blurb="A touch-and-water-based interactive installation about forming connections."
          pageRef="/liquid"
          shaderComp={<LiquidShader />}
          presStyle={presStyle}
          img={"/liquid6.jpg"}
          keywords={["Physical Design", "Fabrication", "Microcontrollers"]}
        />
      )}
      {shaderIndex === 2 && (
        <ShaderScreen
          title="Weather Journals"
          blurb="Collaborative storytelling between you and the weather, mediated by
            ML algorithms."
          pageRef="/journals"
          shaderComp={<JournalsShader />}
          presStyle={presStyle}
          img={"/journalsGIF.gif"}
          keywords={[
            "ML",
            "Web Development",
            "Narrative Design",
            "Creative Coding",
          ]}
        />
      )}
      {shaderIndex === 4 && (
        <ShaderScreen
          title="Weather Band"
          blurb="Turning weather data into musical performances."
          pageRef="/weather"
          shaderComp={<WeatherShader />}
          presStyle={presStyle}
          img={"/cezarExhibition.jpg"}
          keywords={["Sound Design", "Creative Coding", "Web Development"]}
        />
      )}
      {shaderIndex === 1 && (
        <ShaderScreen
          title="Wherever You Go"
          blurb="A VR experience where participants are invited to discover a place unique to them."
          pageRef="/thesis"
          shaderComp={<ThesisShader />}
          presStyle={presStyle}
          img={"/cezarExhibition.jpg"}
          keywords={["Virtual Reality", "Unreal Engine", "Experience Design"]}
        />
      )}
      {shaderIndex === 6 && (
        <ShaderScreen
          title="Hackathons"
          blurb="Games, XR experiences and web projects from hackathons along the way."
          pageRef="/hackathons"
          shaderComp={<HackathonShader />}
          presStyle={presStyle}
          img={"/hacko.png"}
          keywords={[
            "Game Design",
            "XR",
            "Unreal Engine",
            "Unity",
            "Creative Coding",
          ]}
        />
      )}
      {shaderIndex === 5 && (
        <ShaderScreen
          title="Forager"
          blurb="A VR film where you experience the life cycle of a mushroom."
          pageRef="/journals"
          shaderComp={<ForagerShader />}
          presStyle={presStyle}
          img={"/forager4.png"}
          keywords={["Virtual Reality", "Unreal Engine", "Narrative Design"]}
        />
      )}
      <div className="w-full pb-12 lg:pb-24 lg:px-24 bottom-0 absolute flex justify-center">
        <PageTracker shaderIndex={shaderIndex} />
      </div>
    </>
  );
}
