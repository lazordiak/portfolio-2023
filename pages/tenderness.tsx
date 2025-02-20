import MainHeader from "@/components/bars/MainHeader";
import { MainContentCard } from "@/components/cards/MainContentCards";
import { ContentContainer } from "@/components/containers/ContentContainer";
import { fragMono, lovers } from "@/utils/fonts";
import { projectInfoStyle } from "@/utils/sharedStyles";

const Tenderness = () => {
  return (
    <div>
      <MainHeader opacity={1} />
      <ContentContainer>
        <div className="flex flex-col gap-4 mt-24">
          <h1 className={`${lovers.className} text-6xl lg:text-8xl`}>
            DOT (Department of Tenderness)
          </h1>
          <h2 className={`text-xl ${fragMono.className}`}>
            A speculative bureaucracy project centered around love and
            tenderness in government and urban design.
          </h2>
        </div>
        <div className="mt-24">
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption=""
            photoPath="DOT2.jpg"
          />
        </div>
        <div className={projectInfoStyle}>
          <p className="lg:text-4xl text-3xl font-semibold">Concept</p>
          <p>
            The Department of Tenderness (DOT) is a fictional New York City
            bureaucratic agency tasked with promoting and preserving love and
            tenderness within the New York Metropolitan area. Originally created
            under the aegis of the Romantic Urbanism project, the DOT has held
            multiple events centered on provoking reflection on the role
            bureaucracy has in our lives.
          </p>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption=""
            photoPath="DOT3.jpg"
          />
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption=""
            photoPath="DOT4.jpg"
          />
        </div>
        <div className={projectInfoStyle}>
          <p>
            Government power has a multifaceted influence on our lives, and the
            DOT project was created to explore the nuances and consequences of
            that power. In certain situations, such as disaster relief or public
            emergencies, the government can mobilize its power to move
            effectively and quickly to save lives.
          </p>
          <p>
            In other areas, however, we might resent the way government imposes
            certain rules and regulations on our lives, as anyone who has waited
            in line at the DMV can attest. The DOT project was created to
            explore the ways in which government power can be used to promote
            love and tenderness in our lives for good and for ill. If the DOT
            existed, would it be a boon? A dystopian nightmare? Or a little of
            both?
          </p>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption=""
            photoPath="DOT7.jpg"
          />
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption=""
            photoPath="DOTMoar.jpg"
          />
        </div>
        <div className={projectInfoStyle}>
          <p className="lg:text-4xl text-3xl font-semibold">Events</p>
          <p>
            On <span className="font-semibold">October 20th</span>, the DOT held
            a public feedback session in Kensington Plaza, in Brooklyn. Members
            of the community came to view and share their thoughts on new DOT
            signage for 2025, proposals for the new V Line in New York City, and
            to fill out &quot;Love Landmark&quot; forms suggesting locations in
            the city that hold special meaning for them.
          </p>
          <p>
            On December 5th, the DOT held another session at Barlow, in
            Brooklyn. DOT commissioners set up a booth to help New Yorkers
            troubleshoot their romantic problems, search for a soulmate through
            the DOT S&M Initative, and rank different public agencies based on
            levels of tenderness.
          </p>
          <p>
            On February 19, the DOT made an appearance at the launch party for
            the release of Urban Omnibus&apos;s collaboration with Romantic
            Urbanism. The DOT displayed a series of signage proposals and
            participated in an activity where participants could design new
            signs and formulate love landmarks.
          </p>
        </div>
        <div className="my-24">
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption=""
            photoPath="DOT5.jpg"
          />
        </div>
      </ContentContainer>
    </div>
  );
};

export default Tenderness;
