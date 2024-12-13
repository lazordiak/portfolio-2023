import MainHeader from "@/components/bars/MainHeader";
import { MainContentCard } from "@/components/cards/MainContentCards";
import { ContentContainer } from "@/components/containers/ContentContainer";
import { ContentHeader } from "@/components/content/ContentHeader";

const Tenderness = () => {
  return (
    <div>
      <MainHeader opacity={1} />
      <ContentContainer>
        <ContentHeader
          title="Department of Tenderness"
          blurb="Speculative bureaucracy centered around love and tenderness in government and urban design."
        />
        <div className={`mt-24 flex-col text-lg flex`}>
          <span className="lg:text-4xl text-2xl font-semibold">Concept</span>
          <span className="mt-6 lg:mt-12">
            The Department of Tenderness (DOT) is a fictional New York City
            bureaucratic agency tasked with promoting and preserving love and
            tenderness within the New York Metropolitan area. Originally created
            under the aegis of the Romantic Urbanism project, the DOT has held
            multiple events centered on provoking reflection on the role
            bureaucracy has in our lives.
          </span>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption=""
            photoPath="DOT2.jpg"
          />
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption=""
            photoPath="DOT3.jpg"
          />
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption=""
            photoPath="DOT4.JPG"
          />
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption=""
            photoPath="DOT5.JPG"
          />
        </div>
        <div className="mt-24 flex-col text-lg flex">
          <span className="mt-6 lg:mt-12">
            Government power has a multifaceted influence on our lives, and the
            DOT project was created to explore the nuances and consequences of
            that power. In certain situations, such as disaster relief or public
            emergencies, the government can mobilize its power to move
            effectively and quickly to save lives.
          </span>
          <span className="mt-6 lg:mt-12">
            In other areas, however, we might resent the way government imposes
            certain rules and regulations on our lives, as anyone who has waited
            in line at the DMV can attest. The DOT project was created to
            explore the ways in which government power can be used to promote
            love and tenderness in our lives for good and for ill. If the DOT
            existed, would it be a boon? A dystopian nightmare? Or a little of
            both?
          </span>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption=""
            photoPath="DOT7.JPG"
          />
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption=""
            photoPath="DOTMoar.jpg"
          />
        </div>
        <div className="my-24 flex-col text-lg flex">
          <span className="lg:text-4xl text-2xl font-semibold">Events</span>
          <span className="mt-6 lg:mt-12">
            On October 20th, the DOT held a public feedback session in
            Kensington Plaza, in Brooklyn. Members of the community came to view
            and share their thoughts on new DOT signage for 2025, proposals for
            the new V Line in New York City, and to fill out &quot;Love
            Landmark&quot; forms suggesting locations in the city that hold
            special meaning for them.
          </span>
          <span className="mt-6 lg:mt-12">
            On December 5th, the DOT held another session at Barlow, in
            Brooklyn. DOT commissioners set up a booth to help New Yorkers
            troubleshoot their romantic problems, search for a soulmate through
            the DOT S&M Initative, and rank different public agencies based on
            levels of tenderness.
          </span>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Tenderness;
