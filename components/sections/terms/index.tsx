import Flex from "@/components/flex";
import SectionLayout from "@/layout/section.layout";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="border-b border-border relative py-20">
      <SectionLayout >
        <Flex>
          <div className="relative w-full lg:w-[50%] ">
            <div>
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
            <div className="bg-zinc-300 bg-opacity-5 rounded-[5px]">
              <p>
                At getlinked tech Hackathon 1.0, we value your privacy and are committed
                to protecting your personal information. This Privacy Policy outlines how
                we collect, use, disclose, and safeguard your data when you participate in
                our tech hackathon event. By participating in our event, you consent to
                the practices described in this policy.
              </p>
            </div>
          </div>
          <div className="relative w-full lg:w-[50%] "></div>
        </Flex>
      </SectionLayout>
    </section>
  );
};

export default PrivacyPolicy;
