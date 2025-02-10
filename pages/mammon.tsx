import MainHeader from "@/components/bars/MainHeader";
import { MainContentCard } from "@/components/cards/MainContentCards";
import { ContentContainer } from "@/components/containers/ContentContainer";
import { ContentHeader } from "@/components/content/ContentHeader";
import { fragMono, metal, spectral } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

const Mammon = () => {
  return (
    <div>
      <MainHeader opacity={1} />
      <ContentContainer>
        <div className="flex flex-col gap-4 mt-24">
          <h1 className={`${metal.className} text-6xl lg:text-8xl`}>
            MAMMON.exe
          </h1>
          <h2 className={`text-xl ${fragMono.className}`}>
            Interactive installation where supplicants can commune with the Gods
            of Consumption. Presented through{" "}
            <Link href={"https://pixelmouth.org/"}>Pixelmouth</Link>.
          </h2>
        </div>
        <Image
          src={"/MammonHeroSmall.jpg"}
          alt="Hero Image for Mammon Project"
          className="w-full"
          width={1920}
          height={1264}
        />
        <div
          className={`${fragMono.className} mt-24 flex-col text-lg gap-6 lg:gap-12 flex`}
        >
          <span className="lg:text-4xl text-3xl font-semibold">Concept</span>
          <span className="">
            MAMMON.exe is an interactive installation commissioned for
            Pixelmouth&apos;s &quot;Cult of Consumption&quot; show. We ideate
            three gods that represent different facets of modern consumption
            habits: <span className="font-bold">Gratis</span>, the hippo-headed
            patron god of free samples, free trials and all things free;{" "}
            <span className="font-bold">Luxior</span>, the birdlike goddess of
            conspicuous consumption, name-brand purchases, and consumption as a
            status symbol; and
            <span className="font-bold"> Haffof</span>, a trickster god of
            bargains, deals, and buying the large instead of the medium because
            it&apos;s only a dollar more.
          </span>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <MainContentCard
            altText="An image of Gratis"
            caption=""
            photoPath="Gratis(1).jpg"
          />
          <MainContentCard
            altText="An image of Luxior"
            caption=""
            photoPath="Luxior(1).jpg"
          />
          <MainContentCard
            altText="An image of Haffof"
            caption=""
            photoPath="Hafoff(1).jpg"
          />
        </div>
        <div
          className={`${fragMono.className} mt-24 flex-col gap-6 lg:gap-12 text-lg flex`}
        >
          <span className="lg:text-4xl text-3xl font-semibold">Story</span>
          <div className="">
            Consumption is presented as a panacea to all things. Does your back
            hurt? Buy a new pillow. Feeling down? Buy some ice cream, or a new
            streaming service. Low self-confidence, misaligned teeth, broken
            friendships, broken dreams; all these things can be resolved with a
            quick swipe of the credit card.
          </div>
          <div className="">
            But if consumption is divine, who are the gods that preside over
            this realm of divinity? MAMMON.exe gives you a chance to commune
            with the chthonic deities that represent the endless drive for more
            and better, and to ask them for grace, guidance and gifts in your
            life. Will you be judged unworthy, or will you leave with a blesssed
            Proof of Purchase? Be not afraid, for the gods are always listening.
          </div>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <Image
            alt="An image of Mammon"
            width={1920}
            height={1280}
            src="/MammonRow2-1.jpg"
          />
          <Image
            alt="An image of Mammon"
            width={1920}
            height={1280}
            src="/MammonRow2-2.jpg"
          />
        </div>
        <Image
          alt="An image of Mammon"
          src={"/MammonRow2-3.jpg"}
          height={1920}
          width={1280}
        />
        <div
          className={`${fragMono.className} my-24 flex-col text-lg flex flex-col gap-6 lg:gap-12`}
        >
          <span className="lg:text-4xl text-3xl font-semibold">Mechanisms</span>
          <div className="">
            The installation consists of three parts: <br></br>
            <br></br>-{" "}
            <span className="font-semibold">An altar to each god</span>, where
            supplicants can leave offerings <br></br>
            <br></br>-{" "}
            <span className="font-semibold">
              A projected image above the altars
            </span>
            , which changes to reflect the god currently being communed with{" "}
            <br></br>
            <br></br>-{" "}
            <span className="font-semibold">A website, MAMMON.exe</span>,
            reached through scanning barcodes on the altars, which will summon
            the selected god for supplicants to commune with
          </div>
          <div>
            Visitors are first welcomed into the altars by the seneschal of the
            gods, who explains each of the gods, their commandments, and their
            divine rights and responsibilities. The visitor then selects a god
            and scans the appropriate bar code through the sacred window of
            consumption, one&apos;s phone, and can partake in communion.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Image
            src={"/Row3-3.jpg"}
            width={1920}
            height={1281}
            alt="A picture of Mammon"
          ></Image>
          <Image
            src={"/Row3-4.jpg"}
            width={1920}
            height={1281}
            alt="A picture of Mammon"
          ></Image>
        </div>
        <Image
          src={"/Row3-2.jpg"}
          width={1920}
          height={1281}
          className="mt-12"
          alt="A picture of Mammon"
        ></Image>
        <div
          className={`${fragMono.className} my-24 flex-col text-lg flex flex-col gap-6 lg:gap-12`}
        >
          <div className="">
            While partaking in communion, the selected god is
            &apos;summoned&apos; into the sacred device, where the supplicant
            can chat with it and ask it for boons. The gods are each custom AI
            instantiated using ChatGPT&apos;s API and a series of system prompts
            that are used to guide the supplicant through the conversation.
          </div>
          <div className="">
            Each god is different, and will analyze, critique and provide
            suggestions about a supplican&apos;s consumption habit based on
            their own divine tenets and ideologies. Gratis, for example,
            encourages crashing parties for free food and drink, while Luxior is
            more interested in how many high-end items you&apos;ve purchased
            recently.
          </div>
          <div className="">
            While chatting with each god, websockets propagate chat events to an
            Unreal Engine project running through the projector above the
            altars. The Unreal project is a 3D environment that represents the
            divine realm of the gods, and as the conversation progresses, the
            environment changes accordingly.
          </div>
          <div className="">
            Ultimately, the god will assign the supplicant a task to complete in
            order to receive their boons and blessings; the task is unique to
            each supplicant. Finally, the supplicant will be deemed either
            worthy or unworthy, and will receive a custom printed thermal
            receipt that details their conversation with the god, and their
            final verdict.
          </div>
        </div>
        <Image
          alt="Picture of Mammon"
          width={1920}
          height={1280}
          src={"/MammonFinal(1).jpg"}
        ></Image>
        <div className={`${fragMono.className} my-24 flex-col text-lg flex`}>
          <div>
            Perhaps you desire to commune with the gods yourself? Do you seek
            the frugal wisdom of{" "}
            <Link
              href={
                "https://mammon-exe.vercel.app/?god=haffof&key=gratis_is_good"
              }
              className="font-bold text-moonstone"
            >
              Hafoff
            </Link>
            , the ebullient graces of{" "}
            <Link
              className="font-bold text-moonstone"
              href={
                "https://mammon-exe.vercel.app/?god=gratis&key=gratis_is_good"
              }
            >
              Gratis
            </Link>
            , or the status that comes with the favor of{" "}
            <Link
              className="font-bold text-moonstone"
              href={
                "https://mammon-exe.vercel.app/?god=Luxior&key=gratis_is_good"
              }
            >
              Luxior
            </Link>
            ? Click on their names, and you too may be rewarded.
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Mammon;
