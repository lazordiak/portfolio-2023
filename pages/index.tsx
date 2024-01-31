import Head from "next/head";
import { useShaderUpdater } from "@/hooks/useKeyDown";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { LiquidScreen } from "@/components/screens/LiquidScreen";
import { JournalsScreen } from "@/components/screens/JournalsScreen";
import { WeatherScreen } from "@/components/screens/WeatherScreen";
import { ThesisScreen } from "@/components/screens/ThesisScreen";
import { PageTracker } from "@/components/buttons/PageTracker";
import { HackathonScreen } from "@/components/screens/HackathonScreen";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { updateShaderIndex } from "@/store/slice";
import { motion } from "framer-motion";

export default function Home() {
  const dispatch = useAppDispatch();
  const shaderIndex = useAppSelector((state) => state.shaderIndex);
  useShaderUpdater();

  return (
    <>
      <Head>
        <title>Schuyler deVos</title>
        <meta name="description" content="Portfolio of Schuyler deVos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/pke4uus.css" />
      </Head>
      <div className="absolute p-12 lg:text-xl flex w-full justify-between lg:py-24 lg:px-72 text-snow z-10">
        <button
          className="hidden md:block"
          onClick={() => {
            dispatch(updateShaderIndex(0));
          }}
        >
          <span>SD</span>
        </button>

        <div className="w-full md:w-fit justify-between md:justify-normal flex flex-row">
          <div>
            <Link href="/about">
              <span>About</span>
            </Link>
          </div>
          <div className="ml-12">
            <Link href="/contact">
              <span>Contact</span>
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
          <LiquidScreen />
        </motion.div>
      )}
      {shaderIndex === 2 && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <JournalsScreen />
        </motion.div>
      )}
      {shaderIndex === 4 && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <WeatherScreen />
        </motion.div>
      )}
      {shaderIndex === 1 && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ThesisScreen />
        </motion.div>
      )}
      {shaderIndex === 5 && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <HackathonScreen />
        </motion.div>
      )}
      <div className="w-full py-12 lg:p-24 bottom-0 absolute flex justify-center">
        <PageTracker shaderIndex={shaderIndex} />
      </div>
    </>
  );
}
