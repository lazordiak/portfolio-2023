import { Header } from "@/components/bars/Header";
import { Card } from "@/components/cards/Card";
import { ContentContainer } from "@/components/containers/ContentContainer";
import { ContentHeader } from "@/components/content/ContentHeader";

const Hackathon = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <ContentHeader
          title="Miscellaneous Projects"
          blurb="I adore hackathons and game jams. I'm consistently a better
          worker when I have a tight timetable and creative constraints, as well
          as one or two helpful teammates! I try to attend at least two every
          year."
        />
        <>
          <span className="text-3xl lg:text-4xl mt-24 font-semibold">
            MIT Reality Hack
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              altText="A photo from the Stone Stories presentation video"
              caption="A communal AR project to build interactive monuments and share
                  participant memories of significant places."
              link="https://devpost.com/software/stone-stories"
              photoPath="stones1.jpeg"
              title="Stone Stories"
            />
            <Card
              altText="A photo from the LetgoXR presentation video"
              caption="A mixed reality immersive storytelling experience designed to
                  cultivate a sense of community and mental wellness."
              link="https://www.youtube.com/watch?v=zF_WQabTmAU"
              photoPath="letgoxr1.png"
              title="LetgoXR"
            />
            <Card
              altText="A photo from our presentation video, where one of my teammates jumps on a large AR piano we made."
              caption="A multiplayer AR project where players jump on a huge AR piano to find the correct chords to play."
              link="https://devpost.com/software/jump-on-it?ref_content=my-projects-tab&ref_feature=my_projects"
              photoPath="piano1.png"
              title="Jump On It"
            />
          </div>
        </>
        <>
          <span className="text-3xl lg:text-4xl mt-24 font-semibold">
            Global Game Jam
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              altText="A screenshot from curse of the mummy 3d"
              caption="A game where you play as a mummy trying to find its stomach."
              link="https://v3.globalgamejam.org/2021/games/curse-mummy-3d-0"
              photoPath="mummy1.png"
              title="Curse of the Mummy 3D"
            />
            <Card
              altText="A screenshot from The Shadow"
              caption="A horror game where you flip between worlds to escape a monster."
              link="https://v3.globalgamejam.org/2022/games/shadow-2"
              photoPath="shadow1.png"
              title="The Shadow"
            />
            <Card
              altText="A screenshot from The Tower."
              caption="A visual novel where the last human climbs a tower of AIs."
              link="https://v3.globalgamejam.org/2023/games/tower-8"
              photoPath="tower1.png"
              title="The Tower"
            />
          </div>
        </>
        <>
          <span className="text-3xl lg:text-4xl mt-24 font-semibold">
            Miscellaneous
          </span>
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              altText="A picture of my RATTRACK app"
              caption="RATTRACK: a facial recognition system for rats made for the ITP stupid shit no one needs and terrible ideas hackathon."
              link="https://rattrack.glitch.me/"
              photoPath="mummy1.png"
              title="RATTRACK"
            />
          </div>
        </>
      </ContentContainer>
    </div>
  );
};

export default Hackathon;
