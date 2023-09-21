import React from "react";
import Logo from "../logo";
import Button from "../button";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const Routes = [
    {
      name: "Timeline",
      path: "#",
    },
    {
      name: "Overview",
      path: "#",
    },
    {
      name: "FAQs",
      path: "#",
    },
    {
      name: "Contact",
      path: "#",
    },
  ];
  return (
    <header className=" px-4 py-6 border-b  relative border-border">
      <Image
        src="/assets/hero-gradient.png"
        className=" w-full lg:w-[50%]  -rotate-90 absolute hidden xl:block -top-10 left-0 lg:left-20  -z-10"
        width={500}
        height={500}
        alt="hero-man"
      />
      <Image
        src="/assets/mobile-hero-gradient.png"
        className="w-full md:w-[80%] absolute xl:hidden left-0 -z-10"
        width={500}
        height={500}
        alt="hero-gradient"
      />
      <div className="mx-auto max-w-[1500px] flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex gap-10">
          {Routes.map((route) => (
            <Link key={route.name} className="text-[18px]" href={route.path}>
              {route.name}
            </Link>
          ))}
        </nav>

        <button className="btn-primary hidden lg:block"> Register</button>
        <Image
          src="/assets/menu.svg"
          className=" w-[30px] lg:hidden block"
          width={500}
          height={500}
          alt="hero-man"
        />
      </div>
    </header>
  );
};

export default Header;
