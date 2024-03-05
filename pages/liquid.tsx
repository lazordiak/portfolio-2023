import { Header } from "@/components/bars/Header";
import { MainContentCard } from "@/components/cards/MainContentCards";
import { ContentContainer } from "@/components/containers/ContentContainer";
import { ContentHeader } from "@/components/content/ContentHeader";

const Liquid = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <ContentHeader
          title="Liquid Relationships"
          blurb="A touch-and-water-based interactive installation about forming connections."
        />
        <div className="w-full mt-24">
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              className="border-solid border-2"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0LMNNsxPfJU?si=MG0ZX0DTEyuY_y6S&amp;start=988"
              title="YouTube video player"
              frameBorder="0"
              style={{ position: "absolute", top: 0, left: 0 }}
              allow="encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="italic mt-6">
            Here&apos;s a little demo from the ITP showcase -- thanks Daniel
            Shiffman!
          </div>
        </div>
        <div className="mt-24 flex-col text-lg flex">
          <span className="lg:text-4xl text-2xl font-semibold">Concept</span>
          <span className="mt-6 lg:mt-12">
            This project was born of three desires: the desire to make something
            that used an interesting or unconventional material (in this case,
            water) to convey its themes, the desire to build something that
            would connect multiple people, and the desire to make something that
            had an element of surprise or delight to it, something the user
            could discover as they interacted with it.
          </span>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption="The capacitive touch works anywhere on the body as long as bare skin is touching bare skin, as you can see here!"
            photoPath="liquid1.jpg"
          />
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption="Standing in front of the tank turns on the lights, but the pumps only turn on after the users touch each other."
            photoPath="liquid2.jpg"
          />
        </div>
        <div className="mt-24 flex-col text-lg flex">
          <span className="lg:text-4xl text-2xl font-semibold">Tools</span>
          <ul className="mt-6 lg:mt-12 list-disc">
            <li>Arduino Nano 33 IoT</li>
            <li>Adafruit Neopixels</li>
            <li>60 gallon fish tank</li>
            <li>
              DIY pressure sensors (cardboard, aluminum foil, electronics)
            </li>
            <li>
              DIY capacitive touch sensors (wood, aluminum foil, electronics)
            </li>
            <li>Acrylic</li>
            <li>KEDSUM submersible water pump (3x)</li>
          </ul>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption="In this picture you can see the pressure sensors near the bottom. Standing on them turns on the lights lining the underside of the tank."
            photoPath="liquid3.jpg"
          />
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption="Here you can see the project as it looks before any user interaction has occurred."
            photoPath="liquid4.jpg"
          />
        </div>
        <div className="mt-24 flex-col text-lg flex">
          <span className="lg:text-4xl text-2xl font-semibold">Mechanisms</span>
          <span className="mt-6 lg:mt-12">
            The finished product has two interactions. The first, and more
            obvious, occurs when people stand on the two pressure pads at the
            same time. This triggers a light show which shines through the
            bottom of the tank. There are also two touch pads on either side of
            the tank; when the participants on the pressure pads place their
            hands on the touch pads and then touch each other, the second
            circuit is completed and the pumps in the tank turn on. This sends a
            flurry of reflective particles through the water, which catch the
            light.
          </span>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption="I'm very proud of my project, and here's the proof."
            photoPath="liquid5.jpg"
          />
          <MainContentCard
            altText="An image of my project Liquid Relationships"
            caption="As you can see, it's possible with more than two people, too! We tested it with up to 10 people, and it still worked!"
            photoPath="liquid6New.jpg"
          />
        </div>
        <div className="my-24 flex-col text-lg flex">
          <span className="lg:text-4xl text-2xl font-semibold">
            Reflections
          </span>
          <span className="mt-6 lg:mt-12">
            This was the first large-scale interactive work I made, and it
            taught me a lot about how to design interactive projects -- looking
            back, it&apos;s clear to me how the project is mostly function and
            lacks a bit in the design factor.
          </span>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Liquid;
