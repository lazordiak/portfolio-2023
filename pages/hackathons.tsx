import { Header } from "@/components/bars/Header";
import { Card } from "@/components/cards/Card";
import { useState } from "react";

const Hackathon = () => {
  //const [projTab, setProjTab] = useState<number>(0);

  return (
    <div>
      <Header />
      <div className="p-24 flex justify-center">
        <main className="px-48 w-full text-snow flex flex-col">
          <span className="lg:text-6xl font-bold">Miscellaneous Projects</span>
          <span className="mt-12">
            I adore hackathons and game jams. I&apos;m consistently a better
            worker when I have a tight timetable and creative constraints, as
            well as one or two helpful teammates! I try to attend at least two
            every year.
          </span>
          <>
            <span className="lg:text-4xl mt-24 font-semibold">
              MIT Reality Hack
            </span>
            <div className="grid grid-cols-2 gap-6">
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
            </div>
          </>
          <>
            <span className="lg:text-4xl mt-24 font-semibold">
              Global Game Jam
            </span>
            <div className="grid grid-cols-2 gap-6">
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
            </div>
          </>
        </main>
      </div>
    </div>
  );
};

export default Hackathon;