import Flex from "@/components/flex";
import SectionLayout from "@/layout/section.layout";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <section data-aos="fade-up" className="relative py-10 lg:py-20">
      <SectionLayout className=" py-10 lg:py-20 ">
        <Flex className="justify-between">
          <div className="relative w-full lg:w-[45%] ">
            <div className="space-y-6 pb-6">
              <h2 className="text-[32px] font-bold">
                Privacy Policy and
                <br />
                <span className="text-pink">Terms</span>
              </h2>
              <span>Last updated on September 12, 2023</span>
              <p>
                Below are our privacy & policy, which outline a lot of goodies. it’s our
                aim to always take of our participant
              </p>
            </div>
            <div className="bg-zinc-300 bg-opacity-5 flex flex-col space-y-4 items-center rounded-[5px] py-10 px-4 lg:p-10">
              <p className="pb-6">
                At getlinked tech Hackathon 1.0, we value your privacy and are committed
                to protecting your personal information. This Privacy Policy outlines how
                we collect, use, disclose, and safeguard your data when you participate in
                our tech hackathon event. By participating in our event, you consent to
                the practices described in this policy.
              </p>
              <h3 className="text-pink font-bold w-full ">Licensing Policy</h3>
              <p className="font-bold w-full">Here are terms of our Standard License:</p>

              <ul className="space-y-6">
                <li className="flex gap-3 items-start">
                  <AiFillCheckCircle color="#2DE100" size={24} className="mt-1" />
                  <p className="break-words">
                    The Standard License grants you a non-exclusive right to navigate and
                    register for our event
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <AiFillCheckCircle color="#2DE100" size={24} className="mt-1" />
                  <p className="break-words">
                    You are licensed to use the item available at any free source sites,
                    for your project developement
                  </p>
                </li>
              </ul>
              <div className="lg:py-8">
                <button className="btn-primary mx-auto">Read More</button>
              </div>
            </div>
          </div>
          <div className="relative w-full px-6 pt-10 lg:pt-0  lg:w-[40%] ">
            <Image
              src="/assets/privacy-vector.svg"
              className="w-[90%] md:w-full absolute -top-10 lg:-top-20 -z-10"
              width={1000}
              height={1000}
              alt="hero-man"
            />
            <Image
              src="/assets/privacy.png"
              className="w-full mt-20"
              width={1000}
              height={1000}
              alt="hero-man"
            />
          </div>
        </Flex>
      </SectionLayout>
    </section>
  );
};

export default PrivacyPolicy;
