import { Header } from "@/components/bars/Header";
import Image from "next/image";

export default function About() {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="py-12 lg:py-24 px-6 lg:px-72 flex flex-col lg:flex-row text-snow text-lg">
        <div className="flex-1 flex lg:pr-24 flex-col">
          <span className="text-4xl font-medium">Schuyler deVos</span>
          <span className="text-2xl mt-6">
            Software engineer, creative technologist.
          </span>
          <span className="mt-6">
            By day, Schuyler makes money doing software engineering things like
            building websites, hooking up backends and appeasing product
            managers.
          </span>
          <span className="mt-6">
            At other times, you can find him working on some or other creative
            project, consuming other people&apos;s creative work, mixing drinks,
            eating hot pot or taking care of plants.
          </span>
          <span className="mt-6">
            He is a fan of all things artsy, traveling and meeting new people.
            If you&apos;re reading this, you could be one of them!
          </span>
        </div>
        <div
          className="mt-12 lg:mt-0 relative justify-end w-1/3"
          style={{ paddingBottom: "33%" }}
        >
          <Image
            className="rounded absolute"
            fill
            src={"/sky.png"}
            alt={
              "A picture of me with milk treats in my mouth that look like fangs, pretending to be a vampire."
            }
          />
        </div>
      </div>
    </div>
  );
}
