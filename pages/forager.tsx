import { Header } from "@/components/bars/Header";
import MainHeader from "@/components/bars/MainHeader";
import { MainContentCard } from "@/components/cards/MainContentCards";
import { ContentContainer } from "@/components/containers/ContentContainer";
import { ContentHeader } from "@/components/content/ContentHeader";
import { amatic, fragMono } from "@/utils/fonts";
import { projectInfoStyle } from "@/utils/sharedStyles";
import Image from "next/image";
import Link from "next/link";

const Forager = () => {
  return (
    <div>
      <MainHeader opacity={1} />
      <ContentContainer>
        <div className="flex flex-col gap-4 mt-24">
          <h1 className={`${amatic.className} text-6xl lg:text-8xl`}>
            Forager
          </h1>
          <h2 className={`text-xl ${fragMono.className}`}>
            A VR film following the lifecycle of a mushroom, from spore to
            decay. Official website can be found{" "}
            <Link className="underline" href={"https://www.forager.earth/"}>
              here
            </Link>
            .
          </h2>
        </div>
        <div className="w-full mt-24">
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <video
              controls
              width="100%"
              height="100%"
              src="/ForagerCut.mp4"
              title="Forager"
              style={{ position: "absolute", top: 0, left: 0 }}
            ></video>
          </div>
        </div>
        <div className={projectInfoStyle}>
          <span className="lg:text-4xl text-3xl font-semibold">Concept</span>
          <p>
            The soil of old growth forests holds the key to human survival. Its
            fungi help us breathe, keep us fed, let us heal, and keep critical
            carbon in the ground. But these forests are disappearing - putting
            at risk mycelial life and human life. Forager is a VR experience
            that invites you to lie down and watch the lifecycle of a mushroom,
            from spore to decay. It is a meditation on the interconnectedness of
            all life and the importance of preserving our forests.
          </p>
          <p>
            Forager is an immersive VR experience from New Reality company where
            participants go through the lifecycle of a mushroom, from spore to
            decay. I served as the primary in-person engineer for much of the
            project&apos;s development. The film premiered at Sundance 2023 and
            has also been featured at Tribeca and other new media festivals!
          </p>
          <p>
            The project was built in Unreal Engine for use with Meta&apos;s
            Quest 2 headset. The project also utilized a completely unique
            device to record mushrooms as they are growing and subsequently
            render them as a point cloud in Unreal Engine.
          </p>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <MainContentCard
            altText="An image of the capture device used to import mushroom captures into Unreal Engine."
            photoPath="forager2.png"
          />
          <MainContentCard
            altText="A display of the mushroom data as a point cloud in Unreal Engine"
            photoPath="forager4.png"
          />
        </div>
        <div className={`${projectInfoStyle} mb-24`}>
          <span className="lg:text-4xl text-3xl font-semibold">Mechanisms</span>
          <p>
            After recording the growth and decay cycle of a number of different
            species of mushrooms, we were able to import the data into Unreal
            and set up a custom workflow within the sequencer to animate them
            growing and dispersing as part of the film.
          </p>
          <p>
            Including the mushroom point clouds, the film cycles through four
            phases of mushroom development: spore, mycelium, fruiting body, and
            decay. The film is entirely visual, with no narration. Participants
            lie on their backs on the floor and watch the film on a VR headset,
            surrounded by a wall made of myco-bricks, which are bricks made from
            mycelium.
          </p>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Forager;
