import Head from "next/head";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import MainHeader from "@/components/bars/MainHeader";
import GridCard from "@/components/cards/GridCard";
import {
  amatic,
  cinzel,
  lovers,
  metal,
  poiretOne,
  sunshiney,
  uncia,
} from "@/utils/fonts";
import { Footer } from "@/components/bars/Footer";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Home() {
  const [presStyle, setPresStyle] = useState<number>(0);
  const prefersReducedMotion = useReducedMotion();

  const animationProps = useMemo(() => ({
    featuredWork: {
      initial: { opacity: prefersReducedMotion ? 1 : 0 },
      animate: { opacity: 1 },
      transition: { 
        duration: prefersReducedMotion ? 0 : 1.5, 
        delay: prefersReducedMotion ? 0 : 3 
      }
    },
    contentSections: {
      initial: { opacity: prefersReducedMotion ? 1 : 0 },
      animate: { opacity: 1 },
      transition: { 
        duration: prefersReducedMotion ? 0 : 1.5, 
        delay: prefersReducedMotion ? 0 : 4 
      }
    }
  }), [prefersReducedMotion]);

  return (
    <>
      <Head>
        <title>Schuyler deVos - Creative Technologist & Web Developer</title>
        <meta name="description" content="Portfolio of Schuyler deVos, a creative technologist and web developer specializing in VR/AR experiences, interactive installations, and digital art. Based in New York City." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="creative technologist, web developer, VR, AR, interactive installation, digital art, New York, portfolio" />
        <meta name="author" content="Schuyler deVos" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://schuylerdevos.com/" />
        <meta property="og:title" content="Schuyler deVos - Creative Technologist & Web Developer" />
        <meta property="og:description" content="Portfolio showcasing VR/AR experiences, interactive installations, and digital art by creative technologist Schuyler deVos." />
        <meta property="og:image" content="/sky1.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://schuylerdevos.com/" />
        <meta property="twitter:title" content="Schuyler deVos - Creative Technologist & Web Developer" />
        <meta property="twitter:description" content="Portfolio showcasing VR/AR experiences, interactive installations, and digital art by creative technologist Schuyler deVos." />
        <meta property="twitter:image" content="/sky1.jpg" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://schuylerdevos.com/" />
      </Head>
      <MainHeader presStyle={presStyle} setPresStyle={setPresStyle} />
      <HomeScreen />
      <motion.h3
        {...animationProps.featuredWork}
        className={`${cinzel.className} text-snow px-6 lg:px-12 text-5xl`}
      >
        Featured Work
      </motion.h3>
      <motion.div
        {...animationProps.contentSections}
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
        <GridCard
          size={1}
          font={sunshiney.className}
          title="Spiritwood"
          type="AR Installation"
          link="/spiritwood"
          caption="An immersive installation exploring the intersection of nature and spirituality through interactive technology. Visitors can discover and interact with different types of nature spirits hidden around MIT's campus, leaving offerings to receive their blessings."
          img="/spirits/Spirits8.JPG"
        />
      </motion.div>
      <motion.h3
        {...animationProps.contentSections}
        className={`${cinzel.className} text-snow px-6 lg:px-12 text-5xl`}
      >
        Additional Work
      </motion.h3>
      <motion.div
        {...animationProps.contentSections}
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
          caption="Weather Journals enables collaborative storytelling between you and the weather, mediated by ML algorithms."
          img="/JournalsGIF.gif"
        />
      </motion.div>
      <Footer />
    </>
  );

}
