import React from "react";
import Image from "next/image";
import Flex from "@/components/flex";
import SectionLayout from "@/layout/section.layout";
import { KEYS_ATTRIBUTES } from "@/constants";

const KeyAttributes = () => {
  return (
    <section className="border-b border-border relative py-20">
      <Image
        src="/assets/idea-gradient.png"
        className="absolute w-[1000px] -z-10 "
        width={500}
        height={500}
        alt="idea-gradient"
      />
      <Image
        src="/assets/hero-gradient.png"
        className="absolute w-[1000px] -bottom-[50%] h-[800px] right-0  -z-10 "
        width={500}
        height={500}
        alt="hero-gradient"
      />
      <SectionLayout>
        <Flex className="justify-between">
          <div className="relative w-full lg:w-[50%] ">
            <div className="relative">
              <Image
                src="/assets/attributes.png"
                className="w-full"
                width={1000}
                height={1000}
                alt="hero-man"
              />
              <div className="-top-[150px] items-center flex flex-col gap-14 left-[85px] -z-10 w-[150px] absolute">
                <Image
                  src="/assets/star-purple.png"
                  className="w-[30px]"
                  width={500}
                  height={500}
                  alt="star-purple"
                />
                <Image
                  src="/assets/ellipse.svg"
                  width={1000}
                  height={1000}
                  className="hidden lg:block"
                  alt="hero-man"
                />
              </div>
            </div>
            <div className="absolute inset-0 items-center justify-center flex">
              <Image
                src="/assets/star-gray.png"
                className=" w-[30px] bottom-0 right-0"
                width={500}
                height={500}
                alt="hero-man"
              />
            </div>
            <Image
              src="/assets/star.svg"
              className="absolute w-[30px] bottom-0 right-0"
              width={500}
              height={500}
              alt="hero-man"
            />
          </div>
          <div className="w-full lg:w-[50%] space-y-10 relative lg:text-start text-center">
            <h2 className="text-[32px] font-bold">
              Judging Criteria
              <br />
              <span className="text-pink">Key attributes</span>
            </h2>

            <ul className="space-y-10">
              {KEYS_ATTRIBUTES.map((item) => {
                return (
                  <li key={item.title}>
                    <p className="font-bold text-[16px]">
                      <span className="text-[#FF25B8]">{item.title}: </span>
                      {"  "}
                      <span>{item.text}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
            <button className="btn-primary">Read More</button>
          </div>
        </Flex>
      </SectionLayout>
    </section>
  );
};

export default KeyAttributes;
