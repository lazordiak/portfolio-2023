import MainHeader from "@/components/bars/MainHeader";
import { ContentContainer } from "@/components/containers/ContentContainer";
import { fragMono, sunshiney } from "@/utils/fonts";
import { projectInfoStyle } from "@/utils/sharedStyles";
import Image from "next/image";

const Spiritwood = () => {
  return (
    <div>
      <MainHeader opacity={1} />
      <ContentContainer>
        <div className="flex flex-col gap-4 mt-24">
          <h1 className={`${sunshiney.className} text-6xl lg:text-8xl`}>
            Spiritwood
          </h1>
          <h2 className={`text-xl ${fragMono.className}`}>
            An immersive installation exploring the intersection of nature and
            spirituality through interactive technology.
          </h2>
        </div>

        {/* Hero Video Section */}
        <div className="mt-24 relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
          <video
            className="w-full h-full object-cover"
            controls
            poster="/spirits/Spirits1.JPG"
          >
            <source src="/spirits/SpiritVid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={projectInfoStyle}>
          <p className="lg:text-4xl text-3xl font-semibold">Concept</p>
          <p>
            Mixed reality technology is becoming more ubiquitous and more easily
            accessible, but what do these explorations of virtual worlds mean
            for our understanding of the natural world? Common depictions of AR
            and VR depict a complete detachment from the &apos;real&apos; world,
            but how can these technologies serve to enhance our connection with
            our surroundings, rather than sever them?
          </p>
          <p>
            Spiritwood is an immersive installation, commissioned for the 2025
            MIT Reality Hack, that explores how AR can be used to supplement our
            interactions with the natural world, rather than replacing them. The
            installation gives a glimpse into a second, hidden world of nature
            spirits hidden from the human eye, and allows users to interact with
            them and leave offerings.
          </p>
        </div>

        {/* Image Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/spirits/Spirits2.JPG"
              alt="An image of the Spiritwood installation"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/spirits/Spirits3.JPG"
              alt="An image of the Spiritwood installation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className={projectInfoStyle}>
          <p>
            Spiritwood consists of a number of site-specific AR installations,
            scattered at certain trees around MIT&apos;s campus. When a user
            correctly identifies the tree (by matching a provided photo to a
            real-world location), they will be able to see into the realm of the
            forest spirits.
          </p>
        </div>

        {/* Second Video Section */}
        <div className="mt-24 relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
          <video className="w-full h-full object-cover" controls>
            <source src="/spirits/SpiritsVid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={projectInfoStyle}>
          <p>
            Each type of tree harbors a different type of spirit; rather than
            just observing these spirits, visitors can leave offerings in an
            attempt to win their favor; these offerings can take the form of
            candles left under the tree, photos or videos. While willow spirits
            might grant creativity and flexibility in one&apos; endeavors, oak
            spirits will bless their supplicants with fortitude and heartiness
            in the face of difficulty. Chestnut spirits, on the other hand, are
            spirits of abundance, and will reward devotees with good fortune and
            prosperity.
          </p>
        </div>

        {/* Additional Images Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[4, 5, 6, 7, 8, 9].map((num) => (
            <div
              key={num}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={`/spirits/Spirits${num}.${
                  num === 5 || num === 6 ? "png" : "JPG"
                }`}
                alt={`Spiritwood installation image ${num}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className={`${projectInfoStyle} mb-24`}>
          <p>
            Spiritwood reflects my continuing interest in the intersection of
            technology and spirituality, and the ways in which XR can be used to
            enhance our connection with worlds outside of our own. In its next
            iteration, I plan to add a greater number of interactions possible
            between users and spirits, as well as a greater variety of spirits
            to interact with. For now, this iteration of Spiritwood lives on in
            perpetuity just outside of the human realm on MIT&apos;s campus.
          </p>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Spiritwood;
