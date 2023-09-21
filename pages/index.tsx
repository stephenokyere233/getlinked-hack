import { Inter } from "next/font/google";
import Header from "@/components/header";
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

export default function Home() {
  return (
    <>
    <main className={`min-h-screen relative`}>
    
      <Header />
      <Hero />
      <BigIdea />
      <RulesAndGuidelines />
      <KeyAttributes />
      <FAQS />
      <Timeline />
      <Prizes />
      <Partners />
      <PrivacyPolicy />
    </main>
    </>
  );
}
