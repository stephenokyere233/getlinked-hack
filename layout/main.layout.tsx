/* eslint-disable react-hooks/exhaustive-deps */
import Header from "@/components/header";
import { useStore } from "@/store";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect, useState } from "react";

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

  return (
    <div className="flex min-h-screen flex-col">
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
