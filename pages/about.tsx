import MainHeader, { spectral } from "@/components/bars/MainHeader";
import { fragmentMono } from "@/components/cards/GridCard";
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
            <div className="relative w-1/2">
              <Image
                className="rounded"
                src="/sky2.jpg"
                alt="Schuyler deVos portrait photo outdoors"
                width={400}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="flex w-1/3 flex-col gap-8">
              <Image
                className="rounded"
                src="/sky.png"
                alt="Schuyler deVos creative portrait with artistic elements"
                width={200}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
              <Image
                className="rounded"
                src="/sky3.JPG"
                alt="Schuyler deVos casual portrait photo"
                width={200}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div>
            <Image
              className="rounded w-7/8"
              src="/sky1.jpg"
              alt="Schuyler deVos professional headshot"
              width={600}
              height={400}
              style={{ width: '87.5%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
