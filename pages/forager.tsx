import { Header } from "@/components/bars/Header";
import { MainContentCard } from "@/components/cards/MainContentCards";
import { ContentContainer } from "@/components/containers/ContentContainer";
import { ContentHeader } from "@/components/content/ContentHeader";
import Image from "next/image";
import Link from "next/link";

const Forager = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <ContentHeader
          title="Forager"
          blurb="A VR experience where you experience the life cycle of a mushroom."
        />
        <span className="mt-6">
          Official website can be found{" "}
          <Link href={"https://www.forager.earth/"} className="underline">
            here
          </Link>
          .
        </span>
        <div className="w-full mt-24">
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <video
              className="border-solid border-2"
              controls
              width="100%"
              height="100%"
              src="/ForagerCut.mp4"
              title="Forager"
              style={{ position: "absolute", top: 0, left: 0 }}
            ></video>
          </div>
          <div className="italic mt-6">
            Above you can watch a short demo of some of the graphics from
            Forager. You can see that the growing process of the mushroom has
            been rendered into point cloud data and reconstructed within Unreal
            Engine.
          </div>
        </div>
        <div className="mt-24 text-lg">
          Forager is an immersive VR experience from New Reality company where
          participants go through the lifecycle of a mushroom, from spore to
          decay. I served as the primary in-person engineer for much of the
          project&apos;s development. The film premiered at Sundance 2023 and
          has also been featured at Tribeca and other new media festivals!
        </div>
        <div className="mt-12 text-lg">
          The project was built in Unreal Engine for use with Meta&apos;s Quest
          2 headset. The project also utilized a completely unique device to
          record mushrooms as they are growing and subsequently render them as a
          point cloud in Unreal Engine.
        </div>
        <div className="my-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <MainContentCard
            altText="An image of the capture device used to import mushroom captures into Unreal Engine."
            photoPath="forager2.png"
            caption="This special machine was used to record the mushrooms growing as point clouds."
          />
          <MainContentCard
            altText="A display of the mushroom data as a point cloud in Unreal Engine"
            photoPath="forager4.png"
            caption="Above you can see the mushroom data displayed as a point cloud."
          />
        </div>
      </ContentContainer>
    </div>
  );
};

export default Forager;
