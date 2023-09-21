import { Inter } from "next/font/google";
import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import Image from "next/image"
import BigIdea from "@/components/sections/big-idea";
import RulesAndGuidelines from "@/components/sections/rules";
import KeyAttributes from "@/components/sections/attrbutes";
import FAQS from "@/components/sections/faqs";


export default function Home() {
  return (
    <main className={`min-h-screen relative`}>
      <Image
        src="/assets/hero-gradient.png"
        className="w-[50%]  -rotate-90 absolute top-0 left-20 h-screen -z-10"
        width={500}
        height={500}
        alt="hero-man"
      />
      <Header />
      <Hero />
      <BigIdea />
      <RulesAndGuidelines />
      <KeyAttributes />
      <FAQS/>
    </main>
  );
}
