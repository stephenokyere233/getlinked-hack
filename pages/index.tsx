import { Inter } from "next/font/google";
import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import Image from "next/image"


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
    </main>
  );
}
