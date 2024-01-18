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
      <div className="absolute lg:text-xl flex w-full justify-between py-24 px-72 text-snow z-10">
        <button
          onClick={() => {
            dispatch(updateShaderIndex(0));
          }}
        >
          <span>SD</span>
        </button>

        <div className="flex flex-row">
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
      {shaderIndex === 0 && <HomeScreen />}
      {shaderIndex === 3 && <LiquidScreen />}
      {shaderIndex === 2 && <JournalsScreen />}
      {shaderIndex === 4 && <WeatherScreen />}
      {shaderIndex === 1 && <ThesisScreen />}
      {shaderIndex === 5 && <HackathonScreen />}
      <div className="w-full p-24 bottom-0 absolute flex justify-center">
        <PageTracker shaderIndex={shaderIndex} />
      </div>
    </>
  );
}
