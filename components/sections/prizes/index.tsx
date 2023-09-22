import React from "react";
import Image from "next/image";
import Flex from "@/components/flex";
import SectionLayout from "@/layout/section.layout";

const Prices = () => {
  return (
    <section className=" relative md:py-10 lg:py-20">
      <Image
        src="/assets/prize-gradient.png"
        className="absolute w-full h-full -z-10 top-0 brightness-[20%] "
        width={2000}
        height={2000}
        alt="prize-gradient"
      />
      <Image
        src="/assets/idea-gradient.png"
        className="absolute w-[1200px] top-0 md:-top-[50px] lg:-top-[100px] -z-10 "
        width={500}
        height={500}
        alt="idea-gradient"
      />
      <Image
        src="/assets/star-pink.svg"
        className="absolute w-[20px] lg:w-[30px] top-[50px] md:top-[100px] lg:top-[200px] left-[20%]"
        width={500}
        height={500}
        alt="hero-man"
      />
      <SectionLayout className="py-20 my-6">
        <div className="flex flex-col justify-end items-end">
          <div>
            <h2 className="text-[32px] font-bold">
              Prizes and
              <br />
              <span className="text-pink">Rewards</span>
            </h2>
            <p>
              Here is the breakdown of the time we anticipate using for the upcoming
              event.
            </p>
          </div>
        </div>
        <Flex className="justify-between">
          <div className="relative w-full lg:w-[40%] ">
            <Image
              src="/assets/trophy.png"
              className="w-full"
              width={2000}
              height={2000}
              alt="hero-man"
            />
            <Image
              src="/assets/star.svg"
              className="absolute w-[20px] -bottom-[50px] left-[30%]"
              width={500}
              height={500}
              alt="hero-man"
            />
          </div>
          <div className="relative w-full lg:w-[50%] ">
            <Image
              src="/assets/rewards.png"
              className="w-full"
              width={1000}
              height={1000}
              alt="hero-man"
            />
            <Image
              src="/assets/star-gray.png"
              className=" w-[20px] lg:w-[30px] absolute -bottom-[50px] right-[30%]"
              width={500}
              height={500}
              alt="hero-man"
            />
            <Image
              src="/assets/star.svg"
              className="absolute w-[20px] lg:w-[30px] top-16 right-2 lg:-right-4"
              width={500}
              height={500}
              alt="hero-man"
            />
            <Image
              src="/assets/star.svg"
              className="absolute w-[20px] lg:w-[30px] top-0 left-20"
              width={500}
              height={500}
              alt="hero-man"
            />
          </div>
        </Flex>
      </SectionLayout>
    </section>
  );
};

export default Prices;