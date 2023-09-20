import React from "react";
import Logo from "../logo";
import Button from "../button";
import Link from "next/link";

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
    <header className=" py-6 border-b border-border">
      <div className="mx-auto max-w-[1500px] flex  items-center justify-between">
        <Logo />
        <nav className="flex gap-10">
          {Routes.map((route) => (
            <Link key={route.name} className="text-[18px]" href={route.path}>
              {route.name}
            </Link>
          ))}
        </nav>
        <Button label="Register" />
      </div>
    </header>
  );
};

export default Header;
