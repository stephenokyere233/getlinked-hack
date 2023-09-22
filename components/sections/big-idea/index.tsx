import React from "react";
import Image from "next/image";
import Flex from "@/components/flex";
import SectionLayout from "@/layout/section.layout";

const BigIdea = () => {
  return (
    <section data-aos="fade-up" className="border-b border-border py-20" id="overview">
      <SectionLayout>
        <Flex className="justify-between">
          <div data-aos="zoom-in" className="relative w-full lg:w-[40%] ">
            <Image
              src="/assets/idea.png"
              className="object-contain mx-auto"
              width={500}
              height={500}
              alt="hero-man"
            />
            <h3 className="absolute inset-0 mt-4 text-center font-bold  text-[30px] flex items-center justify-center">
              The Big <br /> Idea!
            </h3>
            <Image
              src="/assets/arrow.png"
              className="absolute w-[30px] lg:w-[100px] bottom-0 right-[45%] lg:-right-10"
              width={500}
              height={500}
              alt="hero-man"
            />
          </div>
          <div
            data-aos="fade-left"
            className="w-full lg:w-[50%] relative lg:text-start text-center"
          >
            <h2 className="text-[32px] font-bold">
              Introduction to getlinked <br />
              <span className="text-pink">tech Hackathon 1.0</span>
            </h2>
            <Image
              src="/assets/star-purple.png"
              className="w-[30px] absolute top-4 right-4"
              width={500}
              height={500}
              alt="star-purple"
            />
            <p>
              Our tech hackathon is a melting pot of visionaries, and its purpose is as
              clear as day: to shape the future. Whether you&apos;re a coding genius, a
              design maverick, or a concept wizard, you&apos;ll have the chance to
              transform your ideas into reality. Solving real-world problems, pushing the
              boundaries of technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!
            </p>
          </div>
        </Flex>
      </SectionLayout>
    </section>
  );
};

export default BigIdea;
