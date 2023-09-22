import React from "react";
import Logo from "../logo";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "@/store";
import { BiX } from "react-icons/bi";
import { useRouter } from "next/router";
import { ROUTES } from "@/constants";

const Header = () => {
  const showMenu = useStore((state) => state.showMenu);
  const router = useRouter();
  const setShowMenu = useStore((state) => state.setShowMenu);

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
            {ROUTES.map((route) => (
              <Link
                key={route.name}
                className={`text-[18px] hover:text-purple ${
                  router.asPath === route.path ? "text-line-gradient" : ""
                } px-4 py-3`}
                href={route.path}
              >
                {route.name}
              </Link>
            ))}
          </motion.nav>
          <Link href="/register">
            <button className="bg-primary-gradient w-[200px] mt-4 items-center rounded-md justify-center active:scale-95 h-[50px] flex lg:hidden">
              <div className="px-8 w-[98%] h-[95%] text-xl flex items-center justify-center transition-all  hover:bg-background rounded-md ">
                Register
              </div>
            </button>
          </Link>
        </motion.div>
      </AnimatePresence>
    );
  };
  return (
    <header className=" px-4 h-24 sticky top-0 py-6 border-b bg-background bg-opacity-40 z-[30] border-border">
      <div className="mx-auto max-w-[1500px] flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex gap-10">
          {ROUTES.map((route) => (
            <Link
              key={route.name}
              className={`text-[18px] hover:text-purple active:scale-95 ${
                router.asPath === route.path ? "text-line-gradient" : ""
              } `}
              href={route.path}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <Link href="/register">
          <button className="bg-primary-gradient w-[160px] items-center rounded-md justify-center active:scale-95 h-[50px] hidden lg:flex">
            <div className="px-8 w-[98%] h-[95%] text-xl flex items-center justify-center transition-all  hover:bg-background rounded-md ">
              Register
            </div>
          </button>
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
