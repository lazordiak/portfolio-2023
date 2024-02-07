import { Header } from "@/components/bars/Header";
import { MainContentCard } from "@/components/cards/MainContentCards";
import { ContentContainer } from "@/components/containers/ContentContainer";
import { ContentHeader } from "@/components/content/ContentHeader";
import Image from "next/image";

const Weather = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <ContentHeader
          title="Weather Band"
          blurb="Turning weather data into musical performances."
        />
        <div className="w-full mt-24">
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              className="border-solid border-2"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7sHOLi3HFPY?si=JH0WDlfvkj2CUk3q"
              title="YouTube video player"
              frameBorder="0"
              style={{ position: "absolute", top: 0, left: 0 }}
              allow="encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="italic mt-6">
            Here&apos;s a video of our performance during the Network Music
            Festival in 2020.
          </div>
        </div>
        <div className="mt-24 flex-col flex">
          <span className="lg:text-4xl font-semibold">Concept</span>
          <span className="mt-6 lg:mt-12 lg:text-lg">
            Weather band is a collaborative effort at ITP focused on translating
            weather data into musical performances. We built digital and
            physical instruments which play based on weather data drawn from our
            personal weather station on New York&apos;s Lower East Side. My
            instrument translated temperature data points into a violin&apos;s
            octave. I also worked on the UI for the weather band&apos;s data
            visualization. Most recently, weather band performed for the Network
            Music Festival online.
          </span>
        </div>
        <div className="mt-24 flex-col flex">
          <span className="lg:text-4xl font-semibold">Tools</span>
          <ul className="mt-6 lg:mt-12 lg:text-lg list-disc">
            <li>JavaScript</li>
            <li>p5 creative coding framework</li>
            <li>A weather station!</li>
          </ul>
        </div>
        <div className="mt-24 flex-col flex">
          <span className="lg:text-4xl font-semibold">Mechanisms</span>
          <span className="mt-6 lg:mt-12 lg:text-lg">
            My code draws temperature data over a range of seven days from an
            API set up to connect to a weather station on one of the
            collaborators&apos; roofs in the Lower East Side. The data is mapped
            into five sections in my UI, which together represent an octave in a
            violin. The musician can click the data points to add notes of that
            octave into the composition, so that the weather dictates the
            affordances the musician has, so to speak, when playing.
          </span>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <MainContentCard
            altText="An image of my weather band instrument."
            photoPath="weather1.png"
            caption="The instrument is separated into an octave, with dots representing individual points of weather data."
          />
          <MainContentCard
            altText="An image of my project liquid relationships."
            photoPath="weather2.png"
            caption="When each dot is clicked, it plays notes from that octave. In this way, the 'performance' is constrained by the weather data."
          />
        </div>
        <div className="my-24 flex-col flex">
          <span className="lg:text-4xl font-semibold">Reflections</span>
          <span className="mt-6 lg:mt-12 lg:text-lg">
            I love the idea of using environmental data as constraints in
            producing art. In addition to the temperature, you can also grab
            other data points like humidity from the weather station. I&apos;d
            love to experiment in some sort of 3D landscape where you can
            explore multiple data points in future performances!
          </span>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Weather;
