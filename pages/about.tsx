import { Header } from "@/components/bars/Header";
import MainHeader, { spectral } from "@/components/bars/MainHeader";
import { fragmentMono, urbanist } from "@/components/cards/GridCard";
import Image from "next/image";

export default function About() {
  return (
    <div className="">
      <MainHeader opacity={1} />
      <div className="py-12 lg:py-24 px-12 flex flex-col-reverse lg:flex-row justify-between text-snow text-lg">
        <div
          className={`text-2xl gap-6 lg:max-w-[50%] lg:pr-24 flex flex-col ${fragmentMono.className}`}
        >
          <span className={`${spectral.className} font-bold text-6xl`}>
            Schuyler deVos
          </span>
          <span>
            Schuyler is a software developer, creative technologist and artist
            who explores alternative worldbuilding through digital experiences.
          </span>
          <span>
            He is heavily influenced by his time spent traveling and learning
            different languages, and his work seeks to immerse people in
            unfamiliar environments and uncanny experiences in an effort to
            invite them to reframe their own experiences. To this end, his works
            often utilizes immersive technologies such as VR and XR, as well as
            game engines like Unity and Unreal Engine.
          </span>
          <span>
            By day, he makes money doing software engineering things like
            building websites, hooking up backends, developing APIs and
            appeasing product managers. Currently, he works as creative director
            at Sorcerer Space.
          </span>
          <span>
            He is a fan of all things artsy, traveling and meeting new people.
            If you&apos;re reading this, you could be one of them!
          </span>
        </div>
        <div className="relative flex-col flex gap-12 mb-12 lg:mb-0 lg:w-1/2">
          <div className="flex justify-between flex-row">
            <img
              className="rounded w-1/2"
              src={"/sky2.jpg"}
              alt={
                "A picture of me with milk treats in my mouth that look like fangs, pretending to be a vampire."
              }
            />
            <div className="flex w-1/3 flex-col gap-8">
              <img
                className="rounded"
                src={"/sky.png"}
                alt={
                  "A picture of me with milk treats in my mouth that look like fangs, pretending to be a vampire."
                }
              />
              <img
                className="rounded"
                src={"/sky3.JPG"}
                alt={
                  "A picture of me with milk treats in my mouth that look like fangs, pretending to be a vampire."
                }
              />
            </div>
          </div>
          <div>
            <img
              className="rounded w-7/8"
              src={"/sky1.jpg"}
              alt={
                "A picture of me with milk treats in my mouth that look like fangs, pretending to be a vampire."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
