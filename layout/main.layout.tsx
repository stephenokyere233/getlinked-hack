/* eslint-disable react-hooks/exhaustive-deps */
import Header from "@/components/header";
import { useStore } from "@/store";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const showMenu = useStore((state) => state.showMenu);
  const setShowMenu = useStore((state) => state.setShowMenu);
  const router = useRouter();

  useEffect(() => {
    setShowMenu(false);
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      if (showMenu) {
        setShowMenu(false);
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling, showMenu]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main
        onClick={() => {
          setShowMenu(false);
        }}
        className="flex-1 text-white"
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
