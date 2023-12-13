import { Header } from "@/components/bars/Header";
import Image from "next/image";

const Liquid = () => {
  return (
    <div>
      <Header />
      <div className="p-24 flex justify-center">
        <main className="px-48 w-full text-snow flex flex-col">
          <span className="lg:text-6xl font-bold">Liquid Relationships</span>
          <span className="mt-24">
            A touch and water based interactive installation about forming
            connections.
          </span>
          <div className="w-full mt-24">
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
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
          </div>
          <div className="mt-48 flex-col flex">
            <span className="lg:text-4xl font-semibold">Concept</span>
            <span className="mt-12 lg:text-lg">
              This project was born of three desires: the desire to make
              something that used an interesting or unconventional material (in
              this case, water) to convey its themes, the desire to build
              something that would connect multiple people, and the desire to
              make something that had an element of surprise or delight to it,
              something the user could discover as they interacted with it.
            </span>
          </div>
          <div className="mt-48 flex-row flex justify-around">
            <Image
              className="rounded"
              src="/liquid1.jpg"
              width={500}
              height={500}
              alt={"An image of my project liquid relationships"}
            />
            <Image
              className="rounded"
              src="/liquid2.jpg"
              width={500}
              height={500}
              alt={"An image of my project liquid relationships"}
            />
          </div>
          <div className="mt-48 flex-col flex">
            <span className="lg:text-4xl font-semibold">Tools</span>
            <ul className="mt-12 lg:text-lg list-disc">
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
          <div className="mt-48 flex-row flex justify-around">
            <Image
              className="rounded"
              src="/liquid3.jpg"
              width={500}
              height={500}
              alt={"An image of my project liquid relationships"}
            />
            <Image
              className="rounded"
              src="/liquid4.jpg"
              width={500}
              height={500}
              alt={"An image of my project liquid relationships"}
            />
          </div>
          <div className="mt-48 flex-col flex">
            <span className="lg:text-4xl font-semibold">Mechanisms</span>
            <span className="mt-12 lg:text-lg">
              The finished product has two interactions. The first, and more
              obvious, occurs when people stand on the two pressure pads at the
              same time. This triggers a light show which shines through the
              bottom of the tank. There are also two touch pads on either side
              of the tank; when the participants on the pressure pads place
              their hands on the touch pads and then touch each other, the
              second circuit is completed and the pumps in the tank turn on.
              This sends a flurry of reflective particles through the water,
              which catch the light.
            </span>
          </div>
          <div className="mt-48 flex-row flex justify-around">
            <Image
              className="rounded"
              src="/liquid5.jpg"
              width={500}
              height={500}
              alt={"An image of my project liquid relationships"}
            />
            <Image
              className="rounded"
              src="/liquid6.jpg"
              width={500}
              height={500}
              alt={"An image of my project liquid relationships"}
            />
          </div>
          <div className="mt-48 flex-col flex">
            <span className="lg:text-4xl font-semibold">Reflections</span>
            <span className="mt-12 lg:text-lg">
              This was the first large-scale interactive work I made, and it
              taught me a lot about how to design interactive projects --
              looking back, it&apos;s clear to me how the project is mostly
              function and lacks a bit in the design factor.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Liquid;
