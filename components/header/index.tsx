import React from "react";
import Logo from "../logo";
import Button from "../button";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "@/store";
import { BiX } from "react-icons/bi";
import { useRouter } from "next/router";

const Header = () => {
  const showMenu = useStore((state) => state.showMenu);
  const router = useRouter();
  const setShowMenu = useStore((state) => state.setShowMenu);
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
      path: "#faqs",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const DropDownMenu = () => {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 10 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-background py-6 p-4 pb-20  lg:hidden flex flex-col w-full absolute rounded-b-2xl top-20 z-[50] right-0 "
        >
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-4"
          >
            {Routes.map((route) => (
              <Link key={route.name} className="text-[18px] px-4 py-3" href={route.path}>
                {route.name}
              </Link>
            ))}
          </motion.nav>
          <button className="btn-primary w-[200px] mt-4"> Register</button>
        </motion.div>
      </AnimatePresence>
    );
  };
  return (
    <header className=" px-4 h-24  py-6 border-b  relative border-border">
      {router.asPath === "/" && (
        <>
          <Image
            src="/assets/hero-gradient.png"
            className=" w-full lg:w-[50%]  -rotate-90 absolute hidden xl:block -top-10 left-0 lg:left-20  -z-10"
            width={500}
            height={500}
            alt="hero-gradient"
          />
          <Image
            src="/assets/mobile-hero-gradient.png"
            className="w-full md:w-[80%] absolute xl:hidden left-0 -z-10"
            width={500}
            height={500}
            alt="hero-gradient"
          />
        </>
      )}
      <div className="mx-auto max-w-[1500px] flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex gap-10">
          {Routes.map((route) => (
            <Link key={route.name} className="text-[18px]" href={route.path}>
              {route.name}
            </Link>
          ))}
        </nav>

        <Link href="/register">
          <button className="btn-primary  hidden lg:block"> Register</button>
        </Link>
        {showMenu ? (
          <>
            <button
              className="transition-all relative lg:hidden block active:scale-95"
              onClick={() => setShowMenu(false)}
            >
              <Image
                src="/assets/close.svg"
                className=" w-[30px] "
                width={500}
                height={500}
                alt="hero-man"
              />
              <span className="absolute inset-0 w-full flex items-center justify-center ">
                <BiX size={24} />
              </span>
            </button>
          </>
        ) : (
          <button
            className="transition-all  lg:hidden block active:scale-95"
            onClick={() => setShowMenu(true)}
          >
            <Image
              src="/assets/menu.svg"
              className=" w-[30px] "
              width={500}
              height={500}
              alt="hero-man"
            />
          </button>
        )}
      </div>
      {showMenu && <DropDownMenu />}
    </header>
  );
};

export default Header;
