import Head from "next/head";
import { useShaderUpdater } from "@/hooks/useKeyDown";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { PageTracker } from "@/components/buttons/PageTracker";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShaderScreen } from "@/components/screens/ShaderScreen";
import LiquidShader from "@/shaders/LiquidShader";
import ThesisShader from "@/shaders/ThesisShader";
import WeatherShader from "@/shaders/WeatherShader";
import JournalsShader from "@/shaders/JournalsShader";
import ForagerShader from "@/shaders/ForagerShader";
import HackathonShader from "@/shaders/HackathonShader";
import MainHeader, { cinzel } from "@/components/bars/MainHeader";
import GridCard from "@/components/cards/GridCard";
import Ball from "@/components/effects/GlowingBall";
import { Footer } from "@/components/bars/Footer";
import {
  amatic,
  arvo,
  lovers,
  metal,
  poiretOne,
  qwytcher,
  uncia,
} from "@/utils/fonts";

export default function Home() {
  const shaderIndex = useAppSelector((state) => state.shaderIndex);
  useShaderUpdater();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [presStyle, setPresStyle] = useState<number>(0);

  if (true) {
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
        <HomeScreen />
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3 }}
          className={`${cinzel.className} text-snow px-6 lg:px-12 text-5xl`}
        >
          Featured Work
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 4 }}
          className="grid relative py-12 px-6 lg:px-12 lg:grid-cols-2 gap-8"
        >
          <GridCard
            size={1}
            font={metal.className}
            title="MAMMON.exe"
            type="Interactive Installation"
            link="/mammon"
            caption="MAMMON.exe is an interactive installation where supplicants can visit the altars of the gods of consumption and commune with them in an attempt to win their favor. A custom web app connects to an Unreal Engine project and interfaces with ChatGPT to generate unique, tailored experiences for each supplicant."
            img="/MammonFinal(1).jpg"
          />
          <GridCard
            size={1}
            font={amatic.className}
            title="Forager"
            type="VR Film"
            link="/forager"
            caption="Forager is a VR film where you live out the lifecycle of a mushroom. You start as a spore, grow into a mycelium network, and finally fruit into a mushroom. The film is a meditation on the interconnectedness of life and the beauty of decay, and uses volumetric time-lapse capture of growing mushrooms to render them as point clouds within Unreal Engine."
            img="/ForagerVid.mp4"
          />
          <GridCard
            size={1}
            font={poiretOne.className}
            title="Wherever You Go"
            type="Short-form VR Experience"
            link="/thesis"
            caption="In 'Wherever You Go', participants are placed into a blank virtual world and tasked with exploring until they find a place they resonate with. The environment in 'Wherever You Go' grows and changes depending on the directions people travel through it, cycling between four interrelated biomes."
            img="/WhereUGoVid.mp4"
          />
          <GridCard
            size={1}
            font={lovers.className}
            title="Department of Tenderness"
            type="Participatory Installation"
            link="/tenderness"
            caption="The Department of Tenderness (DOT) is a speculative bureaucratic agency tasked with overseeing the maintenance and promotion of love and tenderness within New York City. As the DOT, we put on public events and installations designed to investigate the role of bureaucracy and love in urban design."
            img="/DOTVid.mp4"
          />
          <GridCard
            size={1}
            font={uncia.className}
            title="Stone Stories"
            type="AR Installation"
            link="https://devpost.com/software/stone-stories"
            caption="'Stone Stories' is an augmented reality app where users start communal cairns in places of personal significance. Other people can come and add to the cairn or view things that have been placed there before, leading to impromptu public sculptures. MIT Reality Hack winner 2022."
            img="/StoneStoriesVid.mp4"
          />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 4 }}
          className={`${cinzel.className} text-snow px-6 lg:px-12 text-5xl`}
        >
          Additional Work
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 4 }}
          className="grid relative py-12 px-6 lg:px-12 lg:grid-cols-3 gap-8"
        >
          <GridCard
            title="The Tower"
            link="https://v3.globalgamejam.org/2023/games/tower-8"
            caption="A web game made for Global Game Jam utilizing a text interface and visuals built with ThreeJS where the player climbs an abandoned tower in a dystopian AI future."
            img="/tower1.png"
          />
          <GridCard
            title="Curse of the Mummy 3D"
            link="https://v3.globalgamejam.org/2021/games/curse-mummy-3d-0"
            caption="A game made for the Global Game Jam where you play as a mummy searching for pilfered organs."
            img="/mummy1.png"
          />
          <GridCard
            title="Weather Band"
            link="/weather"
            caption="Weather Band was a collaborative project at NYU where members got together to build and play instruments that utilized weather data."
            img="/WeatherBand.jpg"
          />
          <GridCard
            title="The Shadow"
            link="https://v3.globalgamejam.org/2022/games/shadow-2"
            caption="A short horror game made for the Global Game Jam where players switch between dimensions to escape the shadow."
            img="/shadow1.png"
          />
          <GridCard
            title="LetGoXR"
            link="https://devpost.com/software/letgoxr"
            caption="LetGoXR is an augmented reality app helping to visualize the process of letting go."
            img="/letgoxr1.png"
          />
          <GridCard
            title="Rattrack"
            link="https://rattrack.onrender.com/"
            caption="RATTRACK: The NYPD's official* database for tracking and identifying rodent criminals.
            
            
            *not official"
            img="/rattrack2.png"
          />
          <GridCard
            title="Liquid Relationships"
            link="/liquid"
            caption="Liquid Relationships is a touch-and-water-based interactive physical installation about forming connections."
            img="/liquid6.jpg"
          />
          <GridCard
            title="Weather Journals"
            link="/journals"
            caption="Liquid Relationships is a touch-and-water-based interactive physical installation about forming connections."
            img="/JournalsGIF.gif"
          />
        </motion.div>
        <Footer />
      </>
    );
  }

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
