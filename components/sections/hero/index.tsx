import React from "react";
import Image from "next/image";
import Link from "next/link";

const MobileHeroText = () => {
  return (
    <>
      <section className="flex xl:hidden z-[20]  xl:flex-row mt-10 flex-col px-4 items-center mx-auto w-full justify-center  h-full">
        <div data-aos="zoom-in" className="flex text-center  flex-col space-y-6 ">
          <h3 className=" md:text-2xl lg:text-3xl  italic tracking-wide font-bold">
            Igniting a Revolution in
            <span className="relative ">
              <span> HR Innovation</span>
              <Image
                src="/assets/hero-vector.svg"
                width={500}
                className="absolute left-0 w-full -bottom-5"
                height={500}
                alt="line"
              />
            </span>
          </h3>
          <h1 className="text-[36px] pt-8 md:pt-10 md:text-[40px] lg:text-[50px]  font-bold">
            <span className="relative">
              getlinked Tech
              <Image
                src="/assets/light.png"
                alt="chain"
                className="absolute w-[30px] md:w-[40px] md:h-[50px] -top-8 md:-top-10 right-4 h-[40px]"
                width={500}
                height={500}
              />
            </span>{" "}
            <br />
            <span className="flex items-center w-max mx-auto">
              <span>
                Hackathon <span className="text-pink">1.0</span>
              </span>
              <span className="flex ">
                <Image
                  src="/assets/chain.png"
                  alt="chain"
                  className="w-[40px]  h-[40px]"
                  width={500}
                  height={500}
                />
                <Image
                  src="/assets/boom.png"
                  alt="boom"
                  className="w-[40px]  h-[40px]"
                  width={500}
                  height={500}
                />
              </span>
            </span>
          </h1>
          <p className="text-[18px] font-semibold">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
          </p>
          <Link href="/register" className="mx-auto">
            <button className="btn-primary">Register</button>
          </Link>
          <div className="flex gap-6 w-max unica-one mx-auto items-center text-[40px]">
            <span className="">
              <span className="">00</span>
              <span className="uppercase text-[18px]">h</span>
            </span>
            <span className="">
              <span className="">00</span>
              <span className="uppercase text-[18px]">m</span>
            </span>
            <span className="">
              <span className="">00</span>
              <span className="uppercase text-[18px]">s</span>
            </span>
          </div>
        </div>
      </section>
      <section data-aos="fade-up-right" className=" w-full lg:scale-[0.8] block xl:hidden">
        <section className="relative">
          <Image
            src="/assets/hero-man.png"
            width={500}
            className="grayscale w-full"
            height={500}
            alt="boy wearing smart googles"
          />
          <Image
            src="/assets/hero-mask.png"
            className="absolute w-full bottom-0"
            width={500}
            height={500}
            alt="hero-mask"
          />
          <Image
            src="/assets/hero-gradient.png"
            className="w-full absolute lg:hidden bottom-0 -z-10"
            width={500}
            height={500}
            alt="hero-gradient"
          />
        </section>
      </section>
    </>
  );
};
const DesktopHeroText = () => {
  return (
    <>
      <section className=" xl:flex hidden xl:flex-row flex-col  px-4 items-center mx-auto  lg:min-w-[1400px] h-full">
        <div data-aos="zoom-in" className=" xl:flex hidden flex-col space-y-6 ">
          <h1 className="text-[80px] leading-[100px] font-bold">
            <span className="relative">
              getlinked Tech
              <Image
                src="/assets/light.png"
                alt="chain"
                className="absolute w-[60px] -top-14 right-10 h-[80px]"
                width={500}
                height={500}
              />
            </span>{" "}
            <br />
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
          <button className="btn-primary w-[200px]">Register</button>
          <div className="flex gap-6 unica-one items-center text-[60px]">
            <span className="">
              <span className="">00</span>
              <span className="uppercase text-[18px]">h</span>
            </span>
            <span className="">
              <span className="">00</span>
              <span className="uppercase text-[18px]">m</span>
            </span>
            <span className="">
              <span className="">00</span>
              <span className="uppercase text-[18px]">s</span>
            </span>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-left"
        className="absolute w-[800px] hidden xl:block  right-0  bottom-0"
      >
        <section className="relative">
          <h3 className="absolute xl:block hidden  text-4xl italic -left-[30px] tracking-wider font-bold">
            Igniting a Revolution in
            <span className="relative">
              <span> HR Innovation</span>
              <Image
                src="/assets/hero-vector.svg"
                width={500}
                className="absolute left-0 w-full -bottom-5"
                height={500}
                alt="line"
              />
            </span>
          </h3>
          <Image
            src="/assets/hero-man.png"
            width={500}
            className="absolute grayscale w-full bottom-0"
            height={500}
            alt="boy-wearing smart googles"
          />
          <div className="w-full">
            <Image
              src="/assets/hero-mask.png"
              className="absolute w-full bottom-0"
              width={500}
              height={500}
              alt="hero-mask"
            />
            <Image
              src="/assets/hero-gradient.png"
              className="w-full -z-10"
              width={500}
              height={500}
              alt="hero-gradient"
            />
          </div>
        </section>
      </section>
    </>
  );
};

const Hero = () => {
  return (
    <section
      className="relative h-max xl:min-h-screen 2xl:min-h-[90vh] border-b border-border flex flex-col xl:flex-row space-y-4 items-start lg:items-center"
    >
      <MobileHeroText />
      <DesktopHeroText />
    </section>
  );
};

export default Hero;
