import Head from "next/head";
import { useShaderUpdater } from "@/hooks/useKeyDown";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { PageTracker } from "@/components/buttons/PageTracker";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { updateShaderIndex } from "@/store/slice";
import { motion } from "framer-motion";
import { useState } from "react";
import { ShaderScreen } from "@/components/screens/ShaderScreen";
import LiquidShader from "@/shaders/LiquidShader";
import ThesisShader from "@/shaders/ThesisShader";
import WeatherShader from "@/shaders/WeatherShader";
import JournalsShader from "@/shaders/JournalsShader";
import ForagerShader from "@/shaders/ForagerShader";
import HackathonShader from "@/shaders/HackathonShader";

export default function Home() {
  const dispatch = useAppDispatch();
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
      <div className="absolute p-6 text-lg lg:text-xl flex w-full justify-between lg:py-24 lg:px-72 text-snow z-10">
        <button
          className="hidden md:block hover:underline"
          onClick={() => {
            dispatch(updateShaderIndex(0));
          }}
        >
          <span>SD</span>
        </button>

        <div className="w-full md:w-fit justify-between md:justify-normal flex flex-row">
          <div>
            <Link href="/about">
              <span className="hover:underline">About</span>
            </Link>
          </div>
          <div className="ml-12">
            <Link href="/contact">
              <span className="hover:underline">Contact</span>
            </Link>
          </div>
        </div>
      </div>
      {shaderIndex === 0 && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <HomeScreen />
        </motion.div>
      )}
      {shaderIndex === 3 && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ShaderScreen
            title="Liquid Relationships"
            blurb="A touch-and-water-based interactive installation about forming connections."
            pageRef="/liquid"
            shaderComp={<LiquidShader />}
          />
        </motion.div>
      )}
      {shaderIndex === 2 && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ShaderScreen
            title="Weather Journals"
            blurb="Collaborative storytelling between you and the weather, mediated by
            ML algorithms."
            pageRef="/journals"
            shaderComp={<JournalsShader />}
          />
        </motion.div>
      )}
      {shaderIndex === 4 && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ShaderScreen
            title="Weather Band"
            blurb="Turning weather data into musical performances."
            pageRef="/weather"
            shaderComp={<WeatherShader />}
          />
        </motion.div>
      )}
      {shaderIndex === 1 && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ShaderScreen
            title="Wherever You Go"
            blurb="A VR experience where participants are invited to discover a place unique to them."
            pageRef="/thesis"
            shaderComp={<ThesisShader />}
          />
        </motion.div>
      )}
      {shaderIndex === 6 && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ShaderScreen
            title="Hackathons"
            blurb="Games, XR experiences and web projects from hackathons along the way."
            pageRef="/hackathons"
            shaderComp={<HackathonShader />}
          />
        </motion.div>
      )}
      {shaderIndex === 5 && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ShaderScreen
            title="Forager"
            blurb="A VR film where you experience the life cycle of a mushroom."
            pageRef="/journals"
            shaderComp={<ForagerShader />}
          />
        </motion.div>
      )}
      <div className="w-full py-12 lg:p-24 bottom-0 absolute flex justify-center">
        <PageTracker shaderIndex={shaderIndex} />
      </div>
    </>
  );
}
