import Flex from "@/components/flex";
import React from "react";
import Image from "next/image";
import SectionLayout from "@/layout/section.layout";

const RulesAndGuidelines = () => {
  return (
    <section data-aos="fade-up" className="border-b border-border relative py-20">
      <Image
        src="/assets/idea-gradient.png"
        className="absolute w-[1200px] bottom-0 -z-10 "
        width={500}
        height={500}
        alt="idea-gradient"
      />
      <Image
        src="/assets/idea-right-gradient.png"
        className="absolute  top-0 right-0  -z-10 "
        width={500}
        height={500}
        alt="hero-gradient"
      />
      <SectionLayout>
        <Flex className="justify-between" reverse={true}>
          <div data-aos="zoom-in" className="relative w-full lg:w-[50%] ">
            <Image
              src="/assets/rules.png"
              className="mx-auto lg:w-full object-contain"
              width={500}
              height={500}
              alt="rules illustration"
            />
            <Image
              src="/assets/arrow.png"
              className="absolute hidden lg:block w-[100px] bottom-0 lg:right-10 -right-10"
              width={500}
              height={500}
              alt="arrow"
            />
          </div>
          <div
            data-aos="fade-right"
            className="w-full lg:w-[50%] relative lg:text-start text-center"
          >
            <h2 className="text-[32px] font-bold">
              Rules and <br />
              <span className="text-pink">Guidelines</span>
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

export default RulesAndGuidelines;
