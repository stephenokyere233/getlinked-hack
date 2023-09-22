import React, { FC, useState } from "react";
import Image from "next/image";
import Flex from "@/components/flex";
import SectionLayout from "@/layout/section.layout";
import { motion, AnimatePresence } from "framer-motion";
import { BiMinus } from "react-icons/bi";
import { IoAdd } from "react-icons/io5";

const FAQCard: FC<{
  index: number;
  faq: { question: string; answer: string };
  activeIndex: number | null;
  toggleAccordion: (index: number) => void;
}> = ({ index, faq, activeIndex, toggleAccordion }) => {
  const isActive = activeIndex === index;

  return (
    <motion.div
      layout
      className={`cursor-pointer`}
      onClick={() => toggleAccordion(index)}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="border-b border-pink">
        <p className="font-bold  py-2 text-[14px] text-start md:text-[16px] flex items-center justify-between">
          <span> {faq.question}</span>
          <span className="text-[#FF25B8]">
            {isActive ? <BiMinus size={32} /> : <IoAdd size={32} />}
          </span>
        </p>
        <AnimatePresence>
          {isActive && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`overflow-hidden text-gray-300 pb-2`}
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            ></motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const FAQS = () => {
  const faqs = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Yes, you can work on a project that you started before the hackathon. However, please make sure that your project complies with the hackathon rules and guidelines.",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer:
        "If you need help during the hackathon, you can reach out to mentors and organizers who will be available to assist you with any questions or challenges you encounter.",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer:
        "Not having an idea for a project is perfectly fine. You can join a team and collaborate with others on their projects, or brainstorm and come up with ideas during the hackathon.",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer:
        "You can join a team or participate individually, depending on the hackathon's rules. Some hackathons allow participants to form teams on the spot, while others may require you to come with a pre-formed team.",
    },
    {
      question: "What happens after the hackathon ends",
      answer:
        "After the hackathon ends, you can showcase your project to judges and other participants. There are often awards and prizes for winning projects, and you can also continue to work on your project or explore opportunities to further develop it.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number | null) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      data-aos="zoom-in-up"
      className="border-b scroll-m-[120px] border-border relative py-20"
      id="faqs"
    >
      <SectionLayout className="lg:py-20 my-6">
        <Flex className="justify-between flex-col-reverse" reverse={true}>
          <div className="relative w-full lg:w-[50%] ">
            <div className="relative">
              <Image
                src="/assets/faqs.png"
                className="w-full mt-10 lg:mt-0"
                width={1000}
                height={1000}
                alt="hero-man"
              />
              <div className="-top-[80px] -z-10 items-baseline flex gap-20 left-[50px] scale-[0.6] md:scale-100 lg:left-[100px]   absolute">
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
              We got answers to the questions that you might{" "}
              <br className="hidden lg:block" /> want to ask about{" "}
              <span className="font-bold">getlinked Hackathon 1.0</span>
            </p>

            <ul className="space-y-10">
              {faqs.map((faq, index) => {
                return (
                  <FAQCard
                    key={faq.question}
                    index={index}
                    faq={faq}
                    activeIndex={activeIndex}
                    toggleAccordion={toggleAccordion}
                  />
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
