import { Header } from "@/components/bars/Header";
import { ContentContainer } from "@/components/containers/ContentContainer";
import { ContentHeader } from "@/components/content/ContentHeader";
import { PageTitle } from "@/components/content/PageTitle";
import Image from "next/image";
import Link from "next/link";

const Thesis = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <ContentHeader
          blurb="A short VR experience where participants are invited to discover a
          place unique to them."
          title="Wherever You Go"
        />
        <div className="w-full mt-24">
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/BO4b37uYqNY?si=iYF1zuzSIUFsyuhQ"
              title="YouTube video player"
              frameBorder="0"
              style={{ position: "absolute", top: 0, left: 0 }}
              allow="encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mt-24 flex-col flex lg:text-lg">
          <span className="lg:text-4xl font-semibold">Concept</span>
          <span className="mt-6 lg:mt-12">
            &quot;Wherever you go, there you are&quot;. Usually I hear this
            expression used as a lament, a recognition that, try as we might, we
            are unable to change ourselves or escape from &quot;who we
            are&quot;. However, I&apos;ve never viewed the phrase that way. To
            me, it has always sounded celebratory, of the fact that everything
            one does and perceives is filtered through the unique lens of
            one&apos;s own viewpoints and experiences.
          </span>
          <span className="mt-12">
            This project, my thesis as a student at NYU ITP, comes from that
            idea, as well as from sessions of bingeing Poetics of Space and
            Invisible Cities. What I wanted is to build an experience that led
            all players to a space they felt was born from their unique
            perspective. Players are placed into a vast, empty void and given
            the choice to move wherever they want. As they do, the landscape
            evolves around them.
          </span>
          <span className="mt-12">
            A playable version can be downloaded by clicking{" "}
            <Link
              className="font-bold"
              href={
                "https://drive.google.com/drive/folders/1xd3kZedpC2riIX9-UOesnLlO6zs_NpR7?usp=sharing"
              }
            >
              here
            </Link>
            .
          </span>
        </div>
        <div className="w-full mt-24">
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://player.vimeo.com/video/552084792?h=a304fb9c2d"
              title="Vimeo vide player"
              frameBorder="0"
              style={{ position: "absolute", top: 0, left: 0 }}
              allow="encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mt-24 flex-col flex">
          <span className="lg:text-4xl font-semibold">Tools</span>
          <ul className="mt-6 lg:mt-12 lg:text-lg list-disc">
            <li>Unreal Engine 4.26</li>
            <li>Oculus Quest 2 Headset</li>
          </ul>
        </div>
        <div className="mt-24 flex-col flex justify-between lg:flex-row">
          <Image
            className="rounded"
            src="/cezarExhibition.jpg"
            width={500}
            height={500}
            alt={"An image of my project liquid relationships"}
          />
          <Image
            className="mt-12 lg:mt-0 rounded"
            src="/girlExhibition.jpg"
            width={500}
            height={500}
            alt={"An image of my project liquid relationships"}
          />
        </div>
        <div className="mt-24 flex-col flex lg:text-lg">
          <span className="lg:text-4xl font-semibold">Mechanisms</span>
          <span className="mt-6 lg:mt-12">
            Players begin &quot;Wherever You Go&quot; by putting on a VR
            headset. Inside, they find themselves in a vast, empty, colorless
            landscape. As they wander this landscape, however, the environment
            changes and reshapes itself around them. The changes in the
            environment are based on how the player moves through the virtual
            world using the thumbsticks on the VR headset&apos;s controllers,
            rather than their absolute position in the world. The program reads
            the current orientation of the controller and, when the player moves
            forward, adjusts the landscape accordingly. This ensures that each
            person’s journey, and where each person ends up, are unique to them.
            The project is built in Unreal Engine and works with most major VR
            headset; Facebook&apos;s Oculus, HTC&apos;s Vive, and Valve&apos;s
            Index have all been tested.
          </span>
        </div>
        <div className="mt-24 flex-col flex justify-between lg:flex-row">
          <Image
            className="rounded"
            src="/exhibitionPics1.jpg"
            width={500}
            height={500}
            alt={"An image of my project liquid relationships"}
          />
          <Image
            className="mt-12 rounded lg:mt-0"
            src="/exhibitionPics2.jpg"
            width={500}
            height={500}
            alt={"An image of my project liquid relationships"}
          />
        </div>
        <div className="mt-24 flex-col flex">
          <span className="lg:text-4xl font-semibold">Reflections</span>
          <span className="mt-6 lg:mt-12 lg:text-lg">
            I have a lot in the works for this project, and of them all it is
            the one I&apos;d like to see expanded the most. As with many of my
            other projects, it takes objective data (movement of the player) and
            attempts to tell a story with it. The twist here is that the story
            ends when the player wants it to end -- they have to find the
            culmination of the work in themselves. In the future I plan to
            optimize the experience and also introduce additional constraints
            aimed at helping the player find meaning in their experience more
            consistently or more quickly; for example, I&apos;ve considered
            adding a time limit to the experience, though I think something of
            the effect might be lost if I do. If you have any suggestions,
            I&apos;d love to hear them!
          </span>
        </div>
        <div className="my-24 flex-col flex justify-between lg:flex-row">
          <Image
            className="rounded"
            src="/exhibitionPics3.jpg"
            width={500}
            height={500}
            alt={"An image of my project liquid relationships"}
          />
          <Image
            className="mt-12 rounded lg:mt-0"
            src="/exhibitionPics4.jpg"
            width={500}
            height={500}
            alt={"An image of my project liquid relationships"}
          />
        </div>
      </ContentContainer>
    </div>
  );
};

export default Thesis;
