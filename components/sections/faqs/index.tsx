import React from "react";
import Image from "next/image";
import Flex from "@/components/flex";
import SectionLayout from "@/layout/section.layout";

const FAQS = () => {
  const faqs = [
    "Can I work on a project I started before the hackathon?",
    "What happens if I need help during the hackathon?",
    "What happens if I don't have an idea for a project?",
    "Can I join a team or do I have to come with one?",
    "What happens after the hackathon ends",
  ];
  return (
    <section className="border-b border-border relative py-20">
      <SectionLayout className="py-20 my-6">
        <Flex className="justify-between flex-col-reverse" reverse={true}>
          <div className="relative w-full lg:w-[50%] ">
            <div className="relative">
              <Image
                src="/assets/faqs.png"
                className="w-full"
                width={1000}
                height={1000}
                alt="hero-man"
              />
              <div className="-top-[80px] items-baseline flex gap-20 left-[100px] -z-10  absolute">
                <Image
                  src="/assets/question-small.png"
                  className="w-[50px] pb-10"
                  width={500}
                  height={500}
                  alt="star-purple"
                />
                <div className="h-[180px]">
                  <Image
                    src="/assets/question-big.png"
                    className="w-[70px]"
                    width={1000}
                    height={1000}
                    alt="hero-man"
                  />
                </div>

                <Image
                  src="/assets/question-small.png"
                  className="w-[50px] pb-10"
                  width={1000}
                  height={1000}
                  alt="hero-man"
                />
              </div>
            </div>
            <Image
              src="/assets/star-pink.svg"
              className=" w-[30px] absolute top-[130px] left-[120px]"
              width={500}
              height={500}
              alt="hero-man"
            />
            <Image
              src="/assets/star-gray.png"
              className=" w-[30px] absolute bottom-[50%] left-0"
              width={500}
              height={500}
              alt="hero-man"
            />
            <Image
              src="/assets/star.svg"
              className="absolute w-[30px] bottom-0 right-16"
              width={500}
              height={500}
              alt="hero-man"
            />
          </div>
          <div className="w-full lg:w-[40%] space-y-10 relative lg:text-start text-center">
            <Image
              src="/assets/star-purple.png"
              className="absolute w-[30px] -top-4 -left-6"
              width={500}
              height={500}
              alt="hero-man"
            />
            <h2 className="text-[32px] font-bold">
              Frequently Asked
              <br />
              <span className="text-pink">Questions</span>
            </h2>
            <p>
              We got answers to the questions that you might <br /> want to ask about{" "}
              <span className="font-bold">getlinked Hackathon 1.0</span>
            </p>

            <ul className="space-y-10 pt-4">
              {faqs.map((faq) => {
                return (
                  <li key={faq}>
                    <p className="font-bold border-b border-pink py-2 text-[16px] flex items-center justify-between">
                      <span>{faq} </span>

                      <span className="text-[#FF25B8] text-2xl">+</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </Flex>
      </SectionLayout>
    </section>
  );
};

export default FAQS;
