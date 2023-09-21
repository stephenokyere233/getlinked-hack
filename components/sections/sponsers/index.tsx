import React from "react";
import Image from "next/image";
import SectionLayout from "@/layout/section.layout";

const Partners = () => {
  return (
    <section className="border-b border-border overflow-x-clip relative py-20">
      <Image
        src="/assets/idea-gradient.png"
        className="absolute w-[1000px] h-[800px] top-0 -z-10 "
        width={1000}
        height={1000}
        alt="idea-gradient"
      />
      <Image
        src="/assets/idea-gradient.png"
        className="absolute hidden lg:block min-w-[1000px] h-[800px] -bottom-[250px] -right-[300px]  -z-10 "
        width={1000}
        height={1000}
        alt="idea-gradient"
      />
      <SectionLayout>
        <div className="text-center space-y-4">
          <h2 className="text-[32px] font-bold">Partners and Sponsors</h2>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following <br className="hidden lg:block"/> major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="flex relative items-center justify-center my-20">
          <Image
            src="/assets/partners.png"
            className="z-[20] w-full object-contain"
            width={1500}
            height={1500}
            alt="hero-man"
          />
          <Image
            src="/assets/star-purple.png"
            className="absolute w-[30px] -top-10 left-10"
            width={500}
            height={500}
            alt="hero-man"
                  />
            
          <Image
            src="/assets/star.svg"
            className=" w-[30px] absolute bottom-[100px] right-[40%]"
            width={500}
            height={500}
            alt="hero-man"
          />
          <Image
            src="/assets/star-pink.svg"
            className="absolute w-[30px] top-20 right-[40%]"
            width={500}
            height={500}
            alt="hero-man"
          />
        </div>
      </SectionLayout>
    </section>
  );
};

export default Partners;
