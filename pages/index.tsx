import Hero from "@/components/sections/hero";
import Image from "next/image";
import BigIdea from "@/components/sections/big-idea";
import RulesAndGuidelines from "@/components/sections/rules";
import KeyAttributes from "@/components/sections/attrbutes";
import FAQS from "@/components/sections/faqs";
import Timeline from "@/components/sections/timeline";
import Prizes from "@/components/sections/prizes";
import Partners from "@/components/sections/sponsers";
import PrivacyPolicy from "@/components/sections/terms";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className={`min-h-screen relative`}>
        <Image
          src="/assets/hero-gradient.png"
          className=" w-full lg:w-[50%] -rotate-90 absolute hidden xl:block -top-[130px] left-0 lg:left-20  -z-10"
          width={500}
          height={500}
          alt="hero-gradient"
        />
        <Image
          src="/assets/mobile-hero-gradient.png"
          className="w-full md:w-[80%] absolute xl:hidden left-0 -z-10"
          width={500}
          height={500}
          alt="hero-gradient"
        />
        <Hero />
        <BigIdea />
        <RulesAndGuidelines />
        <KeyAttributes />
        <FAQS />
        <Timeline />
        <Prizes />
        <Partners />
        <PrivacyPolicy />
        <Footer />
      </main>
    </>
  );
}
