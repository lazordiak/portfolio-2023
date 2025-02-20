import { Header } from "@/components/bars/Header";
import MainHeader from "@/components/bars/MainHeader";
import { MainContentCard } from "@/components/cards/MainContentCards";
import { ContentContainer } from "@/components/containers/ContentContainer";
import { ContentHeader } from "@/components/content/ContentHeader";
import { fragMono, poiretOne, qwytcher } from "@/utils/fonts";
import { projectInfoStyle } from "@/utils/sharedStyles";
import Link from "next/link";

const Thesis = () => {
  return (
    <div>
      <MainHeader opacity={1} />
      <ContentContainer>
        <div className="flex flex-col gap-4 mt-24">
          <h1 className={`${poiretOne.className} text-6xl lg:text-8xl`}>
            Wherever You Go
          </h1>
          <h2 className={`text-xl ${fragMono.className}`}>
            A short-form VR experience where participants are invited to wander
            in search of a place unique to them.
          </h2>
        </div>
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
        <div className={projectInfoStyle}>
          <span className="lg:text-4xl text-3xl font-semibold">Concept</span>
          <p>
            &quot;Wherever you go, there you are&quot;. Usually I hear this
            expression used as a lament, a recognition that, try as we might, we
            are unable to change ourselves or escape from &quot;who we
            are&quot;. However, I&apos;ve never viewed the phrase that way. To
            me, it has always sounded celebratory, of the fact that everything
            one does and perceives is filtered through the unique lens of
            one&apos;s own viewpoints and experiences.
          </p>
          <p>
            This project, my thesis as a student at NYU ITP, comes from that
            idea, and is heavily influenced by texts like Invisible Cities and
            the Poetics of Space that center on the idea of space as a
            reflection of the self. What I wanted is to build an experience that
            led all players to a space they felt was born from their unique
            perspective.
          </p>
          <p>
            A playable version can be downloaded{" "}
            <Link
              className="font-bold underline"
              href={
                "https://drive.google.com/drive/folders/1xd3kZedpC2riIX9-UOesnLlO6zs_NpR7?usp=sharing"
              }
            >
              here
            </Link>
            .
          </p>
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
        <div className={projectInfoStyle}>
          <p className="lg:text-4xl text-3xl font-semibold">Mechanisms</p>
          <p>
            Wherever You Go was built on Unreal Engine for usage with the Meta
            Quest, but works with most major VR headsets; Facebook&apos;s
            Oculus, HTC&apos;s Vive, and Valve&apos;s Index have all been
            tested.
          </p>
          <p>
            Players begin by putting on the headset, where they find themselves
            in a vast, empty, colorless landscape. As they wander this
            landscape, however, the environment changes and reshapes itself
            around them. The player is given no goals, instructions or time
            limit other than to &apos;find a place that feels like home&apos;.
            The experience ends when the player feels they have found that
            place.
          </p>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <MainContentCard
            altText="An image of my weather band instrument."
            photoPath="cezarExhibition.jpg"
          />
          <MainContentCard
            altText="An image of my project liquid relationships."
            photoPath="girlExhibition.jpg"
          />
        </div>
        <div className={projectInfoStyle}>
          <p>
            Within the world of the experience, the environment is fluid and
            shifts between four environments: the bottom of the ocean, a
            storm-riddled rocky coast, a lush and peaceful forest, and a dry,
            mysterious desert. Each of these environments is meant to evoke and
            resonate with a specific set of feelings on the axes of
            calm-turbulent and lush-barren.
          </p>
          <p>
            The changes in the environment are based on how the player moves
            through the virtual world. The program reads the current orientation
            of the controller and, when the player moves forward, adjusts the
            landscape accordingly. This ensures that each person’s journey, and
            where each person ends up, are unique to them.
          </p>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <MainContentCard
            altText="An image of my weather band instrument."
            photoPath="exhibitionPics1.jpg"
          />
          <MainContentCard
            altText="An image of my project liquid relationships."
            photoPath="exhibitionPics2.jpg"
          />
        </div>
        <div className={projectInfoStyle}>
          <p className="lg:text-4xl text-3xl font-semibold">Reflections</p>
          <p>
            I have a lot of love for all the work I put out into the world, but
            I would be lying if I said there wasn&apos;t a special place in my
            heart for Wherever You Go. This piece was what got me into XR, and
            displays all of what I&apos;ve come to think of as the hallmarks of
            my work: a focus on individual user interaction and empowerment, a
            deep interest in how place and space influence us both internally
            and externally, and a communal aspect that encourages participants
            to think about the experiences of others.
          </p>
          <p>
            Out of all the pieces I&apos;ve worked on, this is the one that I
            would love most to find the time and money to expand on and develop
            further. I think there is a lot of potential in the idea of a
            constantly shifting, user-driven environment, and I would love to
            pursue it further. If have any suggestions or if this piece
            resonates with you as well, don&apos;t hesitate to reach out!
          </p>
        </div>
        <div className="my-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <MainContentCard
            altText="An image of a peaceful little place."
            photoPath="exhibitionPics3.JPG"
          />
          <MainContentCard
            altText="An image of my project liquid relationships."
            photoPath="exhibitionPics4.jpg"
          />
        </div>
      </ContentContainer>
    </div>
  );
};

export default Thesis;
