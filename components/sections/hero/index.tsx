import React from "react";
import Image from "next/image";
import Button from "@/components/button";

const Hero = () => {
  return (
    <section className="hero-bg relative h-[90vh] flex space-y-4 items-center">
      <section className=" flex items-center mx-auto min-w-[1500px] h-full">
        <div className=" flex flex-col space-y-6 ">
          <h1 className="text-[80px] leading-[100px] font-bold">
            <span>getlinked Tech </span> <br />
            <span className="flex items-center">
              <span>
                Hackathon <span className="text-pink">1.0</span>
              </span>
              <span className="flex ">
                <Image
                  src="/assets/chain.png"
                  alt="chain"
                  className="w-[80px]  h-[80px]"
                  width={500}
                  height={500}
                />
                <Image
                  src="/assets/boom.png"
                  alt="chain"
                  className="w-[80px] h-[80px]"
                  width={500}
                  height={500}
                />
              </span>
            </span>
          </h1>
          <p className="text-xl font-semibold">
            Participate in getlinked tech Hackathon 2023 stand <br /> a chance to win a
            Big prize
          </p>
          <Button label="Register" />
          <div className="flex gap-6 unica-one items-center text-[60px]">
            <div className="">
              <span className="">00</span>
              <span className="uppercase text-[18px]">h</span>
            </div>
            <div className="">
              <span className="">00</span>
              <span className="uppercase text-[18px]">m</span>
            </div>
            <div className="">
              <span className="">00</span>
              <span className="uppercase text-[18px]">s</span>
            </div>
          </div>
        </div>
      </section>
      <section className="absolute w-[800px]   right-0  bottom-0">
        <section className="relative">
          <h3 className="absolute text-4xl italic tracking-wider font-bold">
            Igniting a Revolution in
            <span className="relative">
              <span> HR Innovation</span>
              <Image
                src="/assets/hero-vector.svg"
                width={500}
                className="absolute left-0 w-full -bottom-5"
                height={500}
                alt="hero-man"
              />
            </span>
          </h3>
          <Image
            src="/assets/hero-man.png"
            width={500}
            className="absolute grayscale w-full bottom-0"
            height={500}
            alt="hero-man"
          />
          <div className="w-full">
            <Image
              src="/assets/hero-mask.png"
              className="absolute w-full bottom-0"
              width={500}
              height={500}
              alt="hero-man"
            />
            <Image
              src="/assets/hero-gradient.png"
              className="w-full -z-10"
              width={500}
              height={500}
              alt="hero-man"
            />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Hero;
